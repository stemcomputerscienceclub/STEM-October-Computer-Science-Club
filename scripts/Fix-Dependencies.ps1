# PowerShell script to fix security vulnerabilities in dependencies before deployment
Write-Host "🔒 Fixing security vulnerabilities in dependencies..." -ForegroundColor Cyan

# Create a backup of package.json and package-lock.json
Write-Host "📑 Creating backups of package files..." -ForegroundColor Yellow
Copy-Item -Path "package.json" -Destination "package.json.bak"
Copy-Item -Path "package-lock.json" -Destination "package-lock.json.bak"
Write-Host "✅ Backups created" -ForegroundColor Green

# Add resolutions/overrides for vulnerable packages
Write-Host "🔧 Adding overrides for vulnerable packages..." -ForegroundColor Yellow

$packageJson = Get-Content -Path "package.json" | ConvertFrom-Json

# Add overrides property if it doesn't exist
if (-not $packageJson.PSObject.Properties.Name -contains "overrides") {
    $packageJson | Add-Member -Name "overrides" -Value @{} -MemberType NoteProperty
}

# Add resolutions for known vulnerabilities
$packageJson.overrides | Add-Member -Name "nth-check" -Value "^2.0.1" -MemberType NoteProperty -Force
$packageJson.overrides | Add-Member -Name "webpack-dev-server" -Value "^5.2.1" -MemberType NoteProperty -Force
$packageJson.overrides | Add-Member -Name "postcss" -Value "^8.4.31" -MemberType NoteProperty -Force

# Save updated package.json
$packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path "package.json"
Write-Host "✅ Package overrides added" -ForegroundColor Green

# Reinstall dependencies with fixed versions
Write-Host "📦 Reinstalling dependencies with security fixes..." -ForegroundColor Yellow
npm install

# Run security audit
Write-Host "🔍 Running security audit..." -ForegroundColor Yellow
npm audit

Write-Host "🎉 Dependency security fixes complete!" -ForegroundColor Green
Write-Host "📋 Now you can proceed with deployment" -ForegroundColor Cyan
