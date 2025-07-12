# Vercel Deployment Guide

This guide provides steps for successfully deploying the STEM Computer Science Club website to Vercel.

## Pre-Deployment Checklist

1. Make sure all dependencies are installed and up to date
   ```
   npm install
   ```

2. Fix security vulnerabilities in dependencies
   ```
   npm run fix:deps
   ```
   Or manually:
   ```
   npm run fix:security
   ```

3. Check for missing dependencies
   ```
   npm run check:deps
   ```

4. Test the build locally
   ```
   npm run vercel-build
   ```

5. Make sure your `.env` file is properly configured
   - The `CI=false` flag allows the build to continue despite warnings

## Deployment Options

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI if you don't have it already
   ```
   npm install -g vercel
   ```

2. Login to Vercel
   ```
   vercel login
   ```

3. Deploy the project
   ```
   vercel
   ```

4. For production deployment
   ```
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Log in to the [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Select "Import Git Repository" and connect your GitHub account
5. Select the STEM CS Club repository
6. Configure the project settings:
   - Build Command: `npm run vercel-build`
   - Output Directory: `build`
   - Environment Variables: Copy them from your `.env` file

## Security Considerations

### Resolving Dependabot Alerts

Before deploying to production, it's important to address security vulnerabilities in dependencies:

1. **Update vulnerable dependencies**:
   - Currently identified vulnerabilities:
     - `nth-check` (version < 2.0.1): ReDoS vulnerability
     - `webpack-dev-server` (version <= 5.2.0): Source code disclosure vulnerability 
     - `postcss` (version < 8.4.31): Line return parsing error

2. **Fix dependencies with npm**:
   ```bash
   # Update React Scripts to latest version (which will update dependencies)
   npm install react-scripts@latest --save
   
   # If specific packages need individual updates
   npm install nth-check@latest postcss@latest --save
   
   # Update all packages
   npm update
   ```

3. **Manual Resolution** (if automatic updates don't work):
   - Edit your package.json to specify minimum versions:
     ```json
     "overrides": {
       "nth-check": ">=2.0.1",
       "webpack-dev-server": ">=5.2.1",
       "postcss": ">=8.4.31"
     }
     ```
   - Then run:
     ```bash
     npm install
     ```

4. **Verify fixes**:
   - After updating, verify that the Dependabot alerts are resolved
   - Run a security audit:
     ```bash
     npm audit
     ```

> **Note:** Security vulnerabilities in dependencies can cause deployment issues as some hosting platforms run security checks during the build process.

## Troubleshooting Deployment Issues

### GitHub Integration Failures

1. View detailed build logs in Vercel:
   - Go to your project in the Vercel dashboard
   - Click on the failed deployment
   - Click "View Build Logs" to see the exact error
   - Look for "Error:" or "Failed:" messages to identify the specific issue

2. Check the Vercel project settings:
   - Go to your project in the Vercel dashboard
   - Click "Settings" → "Git Integration"
   - Verify the production branch is set correctly (usually `main` or `master`)
   - Ensure the "Include source files outside of the Root Directory" option is enabled if your project has files in multiple directories

2. Review GitHub Actions:
   - Check if any GitHub Actions are conflicting with Vercel deployments
   - Make sure branch protection rules aren't preventing necessary operations

3. Memory and Build Issues:
   - Vercel's free tier has limitations on build duration and memory
   - Consider splitting your build process into smaller chunks
   - Try setting `NODE_OPTIONS=--max_old_space_size=4096` in your environment variables
   - For a successful initial deployment, temporarily comment out the 3D background component
   - Once the first deployment succeeds, you can gradually add back complex components

4. Package Management:
   - Make sure your `package-lock.json` or `yarn.lock` is committed to the repository
   - Try removing `node_modules` from your local project, running a clean install, and then committing
   - Watch for dependency conflicts between direct dependencies and overrides
     ```
     # Example error: Override for postcss@^8.4.24 conflicts with direct dependency
     ```
   - Resolution: Make sure the version in overrides matches the direct dependency, or use "resolutions" instead of "overrides"

### Build Failures

1. Check Vercel's build logs for specific errors
2. Common issues:
   - Memory limits: Try optimizing heavy components (especially 3D components)
   - TypeScript errors: Set `CI=false` in environment variables (already added to .env)
   - Missing dependencies: Run `npm run check:deps` and install any missing packages

### Runtime Errors

1. Check browser console after deployment
2. If you see 404 errors for routes:
   - Make sure `vercel.json` is correctly configured (it should be now)
   - Verify the "Output Directory" in Vercel settings is set to `build`

### Performance Issues

1. Consider lazy loading heavy components, especially the 3D background:
   ```typescript
   const CS3DBackground = React.lazy(() => import('../components/CS3DBackground'));
   ```

2. Use the analyze script to check bundle size:
   ```
   npm run analyze
   ```

### Common Configuration Issues

1. **Conflicting Routing Rules**:
   - Vercel doesn't allow `routes` to be used together with `rewrites`, `redirects`, `headers`, `cleanUrls`, or `trailingSlash`
   - If you see the error: `If 'rewrites', 'redirects', 'headers', 'cleanUrls' or 'trailingSlash' are used, then 'routes' cannot be present`
   - Solution: Replace the `routes` property with `rewrites` as shown below:
     ```json
     // Instead of this:
     "routes": [
       { "src": "/api/(.*)", "dest": "/api/$1" },
       { "src": "/(.*)", "dest": "/index.html" }
     ]
     
     // Use this:
     "rewrites": [
       { "source": "/api/(.*)", "destination": "/api/$1" },
       { "source": "/(.*)", "destination": "/index.html" }
     ]
     ```
   - Make sure to update any header configurations to use the appropriate structure

2. **Build Output Directory**:
   - Make sure the `distDir` in your Vercel configuration matches your build output folder
   - For React apps built with create-react-app, this should be `"distDir": "build"`

3. **Node.js Version**:
   - Vercel might use a different Node.js version than your local environment
   - Add an `.nvmrc` file to specify the required Node.js version

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Optimizing React Apps](https://reactjs.org/docs/optimizing-performance.html)
