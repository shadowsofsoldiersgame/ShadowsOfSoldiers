# GitHub Pages Deployment Guide

This guide explains how to deploy the Shadows of Soldiers landing page to GitHub Pages for **free hosting**.

## Prerequisites

1. GitHub account
2. Git installed on your computer
3. Project files completed and tested locally

---

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

### Step 1: Create GitHub Repository

```bash
# Initialize git in your project folder (if not already done)
cd ShadowsOfSoldiersStaticWebpage
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Shadows of Soldiers landing page"
```

### Step 2: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `ShadowsOfSoldiersStaticWebpage` (must match the base path in vite.config.js)
3. Description: "Official landing page for Shadows of Soldiers game"
4. Choose: **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (you already have files)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add the remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ShadowsOfSoldiersStaticWebpage.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The site will build automatically from the workflow file

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/ShadowsOfSoldiersStaticWebpage/`

### Step 6: Verify Deployment

Visit your site URL and verify:
- [ ] Hero section loads with background
- [ ] Discord and Steam buttons work
- [ ] Trailer section displays
- [ ] Social media icons link correctly
- [ ] Footer shows correctly

---

## Option 2: Manual Deployment with gh-pages

This method requires you to manually run a deploy command after each change.

### Step 1: Create and Push Repository

Follow Steps 1-3 from Option 1 above.

### Step 2: Install Dependencies

```bash
# Make sure you're in the project directory
cd ShadowsOfSoldiersStaticWebpage

# Install all dependencies
npm install
```

### Step 3: Deploy with npm Command

```bash
# Build and deploy in one command
npm run deploy
```

This command will:
1. Build the production version
2. Create a `gh-pages` branch
3. Push the built files to that branch
4. Deploy to GitHub Pages

### Step 4: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/ (root)`
5. Click **Save**

### Step 5: Access Your Site

Your site will be available at: `https://YOUR_USERNAME.github.io/ShadowsOfSoldiersStaticWebpage/`

---

## Important Configuration Notes

### Base Path Configuration

The `vite.config.js` file must have the correct base path:

```javascript
export default defineConfig({
  base: '/ShadowsOfSoldiersStaticWebpage/',  // Must match your repo name!
  // ... rest of config
})
```

**If you named your repository differently:**
1. Update `base` in `vite.config.js` to match your repo name
2. Rebuild and redeploy

### Custom Domain (Optional)

To use a custom domain like `shadowsofsoldiers.com`:

1. Add a `CNAME` file to the `public/` folder:
   ```
   shadowsofsoldiers.com
   ```

2. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   
   Type: A (for apex domain)
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```

3. In GitHub repo Settings → Pages → Custom domain, enter your domain
4. Enable "Enforce HTTPS"

---

## Updating Your Site

### With GitHub Actions (Option 1)
Just push changes to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```
The site will automatically rebuild and deploy.

### With Manual Deployment (Option 2)
Run the deploy command again:
```bash
npm run deploy
```

---

## Troubleshooting

### Issue: 404 Error on GitHub Pages

**Cause:** Base path in `vite.config.js` doesn't match repository name

**Solution:**
1. Check your repository name on GitHub
2. Update `vite.config.js`:
   ```javascript
   base: '/YOUR-EXACT-REPO-NAME/'
   ```
3. Redeploy

### Issue: Assets Not Loading (CSS, Images)

**Cause:** Incorrect base path or asset paths

**Solution:**
1. Verify `vite.config.js` base path is correct
2. Ensure assets are in `public/` folder, not `src/`
3. Reference assets as `/assets/images/file.jpg` not `./assets/...`

### Issue: Links Show Wrong Base Path

**Cause:** Hardcoded URLs in components

**Solution:**
External links (Discord, Steam, etc.) should use full URLs starting with `https://` - this is already correct in the components.

### Issue: GitHub Actions Workflow Failing

**Cause:** Missing permissions or incorrect workflow configuration

**Solution:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Click "Save"
4. Re-run the workflow

### Issue: Site Not Updating After Push

**Cause:** Cache or deployment delay

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Wait 2-3 minutes for GitHub Pages to update
4. Check Actions tab to see if build completed

---

## Performance Tips for GitHub Pages

### Optimize Images
```bash
# Use tools like imagemagick to compress images
# Before uploading, ensure images are:
# - JPG for photos (quality 85%)
# - PNG for logos (optimized)
# - WebP format when possible
```

### Enable Caching
GitHub Pages automatically enables CDN caching, but you can add cache headers via a `_headers` file in `public/`:

```
/*
  Cache-Control: public, max-age=31536000, immutable
  
/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### Monitor Performance
Use Google Lighthouse to check performance:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Aim for scores > 90

---

## Cost & Limitations

### GitHub Pages is FREE for:
- ✅ Public repositories
- ✅ 1 GB storage
- ✅ 100 GB bandwidth/month
- ✅ Custom domains
- ✅ HTTPS included

### Limitations:
- ⚠️ Repository must be public (or GitHub Pro for private)
- ⚠️ Static sites only (no backend/server-side code)
- ⚠️ No databases or serverless functions

**For this project:** Perfect fit! All requirements are met.

---

## Repository Checklist

Before deploying, ensure you have:

- [ ] `.gitignore` file (excludes node_modules, dist)
- [ ] `vite.config.js` with correct base path
- [ ] `package.json` with deploy script
- [ ] `.github/workflows/deploy.yml` (if using GitHub Actions)
- [ ] All components and styles created
- [ ] Links tested locally
- [ ] README.md with project info

---

## Quick Start Commands

```bash
# Clone/navigate to project
cd ShadowsOfSoldiersStaticWebpage

# Install dependencies
npm install

# Test locally
npm run dev
# Visit: http://localhost:5173

# Build production version
npm run build

# Deploy to GitHub Pages (manual method)
npm run deploy

# Or commit and push (automatic method)
git add .
git commit -m "Deploy site"
git push
```

---

## Support & Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Vite Deployment Guide:** https://vitejs.dev/guide/static-deploy.html
- **Custom Domain Setup:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## Success! 🎉

Once deployed, share your site:
- Add the URL to your Discord server
- Include it in Steam game description
- Share on social media
- Add to email signatures

**Example URL:**
`https://yourusername.github.io/ShadowsOfSoldiersStaticWebpage/`

---

**Need help?** Check the repository Issues tab or refer to the IMPLEMENTATION_GUIDE.md for detailed setup instructions.

