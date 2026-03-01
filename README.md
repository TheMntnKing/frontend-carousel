# Frontend Carousel

Turn ideas into LinkedIn carousels. No design skills needed.

Give it a topic, a draft, or even just a vague idea. It helps you figure out the content, picks the right slide layouts, and renders a ready-to-upload PDF. Every carousel matches your personal brand automatically.

## Install

```bash
curl -sSL https://raw.githubusercontent.com/TheMntnKing/frontend-carousel/main/install.sh | bash
```

Restart Claude Code after installing. That's it.

You'll also need Playwright for PDF rendering. The skill will ask you to install it on first run:

```bash
npm install -g playwright && npx playwright install chromium
```

Use `--global` to install the skill for all your projects instead of just the current one.

## How to Use

Type `/frontend-carousel` in Claude Code. On your first run, you'll pick a visual style. After that, every carousel you create matches your brand.

**Start from a topic:**
```
/frontend-carousel AI agents for personal productivity
```
It'll ask about your audience, help you find a hook, and draft the content with you before creating slides.

**Start from existing content:**
```
/frontend-carousel path/to/my-draft.md
```
If you already have a draft, bullet points, or notes, it structures them into slides directly.

**Just explore:**
```
/frontend-carousel
```
It'll ask what you want to make and guide you from there.

**Other commands:**
```
/frontend-carousel brand              # Change your visual style
/frontend-carousel render file.html   # Re-render an existing carousel to PDF
```

## What Happens

1. **Pick your style** (first time only). Answer two questions about your vibe, see 3 visual previews, pick one. Saved for all future carousels.
2. **Figure out the content.** If you have content ready, it structures it. If you just have a topic, it helps you brainstorm the angle, hook, and key points.
3. **Review the slides.** You see the full slide breakdown before anything is generated. Change, reorder, or cut slides.
4. **Get your PDF.** Opens the carousel in your browser to preview, then renders to PDF. Upload to LinkedIn.

Output goes to `.claude-design/carousel/` as HTML (editable) and PDF (upload-ready).

## 12 Visual Styles

You pick one during setup. Every carousel uses it automatically.

**Dark:** Midnight Builder, Signal Noir, Terminal, Blueprint, Dark Dashboard, Retro CRT, Stencil/Industrial

**Light:** Newsprint Editorial, Neo-Brutalist, Swiss Grid, Dark Academia, Risograph

Run `/frontend-carousel brand` anytime to switch.

## 16 Slide Types

No two adjacent slides look the same. The skill automatically varies the layout.

Hooks, big statements, bullet lists, big numbers, stats, bar charts, donut charts, progress bars, comparisons, timelines, code blocks, quotes, icon grids, stories, split layouts, and CTAs.

All 1080x1080px, optimized for phone screens, pure CSS.
