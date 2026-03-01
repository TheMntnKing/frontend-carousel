# Carousel Design Best Practices

Load this file during Phase 3 (slide structuring) and Phase 4 (HTML generation). These are the composition techniques and layout variants that separate designed carousels from template carousels.

---

## Core Principles

### Spatial Tension Over Centered Symmetry
Push headlines to top-left or bottom-right. Anchor numbers to one side with context floating opposite. Give the eye somewhere to travel. Centered-everything is the default, and defaults are invisible in a feed.

### Scale Contrast
Pair 160px numbers next to 24px labels. 80px headlines above 20px metadata. A 6:1 size ratio between the biggest and smallest text creates instant hierarchy without any other design elements. The contrast itself is the design.

### Layered Depth
Layer elements: semi-transparent shapes behind headlines, text overlapping colored bars, numbers sitting partially behind content cards. Achievable with z-index, negative margins, and opacity. Flat = forgettable.

### Negative Space as Design Element
Leave 30-40% of the slide as intentional empty space. Whitespace makes the remaining content feel more important. Don't fill available space just because it's there.

### Consistent but Varied
Same colors, fonts, and decorative motifs across all slides. But vary the spatial composition on every slide. Brand stays recognizable, layout stays fresh.

---

## Visual Tricks (CSS-Implementable)

### Edge Bleed
Colored shapes positioned beyond slide boundaries, clipped by overflow:hidden. Creates the illusion of a larger design system. Implementation: absolute-positioned elements with negative margins or positions beyond 0/1080.

### Oversized Ghost Typography
A word or number at 200-400px, 5-15% opacity, positioned behind main content. Creates texture and depth. Implementation: absolute-positioned, high font-size, very low opacity, z-index below content.

### Color-Blocked Sections
Slide divided into 2-3 color zones (e.g., top 30% accent, bottom 70% background). Content sits across the boundary. Implementation: pseudo-element with position absolute covering a portion.

### Marker Highlight Effect
Key words get a background color (accent at 20-30% opacity). Implementation: `<span>` with background-color, padding: 4px 8px, box-decoration-break: clone.

### Pull-to-Next Continuity
Content that visually continues off the right edge, creating a swipe cue. Partial word, arrow, shape cut in half. Implementation: element at right edge, clipped by overflow:hidden.

### Stacked Cards with Offset
Content items as stacked cards with slight shadow or translate offset, implying depth. Implementation: box-shadow: 6px 6px 0 var(--surface) or transform: translateX(4px).

### Strategic Inversion
On one slide per carousel, invert the color scheme entirely. Accent bg + inverted text. The contrast against surrounding slides makes it impossible to scroll past.

### Opacity Layering
Instead of adding colors, use opacity variations: 100% for primary content, 60-70% for secondary, 15-25% for decorative, 5-10% for texture overlays. Keeps palette minimal while creating depth.

---

## Color Usage

**60-30-10 rule per slide:** 60% background, 30% text/surface, 10% accent. Most templates use too much accent (30%+), making nothing feel special. Reserve accent for the ONE element per slide that matters most.

---

## Typography Patterns

**Extreme weight contrast:** 900-weight headlines next to 300-weight body within the same family. The weight difference creates hierarchy without different colors or sizes.

**Monospace for data:** When mixing numbers and text, use monospace for numbers and sans-serif for narrative. The font switch signals "this is data."

**Size as structure:** In minimal styles, font size differences replace borders, cards, and backgrounds. A 160px number next to a 24px label needs no card.

---

## Layout Variants by Slide Type

For each type: multiple spatial compositions Claude can choose from. Pick the variant that best fits the content and creates rhythm contrast with adjacent slides.

### Hook / Opener

**Dominant flush-left:** Headline takes 60-70% of vertical space, left-aligned in upper-left. Eyebrow above. Massive negative space right and bottom. Accent bar (80px wide, 4px tall) below headline. Optional: large semi-transparent shape bleeding off bottom-right.

**Split-tone background:** Slide divided diagonally or horizontally into two color zones. Headline sits at the intersection of the two zones. Small badge/tag in corner ("FRAMEWORK" or "7 SLIDES"). Pseudo-element covers top portion with accent color.

**Ghost number overlay:** Single word or number at 300-400px, 8-12% opacity, center or off-center. Actual headline (48-64px) layered on top. Eyebrow label above.

