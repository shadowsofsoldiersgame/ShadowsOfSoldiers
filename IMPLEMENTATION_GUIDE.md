# AI Agent Implementation Guide

This guide provides step-by-step instructions for an AI agent to build the Shadows of Soldiers landing page from scratch.

## Prerequisites Check
- ✅ Node.js 16+ installed
- ✅ npm or yarn available
- ✅ Terminal access
- ✅ Text editor/IDE available

---

## Phase 1: Project Initialization

### Step 1.1: Create Vite + React Project
```bash
npm create vite@latest . -- --template react
npm install
```

**Expected Output:**
- `package.json` created
- `vite.config.js` created
- `src/` directory with basic React files
- `public/` directory for static assets

### Step 1.2: Install Required Dependencies
```bash
npm install react-icons react-player framer-motion
```

**Dependencies Purpose:**
- `react-icons`: Social media icons (YouTube, Patreon, Facebook)
- `react-player`: YouTube video embedding
- `framer-motion`: Smooth animations and transitions

### Step 1.3: Create Directory Structure
```bash
# Create component directories
mkdir -p src/components
mkdir -p src/styles
mkdir -p public/assets/images
mkdir -p public/assets/videos
```

**Verify Structure:**
```
ShadowsOfSoldiersStaticWebpage/
├── src/
│   ├── components/
│   └── styles/
└── public/
    └── assets/
        ├── images/
        └── videos/
```

---

## Phase 2: Core File Setup

### Step 2.1: Clean Up Default Files

**Delete or clean:**
- `src/App.css` (will recreate)
- `src/index.css` (will recreate)
- Remove default Vite logos

### Step 2.2: Create Global Styles

**File:** `src/styles/App.css`

```css
/* CSS Reset & Global Styles */
* {
  margin: 0;
  padding: 0;
  box-box: border-box;
}

:root {
  /* Colors */
  --bg-dark: #0a0a0a;
  --bg-card: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --text-muted: #666666;
  
  /* Brand Colors */
  --discord: #5865F2;
  --discord-hover: #7289DA;
  --steam: #1b2838;
  --steam-hover: #2a475e;
  --accent-gold: #D4AF37;
  
  /* Spacing */
  --section-padding: 120px;
  --mobile-padding: 60px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}

/* Utility Classes */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

---

## Phase 3: Component Implementation

### Step 3.1: Create HeroSection Component

**File:** `src/components/HeroSection.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import PrimaryCTA from './PrimaryCTA';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>SHADOWS OF SOLDIERS</h1>
        </motion.div>
        
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Tactical Military Action Game
        </motion.p>
        
        <motion.div
          className="hero-cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <PrimaryCTA />
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>▼</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
```

**File:** `src/styles/HeroSection.css`

```css
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  /* Background image will be added via inline style or CSS */
  background-image: url('/assets/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.3) 0%,
    rgba(10, 10, 10, 0.8) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  padding: 0 20px;
}

