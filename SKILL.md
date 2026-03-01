---
name: frontend-carousel
description: "Generate LinkedIn carousel PDFs from content. End-to-end: brand onboarding, content structuring, HTML/CSS slide generation, Playwright rendering to PDF. Use when user wants to create a LinkedIn carousel, document carousel, or says '/frontend-carousel'."
---

# Frontend Carousel

Generate production-quality LinkedIn carousel PDFs. Zero-dependency HTML/CSS slides rendered to PDF via Playwright.

## Core Philosophy

1. **Distinctive Design** — No generic AI slop. Every carousel should feel custom-crafted, not template-stamped.
2. **Mobile-First Typography** — LinkedIn is consumed on phones. If text isn't readable at phone size on a 1080x1080 square, it fails.
3. **Content Density Control** — Carousels have no speaker. Every word carries itself. Less is more.
4. **Consistent Brand** — Once onboarded, every carousel looks like it came from the same person. Brand recognition compounds.
5. **Automated Pipeline** — Content in, PDF out. Playwright handles rendering. No manual screenshots.

---

## Phase 0: Detect Mode & Setup

### Step 1: Dependency Check (Always First)

Before anything else, verify Playwright is available:

```bash
node -e "import('playwright').then(() => process.exit(0)).catch(() => process.exit(1))" 2>/dev/null
```

If missing, tell the user to install it now before continuing:

```
Before we start, you'll need Playwright for PDF rendering. Run this once:

npm install -g playwright && npx playwright install chromium
```

Wait for them to confirm it's installed before proceeding.

### Step 2: Find Brand Config

Search for `carousel-brand.md` in the repository. If not found, trigger onboarding.

```
# Search order:
1. .claude-design/carousel-brand.md
2. carousel-brand.md (repo root)
```

### Step 3: Route

**Mode A: First Run (No Brand Config)**
- No `carousel-brand.md` found
- Proceed to Phase 1 (Brand Onboarding)

**Mode B: New Carousel (No Arguments)**
- Brand config exists but user typed `/frontend-carousel` with no input
- Greet and ask what they want to create:

```
What do you want to make a carousel about?

You can:
- Give me a topic and we'll figure out the content together
- Paste your content (draft, bullet points, brain dump)
- Point me to a file with your content
```

Then proceed to Phase 2 based on their response.

**Mode C: New Carousel (With Arguments)**
- Brand config exists and user provided content, topic, or file path via `$ARGUMENTS`
- Proceed directly to Phase 2 (Content Input)

**Mode D: Regenerate / Adjust**
- User wants to modify an existing carousel (different style, content tweaks)
- Read existing HTML, apply changes

### Render Script

Located at `<skill-directory>/scripts/render.mjs`. Use `Glob("**/frontend-carousel/scripts/render.mjs")` if needed.

---

## Phase 1: Brand Onboarding

Run once per user/project. Creates `carousel-brand.md` with persistent brand settings.

### Step 1.1: Style Discovery

Ask the user which path:
- **"Show me options"** → Step 1.2
- **"I know what I want"** → Step 1.3
- **"Use my existing brand"** → Step 1.4

### Step 1.2: Vibe Discovery

Ask 2 questions to narrow the style:

1. **Personality:** Bold & Confident / Clean & Professional / Warm & Approachable / Techy & Sharp
2. **Background:** Dark / Light / No preference

Based on answers, select 3 presets from reference/STYLE_PRESETS.md. Generate 3 single-slide previews in `.claude-design/carousel-previews/` (style-a/b/c.html). Each shows the preset's typography, colors, and a sample hook. Ask which one resonates.

### Step 1.3: Direct Input

User describes their brand. Ask for: background color, accent color, font preference, any existing guidelines.

### Step 1.4: Brand Import

User has colors/fonts. Ask for: hex codes (bg, text, accent), font names (display + body), optional logo/profile image URL.

### Step 1.5: Save Brand Config

Save to `.claude-design/carousel-brand.md`:

```markdown
# Carousel Brand

## Preset
midnight-builder

## Colors
- Background: #1a1a2e
- Surface: #252547
- Text primary: #ffffff
- Text secondary: #a0a0b8
- Accent: #f0a500
- Accent secondary: #ffd166

## Typography
- Display font: Clash Display
- Display weight: 700
- Body font: Satoshi
- Body weight: 400
- Font source: fontshare

## Layout
- Slide size: 1080
- Padding: 80
- Corner radius: 0

## Identity (optional)
- Name:
- Handle:
- Tagline:
- Profile image:
```

Identity fields are optional (appear on CTA slide). Tell user brand is saved and they can edit the file anytime or run `/frontend-carousel brand` to redo onboarding.

---

## Phase 2: Content Input

First, figure out what the user is bringing:

### Path A: File or Written Content

User points to a file or pastes content (draft, bullet points, brain dump, article).

- Read and understand the material
- Briefly discuss: "Here's how I'd approach this as a carousel. Should we lead with X or Y?"
- Proceed to Phase 3 (Slide Structuring)

