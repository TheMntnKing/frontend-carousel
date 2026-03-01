# Carousel Style Presets

Curated visual styles for 1080x1080 LinkedIn carousels. Each preset is designed for mobile readability, brand recognition, and feed standout. Abstract shapes only, no illustrations.

---

## Design Constraints (All Presets)

### Fixed Dimensions
- Every slide: exactly 1080x1080px
- No responsive design. No media queries. Fixed pixel values everywhere.
- Padding: 80px on all sides (content area: 920x920)

### Typography Sizing (Mobile Readability)

Text must be readable on a phone screen. LinkedIn carousels are typically viewed at ~350px wide on mobile. At that scale, a 32px font renders at ~10px visually. These minimums are non-negotiable:

| Element | Size Range | Minimum |
|---------|-----------|---------|
| Hook headline | 64-80px | 64px |
| Slide headline | 44-56px | 44px |
| Body text / bullets | 28-36px | 28px |
| Big numbers (stats) | 72-96px | 72px |
| Labels / captions | 22-28px | 22px |
| Slide numbers | 18-22px | 18px |

**Rule: If you can't read it at arm's length on your phone, the text is too small.**

### Content Density Per Slide Type

| Slide Type | Max Content |
|------------|-------------|
| Hook | 1 headline (max 12 words) + optional subtitle (max 8 words) |
| Content | 1 headline (max 8 words) + 3-4 bullets (max 10 words each) |
| Big Statement | 1-2 sentences (max 20 words total) |
| Stats | 1-3 numbers + labels |
| Quote | 1 quote (max 25 words) + attribution |
| Comparison | 2 columns, 3-4 items each (max 6 words per item) |
| List | 4-6 items max (max 8 words each) |
| CTA | Handle + prompt + optional tagline |

**Too much content? Split into 2 slides. Never shrink text.**

### Color Contrast

All text must pass WCAG AA contrast ratio (4.5:1 for body, 3:1 for large text). Dark themes: light text on dark. Light themes: dark text on light. Never use medium gray text on medium backgrounds.

---

## Dark Presets

### 1. Midnight Builder

**Vibe:** Confident, warm, substance-heavy. Builder who cares about craft.

**Best for:** Technical content, frameworks, how-tos, builder-audience posts.

**Typography:**
- Display: `Clash Display` (700) — via Fontshare
- Body: `Satoshi` (400/500) — via Fontshare

**Colors:**
```css
:root {
    --bg: #1a1a2e;
    --surface: #252547;
    --text-primary: #ffffff;
    --text-secondary: #b8b8d0;
    --accent: #f0a500;
    --accent-secondary: #ffd166;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=satoshi@400;500;700&display=swap">
```

**Signature Elements:**
- Warm amber accent against deep navy
- Subtle gradient mesh in corners (radial gradient, amber at 10% opacity)
- Clean geometric accent lines (1-2px, accent color)
- Slide numbers in top-right, muted

**Decorative CSS:**
```css
.slide::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(240, 165, 0, 0.08) 0%, transparent 70%);
    pointer-events: none;
}
```

---

### 2. Signal Noir

**Vibe:** Bold, high-impact, decisive. No fluff.

**Best for:** Contrarian takes, data-backed claims, strong opinions.

**Typography:**
- Display: `Archivo Black` (900) — via Google Fonts
- Body: `Space Grotesk` (400/500) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #0d0d0d;
    --surface: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent: #ff4d4d;
    --accent-secondary: #ff8080;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600&display=swap">
```

**Signature Elements:**
- Red accent slashes as visual emphasis
- Heavy black backgrounds, maximum contrast
- Accent bars (4px tall, accent color) under headlines
- No decorative shapes. Raw typography carries the design.

**Decorative CSS:**
```css
.headline::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--accent);
    margin-top: 24px;
}
```

---

### 3. Terminal

**Vibe:** Developer-native, hacker aesthetic, code-first.

**Best for:** Technical deep dives, code patterns, developer tools, system architecture.

**Typography:**
- Display: `JetBrains Mono` (700) — via Google Fonts
- Body: `JetBrains Mono` (400) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #0d1117;
    --surface: #161b22;
    --text-primary: #e6edf3;
    --text-secondary: #7d8590;
    --accent: #39d353;
    --accent-secondary: #2ea043;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap">
```

