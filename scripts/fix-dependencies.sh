#!/bin/bash

# Script to fix security vulnerabilities in dependencies before deployment
echo "🔒 Fixing security vulnerabilities in dependencies..."

# Create a backup of package.json and package-lock.json
echo "📑 Creating backups of package files..."
cp package.json package.json.bak
cp package-lock.json package-lock.json.bak
echo "✅ Backups created"

# Add resolutions/overrides for vulnerable packages
echo "🔧 Adding overrides for vulnerable packages..."
node -e '
const fs = require("fs");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

// Add overrides section if it doesn't exist
if (!packageJson.overrides) {
  packageJson.overrides = {};
}

// Add resolutions for known vulnerabilities
packageJson.overrides = {
  ...packageJson.overrides,
  "nth-check": "^2.0.1",
  "webpack-dev-server": "^5.2.1",
  "postcss": "^8.4.31"
};

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
console.log("✅ Package overrides added");
'

# Reinstall dependencies with fixed versions
echo "📦 Reinstalling dependencies with security fixes..."
npm install

# Run security audit
echo "🔍 Running security audit..."
npm audit

echo "🎉 Dependency security fixes complete!"
echo "📋 Now you can proceed with deployment"