### Path B: Topic Only (Content Development)

User gives a topic or idea but no written content. This is where you help them build it.

**Step 1: Understand the intent**
Ask these (conversationally, not as a form):
- "Who's the audience? Developers, founders, general LinkedIn?"
- "What's the one thing someone should take away after swiping through?"
- "What angle feels right? Personal experience, data-driven, how-to, contrarian opinion?"

**Step 2: Find the hook**
The hook determines everything. Propose 2-3 options:
```
Here are some hook directions:

A) "Most people think X. They're wrong." (contrarian)
B) "I spent 3 months doing X. Here's what actually worked." (experience)
C) "X in 2026: the numbers nobody's talking about." (data)

Which direction feels right? Or something else entirely?
```

**Step 3: Draft the key points**
Once the angle is set, draft the slide-by-slide content (not the structure yet, the actual words):
```
Here's what I'd put on each slide:

1. Hook: "[the hook]"
2. Context: "[why this matters]"
3. Point 1: "[key insight]"
4. Point 2: "[supporting evidence]"
...

Does this flow work? Anything missing or off?
```

Iterate with the user until the content is solid. Then proceed to Phase 3.

### Path C: Arguments

Content passed via `$ARGUMENTS`. Parse it:
- Looks like a file path → Path A
- Looks like a topic (short phrase, no content) → Path B
- Looks like actual content (multiple sentences, bullet points) → Path A
- "setup" or "brand" → Phase 1
- "render [file]" → Phase 5

---

## Phase 3: Slide Structuring

Break the content into slides. Each slide has a type and a layout variant. Read `reference/best-practices.md` for layout variants per type and visual composition techniques.

### Slide Types

16 types across 5 categories. Each type has multiple layout variants (see best-practices.md). Pick the variant that best fits the content AND creates visual contrast with adjacent slides.

**Openers & Closers**
- **Hook** — the scroll-stopper. Max 12 words. Variants: dominant flush-left, split-tone background, ghost number overlay, full-bleed accent inversion, continuation fragment.
- **CTA** — the closer. Handle + follow prompt. Variants: generous space, summary + CTA split, profile card, reprise/callback, minimal brand.

**Text**
- **Content** — headline + 3-4 points. Variants: numbered card stack, icon grid, left-border accent blocks, single-point emphasis, alternating alignment.
- **Big Statement** — 1-2 sentences, large. The breathing slide. Give it space.
- **Story** — prose paragraphs, no bullets. Variants: cascading text sizes, pull quote sandwich, dialogue format, first-word emphasis, timeline narrative.
- **Quote** — max 2 lines + attribution. Variants: oversized quote mark, full-width left border, framed box, dark inversion panel, scattered typography.

**Data**
- **Big Number** — one number dominates the slide (120-160px). Context sentence below. The number should take 40%+ of visual weight.
- **Stats** — 2-3 numbers in a grid or row. Variant: KPI dashboard cards with delta indicators.
- **Chart Bar** — horizontal bars, 3-5 max. Pure CSS. See html-template.md for pattern.
- **Chart Donut** — conic-gradient circle, 2-4 segments, center callout. See html-template.md.
- **Chart Progress** — 2-4 progress bars with labels and percentages.

**Structured**
- **List** — numbered or icon list, 4-6 items max.
- **Comparison** — before/after, do/don't. Variants: diagonal split, stacked with visual weight difference, strong central divider, paired slides, scorecard table.
- **Icon Grid** — 2x2 or 3x2 grid of icon+label cards.
- **Timeline** — 3-5 vertical nodes connected by line.

**Technical**
- **Code** — syntax-highlighted block, 4-8 lines max. Variants: IDE window with title bar, terminal/CLI output, annotated snippet, diff before/after, code + output split.
- **Split** — half text + half visual (chart, code, or data panel).

### Density Rules

- **Max 40 words per slide** (excluding headlines and labels)
- **Max 6 bullets/items per slide** (prefer 3-4)
- **Headlines: max 8 words** (shorter is better)
- **Code blocks: max 8 lines** (prefer 4-6)
- **Charts: max 5 bars / 4 donut segments / 4 progress bars**
- **If content doesn't fit, split into 2 slides.** Never shrink text.
- **Every slide must be readable in 3-5 seconds** while scrolling

### Visual Rhythm

**No two adjacent slides should use the same type or visual weight.**

After two information-dense slides, insert a breathing slide (Big Statement, Big Number, Quote). Hook and CTA should be the most visually distinct slides. 8+ slide carousels need at least one data visualization.

Patterns that work:
```
HOOK → BIG STATEMENT → CONTENT → SPLIT → CONTENT → BIG NUMBER → QUOTE → CTA
HOOK → STORY → BIG NUMBER → COMPARISON → STORY → BIG STATEMENT → CTA
HOOK → STATS → CONTENT → CHART BAR → STORY → BIG STATEMENT → CTA
```

### Slide Count

