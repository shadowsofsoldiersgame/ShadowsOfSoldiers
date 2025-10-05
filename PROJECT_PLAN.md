# Shadow of Soldiers - Static Webpage Project Plan

## Project Overview
A modern, visually striking landing page for the game "Shadow of Soldiers" built with React, featuring full-page background art, gameplay trailers, and prominent call-to-action buttons for community engagement.

## Technology Stack

### Core Technologies
- **React 18** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **React Icons** - Icon library for social media icons

### Additional Recommendations
- **React Player** - For embedded YouTube trailers with custom controls
- **Framer Motion** - Smooth animations and transitions
- **React Scroll** - Smooth scrolling between sections
- **Intersection Observer API** - Lazy loading and scroll animations

## Design Principles

### Game Landing Page Best Practices
1. **Hero Section** - Full-screen impact with background art
2. **Visual Hierarchy** - Clear primary (Discord/Steam) and secondary (social) actions
3. **Cinematic Feel** - Dark theme with accent colors, parallax effects
4. **Performance** - Optimized images, lazy loading videos
5. **Responsive Design** - Mobile-first approach
6. **Call-to-Action Focus** - Strategic button placement above the fold

### Color Scheme Suggestions
- Primary: Dark backgrounds (#0a0a0a, #1a1a1a)
- Accent: Game theme colors (military green, gold, or game-specific palette)
- CTA Buttons: High contrast (Steam blue #1b2838, Discord purple #5865F2)

## Project Structure

```
ShadowsOfSoldiersStaticWebpage/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-background.jpg
│   │   │   ├── logo.png
│   │   │   ├── discord-icon.png
│   │   │   └── steam-icon.png
│   │   └── videos/
│   │       └── trailer-thumbnail.jpg
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── PrimaryCTA.jsx
│   │   ├── TrailerSection.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── Footer.jsx
│   │   └── NavBar.jsx (optional)
│   ├── styles/
│   │   ├── App.css
│   │   ├── HeroSection.css
│   │   ├── PrimaryCTA.css
│   │   ├── TrailerSection.css
│   │   └── SocialLinks.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Component Breakdown

### 1. HeroSection Component
**Purpose:** Full-screen hero with background art and primary CTAs
**Features:**
- Full viewport height background image with overlay
- Animated game logo/title
- Tagline or game description
- Primary CTA buttons (Discord & Steam)
- Scroll indicator

### 2. PrimaryCTA Component
**Purpose:** Prominent call-to-action buttons
**Features:**
- Large buttons with icons and text
- Discord button: "Join Our Community" + Discord logo
- Steam button: "Wishlist Now" + Steam logo
- Hover effects with animations
- External link handling

### 3. TrailerSection Component
**Purpose:** Showcase gameplay footage
**Features:**
- Embedded YouTube video player
- Multiple trailers in grid/carousel (optional)
- Thumbnail previews
- Responsive video sizing
- Section heading "Watch Gameplay"

### 4. SocialLinks Component
**Purpose:** Secondary social media links
**Features:**
- Horizontal icon bar
- Icons: YouTube, Patreon, Facebook
- Hover effects with color transitions
- Proper aria-labels for accessibility

### 5. Footer Component
**Purpose:** Copyright and additional info
**Features:**
- Copyright notice
- Additional links if needed
- Minimal, dark design

## Page Layout Structure

```
┌─────────────────────────────────────┐
│         HERO SECTION                │
│  [Full-page background image]       │
│                                     │
│      ╔═══════════════════╗          │
│      ║   GAME LOGO/TITLE ║          │
│      ╚═══════════════════╝          │
│                                     │
│      Game Tagline/Description       │
│                                     │
│  ┌────────────┐  ┌────────────┐    │
│  │ [Discord]  │  │  [Steam]   │    │
│  │ Join Now   │  │  Wishlist  │    │
│  └────────────┘  └────────────┘    │
│                                     │
│        [Scroll Indicator]           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      GAMEPLAY TRAILER SECTION       │
│                                     │
│        "Watch Gameplay"             │
│                                     │
│   ┌─────────────────────────────┐   │
│   │                             │   │
│   │    YouTube Video Player     │   │
│   │                             │   │
│   └─────────────────────────────┘   │
│                                     │
│  [Optional: Additional Trailers]    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       SOCIAL LINKS SECTION          │
│                                     │
│      "Follow Our Journey"           │
│                                     │
│     [YouTube] [Patreon] [Facebook]  │
│                                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│            FOOTER                   │
│   © 2024 Shadows of Soldiers        │
└─────────────────────────────────────┘
```

## Implementation Steps

### Phase 1: Project Setup (Step 1-2)
1. **Initialize Vite + React Project**
   ```bash
   npm create vite@latest ShadowsOfSoldiersStaticWebpage -- --template react
   cd ShadowsOfSoldiersStaticWebpage
   npm install
   ```

2. **Install Dependencies**
   ```bash
   npm install react-icons react-player framer-motion
   ```

### Phase 2: Component Development (Steps 3-8)
3. **Create App.jsx Structure**
   - Set up main component hierarchy
   - Import all child components
   - Apply global dark theme

4. **Build HeroSection Component**
   - Full viewport height container
   - Background image with parallax
   - Centered content layout
   - Logo/title with fade-in animation

5. **Build PrimaryCTA Component**
   - Button component with icon + text
   - Discord button (purple theme)
   - Steam button (blue theme)
   - Hover animations (scale, glow effects)
   - External link handling with target="_blank"

6. **Build TrailerSection Component**
   - Section wrapper with padding
   - React Player for YouTube embed
   - Responsive video container (16:9 ratio)
   - Loading state handling

7. **Build SocialLinks Component**
   - Flexbox icon container
   - React Icons (FaYoutube, FaPatreon, FaFacebook)
   - Circular icon backgrounds
   - Hover effects (color change, scale up)
   - Proper spacing and alignment

8. **Build Footer Component**
   - Simple dark footer
   - Copyright text
   - Centered alignment

### Phase 3: Styling (Steps 9-10)
9. **Apply Global Styles (App.css)**
   - CSS reset
   - Dark color palette
   - Typography (gaming fonts if desired)
   - Smooth scrolling

10. **Component-Specific Styles**
    - HeroSection.css - Background image, overlay, positioning
    - PrimaryCTA.css - Button styles, hover effects, icons
    - TrailerSection.css - Video wrapper, responsive sizing
    - SocialLinks.css - Icon styles, hover animations

### Phase 4: Responsiveness (Step 11)
11. **Implement Media Queries**
    - Mobile (<768px): Stack CTAs vertically, smaller fonts
    - Tablet (768px-1024px): Adjust spacing
    - Desktop (>1024px): Full layout with optimal spacing
    - Handle background images for mobile

### Phase 5: Polish & Optimization (Steps 12-14)
12. **Add Animations**
    - Fade-in on scroll (Intersection Observer)
    - Button hover effects
    - Smooth transitions between sections

13. **Optimize Assets**
    - Compress background images
    - Use WebP format with fallbacks
    - Lazy load trailer video
    - Add loading states

14. **Testing & Validation**
    - Test all external links
    - Verify responsive design on multiple devices
    - Check accessibility (alt text, aria-labels, keyboard navigation)
    - Test performance (Lighthouse score)

### Phase 6: Deployment (Step 15)
15. **Build & Deploy to GitHub Pages**
    ```bash
    npm run build
    npm run deploy
    ```
    - Automatically deploys to GitHub Pages
    - Configure vite.config.js with repository base path
    - Enable GitHub Pages in repository settings
    - Site available at: https://[username].github.io/[repo-name]/

## Asset Requirements

### Images Needed
1. **hero-background.jpg** (1920x1080 or higher)
   - Full-resolution game artwork/screenshot
   - Dark or moody atmosphere
   - Optimized for web (<500KB)

2. **logo.png** (Transparent PNG)
   - Game logo/title
   - High resolution (2x for retina displays)

3. **discord-icon.png** (Optional if using React Icons)
   - White or colored Discord logo

4. **steam-icon.png** (Optional if using React Icons)
   - White or colored Steam logo

### Videos Needed
1. **Gameplay Trailer**
   - YouTube video ID from: youtube.com/@shadowsofsoldiers
   - Embed using React Player

### Placeholder Strategy
- Use CSS gradients for background until art is ready
- Use text placeholders for logo
- Generic gaming images from free stock sites temporarily

## Links Reference

```javascript
const LINKS = {
  discord: 'https://discord.gg/rkWhy9TwjX',
  steam: 'https://store.steampowered.com/app/1401200/Shadows_of_Soldiers/#game_area_purchase',
  youtube: 'https://youtube.com/@shadowsofsoldiers',
  patreon: 'https://patreon.com/shadowsofsoldiers',
  facebook: 'https://www.facebook.com/shadowsofsoldiers/'
};
```

## Accessibility Checklist
- [ ] Alt text for all images
- [ ] Aria-labels for icon-only buttons
- [ ] Keyboard navigation support
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Semantic HTML elements
- [ ] Focus indicators visible

## Performance Targets
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Lighthouse Score: >90

## Future Enhancements (Optional)
- Email newsletter signup
- Screenshot gallery/carousel
- Game features section
- Developer blog integration
- Press kit download section
- Animated parallax effects
- Particle effects in hero section

## Success Metrics
- Clear visual hierarchy
- All links functional
- Mobile responsive
- Fast load times
- Professional appearance matching AAA game standards

---

## Execution Readiness
This plan is designed to be executed by an AI agent with clear, sequential steps. Each phase builds upon the previous one, with specific file names, code structure, and implementation details provided.

