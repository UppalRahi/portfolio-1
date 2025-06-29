#!/bin/bash

# GitHub Pages Deployment Script for Rahi Uppal's Portfolio

echo "🚀 Preparing to deploy Rahi Uppal's Portfolio to GitHub Pages..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ This is not a Git repository. Please initialize Git first."
    echo "Run: git init"
    exit 1
fi

# Check if we have the GitHub remote
if ! git remote | grep -q "origin"; then
    echo "❌ No origin remote found. Please add your GitHub repository as origin."
    echo "Run: git remote add origin https://github.com/uppalrahi/rahiuppal-portfolio.git"
    echo "Replace 'uppalrahi' with your actual GitHub username if different."
    exit 1
fi

echo "✅ Git repository detected"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Build the project
echo "🔨 Building the project..."
NEXT_PUBLIC_BASE_PATH=/rahiuppal-portfolio npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push your code to GitHub:"
    echo "   git add ."
    echo "   git commit -m \"Deploy portfolio to GitHub Pages\""
    echo "   git push origin main"
    echo ""
    echo "2. Enable GitHub Pages in your repository settings:"
    echo "   - Go to https://github.com/uppalrahi/rahiuppal-portfolio/settings/pages"
    echo "   - Set Source to 'GitHub Actions'"
    echo ""
    echo "3. Your portfolio will be available at:"
    echo "   https://uppalrahi.github.io/rahiuppal-portfolio"
    echo ""
    echo "🎉 Deployment script completed successfully!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
