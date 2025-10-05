# Design Mockup & Visual Reference

## 🎨 Visual Design Specifications

### Hero Section Layout
```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║              [DARK BACKGROUND IMAGE - FULL WIDTH]         ║
║                    [Gradient Overlay]                     ║
║                                                           ║
║                  ┌─────────────────┐                      ║
║                  │                 │                      ║
║                  │   GAME  LOGO    │                      ║
║                  │                 │                      ║
║                  └─────────────────┘                      ║
║                                                           ║
║              "Tactical Military Action Game"              ║
║               "Coming Soon to Steam"                      ║
║                                                           ║
║         ┌────────────────────┐  ┌────────────────────┐   ║
║         │   [Discord Icon]   │  │   [Steam Icon]     │   ║
║         │  Join Community    │  │   Wishlist Now     │   ║
║         │                    │  │                    │   ║
║         └────────────────────┘  └────────────────────┘   ║
║                                                           ║
║                       ▼ Scroll                            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Button Specifications

#### Discord Button
```
┌──────────────────────────────┐
│   [Discord Logo]             │
│   JOIN OUR COMMUNITY         │
│                              │
│   Background: #5865F2        │
│   Hover: Lighter + Scale 1.05│
│   Size: 250px × 70px         │
└──────────────────────────────┘
```

#### Steam Button
```
┌──────────────────────────────┐
│   [Steam Logo]               │
│   WISHLIST ON STEAM          │
│                              │
│   Background: #1b2838        │
│   Hover: Lighter + Scale 1.05│
│   Size: 250px × 70px         │
└──────────────────────────────┘
```

### Trailer Section Layout
```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║                    WATCH GAMEPLAY                         ║
║                    ─────────────                          ║
║                                                           ║
║        ┌─────────────────────────────────────┐            ║
║        │                                     │            ║
║        │                                     │            ║
║        │       YouTube Video Player          │            ║
║        │          (16:9 Ratio)               │            ║
║        │                                     │            ║
║        │                                     │            ║
║        └─────────────────────────────────────┘            ║
║                                                           ║
║          Max Width: 1200px, Centered                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Social Links Section
```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║                  FOLLOW OUR JOURNEY                       ║
║                  ──────────────────                       ║
║                                                           ║
║              ┌───────┐  ┌───────┐  ┌───────┐             ║
║              │   🎬  │  │   💰  │  │   📘  │             ║
║              │YouTube│  │Patreon│  │Facebook│            ║
║              └───────┘  └───────┘  └───────┘             ║
║                                                           ║
║         Circle Icons, 60px diameter, Gray → Color on Hover║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Footer
```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║           © 2024 Shadows of Soldiers                      ║
║           All Rights Reserved                             ║
║                                                           ║
║           Background: #0a0a0a                             ║
║           Text Color: #666                                ║
║           Height: 80px                                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 🎨 Color Palette

### Primary Colors
```css
--background-dark: #0a0a0a;
--background-card: #1a1a1a;
--text-primary: #ffffff;
--text-secondary: #cccccc;
--text-muted: #666666;
```

### Brand Colors
```css
--discord-purple: #5865F2;
--discord-purple-hover: #7289DA;
--steam-blue: #1b2838;
--steam-blue-hover: #2a475e;
--accent-gold: #D4AF37;
--accent-military: #4a5a3e;
```

### Gradients
```css
/* Hero Overlay */
background: linear-gradient(
  180deg,
  rgba(10, 10, 10, 0.4) 0%,
  rgba(10, 10, 10, 0.8) 100%
);

/* Button Hover Glow */
box-shadow: 0 0 20px rgba(88, 101, 242, 0.5);
```

## 📐 Spacing & Sizing

### Section Spacing
- Hero Section: 100vh height
- Content Sections: 120px padding top/bottom
- Max Content Width: 1400px
- Side Margins: 40px (desktop), 20px (mobile)