.hero-logo h1 {
  font-size: 72px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.hero-tagline {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 50px;
  letter-spacing: 2px;
}

.hero-cta-container {
  margin-bottom: 80px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  color: var(--text-muted);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-logo h1 {
    font-size: 36px;
  }
  
  .hero-tagline {
    font-size: 18px;
  }
}
```

### Step 3.2: Create PrimaryCTA Component

**File:** `src/components/PrimaryCTA.jsx`

```jsx
import React from 'react';
import { FaDiscord, FaSteam } from 'react-icons/fa';
import '../styles/PrimaryCTA.css';

const LINKS = {
  discord: 'https://discord.gg/rkWhy9TwjX',
  steam: 'https://store.steampowered.com/app/1401200/Shadows_of_Soldiers/#game_area_purchase'
};

const PrimaryCTA = () => {
  return (
    <div className="primary-cta">
      <a
        href={LINKS.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button cta-discord"
      >
        <FaDiscord className="cta-icon" />
        <span className="cta-text">Join Our Community</span>
      </a>
      
      <a
        href={LINKS.steam}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button cta-steam"
      >
        <FaSteam className="cta-icon" />
        <span className="cta-text">Wishlist on Steam</span>
      </a>
    </div>
  );
};

export default PrimaryCTA;
```

**File:** `src/styles/PrimaryCTA.css`

```css
.primary-cta {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 250px;
  height: 70px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-discord {
  background-color: var(--discord);
  color: white;
}

.cta-discord:hover {
  background-color: var(--discord-hover);
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(88, 101, 242, 0.4);
}

.cta-steam {
  background-color: var(--steam);
  color: white;
}

.cta-steam:hover {
  background-color: var(--steam-hover);
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(27, 40, 56, 0.4);
}

.cta-icon {
  font-size: 28px;
}

/* Responsive */
@media (max-width: 768px) {
  .primary-cta {
    flex-direction: column;
    gap: 20px;
  }
  
  .cta-button {
    width: 90%;
    max-width: 300px;
  }
}
```

### Step 3.3: Create TrailerSection Component

**File:** `src/components/TrailerSection.jsx`

```jsx
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import '../styles/TrailerSection.css';

const TrailerSection = () => {
  // Extract video ID from YouTube channel when available
  const videoUrl = 'https://www.youtube.com/@shadowsofsoldiers';
  
  return (
    <section className="trailer-section">
      <div className="container">
        <h2 className="section-title">Watch Gameplay</h2>
        <div className="trailer-wrapper">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            light={true}
            playing={false}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
        </div>
        <p className="trailer-note">
          Visit our{' '}
          <a
            href="https://youtube.com/@shadowsofsoldiers"
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-link"
          >
            YouTube channel
          </a>
          {' '}for more videos
        </p>
      </div>
    </section>
  );
};

export default TrailerSection;
```

**File:** `src/styles/TrailerSection.css`

```css
.trailer-section {
  padding: var(--section-padding) 0;
  background-color: var(--bg-card);
}

.section-title {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  width: 100%;
}

.section-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--accent-gold);
  margin: 20px auto 0;
}

.trailer-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.trailer-wrapper > div {
  position: absolute;
  top: 0;
  left: 0;
}

.trailer-note {
  text-align: center;
  margin-top: 30px;
  color: var(--text-secondary);
  font-size: 16px;
}

.trailer-link {
  color: var(--accent-gold);
  text-decoration: underline;
  transition: color 0.3s;
}

.trailer-link:hover {
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .trailer-section {
    padding: var(--mobile-padding) 0;
  }
  
  .section-title {
    font-size: 32px;
  }
}
```

### Step 3.4: Create SocialLinks Component

**File:** `src/components/SocialLinks.jsx`

```jsx
import React from 'react';
import { FaYoutube, FaPatreon, FaFacebook } from 'react-icons/fa';
import '../styles/SocialLinks.css';

const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@shadowsofsoldiers',
  patreon: 'https://patreon.com/shadowsofsoldiers',
  facebook: 'https://www.facebook.com/shadowsofsoldiers/'
};