**Full-bleed accent inversion:** Entire slide background is the accent color. All text inverted. Headline centered or bottom-aligned. Minimal: just hook text, nothing else. Optional noise texture at 3-5% opacity.

**Continuation fragment:** Headline intentionally incomplete, cuts off at right edge. Subtle arrow or "..." at right edge. Next slide completes the thought. Text uses white-space: nowrap, clipped by overflow:hidden.

### Data / Stats

**Hero number with context strip:** One number at 140-160px, upper-left or center. Single context sentence below (28-32px). Thin accent divider. Small source citation below divider.

**KPI dashboard grid:** 2x2 or 3x1 grid of data cards. Each card: small uppercase label, large accent number, delta indicator (arrow + percentage in green/red). Cards separated by 1px borders (gap trick: parent bg shows through).

**Before/after inline:** Two numbers side by side connected by arrow. Left number: line-through, opacity 0.4, muted. Right number: large, accent-colored. Context below. Eyebrow above.

**Vertical progress stack:** 3-4 metrics stacked vertically. Label left, thin progress bar middle, bold percentage right. Grid: 180px 1fr 80px. Progress bars 6-8px tall, accent fill.

**Radial donut with center callout:** Donut chart (conic-gradient) centered. Center hole has key number (56-72px) and one-word label. Legend below with 2-4 items. Circle focal point contrasts with rectilinear slide.

### Content / Teaching

**Numbered card stack:** 3-4 items in surface-bg cards, arranged vertically. Each card: large number (36-48px, accent) on left, point text on right. Optional slight transform offset on even cards. No headline needed, numbers create structure.

**Icon grid (2x2):** Four tiles in grid. Each: CSS icon/emoji (36-40px) at top, bold label (28-32px), one-line description (22-26px, muted). Surface background tiles.

**Left-border accent blocks:** 3-4 blocks stacked, each with thick left border (4-6px accent). Bold key phrase (32-36px) + supporting sentence (24-28px). No headline. First block serves as lead.

**Single point, full emphasis:** One teaching point gets the entire slide. Headline top third. Bold statement (36-40px) centered vertically. Supporting sentence below, muted. Accent underline on the statement.

**Alternating alignment:** 3 points alternating left and right alignment. Each with step number in opposing margin. Different accent treatments per point (dot, underline, highlight). Creates zig-zag reading pattern.

### Quote

**Oversized quote mark:** Massive decorative " at 280px, accent at 15-25% opacity, top-left. Quote text (36-44px, italic) offset below and right, clearing the mark. Attribution right-aligned below.

**Full-width left border:** 8-12px accent bar on entire left edge. Quote left-aligned against it with generous padding-left. Thin rule separating quote from attribution. Optional tag in bottom-right corner.

**Framed box:** Quote inside a 2-3px bordered rectangle centered on slide. 60-80px internal padding. Frame takes 60-70% of slide area. Attribution outside the frame below.

**Dark inversion panel:** 70% panel centered with inverted colors. Quote in contrasting color inside. Attribution outside panel in original colors.

**Scattered typography:** Quote broken across 2-3 lines with varying font sizes (48px, 36px, 44px). Key word in accent color. No quotation marks. Attribution with horizontal rule extending left.

### Comparison

**Diagonal split:** Slide divided diagonally via clip-path. Left/top zone one color, right/bottom another. "Before" items left, "After" items right. Central "vs" badge.

**Stacked with visual weight:** "Before" on top (smaller text, muted, line-through). "After" on bottom (larger text, full color, accent borders, check marks). Weight difference tells the story instantly.

**Strong central divider:** Two columns with 4-6px accent vertical divider (grid-template-columns: 1fr 6px 1fr). Color-coded header badges (red "Don't", green "Do").

**Paired slides:** Two consecutive slides instead of one. First slide: "The Old Way" with muted/red treatment. Second: "The New Way" with accent/green. Same layout, different styling. Full width for each side.

**Scorecard table:** Grid with criteria left column, checkmarks/x-marks in right columns. Alternating row backgrounds. Check marks in accent, x-marks in muted/red.

### Code / Technical

**IDE window:** Mock IDE with title bar (three dots, filename), dark code area below. Syntax highlighting via colored spans. Line numbers in muted left margin. Headline above the window.

