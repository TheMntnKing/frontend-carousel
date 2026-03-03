# Frontend Carousel

A Claude Code skill that turns text into production-quality LinkedIn carousel PDFs.

Give it a topic, a draft, or bullet points. It structures the content, designs every slide from scratch, and renders a ready-to-upload PDF. Every carousel matches your brand automatically.

![12 presets](docs/presets.png)

## Install

```bash
# Install for current project only
curl -sSL https://raw.githubusercontent.com/azamat1ch/frontend-carousel/main/install.sh | bash

# Install globally (available in all projects)
curl -sSL https://raw.githubusercontent.com/azamat1ch/frontend-carousel/main/install.sh | bash -s -- --global
```

Restart Claude Code after installing.

## How It Works

Type `/frontend-carousel` in Claude Code.

**First run:** Claude interviews you about your aesthetic. You answer two questions, see 3 visual previews, pick your favorite. Your brand is saved and applied to every carousel you make after that.

**Every run after:** Describe what you want, get a PDF. That's it.

```
/frontend-carousel AI agents for personal productivity
/frontend-carousel path/to/my-draft.md
/frontend-carousel brand       # change your style
```

## What It Can Do

**Brand memory.** Saves your colors, fonts, and visual style once. Every carousel after that is automatically on-brand.

**Content structuring.** Give it a topic and it helps you find the hook, build the narrative, and figure out what goes on each slide. Give it existing content and it structures it into slides directly.

**Dynamic design.** Every slide gets custom CSS generated from scratch. No fixed templates, no drag-and-drop. The layout adapts to the content, not the other way around.

**Visual rhythm.** Automatically varies layout across slides so no two adjacent slides look the same. Alternates between dense information and breathing room.

## By the Numbers

- **12 visual presets** from dark minimal to neo-brutalist to retro CRT
- **16 slide types** across 5 categories (text, data, structured, technical, openers/closers)
- **24 layout variants** for spatial variety across slides
- **Pure CSS.** No images, no JavaScript, no external dependencies
- **1080x1080px** optimized for mobile LinkedIn viewing

## 12 Presets

**Dark:** Midnight Builder, Signal Noir, Terminal, Blueprint, Dark Dashboard, Retro CRT, Stencil/Industrial

**Light:** Newsprint Editorial, Neo-Brutalist, Swiss Grid, Dark Academia, Risograph

Each preset has its own typography, color palette, and decorative elements (gradients, scan lines, textures, accent shapes). Switch anytime with `/frontend-carousel brand`.

## 16 Slide Types

**Openers & Closers:** Hook, CTA

**Text:** Content (headline + bullets), Big Statement, Story, Quote

**Data:** Big Number, Stats, Bar Chart, Donut Chart, Progress Bars

**Structured:** List, Comparison, Icon Grid, Timeline

**Technical:** Code (with syntax highlighting), Split (text + visual)

## The Flow

1. **Style** (once) — pick your visual preset from 3 previews
2. **Content** — brainstorm together or bring your own
3. **Structure** — review the slide breakdown before anything is generated
4. **Design** — every slide gets custom layout and composition
5. **PDF** — rendered through Playwright, ready to upload

Output: `.claude-design/carousel/` as HTML (editable) and PDF (upload-ready).

## Requirements

- Claude Code
- Node.js
- Playwright (`npm install -g playwright && npx playwright install chromium`, prompted on first run)