**Signature Elements:**
- GitHub Dark color scheme
- Terminal green accent
- Monospace everything
- Subtle scan line effect (repeating linear gradient)
- Code-block styled content areas (surface background, 1px border)

**Decorative CSS:**
```css
.slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.01) 2px,
        rgba(255, 255, 255, 0.01) 4px
    );
    pointer-events: none;
}

.slide--content .bullet-list li {
    background: var(--surface);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 16px 24px;
}
```

---

### 4. Blueprint / Technical Drawing

**Vibe:** Precise, engineering-minded. Looks like an actual technical drawing.

**Best for:** System architecture, decision frameworks, process flows, "how we built X" stories.

**Typography:**
- Display/Body: `IBM Plex Mono` (400/500/700) — via Google Fonts. Monospace everything.

**Colors:**
```css
:root {
    --bg: #0A1628;
    --surface: #0F1F3A;
    --text-primary: #E0F0FF;
    --text-secondary: #6B8DB5;
    --accent: #00D4FF;
    --accent-secondary: rgba(0, 212, 255, 0.3);
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap">
```

**Signature Elements:**
- Blueprint grid background (20px minor, 100px major grid lines in cyan at low opacity)
- Corner registration marks (L-shaped borders)
- Dashed borders on content items
- Annotation labels (A1, A2...)
- "SECTION 02" headers with divider lines
- Dimension lines
- "Rev 2.3" revision marks
- "SCALE 1:1" micro-labels

**Decorative CSS:**
```css
.slide {
    background-image:
        linear-gradient(rgba(0, 180, 255, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 180, 255, 0.06) 1px, transparent 1px),
        linear-gradient(rgba(0, 180, 255, 0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 180, 255, 0.12) 1px, transparent 1px);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
}
.slide::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 24px;
    width: 32px;
    height: 32px;
    border-top: 2px solid rgba(0, 212, 255, 0.3);
    border-left: 2px solid rgba(0, 212, 255, 0.3);
}
.slide::after {
    content: '';
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 32px;
    height: 32px;
    border-bottom: 2px solid rgba(0, 212, 255, 0.3);
    border-right: 2px solid rgba(0, 212, 255, 0.3);
}
```

---

### 5. Dark Dashboard

**Vibe:** Engineered, data-driven, operational. Looks like Binance or Grafana, not a Figma mockup.

**Best for:** Metrics breakdowns, growth stories, A/B test results, "what I learned from analyzing X", startup/product updates.

**Typography:**
- Display: `IBM Plex Sans` (300/400/500/600/700) — via Google Fonts
- Data: `JetBrains Mono` (400/500/700) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #0B0E11;
    --surface: #12161B;
    --text-primary: #D4D9E0;
    --text-secondary: #6E7A88;
    --accent: #0ECB81;
    --accent-secondary: #F6465D;
    --data-amber: #F0B90B;
    --data-blue: #1E90FF;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap">
