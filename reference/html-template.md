# HTML Generation Reference

Constraints and patterns Claude must follow when generating carousel HTML. Everything else (typography, layouts, decorations) is generated creatively per slide using best-practices.md and reference/STYLE_PRESETS.md.

---

## HTML Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1080">
    <title>Carousel: [Topic]</title>
    <link rel="stylesheet" href="[font-url-from-brand-config]">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background: #f0f0f0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px;
        }

        /* Brand variables from carousel-brand.md */
        :root {
            --bg: /* from brand */;
            --surface: /* from brand */;
            --text-primary: /* from brand */;
            --text-secondary: /* from brand */;
            --accent: /* from brand */;
            --accent-secondary: /* from brand */;
            --font-display: /* from brand */;
            --font-body: /* from brand */;
            --padding: 80px;
        }

        /* Every slide: exactly 1080x1080, no exceptions */
        .slide {
            width: 1080px;
            height: 1080px;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: var(--bg);
            padding: var(--padding);
        }

        /* All other CSS is generated per slide. No predefined layout classes. */
        /* Use best-practices.md layout variants for composition ideas. */
        /* Load preset decorative CSS from reference/STYLE_PRESETS.md. */
    </style>
</head>
<body>
    <!-- One <div class="slide"> per slide -->
</body>
</html>
```

---

## Hard Constraints

- **1080x1080px** per slide. No responsive. No media queries. Fixed pixel values.
- **80px padding** on all sides (content area: 920x920). Can override per slide for full-bleed effects.
- **No JavaScript.** Static HTML/CSS only.
- **No external images.** Fonts from CDN are fine. All visuals are pure CSS.
- **overflow: hidden** on every slide. Elements can bleed off-edge intentionally.
- **Slide numbers** on every slide (top-right, subtle, 18-22px, muted).

## Typography Minimums (Mobile Readability)

LinkedIn carousels render at ~350px on phones. These minimums are non-negotiable:

| Element | Minimum |
|---------|---------|
| Hook headline | 64px |
| Slide headline | 44px |
| Body text / bullets | 28px |
| Big numbers | 72px |
| Labels / captions | 22px |
| Slide numbers | 18px |

**Rule: If you can't read it at arm's length on a phone, it's too small.**

---

## Chart Patterns (Tricky CSS)

These components require specific CSS patterns. Reference when generating data slides.

### Bar Chart (Horizontal)
```css
.bar-chart { display: flex; flex-direction: column; gap: 20px; width: 100%; }
.bar-row { display: grid; grid-template-columns: 160px 1fr 60px; align-items: center; gap: 16px; }
.bar-track { height: 32px; background: var(--surface); position: relative; overflow: hidden; }
.bar-fill { height: 100%; background: var(--accent); /* Width set inline: style="width: 75%" */ }
```

### Donut Chart (conic-gradient)
```css
.donut-chart {
    width: 320px; height: 320px; border-radius: 50%; position: relative;
    /* background: conic-gradient(var(--accent) 0deg 180deg, var(--accent-secondary) 180deg 270deg, var(--surface) 270deg 360deg); */
}
.donut-hole {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 180px; height: 180px; border-radius: 50%; background: var(--bg);
    display: flex; align-items: center; justify-content: center; flex-direction: column;
}
```

### Progress Bars
```css
.progress-item { display: flex; flex-direction: column; gap: 8px; }
.progress-header { display: flex; justify-content: space-between; align-items: center; }
.progress-track { width: 100%; height: 8px; background: var(--surface); }
.progress-fill { height: 100%; background: var(--accent); /* Width set inline */ }
```

---

## Composition Patterns (Tricky CSS)

Patterns where Claude might produce inconsistent results without a reference.

### IDE Window Chrome
```css
.ide-window { border-radius: 8px; overflow: hidden; }
.ide-titlebar {
    background: var(--surface);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.ide-dot {
    width: 12px; height: 12px; border-radius: 50%;
}
.ide-dot--close { background: #FF5F56; }
.ide-dot--min { background: #FFBD2E; }
.ide-dot--max { background: #27C93F; }
.ide-filename {
    margin-left: auto;
    font-size: 14px;
    color: var(--text-secondary);
    font-family: var(--font-body);
}
.ide-body {
    background: var(--surface);
    padding: 24px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 24px;
    line-height: 1.6;
}
```

### Diff Highlighting (Code Before/After)
```css
.diff-removed {
    background: rgba(248, 81, 73, 0.15);
    border-left: 3px solid #f85149;
    padding: 4px 12px;
}
.diff-added {
    background: rgba(46, 160, 67, 0.15);
    border-left: 3px solid #2ea043;
    padding: 4px 12px;
}
/* Prefix each line with - or + in matching color */
```

### Diagonal Split (clip-path)
```css
/* Top-left triangle covers one color zone */
.diagonal-overlay {
    position: absolute;
    inset: 0;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    background: var(--accent);
    opacity: 0.1; /* or use a solid surface color */
}
/* Content sits on top with z-index, straddling the boundary */
```

### Ghost / Watermark Typography
```css
.ghost-text {
    position: absolute;
    font-family: var(--font-display);
    font-size: 320px;
    font-weight: 900;
    color: var(--accent);
    opacity: 0.08;
    line-height: 0.8;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
}
/* Main content sits above with z-index: 1+ */
```

### Marker Highlight Effect
```css
.highlight {
    background: rgba(var(--accent-rgb), 0.25); /* accent color at 25% opacity */
    padding: 4px 8px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}
/* Use on <span> wrapping key words in headlines */
```

### KPI Delta Indicators
```css
.delta-up { color: #0ECB81; }
.delta-up::before { content: '▲ '; font-size: 14px; }
.delta-down { color: #F6465D; }
.delta-down::before { content: '▼ '; font-size: 14px; }
/* Use inside stat cards alongside the main number */
```

### Scorecard / Table Grid
```css
.scorecard {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 1px;
    background: var(--surface); /* gap color */
}
.scorecard > * {
    background: var(--bg);
    padding: 16px 20px;
    font-size: 24px;
}
.scorecard .header {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
}
.scorecard .check { color: var(--accent); text-align: center; }
.scorecard .cross { color: var(--text-secondary); opacity: 0.3; text-align: center; }
```

### Color-Blocked Section
```css
/* Pseudo-element covers top portion of slide with accent color */
.slide--color-blocked::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 40%; /* adjust percentage */
    background: var(--accent);
    opacity: 0.1; /* or solid for full inversion */
    z-index: 0;
}
/* Content sits above with z-index: 1 */
```

### Edge-Bleed Decorative Shape
```css
.bleed-circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    opacity: 0.08;
    pointer-events: none;
    /* Position partially off-slide: */
    bottom: -200px;
    right: -200px;
    /* overflow:hidden on .slide clips it */
}
```

---

## CSS Gotchas

**Negating CSS functions:** `right: -clamp(28px, 3.5vw, 44px)` is silently ignored. Use `right: calc(-1 * clamp(28px, 3.5vw, 44px))` instead.

**Font loading in Playwright:** Render script waits 2 seconds. Fontshare fonts may need 3-4 seconds. If fonts appear as fallbacks in PDF, increase the wait.

**PDF page breaks:** Render script screenshots each `.slide` element. Ensure every slide div has the `slide` class.
