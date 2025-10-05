# ⚡ Quick Start - GitHub Pages Deployment

**Goal:** Get your Shadows of Soldiers landing page live on GitHub Pages in under 10 minutes!

---

## ✅ Prerequisites Checklist

Before you start, make sure you have:

- [ ] GitHub account created (free at github.com)
- [ ] Git installed on your computer
- [ ] Node.js 16+ installed
- [ ] This project folder on your computer

---

## 🚀 5-Step Deployment Process

### Step 1: Build the Project (5 minutes)

```bash
# Navigate to project folder
cd ShadowsOfSoldiersStaticWebpage

# Install dependencies
npm install

# Test locally (optional but recommended)
npm run dev
# Visit http://localhost:5173 to preview
# Press Ctrl+C to stop
```

**Verify:** Site loads in browser with all sections visible.

---

### Step 2: Initialize Git (1 minute)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Shadows of Soldiers landing page"
```

**Verify:** Run `git log` - you should see your commit.

---

### Step 3: Create GitHub Repository (2 minutes)

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `ShadowsOfSoldiersStaticWebpage` (exactly this!)
   - **Description:** "Official landing page for Shadows of Soldiers"
   - **Visibility:** Public ✅
   - **DO NOT check:** "Add a README" or any initialization options
3. Click **"Create repository"**

**Important:** Repository name MUST be `ShadowsOfSoldiersStaticWebpage` (or update `vite.config.js` to match)

---

### Step 4: Push to GitHub (1 minute)

Copy the commands from GitHub's quick setup page, OR use these (replace YOUR_USERNAME):

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/ShadowsOfSoldiersStaticWebpage.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Verify:** Refresh GitHub page - you should see all your files.

---

### Step 5: Enable GitHub Pages (1 minute)

#### Option A: Automatic Deployment (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** tab (top right)
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - **Source:** Select **"GitHub Actions"**
5. Go to **Actions** tab - watch the deployment run!
6. Wait 2-3 minutes for completion

#### Option B: Manual Deployment

```bash
# Deploy with one command
npm run deploy
```

Then:
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` → `/ (root)` → Save

---

## 🎉 Success!

Your site is now live at:

```
https://YOUR_USERNAME.github.io/ShadowsOfSoldiersStaticWebpage/
```

### Test Your Deployment

Visit your site and verify:
- [ ] Hero section loads with dark background
- [ ] "Shadows of Soldiers" title displays
- [ ] Discord button links to: discord.gg/rkWhy9TwjX
- [ ] Steam button links to Steam page
- [ ] Trailer section shows YouTube embed
- [ ] Social icons link to YouTube, Patreon, Facebook
- [ ] Site is responsive on mobile (use DevTools)

---

## 🔄 Making Updates

After making changes to your code:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

**With GitHub Actions:** Site automatically rebuilds and deploys!

**With manual deployment:** Run `npm run deploy` again.

---

## ❗ Common Issues

### Issue: "Repository name doesn't match base path"

**Fix:** Update `vite.config.js` line 6:
```javascript
base: '/YOUR-ACTUAL-REPO-NAME/',
```
Then rebuild and redeploy.

---

### Issue: "404 Not Found" on GitHub Pages

**Causes:**
1. Base path incorrect (see above)
2. GitHub Pages not enabled
3. Deployment still in progress

**Fix:**
1. Check Actions tab - wait for green checkmark
2. Hard refresh browser (Ctrl+Shift+R)
3. Wait 2-3 minutes for DNS propagation

---

### Issue: "npm install fails"

**Fix:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Reinstall
npm install
```

---

### Issue: "Permission denied (publickey)" when pushing to GitHub

**Fix:**
Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/ShadowsOfSoldiersStaticWebpage.git
git push
```

---

## 📋 Post-Deployment Checklist

After your site is live:

- [ ] Add site URL to Discord server info
- [ ] Include URL in Steam game description
- [ ] Share on Facebook page
- [ ] Add to social media bios
- [ ] Test all external links
- [ ] Check on mobile device
- [ ] Share with development team

---

## 🎨 Next Steps (Optional)

### Add Your Game Assets

1. Add hero background:
   - Place image: `public/assets/images/hero-background.jpg`
   - Recommended: 1920x1080 or higher
   - Optimize: < 500KB file size

2. Add game logo:
   - Place image: `public/assets/images/logo.png`
   - Use transparent PNG
   - Update `HeroSection.jsx` to use image instead of text

3. Add specific gameplay trailer:
   - Get video ID from YouTube
   - Update `TrailerSection.jsx` with specific video URL

### Enable Analytics (Optional)

Add Google Analytics to track visitors:
1. Create Google Analytics property
2. Add tracking code to `index.html`
3. Monitor traffic and user behavior

### Custom Domain (Optional)

Use your own domain (e.g., shadowsofsoldiers.com):
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS records with your domain provider
3. Enable custom domain in GitHub Pages settings

See `GITHUB_PAGES_DEPLOYMENT.md` for detailed custom domain instructions.

---

## 📚 Additional Resources

- **Complete deployment guide:** `GITHUB_PAGES_DEPLOYMENT.md`
- **Implementation details:** `IMPLEMENTATION_GUIDE.md`
- **Design specifications:** `DESIGN_MOCKUP.md`
- **Project plan:** `PROJECT_PLAN.md`

---

## 🆘 Need Help?

1. Check `GITHUB_PAGES_DEPLOYMENT.md` troubleshooting section
2. Review GitHub Actions logs in the Actions tab
3. Verify all file paths are correct
4. Test locally first with `npm run dev`

---

**Congratulations! Your game landing page is now live and free forever on GitHub Pages! 🎮✨**