**Terminal / CLI:** Full-slide terminal black. Prompt symbol ($ or >) in accent. Command text in text-primary. Output indented in text-secondary. Optional blinking cursor block. Comments in dim italic.

**Annotated snippet:** Code block takes left 60%. Right 40% has 2-3 annotation cards (surface bg, accent left-border) connected to specific lines. Each annotation: 2-3 words explaining the line.

**Diff before/after:** Two code blocks stacked or side by side. Removed lines: red-highlighted bg (rgba(248,81,73,0.15)), red left border, "-" prefix. Added lines: green-highlighted bg (rgba(46,160,67,0.15)), green left border, "+" prefix.

**Code + output split:** Top half: code/command. Bottom half: result/output. Thin divider with "OUTPUT" label between. Different visual treatment per section (lighter bg for output).

### CTA / Closer

**Generous space:** Top 60% empty (just background + preset decorations). Bottom 40%: prompt sentence (28px muted), main CTA (48-56px accent), tagline (24px muted). Center-aligned. justify-content: flex-end.

**Summary + CTA split:** Left/top half: 2-3 line summary of carousel thesis. Right/bottom half: handle + follow prompt. Divider between. Summary in text-secondary, CTA in accent.

**Profile card:** Centered card with profile circle (80-100px, accent border), name, handle, one-line description. Below card: follow prompt. Card floats with shadow or border.

**Reprise/callback:** Mirrors hook slide layout but with CTA content. Same spatial composition, same decorative elements, different text. Creates visual bookend.

**Minimal brand:** Just handle in large display text (56-64px accent), centered. Action word below ("Follow" or "Save this"). Preset decorations carry the visual weight.

### Story / Narrative

**Cascading text sizes:** Three text blocks decreasing: lead (40-44px, bold), body (28-32px, regular), aside (22-24px, italic, opacity 0.6). No headline. The lead IS the headline.

**Pull quote sandwich:** Key sentence "pulled out" large (44-52px) at top in accent. Context paragraph (28px) below. "So what" closer (30px, text-primary) at bottom.

**Dialogue format:** Lines alternate left and right aligned, like chat. Each line: padded, surface bg, rounded corners. Right-aligned lines use accent bg with inverted text. Container: flex-column with gap.

**First-word emphasis:** Single paragraph, but first word of each sentence is larger (36px), accent color, bold. Rest of sentence normal. Creates scanability within prose.

**Timeline narrative:** 3-4 temporal beats with time markers ("2019", "Day 1", "Now") on left in small uppercase. Narrative text to right. Thin vertical line connecting markers.

---

## Visual Rhythm Rules

### Pacing Principle
Think of a carousel like a song. Verses = content/teaching slides. Chorus = big statement or pull quote (reinforces theme). Bridge = data or comparison slide (changes energy).

### Rhythm Patterns

**Teach:** HOOK → BIG STATEMENT → CONTENT → SPLIT → CONTENT → BIG NUMBER → CONTENT → QUOTE → CTA

**Story:** HOOK → STORY → BIG NUMBER → STORY → COMPARISON → BIG STATEMENT → CTA

**Data:** HOOK → STATS → CONTENT → CHART BAR → STORY → BIG STATEMENT → CTA

**Contrarian:** HOOK → BIG STATEMENT → CONTENT → CODE/SPLIT → CONTENT → QUOTE → BIG STATEMENT → CTA

### Adjacency Rules
- Never two slides of the same type adjacent
- Never two text-heavy types adjacent (Content next to Story, Story next to Quote)
- After two information-dense slides, insert a breathing slide (Big Statement, Big Number, Quote)
- Hook and CTA should be the most visually distinct slides
- 8+ slide carousels need at least one data visualization

---

## Anti-Patterns

Check against this list before finalizing.

**Design:**
- No generic AI aesthetics. See STYLE_PRESETS.md "DO NOT USE" section.
- No decorative images. Typography and color over stock photos.
- No tiny text. If tempted to shrink to fit, split into another slide.
- No walls of text. Max 40 words per slide.

**Content:**
- No filler slides. "Let's dive in" is not a slide.
- No recap slides. The carousel IS the recap.
- No "follow for part 2" clickbait. Deliver full value. CTA is earned.

**Technical:**
- No inline images from URLs. Fonts from CDN are fine.
- No JavaScript. CSS only for all visual effects.
- No responsive design. Fixed 1080x1080. No media queries.
