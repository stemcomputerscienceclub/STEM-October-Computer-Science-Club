// This file will help diagnose Vercel build issues
console.log('Starting Vercel build diagnostics...');

// Log Node.js version and memory limits
console.log(`Node Version: ${process.version}`);
console.log(`Memory Limit: ${process.env.NODE_OPTIONS || 'Not Set'}`);
console.log(`Available Memory: ${Math.round(require('os').freemem() / 1024 / 1024)} MB`);
console.log(`Total Memory: ${Math.round(require('os').totalmem() / 1024 / 1024)} MB`);

// Check for large files that might cause issues
const fs = require('fs');
const path = require('path');
const sizeThreshold = 5 * 1024 * 1024; // 5MB

function checkLargeFiles(dir, threshold) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        // Skip node_modules to avoid excessive logging
        if (file !== 'node_modules' && file !== '.git' && file !== 'build') {
          checkLargeFiles(filePath, threshold);
        }
      } else if (stats.isFile() && stats.size > threshold) {
        console.log(`Large file detected: ${filePath} (${Math.round(stats.size / 1024 / 1024)}MB)`);
      }
    });
  } catch (err) {
    console.error(`Error checking directory ${dir}:`, err);
  }
}

console.log('Checking for large files that might affect build...');
checkLargeFiles('.', sizeThreshold);

// Check for dependency conflicts
console.log('Checking for dependency conflicts...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Check for conflicts between devDependencies/dependencies and overrides
  if (packageJson.overrides) {
    const allDeps = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {})
    };

    const conflicts = [];
    Object.keys(packageJson.overrides).forEach(dep => {
      if (allDeps[dep]) {
        conflicts.push(`${dep}: direct version ${allDeps[dep]} conflicts with override ${packageJson.overrides[dep]}`);
      }
    });

    if (conflicts.length > 0) {
      console.error('⚠️ Dependency conflicts detected:');
      conflicts.forEach(conflict => console.error(`- ${conflict}`));
      console.error('Resolve these conflicts in package.json before deployment');
    } else {
      console.log('✓ No dependency conflicts detected');
    }
  } else {
    console.log('✓ No overrides defined, skipping conflict check');
  }
} catch (err) {
  console.error(`Error checking for dependency conflicts:`, err);
}

// Check for required files
['package.json', 'vercel.json', 'src/index.tsx', 'public/index.html'].forEach(file => {
  try {
    if (fs.existsSync(file)) {
      console.log(`✓ ${file} exists`);
    } else {
      console.error(`✗ ${file} is missing!`);
    }
  } catch (err) {
    console.error(`Error checking for ${file}:`, err);
  }
});

console.log('Vercel build diagnostics complete.');
console.log('Proceeding with build...');
