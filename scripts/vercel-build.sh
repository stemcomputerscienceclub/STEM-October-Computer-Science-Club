#!/bin/bash

# Increase Node.js memory limit
export NODE_OPTIONS="--max_old_space_size=4096"

# Output versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clean install dependencies
echo "Installing dependencies..."
npm ci

# Run diagnostics
echo "Running build diagnostics..."
node scripts/vercel.build.js

# Run the build
echo "Building the application..."
CI=false npm run build

# Output build success
echo "Build completed successfully!"
