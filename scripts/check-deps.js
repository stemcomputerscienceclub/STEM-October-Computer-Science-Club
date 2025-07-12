const fs = require('fs');
const path = require('path');

// Paths to scan for imports
const srcDir = path.join(__dirname, '../src');
const buildDir = path.join(__dirname, '../build');

// Get package.json dependencies
const packageJson = require('../package.json');
const dependencies = new Set([
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
]);

// Track missing dependencies
const potentialMissingDeps = new Set();
const importRegex = /import\s+(?:(?:\{[^}]+\})|(?:[^,{}\s]+))?\s*(?:,\s*(?:\{[^}]+\}))?\s*from\s+['"]([^'"]+)['"]/g;

// Function to scan file for imports
function scanFileForImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      
      // Skip relative imports and built-in modules
      if (importPath.startsWith('.') || importPath.startsWith('/')) continue;
      
      // Extract package name (handle scoped packages)
      let packageName = importPath;
      if (importPath.startsWith('@')) {
        packageName = importPath.split('/').slice(0, 2).join('/');
      } else {
        packageName = importPath.split('/')[0];
      }
      
      // Check if package is in dependencies
      if (!dependencies.has(packageName)) {
        potentialMissingDeps.add(packageName);
      }
    }
  } catch (err) {
    console.error(`Error scanning ${filePath}:`, err.message);
  }
}

// Recursively scan directory
function scanDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(file)) {
      scanFileForImports(fullPath);
    }
  }
}

console.log('Scanning for potential missing dependencies...');
scanDirectory(srcDir);

if (potentialMissingDeps.size > 0) {
  console.log('\nPotentially missing dependencies found:');
  potentialMissingDeps.forEach(dep => {
    console.log(`- ${dep}`);
  });
  console.log('\nConsider installing these with:');
  console.log(`npm install ${Array.from(potentialMissingDeps).join(' ')}`);
} else {
  console.log('No potentially missing dependencies found.');
}

console.log('\nDone!');