const SocialLinks = () => {
  return (
    <section className="social-section">
      <div className="container">
        <h2 className="section-title">Follow Our Journey</h2>
        <div className="social-links">
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-youtube"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube />
          </a>
          
          <a
            href={SOCIAL_LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-patreon"
            aria-label="Support us on Patreon"
          >
            <FaPatreon />
          </a>
          
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-facebook"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
```

**File:** `src/styles/SocialLinks.css`

```css
.social-section {
  padding: var(--section-padding) 0;
  background-color: var(--bg-dark);
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--bg-card);
  color: var(--text-muted);
  font-size: 28px;
  transition: all 0.3s ease;
  position: relative;
}

.social-link:hover {
  transform: translateY(-5px) scale(1.1);
}

.social-youtube:hover {
  background-color: #FF0000;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
}

.social-patreon:hover {
  background-color: #FF424D;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 66, 77, 0.3);
}

.social-facebook:hover {
  background-color: #1877F2;
  color: white;
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .social-section {
    padding: var(--mobile-padding) 0;
  }
  
  .social-links {
    gap: 30px;
  }
  
  .social-link {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
}
```

### Step 3.5: Create Footer Component

**File:** `src/components/Footer.jsx`

```jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Shadows of Soldiers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

**File:** `src/styles/Footer.css`

```css
.footer {
  background-color: var(--bg-dark);
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  letter-spacing: 1px;
}
```

### Step 3.6: Create Main App Component

**File:** `src/App.jsx`

```jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import TrailerSection from './components/TrailerSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <TrailerSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
```

### Step 3.7: Update Main Entry Point

**File:** `src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## Phase 4: Assets & Configuration

### Step 4.1: Add Placeholder Background Image

Create a placeholder or add actual hero background:

**Option A: CSS Gradient Placeholder**
In `HeroSection.css`, the gradient is already set as fallback.

**Option B: Add actual image**
Place image at: `public/assets/images/hero-background.jpg`

### Step 4.2: Update index.html

**File:** `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Shadows of Soldiers - Tactical Military Action Game. Join our community and wishlist on Steam!" />
    <meta property="og:title" content="Shadows of Soldiers" />
    <meta property="og:description" content="Tactical Military Action Game - Coming Soon" />
    <meta property="og:type" content="website" />
    <title>Shadows of Soldiers | Tactical Military Action Game</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Phase 5: Testing & Verification

### Step 5.1: Start Development Server

```bash
npm run dev
```

**Expected:** Server runs on `http://localhost:5173`

### Step 5.2: Verification Checklist

- [ ] Hero section displays with gradient background
- [ ] Title and tagline visible
- [ ] Discord and Steam buttons render correctly
- [ ] Buttons link to correct URLs
- [ ] Trailer section visible (may show YouTube channel)
- [ ] Social icons display and link correctly
- [ ] Footer shows copyright
- [ ] Responsive on mobile (test with DevTools)
- [ ] Hover effects work on buttons and icons
- [ ] Animations play smoothly

### Step 5.3: Test All Links

Click each button/link:
1. Discord → https://discord.gg/rkWhy9TwjX
2. Steam → https://store.steampowered.com/app/1401200/Shadows_of_Soldiers/
3. YouTube → https://youtube.com/@shadowsofsoldiers
4. Patreon → https://patreon.com/shadowsofsoldiers
5. Facebook → https://www.facebook.com/shadowsofsoldiers/

---

## Phase 6: Build for Production

### Step 6.1: Create Production Build

```bash
npm run build
```

**Expected Output:** `dist/` folder created with optimized files

### Step 6.2: Preview Production Build

```bash
npm run preview
```

Test the production build locally.

---

## Phase 7: Deployment to GitHub Pages

### Deployment is Pre-Configured!

This project is set up for GitHub Pages deployment. See `GITHUB_PAGES_DEPLOYMENT.md` for complete instructions.

### Quick Deploy Steps:

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ShadowsOfSoldiersStaticWebpage.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: "GitHub Actions"
   - Site deploys automatically!

4. **Access Your Site:**
   `https://YOUR_USERNAME.github.io/ShadowsOfSoldiersStaticWebpage/`

### Alternative: Manual Deployment

```bash
npm run deploy
```

**For detailed instructions, see:** `GITHUB_PAGES_DEPLOYMENT.md`

---

## Common Issues & Solutions

### Issue 1: "Module not found" error
**Solution:** Ensure all dependencies installed: `npm install`

### Issue 2: Background image not showing
**Solution:** Check file path in `HeroSection.css` matches actual file location

### Issue 3: YouTube video not loading
**Solution:** Replace placeholder URL with actual video URL from channel

### Issue 4: Icons not rendering
**Solution:** Verify `react-icons` is installed: `npm install react-icons`

### Issue 5: Build fails
**Solution:** Check for syntax errors, run `npm run build` and read error messages

---

## Success Criteria

✅ **Visual:**
- Dark, cinematic appearance
- All sections visible and properly styled
- Responsive on mobile, tablet, desktop

✅ **Functional:**
- All 5 external links work correctly
- Buttons have hover effects
- Video player loads
- Smooth scrolling between sections

✅ **Performance:**
- Page loads in < 3 seconds
- Animations are smooth (60fps)
- No console errors

✅ **Accessibility:**
- All links have proper aria-labels
- Keyboard navigation works
- Color contrast is sufficient

---

## Next Steps After Implementation

1. **Add Real Assets:**
   - Replace placeholder background with game artwork
   - Add game logo PNG
   - Update video URL to specific trailer

2. **Optimize:**
   - Compress images
   - Use WebP format
   - Enable lazy loading

3. **Enhance:**
   - Add screenshot gallery
   - Add game features section
   - Implement parallax scrolling

4. **Analytics:**
   - Add Google Analytics
   - Track button clicks
   - Monitor traffic sources

---

## File Checklist

After implementation, verify these files exist:

```
✅ package.json
✅ vite.config.js
✅ index.html
✅ src/main.jsx
✅ src/App.jsx
✅ src/styles/App.css
✅ src/components/HeroSection.jsx
✅ src/styles/HeroSection.css
✅ src/components/PrimaryCTA.jsx
✅ src/styles/PrimaryCTA.css
✅ src/components/TrailerSection.jsx
✅ src/styles/TrailerSection.css
✅ src/components/SocialLinks.jsx
✅ src/styles/SocialLinks.css
✅ src/components/Footer.jsx
✅ src/styles/Footer.css
```

---

**This guide provides complete, copy-paste ready code for an AI agent to implement the Shadows of Soldiers landing page successfully.**

