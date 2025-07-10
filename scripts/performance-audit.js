#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Performance & SEO Audit for STEM CS Club Website\n');

// Check for critical performance files
const criticalFiles = [
  { path: 'build/static/css', type: 'CSS files' },
  { path: 'build/static/js', type: 'JavaScript files' },
  { path: 'build/static/media', type: 'Media files' },
  { path: 'build/manifest.json', type: 'Web App Manifest' },
  { path: 'build/service-worker.js', type: 'Service Worker' }
];

console.log('📁 Checking build output...');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(file.path);
  console.log(`${exists ? '✅' : '❌'} ${file.type}: ${exists ? 'Found' : 'Missing'}`);
});

// Check environment variables
console.log('\n🌍 Environment Variables:');
const envVars = [
  'REACT_APP_SITE_NAME',
  'REACT_APP_SITE_DESCRIPTION',
  'REACT_APP_SITE_URL',
  'REACT_APP_TWITTER_HANDLE'
];

const envExists = fs.existsSync('.env');
const envProdExists = fs.existsSync('.env.production');

console.log(`✅ .env file: ${envExists ? 'Found' : 'Missing'}`);
console.log(`✅ .env.production file: ${envProdExists ? 'Found' : 'Missing'}`);

// Performance optimization checklist
console.log('\n⚡ Performance Optimization Checklist:');

const optimizations = [
  {
    name: 'Font Preloading',
    check: () => {
      const indexHtml = fs.readFileSync('public/index.html', 'utf-8');
      return indexHtml.includes('rel="preload"') && indexHtml.includes('as="font"');
    }
  },
  {
    name: 'Image Optimization',
    check: () => {
      const hasWebP = fs.existsSync('public/imgs') && 
        fs.readdirSync('public/imgs').some(file => file.endsWith('.webp'));
      return hasWebP;
    }
  },
  {
    name: 'Gzip/Compression',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      return packageJson.devDependencies && packageJson.devDependencies.compression;
    }
  },
  {
    name: 'Bundle Analyzer',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      return packageJson.devDependencies && packageJson.devDependencies['webpack-bundle-analyzer'];
    }
  },
  {
    name: 'Lazy Loading Implementation',
    check: () => {
      // Check for React.lazy or dynamic imports in components
      const srcPath = 'src/components';
      if (!fs.existsSync(srcPath)) return false;
      
      const files = fs.readdirSync(srcPath, { recursive: true })
        .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
      
      return files.some(file => {
        const content = fs.readFileSync(path.join(srcPath, file), 'utf-8');
        return content.includes('React.lazy') || content.includes('dynamic import');
      });
    }
  }
];

optimizations.forEach(opt => {
  const result = opt.check();
  console.log(`${result ? '✅' : '⚠️'} ${opt.name}: ${result ? 'Implemented' : 'Recommended'}`);
});

// SEO Recommendations
console.log('\n🔍 Advanced SEO Recommendations:');

const seoChecks = [
  {
    name: 'Schema.org Structured Data',
    description: 'Add Article, Course, and Event schemas for better rich snippets'
  },
  {
    name: 'Core Web Vitals',
    description: 'Monitor LCP, FID, and CLS with Google PageSpeed Insights'
  },
  {
    name: 'Image Alt Text',
    description: 'Ensure all images have descriptive alt attributes'
  },
  {
    name: 'Internal Linking',
    description: 'Create strategic internal links between related content'
  },
  {
    name: 'Content Quality',
    description: 'Regular content updates and educational value'
  },
  {
    name: 'Mobile Performance',
    description: 'Test mobile loading speed and usability'
  }
];

seoChecks.forEach(check => {
  console.log(`💡 ${check.name}: ${check.description}`);
});

// Build optimization tips
console.log('\n🏗️ Build Optimization Tips:');

const buildTips = [
  'Run `npm run analyze` to analyze bundle size',
  'Use `npm run build:production` for production builds with SEO audit',
  'Enable Vercel Analytics for real-time performance monitoring',
  'Implement Progressive Web App features',
  'Consider implementing a service worker for caching',
  'Use WebP format for images where supported',
  'Implement critical CSS extraction',
  'Consider code splitting for large components'
];

buildTips.forEach((tip, index) => {
  console.log(`${index + 1}. ${tip}`);
});

console.log('\n🎉 Performance audit complete!');
console.log('📊 Next steps:');
console.log('   - Run Google PageSpeed Insights');
console.log('   - Test with Google Search Console');
console.log('   - Monitor Core Web Vitals');
console.log('   - Set up Vercel Analytics');