```

**Signature Elements:**
- NO rounded cards. 1px borders with sharp corners.
- Grid-gap borders (1px gap filled with border color between KPI cells)
- Table-style rows for lists
- Sparkline bars in pure CSS
- Status dots with box-shadow glow
- Left-border alert strips
- Monospace numbers
- Data footer with key-value pairs
- Subtle scan lines

**Decorative CSS:**
```css
.slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px);
    pointer-events: none;
}
/* KPI grid uses gap: 1px with parent bg as border */
.kpi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: #1E252E;
}
.kpi-grid > * { background: #12161B; }
```

---

### 6. Retro CRT

**Vibe:** Developer-native, nostalgic, tribal. Old-school terminal with phosphor glow and CRT artifacts.

**Best for:** Developer tips, CLI recommendations, debugging stories, career advice for engineers.

**Typography:**
- Display: `VT323` (400) — via Google Fonts
- Body: `Fira Code` (400/500/700) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #0A0A0A;
    --surface: #111111;
    --text-primary: #00FF41;
    --text-secondary: #00CC33;
    --accent: #FFB000;
    --text-dim: #006B1D;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=VT323&family=Fira+Code:wght@400;500;700&display=swap">
```

**Signature Elements:**
- CRT scanlines (repeating-linear-gradient)
- Screen vignette (radial-gradient)
- Phosphor text glow (text-shadow)
- Command prompts ($ prefixes)
- File path headers
- ASCII progress bars [████░░░]
- Blinking cursor block
- border-radius on slide for CRT curvature
- Amber for warnings

**Decorative CSS:**
```css
.slide {
    border-radius: 16px;
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.6);
}
.slide::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
    pointer-events: none;
    z-index: 10;
}
.slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%);
    pointer-events: none;
    z-index: 11;
}
.headline { text-shadow: 0 0 6px rgba(0, 255, 65, 0.4), 0 0 12px rgba(0, 255, 65, 0.15); }
```

---

### 7. Stencil / Industrial

**Vibe:** Authoritative, structured, no-nonsense. Field manual / military briefing aesthetic.

**Best for:** Operational frameworks, leadership playbooks, checklists, SOPs, "battle-tested" advice.

**Typography:**
- Display: `Saira Stencil One` — via Google Fonts
- Section heads: `Oswald` (400/500/600/700) — via Google Fonts
- Body: `Barlow Condensed` (400/500/600/700) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #1C1C1C;
    --surface: #282828;
    --text-primary: #E8E0D0;
    --text-secondary: #9A9080;
    --accent: #FF6700;
    --accent-secondary: #FFD700;
    --olive: #4A5A3C;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Oswald:wght@400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&display=swap">
```

**Signature Elements:**
- Hazard stripe at top (repeating-linear-gradient, -45deg, orange stripes)
- ALL-CAPS everything
- Wide letter-spacing (0.15-0.3em)
- Classification headers ("SECTION 03 // UNCLASSIFIED")
- Reference codes ("Ref: MA-2026-003")
- Olive left-border on list items
- Stamp-framed statement slides with border + label
- Sequential numbering (01. 02. 03.)

**Decorative CSS:**
```css
.hazard-stripe {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 8px;
    background: repeating-linear-gradient(-45deg, #FF6700, #FF6700 12px, transparent 12px, transparent 24px);
}
.slide--content ul li {
    border-left: 4px solid #4A5A3C;
    background: #282828;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

---

## Light / Warm Presets

### 8. Newsprint Editorial

**Vibe:** Intellectual, authoritative, publisherly. Looks like a newspaper front page, not a slide.

**Best for:** Opinion pieces, industry analysis, contrarian arguments, weekly roundups, thought pieces.

**Typography:**
- Display: `Playfair Display` (700/900) — via Google Fonts
- Body: `Source Serif 4` (400/600/700) — via Google Fonts
- Metadata: `Lora` (400/500, italic) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #F5F0E8;
    --surface: #FFFDF8;
    --text-primary: #1A1A1A;
    --text-secondary: #4A4A4A;
    --accent: #C41E3A;
    --text-muted: #888888;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap">
```

**Signature Elements:**
- Masthead header ("THE BUILDER'S RECORD")
- Dateline with issue number
- Byline styling
- 2-column grid on content slides
- Thin horizontal rules between sections
- Pull quotes with oversized quotation marks
- Border-left accent on lead paragraphs
- Italic metadata labels
- Page numbers instead of slide numbers

**Decorative CSS:**
```css
.slide--content::after {
    content: '';
    position: absolute;
    bottom: 80px;
    left: 80px;
    right: 80px;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
}
.slide--content .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}
```

---

### 9. Neo-Brutalist

**Vibe:** Punk, confident, anti-template. Thick borders, offset shadows, raw primary colors. Anti-AI aesthetic.

**Best for:** Hot takes, dev tooling breakdowns, startup culture, "unpopular opinion" content.

**Typography:**
- Display: `Inter` (800/900) — via Google Fonts
- Body: `Space Mono` (400/700) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #FFE600;
    --bg-alt: #ffffff;
    --surface: #ffffff;
    --text-primary: #000000;
    --accent: #FF3366;
}
/* Can alternate: hot pink bg with yellow accent */
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@800;900&family=Space+Mono:wght@400;700&display=swap">
```

**Signature Elements:**
- Thick black borders (3px solid #000)
- Offset drop shadows (6px 6px 0px #000)
- Slight element rotation (transform: rotate(-1deg))
- Badge labels with solid backgrounds
- Headline text highlighted with accent background
- NO gradients, NO blur — flat and raw

**Decorative CSS:**
```css
.card {
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}
.slide--content ul li:nth-child(odd) { transform: rotate(-0.5deg); }
.slide--content ul li:nth-child(even) { transform: rotate(0.5deg); }
.badge {
    background: #000;
    color: #FFE600;
    padding: 8px 16px;
    border: 3px solid #000;
    box-shadow: 3px 3px 0px #FF3366;
}
```

---

### 10. Swiss Grid

**Vibe:** Rigorous, refined, mathematical. Extreme typographic contrast. International Style.

**Best for:** Data-driven insights, numbered frameworks, process breakdowns, strategic frameworks.

**Typography:**
- Display/Body: `Inter` (400/500/800/900) — via Google Fonts (Helvetica substitute). Extreme weight contrast. Tight leading on headlines, generous on body.

**Colors:**
```css
:root {
    --bg: #ffffff;
    --surface: #f4f4f5;
    --text-primary: #0a0a0a;
    --text-secondary: #52525b;
    --accent: #FF0000;
}
/* Alternative accents: #0055FF (blue) or #FFD600 (yellow) */
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800;900&display=swap">
```

**Signature Elements:**
- Massive oversized numbers (120px+) as graphic elements
- Strict left-alignment
- Horizontal and vertical rules as structure
- Extreme size contrast (huge headline next to tiny label)
- Generous whitespace
- Modular grid
- NO decorative elements at all — typography and spacing are the entire design

**Decorative CSS:**
```css
.big-number {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 160px;
    line-height: 0.85;
    color: var(--accent);
}
.rule-h {
    width: 100%;
    height: 2px;
    background: #0a0a0a;
}
.rule-v {
    width: 2px;
    height: 100%;
    background: #0a0a0a;
}
```

---

### 11. Dark Academia

**Vibe:** Thoughtful, literary, scholarly. Book/library aesthetic. Rich warm tones.

**Best for:** Career philosophy, leadership wisdom, "lessons from" narratives, frameworks as chapters, deep thinking content.

**Typography:**
- Display: `Cormorant Garamond` (400/600/700, italic) — via Google Fonts
- Body: `EB Garamond` (400/500/600/700, italic) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #2A1F14;
    --surface: #3C2F22;
    --text-primary: #F4E8D1;
    --text-secondary: #C4A882;
    --accent: #C5A55A;
    --burgundy: #800020;
    --forest: #2D4A3E;
}
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&display=swap">
```

**Signature Elements:**
- Chapter numbering (Roman numerals: I, II, III)
- Ornamental rules (thin-thick-thin)
- Decorative drop caps (oversized first letter at low opacity)
- Italic headlines
- Serif everything
- Footnotes
- "Field Notes, March 2026" attribution
- Vignette at edges
- Parchment warmth

**Decorative CSS:**
```css
.slide {
    background-image: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%);
}
.thick-thin-rule {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 120px;
}
.thick-thin-rule .thick { height: 3px; background: #C5A55A; opacity: 0.6; }
.thick-thin-rule .thin { height: 1px; background: #C5A55A; opacity: 0.3; }
.drop-cap {
    font-family: 'Cormorant Garamond', serif;
    font-size: 140px;
    color: #C5A55A;
    opacity: 0.25;
    line-height: 0.7;
}
```

---

### 12. Risograph

**Vibe:** Warm, indie, creative. Physical printing aesthetic with halftone textures and overprint colors.

**Best for:** Creative process content, design thinking, storytelling, personal brand, craft-focused content.

**Typography:**
- Display: `Nunito` (700/800/900) — via Google Fonts
- Body: `DM Sans` (400/500/600) — via Google Fonts

**Colors:**
```css
:root {
    --bg: #FFF8F0;
    --surface: #FFE8D6;
    --text-primary: #1A1A1A;
    --text-secondary: #4A4040;
    --accent-1: #FF6B6B;
    --accent-2: #2EC4B6;
}
/* Overlap color via mix-blend-mode: multiply */
```

**Font URL:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap">
```

**Signature Elements:**
- 2-3 spot colors that overlap with blend modes
- Halftone dot texture (CSS radial-gradient pattern)
- Slight misregistration (1-3px offset on text/elements)
- Chunky rounded type
- Organic shapes
- NO sharp corners — everything has border-radius
- Ink texture feel

**Decorative CSS:**
```css
.slide {
    background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px);
    background-size: 8px 8px;
}
.overprint {
    mix-blend-mode: multiply;
}
.misregister {
    transform: translate(2px, -1px);
}
.accent-shape {
    border-radius: 50%;
    opacity: 0.6;
    mix-blend-mode: multiply;
}
```

---

## Font Pairing Reference

| Preset | Display | Body | Source |
|--------|---------|------|--------|
| Midnight Builder | Clash Display (700) | Satoshi (400/500) | Fontshare |
| Signal Noir | Archivo Black (900) | Space Grotesk (400/500) | Google |
| Terminal | JetBrains Mono (700) | JetBrains Mono (400) | Google |
| Blueprint | IBM Plex Mono (700) | IBM Plex Mono (400/500) | Google |
| Dark Dashboard | IBM Plex Sans (600/700) | JetBrains Mono (400/500) | Google |
| Retro CRT | VT323 (400) | Fira Code (400/500) | Google |
| Stencil / Industrial | Saira Stencil One / Oswald | Barlow Condensed (400/500) | Google |
| Newsprint Editorial | Playfair Display (700/900) | Source Serif 4 (400/600) + Lora | Google |
| Neo-Brutalist | Inter (800/900) | Space Mono (400/700) | Google |
| Swiss Grid | Inter (800/900) | Inter (400/500) | Google |
| Dark Academia | Cormorant Garamond (600/700) | EB Garamond (400/500) | Google |
| Risograph | Nunito (700/800/900) | DM Sans (400/500) | Google |

---

## DO NOT USE

**Fonts:** Roboto, Arial, system-ui, Poppins as display. These are invisible in the feed. Inter is allowed ONLY in Neo-Brutalist and Swiss Grid where it is used intentionally with extreme weight contrast — never as a lazy default.

**Colors:** `#6366f1` (overused indigo), LinkedIn blue (#0077B5), generic purple gradients.

**Patterns:** Centered-everything layouts, stock photo backgrounds, glassmorphism, drop shadows on every element, gradient borders on everything.

**Content:** Decorative emoji as bullet points, "swipe right" text on every slide, watermark-style branding on every slide.

---

## CSS Gotchas

### Negating CSS Functions

**WRONG (silently ignored):**
```css
right: -clamp(28px, 3.5vw, 44px);   /* Browser ignores this */
```

**CORRECT:**
```css
right: calc(-1 * clamp(28px, 3.5vw, 44px));  /* Works */
```

Note: For carousel slides at fixed 1080px, you'll mostly use fixed px values. But if you use `min()`, `max()`, or `clamp()` for any reason, never negate them directly.

### Font Loading in Playwright

Playwright needs time to load web fonts before screenshotting. The render script includes a 2-second wait, but for Fontshare fonts that load slowly, increase to 3-4 seconds if fonts appear as fallbacks in the PDF.

### PDF Page Breaks

When combining slide screenshots into PDF, ensure each image gets its own page. Use `page-break-after: always` on all images except the last one.
