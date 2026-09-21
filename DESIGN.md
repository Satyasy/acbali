---
name: Jawara Teknik Servis AC Bali
description: Precision Technical & Hospitality HVAC Service System
colors:
  primary: "oklch(0.18 0.04 250)"
  primary-light: "oklch(0.24 0.05 250)"
  primary-dark: "oklch(0.12 0.03 250)"
  accent: "oklch(0.72 0.14 220)"
  accent-hover: "oklch(0.65 0.16 225)"
  accent-light: "oklch(0.94 0.03 220)"
  accent-dark: "oklch(0.48 0.15 230)"
  whatsapp: "oklch(0.68 0.18 145)"
  whatsapp-hover: "oklch(0.60 0.20 145)"
  neutral-bg: "oklch(0.98 0.005 240)"
  neutral-surface: "oklch(1.0 0 0)"
  neutral-card: "oklch(0.97 0.008 240)"
  neutral-border: "oklch(0.88 0.01 240)"
  text-primary: "oklch(0.14 0.03 250)"
  text-secondary: "oklch(0.42 0.02 245)"
  text-muted: "oklch(0.55 0.015 245)"
  text-inverse: "oklch(0.99 0 0)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  card-surface:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Jawara Teknik Servis AC Bali

## Overview

**Creative North Star: "Precision HVAC Blueprint & Architectural Clarity"**

Jawara Teknik combines industrial reliability with modern architectural hospitality. The design language avoids cheap AI-generated novelty, excessive cartoonish badges, and muddy gradients in favor of structural gridlines, crystal-clear typographic hierarchy, and tactile, high-contrast surfaces. It conveys verified authority, instant responsiveness, and surgical technical competence.

Every surface is engineered to inspire trust in under 3 seconds: from a panicked resident facing a water leak to a five-star Canggu luxury villa manager needing emergency repairs before guest check-in. Visual clutter is stripped away so that price transparency, guaranteed response time (within 60 minutes), and one-tap WhatsApp dispatch lead the eye.

**Key Characteristics:**
- **Architectural Blueprint Geometry**: Delicate structural gridlines and hairline borders (`1px`) replace blurry, generic drop shadows.
- **Extreme Contrast & Legibility**: Pure, sharp dark text on light surfaces adhering strictly to WCAG 2.1 Level AAA.
- **Tactile Micro-States**: Deliberate, crisp hover shifts and subtle frosted refraction rather than sluggish, heavy animations.
- **Data Density Without Clutter**: High-density technical pricing tables and transparent diagnostic breakdowns that respect the user's intelligence.

## Colors

The palette is rooted in cooling technical psychology: deep nautical navy for engineering reliability, crisp ice cyan for thermal comfort and cleanliness, and vivid emerald for instant WhatsApp dispatch.

### Primary
- **Deep Technical Navy** (`oklch(0.18 0.04 250)`): The foundational anchor color. Used on navigation, primary headers, structural framing, and high-emphasis CTA buttons.
- **Midnight Navy Surface** (`oklch(0.12 0.03 250)`): Used for dark-mode architectural cards (e.g. B2B villa hospitality card) and high-contrast footers.

### Secondary
- **Crisp Ice Blue** (`oklch(0.72 0.14 220)`): The thermal cooling accent. Highlights badges, verified icons, price highlights, and focus rings.
- **Cool Ice Light** (`oklch(0.94 0.03 220)`): Tinted pill backgrounds, active category tabs, and subtle border highlights.

### Tertiary
- **WhatsApp Dispatch Emerald** (`oklch(0.68 0.18 145)`): Dedicated exclusively to direct WhatsApp booking actions, live technician status pulses, and verified checkmarks. Never used for decorative body text.

### Neutral
- **Pure White Canvas** (`oklch(1.0 0 0)`): Primary card backgrounds and clean inspection areas.
- **Architectural Slate Paper** (`oklch(0.98 0.005 240)`): Page body background, preventing blinding glare while keeping optimal contrast.
- **Hairline Border Gray** (`oklch(0.88 0.01 240)`): Crisp division lines for cards, tables, and step sequences.
- **Deep Slate Typography** (`oklch(0.14 0.03 250)`): Primary text color for all headings and body copy (contrast ratio > 12:1 against light canvas).

### Named Rules
**The Rarity of Emerald Rule.** The emerald green accent is strictly reserved for live WhatsApp actions, real-time availability badges, and confirmed guarantees. It never appears on arbitrary text or decorative dividers.

**The Contrast Floor Rule.** No text element may ever drop below a 7:1 contrast ratio against its direct background on mobile or desktop. Faded low-contrast gray text is strictly forbidden.

## Typography

**Display & Body Font:** `Plus Jakarta Sans` (with system font fallbacks `system-ui, -apple-system, sans-serif`)
**Tabular Figures:** `font-feature-settings: 'tnum'` enabled for all numerical prices, response timers, and technical tariffs.

