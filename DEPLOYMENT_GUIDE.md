# 🚀 Deploy Rahi Uppal's Portfolio to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository: `rahiuppal-portfolio`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Initialize Git and Connect to GitHub

```bash
# Navigate to your project folder
cd /Users/rahiuppal/Desktop/Untitled

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Rahi Uppal's portfolio"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/rahiuppal-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Click "Save"

### 4. Deploy Using the Automated Script

```bash
# Run the deployment script
./deploy.sh
```

Or manually:

```bash
# Build the project
NEXT_PUBLIC_BASE_PATH=/rahiuppal-portfolio npm run build

# Push any changes
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main
```

### 5. Access Your Live Portfolio

Your portfolio will be available at:
**https://YOUR_USERNAME.github.io/rahiuppal-portfolio**

## 🔧 Configuration Details

The deployment is configured with:

- **Static Export**: Next.js builds a static site compatible with GitHub Pages
- **Base Path**: `/rahiuppal-portfolio` for proper routing
- **Image Optimization**: Disabled for static hosting compatibility
- **Automatic Deployment**: GitHub Actions handles the build and deployment

## 🎯 Customization Options

### Custom Domain (Optional)

1. Purchase a domain (e.g., `rahiuppal.com`)
2. In your repository settings > Pages, add your custom domain
3. Create a `CNAME` file in the root with your domain name

### Update Repository Name

If you want a different repository name:

1. Update the `basePath` in `next.config.js`
2. Update the GitHub Actions workflow
3. Update all references in this guide

## 🚨 Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run lint`
- Ensure all dependencies are installed: `npm install --legacy-peer-deps`

### Images Not Loading
- Make sure all images are in the `public` folder
- Use relative paths starting with `/`

### 404 Errors
- Ensure the `basePath` is correctly set in `next.config.js`
- Check that GitHub Pages is enabled with GitHub Actions as source

## 📊 Monitoring Your Deployment

- **GitHub Actions**: Check the "Actions" tab in your repository for build status
- **Build Logs**: Click on any workflow run to see detailed logs
- **Live Updates**: Changes pushed to `main` branch automatically trigger new deployments

## 🎉 Success!

Once deployed, your portfolio will showcase:
- ✅ Your personal brand (Rahi Uppal)
- ✅ All your projects and skills
- ✅ Interactive AI chat functionality
- ✅ Professional presentation
- ✅ Mobile-responsive design

**Portfolio URL**: https://YOUR_USERNAME.github.io/rahiuppal-portfolio

Remember to replace `YOUR_USERNAME` with your actual GitHub username!