### Typography Scale
```css
--font-size-hero: 72px;     /* Desktop title */
--font-size-h1: 48px;       /* Section headers */
--font-size-h2: 36px;       /* Subsections */
--font-size-body: 18px;     /* Body text */
--font-size-button: 20px;   /* Button text */
```

### Button Sizing
- Primary CTA Width: 250px
- Primary CTA Height: 70px
- Border Radius: 8px
- Gap Between Buttons: 30px
- Icon Size: 32px

### Social Icon Sizing
- Circle Diameter: 60px
- Icon Size: 32px
- Gap Between Icons: 40px
- Border Radius: 50% (circular)

## 🎭 Animation Specifications

### Hero Section Animations
```javascript
// Logo fade-in
{
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" }
}

// CTA buttons slide up
{
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 }
}
```

### Button Hover Effects
```css
.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Social Icon Hover
```css
.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  transition: all 0.3s ease;
}
```

## 📱 Responsive Design Breakpoints

### Mobile (< 768px)
- Hero title: 36px
- Stack CTA buttons vertically
- Button width: 90% of container
- Social icons: 50px diameter
- Section padding: 60px top/bottom

### Tablet (768px - 1024px)
- Hero title: 56px
- CTA buttons side-by-side
- Button width: 200px
- Reduce spacing slightly

### Desktop (> 1024px)
- Full layout as specified above
- Enable parallax effects
- Larger imagery

## 🖼️ Asset Guidelines

### Hero Background Image
- **Dimensions:** 1920×1080 minimum (2560×1440 recommended)
- **Format:** JPG (optimized) or WebP
- **File Size:** < 500KB
- **Content:** Dark, atmospheric game scene
- **Focus:** Center-weighted composition
- **Mood:** Tactical, military, intense

### Logo Image
- **Format:** PNG with transparency
- **Dimensions:** 800×400 recommended
- **Retina:** Provide @2x version
- **Colors:** White or light colors for dark background

### Icon Specifications
- Discord Icon: SVG or PNG, 256×256
- Steam Icon: SVG or PNG, 256×256
- Social Icons: Use React Icons library (FaYoutube, FaPatreon, FaFacebook)

## 🎯 User Experience Flow

1. **Landing (Hero Section)**
   - User sees stunning full-screen background
   - Logo animates in
   - Eyes drawn to bright CTA buttons
   - Clear hierarchy: Join Discord OR Wishlist

2. **Scroll Down**
   - Smooth scroll to trailer section
   - Video auto-loads (not auto-play)
   - Clear "Watch Gameplay" heading

3. **Further Scroll**
   - Social media icons revealed
   - Hover effects encourage interaction
   - Clear external link indicators

4. **Footer**
   - Copyright info
   - Clean closure to page

## 🔍 Accessibility Notes

- All images have alt text
- Buttons have aria-labels
- Focus states visible with outline
- Color contrast ratio > 4.5:1
- Keyboard navigation functional
- Screen reader friendly semantic HTML

## 📊 Performance Optimization

### Image Optimization
```html
<!-- Modern format with fallback -->
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Shadows of Soldiers">
</picture>
```

### Lazy Loading
```javascript
// Videos load only when visible
loading="lazy"
```

### Code Splitting
```javascript
// Lazy load components below fold
const TrailerSection = lazy(() => import('./TrailerSection'));
```

## 🎮 Inspiration References

**Similar Game Landing Pages:**
- Call of Duty franchise pages (dark, cinematic)
- Battlefield official sites (hero-focused)
- Escape from Tarkov (military aesthetic)
- Ready or Not (tactical theme)

**Key Takeaways:**
- Dark color schemes with high contrast CTAs
- Full-screen hero imagery
- Prominent community/purchase buttons
- Video content prominently featured
- Minimal text, maximum visual impact

---

This mockup provides comprehensive visual guidance for implementing the Shadows of Soldiers landing page. All specifications are designed to be implementable by an AI agent with the provided measurements, colors, and layout details.