**Character:** Technical, crisp, and authoritative with generous optical counters and calibrated x-height for instantaneous mobile reading in bright outdoor tropical light.

### Hierarchy
- **Display** (ExtraBold 800, `clamp(2rem, 5vw, 2.75rem)`, `line-height: 1.15`, `letter-spacing: -0.025em`): Hero headline and primary value propositions.
- **Headline** (ExtraBold 800, `clamp(1.5rem, 3.5vw, 2rem)`, `line-height: 1.2`, `letter-spacing: -0.02em`): Section headings.
- **Title** (Bold 700, `1.125rem` (18px), `line-height: 1.35`, `letter-spacing: -0.01em`): Card titles, service package names, and accordion questions.
- **Body** (Regular 400 & Medium 500, `0.9375rem` (15px), `line-height: 1.6`, max-width `68ch`): Explanatory copy and technical service breakdowns.
- **Label / Pill** (SemiBold 600, `0.75rem` (12px), `letter-spacing: 0.03em`, uppercase or title case): Status badges, warranty labels, and category pills.

### Named Rules
**The Tabular Pricing Rule.** All numeric pricing values (e.g. `Rp 125.000`, `Rp 150.000`) must utilize tabular numbers (`font-variant-numeric: tabular-nums`) to maintain strict vertical alignment across columns.

## Layout

The spatial model employs an engineered **8-point modular grid scale** (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).

- **Max Container Width**: `1280px` (`max-w-7xl`) centered with responsive gutters: `16px` (`px-4`) on mobile, `24px` (`px-6`) on tablet, and `32px` (`px-8`) on desktop.
- **Section Vertical Rhythm**: `py-16` (64px) on mobile and `py-24` (96px) on desktop.
- **Card Grids**: 3-column asymmetric layout on desktop (`lg:grid-cols-3`), collapsing cleanly to 2 columns on tablet (`md:grid-cols-2`) and 1 column on mobile.

## Elevation & Depth

Jawara Teknik avoids heavy, blurry drop shadows (a hallmark of AI slop). Depth is achieved through **tonal elevation and hairline structural borders**.

### Shadow Vocabulary
- **Rest Surface** (`box-shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.05)`): Subtle anchoring for cards on light backgrounds.
- **Interactive Lift** (`box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`): Applied strictly on card hover to signify interactivity.
- **Frosted Liquid Glass** (`backdrop-filter: blur(16px) saturate(180%)`, border `1px solid rgba(255, 255, 255, 0.2)`): Used exclusively on the sticky navigation bar and floating dispatch badges.

### Named Rules
**The Hairline Boundary Rule.** Card containers must rely primarily on a `1px solid oklch(0.88 0.01 240)` boundary rather than a diffuse dark shadow to define their boundary.

## Shapes

- **Micro Radii (`sm: 6px`)**: Dropdown inputs, table cells, and status badges.
- **Card Radii (`md: 12px` / `lg: 16px`)**: Service cards, accordion items, and container panels.
- **Action Radii (`full: 9999px`)**: Interactive filter pills, language switcher toggles, and WhatsApp CTA buttons.

## Components

### Buttons
- **Primary Technical CTA**: Solid Deep Navy (`bg-navy-950`), white text, `px-6 py-3.5`, `rounded-xl`, subtle border `1px solid rgba(255,255,255,0.1)`.
- **WhatsApp Dispatch CTA**: High-visibility Emerald (`oklch(0.68 0.18 145)`), dark slate text (`oklch(0.14 0.03 250)`), `rounded-full`, with live pulse indicator.
- **Secondary Ghost**: Hairline border (`1px solid border-slate-300`), transparent background, slate text, crisp hover fill.

### Service & Pricing Cards
- **Structure**: White card (`rounded-2xl`), `p-6 sm:p-7`, hairline border, clear separation between service scope and price.
- **Hover State**: Subtle `-translate-y-1` lift with smooth `200ms ease-out` transition.

### Form Inputs & Selects
- **Resting**: Light slate tint background (`bg-slate-50`), `1px` neutral border, `px-3.5 py-2.5`, `rounded-lg`, legible dark text.
- **Focus**: Pure white fill, `ring-2` with Ice Blue accent (`ring-iceblue-500`), zero outline blur.

## Do's and Don'ts

### Do:
- **Do** maintain strict minimum contrast ratio of 7:1 for all readable text.
- **Do** use tabular numbers (`tnum`) for all currency amounts, times, and horsepower ratings.
- **Do** provide explicit bilingual keys (`data-i18n`) on every newly authored visual string.
- **Do** respect user preferences for reduced motion on all scroll reveals and modal transitions.

### Don't:
- **Don't** use low-contrast light gray text (`text-slate-400` or `#94A3B8`) for body copy or card descriptions.
- **Don't** use giant, arbitrary border radii (`rounded-3xl` or `rounded-[40px]`) on rectangular content cards.
- **Don't** apply muddy multi-color linear gradients across entire card backgrounds.
- **Don't** invent fake testimonials or fabricate unverified technical accreditations.
