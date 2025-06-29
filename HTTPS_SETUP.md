# HTTPS Setup for GitHub Pages

## Current Status
- Site URL: https://uppalrahi.github.io/portfolio-1
- Repository: uppalrahi/portfolio-1
- Deployment: GitHub Actions workflow configured ✅
- Static export: Configured ✅

## Enable HTTPS Enforcement

### Steps:
1. Go to: https://github.com/uppalrahi/portfolio-1/settings/pages
2. Scroll down to find "Enforce HTTPS" checkbox
3. Check the "Enforce HTTPS" box
4. Save the changes

### What This Does:
- Automatically redirects all HTTP requests to HTTPS
- Ensures secure connection for all visitors
- Provides the green lock icon in browsers

## Verification Steps:
1. Visit: http://uppalrahi.github.io/portfolio-1 (note: HTTP, not HTTPS)
2. Should automatically redirect to: https://uppalrahi.github.io/portfolio-1
3. Check for the lock icon in your browser's address bar

## Troubleshooting:
- If HTTPS option is grayed out, wait 5-10 minutes for certificate provisioning
- If still issues, try removing and re-adding the custom domain (if using one)
- GitHub automatically provisions TLS certificates via Let's Encrypt

## Note:
According to GitHub docs, all sites using github.io domains created after June 2016 support HTTPS automatically. You just need to enforce it for automatic redirection.