- **Short:** 5-7 slides (single insight)
- **Standard:** 8-10 slides (framework, how-to, story)
- **Long:** 12-15 max (data-heavy deep dive)

### Structure Output

Present the breakdown to the user before generating:

```
Here's the slide structure:

1. [HOOK — flush-left dominant] "Your AI agent is lost in your codebase."
2. [BIG NUMBER — hero with context strip] "7" agents, zero context collisions
3. [CONTENT — numbered card stack] The navigation layer, 4 points
4. [CODE — IDE window] agent engine.md structure
5. [SPLIT] Left: how agents coordinate / Right: file tree
6. [CHART BAR] Token usage by agent role
7. [BIG STATEMENT] "The memory problem is unsolved."
8. [CTA — generous space] Follow for more

Visual rhythm: ✓ No adjacent repeats, breathing slides at 2 and 7
Want to change anything?
```

Wait for approval before generating HTML.

---

## Phase 4: HTML Generation

Generate a single HTML file with all slides. Each slide is a 1080x1080 div.

### File Output

```
.claude-design/carousel/
├── [name].html          # The carousel (open in browser to preview)
└── [name].pdf           # Rendered PDF (after Phase 5)
```

### How to Generate

Read these files before generating:
1. **`reference/html-template.md`** — HTML shell, hard constraints, chart CSS patterns
2. **`reference/best-practices.md`** — layout variants and visual composition techniques
3. **`reference/STYLE_PRESETS.md`** — preset decorative CSS (gradients, shapes, textures)
4. **`carousel-brand.md`** — brand colors, fonts, identity

### Generation Approach

There are no predefined CSS layout classes. Generate fresh CSS per slide based on the approved structure and chosen layout variant. Each slide should feel designed, not templated.

1. Start with the HTML shell from html-template.md (brand variables, slide container)
2. For each slide, generate CSS that implements the chosen layout variant from best-practices.md
3. Apply preset decorative elements from reference/STYLE_PRESETS.md (gradients, scan lines, accent shapes)
4. Use visual tricks from best-practices.md (edge bleed, ghost typography, marker highlights, layered depth)
5. Vary the spatial composition across slides. No two slides should have the same layout.
6. Add slide numbers on every slide (top-right, subtle)

### Rules
- No JavaScript. Static HTML/CSS only.
- All fonts via CDN (Google Fonts or Fontshare).
- No external images. All visuals are pure CSS.
- Every slide must have the `slide` class (render script depends on it).
- Check the Anti-Patterns section in `reference/best-practices.md` before finalizing.

After generating, show the file path and ask if the user wants to preview before PDF render.

---

## Phase 5: Render to PDF

Convert HTML to PDF using the bundled render script. Each slide becomes one page.

### Render Command

Use the render script bundled with this skill:

```bash
node <skill-directory>/scripts/render.mjs \
  "$(pwd)/.claude-design/carousel/[name].html" \
  "$(pwd)/.claude-design/carousel/[name].pdf"
```

The script:
1. Opens the HTML in headless Chromium via Playwright
2. Waits 2 seconds for font loading
3. Screenshots each `.slide` element at 1080x1080
4. Combines all screenshots into a single PDF (one slide per page)
5. Cleans up temp files

### After Render

```
PDF rendered: .claude-design/carousel/[name].pdf

[N] slides, 1080x1080 each. Ready to upload to LinkedIn.

Want me to adjust anything or generate a different version?
```

### Fallback (No Playwright)

If automatic rendering fails, offer manual path:

```
Automatic rendering failed. You can still use the carousel:

1. Open .claude-design/carousel/[name].html in your browser
2. Each slide is displayed at 1080x1080
3. Screenshot each slide, or use a browser extension to capture all
4. Combine into a PDF using any PDF tool

To fix automatic rendering:
npm install -g playwright && npx playwright install chromium
```

---

## Phase 6: Iteration

After the first render, the user might want changes:

### Common Adjustments
- "Make the hook punchier"
- "Swap slides 3 and 4"
- "Add a stat slide after the intro"
- "Change the accent color for this one"
- "Too many slides, cut it to 7"
- "Regenerate with a different preset" (one-off override, doesn't change brand config)

For content changes: update the HTML, re-render.
For style overrides: pass a temporary preset, don't modify `carousel-brand.md`.
For brand changes: update `carousel-brand.md` (ask first: "This changes your brand for all future carousels. Continue?")

---

## Commands

Parse `$ARGUMENTS` for routing:

| Input | Action |
|-------|--------|
| *(empty)* | Dependency check → brand check → greet and ask what to create |
| `[topic]` | New carousel, brainstorm content together (Phase 2, Path B) |
| `[content or file path]` | New carousel from existing content (Phase 2, Path A) |
| `setup` or `brand` | Run/re-run brand onboarding (Phase 1) |
| `render [file]` | Re-render existing HTML to PDF (Phase 5) |

---

## Quality Check

Before finalizing, check the Anti-Patterns section in `reference/best-practices.md`.
