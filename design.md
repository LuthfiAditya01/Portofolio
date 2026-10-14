# NEO//PLAY — Portfolio Design System

> **Purpose:** Single source of truth for the visual language, interaction patterns, and implementation rules of a game-inspired developer portfolio.
>
> **Art direction:** Persona 5's graphic confidence × Zenless Zone Zero's urban energy × Neverness to Everness' futuristic interface sensibility.
>
> **Core rule:** Borrow design principles, not recognizable game assets. The final portfolio must feel like an original developer identity—not a fan site.

---

## 1. Product Intent

### Experience goals

The portfolio should feel:

- **Expressive:** bold typography, confident composition, and a recognizable accent color.
- **Interactive:** purposeful transitions and responsive feedback, without making navigation harder.
- **Technical:** clear project details, stack labels, role, and measurable outcomes.
- **Professional:** recruiters can find work, experience, and contact information quickly.
- **Original:** game-inspired art direction without copying proprietary logos, UI screens, icons, characters, or assets.

### Primary audience

- Recruiters and hiring managers
- Engineering leads and potential collaborators
- Developers reviewing project quality

### Content priority

1. Who I am and what I build
2. Selected projects and their impact
3. Technical skills and experience
4. About / background
5. Contact and external profiles

### Design principle

**Style attracts attention; clarity earns trust.** Every expressive visual choice must preserve readability, usability, and fast access to portfolio content.

---

## 2. Art Direction

### Working concept: NEO//PLAY

An editorial, urban-futuristic interface with game-menu energy. The website should feel like a personal digital system: part graphic poster, part mission select screen, part clean technical dashboard.

| Reference | Borrow | Do not copy |
|---|---|---|
| Persona 5 | High contrast, oversized type, asymmetry, sharp graphic shapes, energetic transitions | Exact menu layouts, logos, character art, signature assets, or screenshot compositions |
| Zenless Zone Zero | Urban personality, layered cards, playful labels, sticker-like accents, expressive motion | Official UI components, characters, logos, or recognizable game assets |
| Neverness to Everness | Futuristic panels, structured metadata, polished dark surfaces, modern system feel | Exact HUDs, icons, maps, character screens, or proprietary assets |

### Visual balance

- 60% functional, readable layout
- 25% editorial/graphic expression
- 15% decorative effects and motion

These are directional proportions, not strict pixel measurements.

### Signature motifs

Use a small, consistent set of visual motifs:

- `//` as a recurring divider or identity mark
- Numbered section labels, e.g. `01 / SELECTED WORK`
- Compact mono metadata such as `STATUS: AVAILABLE`
- Diagonal cuts or slash shapes used sparingly
- Thin technical rules and small status indicators
- Oversized display type for high-value statements

Do not decorate every component. A motif is only distinctive if it has room to breathe.

---

## 3. Color System

### Core palette

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#171719` | Main dark background and primary dark surface |
| `--color-panel` | `#242429` | Elevated dark panels |
| `--color-panel-raised` | `#2D2D34` | Hover/elevated panels on dark theme |
| `--color-paper` | `#F4F1E9` | Light surface and high-contrast content area |
| `--color-white` | `#FFFFFF` | Text on dark surfaces and clean surfaces |
| `--color-signal` | `#FF3B45` | Primary brand accent, active states, key emphasis |
| `--color-acid` | `#C8F169` | Secondary accent for small highlights and status |
| `--color-muted` | `#85858D` | Secondary text and subdued metadata |
| `--color-line-dark` | `#3B3B42` | Borders and dividers on dark surfaces |
| `--color-line-light` | `#D8D4CB` | Borders and dividers on light surfaces |
| `--color-success` | `#7ED6A5` | Success state only |
| `--color-warning` | `#FFC66D` | Warning state only |
| `--color-danger` | `#FF6B75` | Error state only |

### Usage rules

- `Ink` and `Paper` form the structural base.
- `Signal Red` is the primary brand accent. Use it for active navigation, key words, important markers, and selected actions.
- `Acid Lime` is a secondary accent. Use it sparingly for status indicators or one small highlight per visual group.
- Do not place red and lime on every card at once.
- Avoid long paragraphs in accent colors.
- Never communicate status through color alone; pair it with a label or icon.
- Verify text contrast for the actual foreground/background pair before release.

### Suggested theme

Default to a **dark-first hybrid system**:

- Hero: dark background with red graphic emphasis
- Project showcase: alternating dark and paper surfaces when it helps separate content
- Skills / metadata: dark panels with restrained lime indicators
- Contact: high-contrast closing section with a strong primary CTA

Do not alternate themes arbitrarily. Each theme transition should have a content or hierarchy reason.

### CSS variables

```css
:root {
  color-scheme: dark;

  --color-ink: #171719;
  --color-panel: #242429;
  --color-panel-raised: #2d2d34;
  --color-paper: #f4f1e9;
  --color-white: #ffffff;
  --color-signal: #ff3b45;
  --color-acid: #c8f169;
  --color-muted: #85858d;
  --color-line-dark: #3b3b42;
  --color-line-light: #d8d4cb;

  --text-primary: var(--color-paper);
  --text-secondary: #c1bec0;
  --surface-page: var(--color-ink);
  --surface-panel: var(--color-panel);
  --border-default: var(--color-line-dark);
}

[data-theme="light"] {
  color-scheme: light;

  --text-primary: var(--color-ink);
  --text-secondary: #57575e;
  --surface-page: var(--color-paper);
  --surface-panel: #ffffff;
  --border-default: var(--color-line-light);
}
```

---

## 4. Typography

### Font roles

Recommended starting stack:

- **Display:** Space Grotesk, with a system sans-serif fallback
- **Body/UI:** Inter, with a system sans-serif fallback
- **Technical metadata:** JetBrains Mono, with a monospace fallback

Use licensed or properly hosted font files. If custom fonts cannot load, the layout must remain usable.

### Type scale

| Token | Desktop starting size | Usage |
|---|---:|---|
| `--text-display` | `clamp(3.5rem, 10vw, 8rem)` | Hero headline |
| `--text-h1` | `clamp(2.75rem, 6vw, 5.5rem)` | Main page title |
| `--text-h2` | `clamp(2rem, 4vw, 3.5rem)` | Major section heading |
| `--text-h3` | `1.5rem–2rem` | Card / subsection heading |
| `--text-body-lg` | `1.125rem` | Intro / lead paragraph |
| `--text-body` | `1rem` | Body copy |
| `--text-small` | `0.875rem` | Secondary information |
| `--text-label` | `0.75rem–0.8125rem` | Section labels and metadata |

### Typography rules

- Use uppercase display type selectively, not for every paragraph.
- Keep body copy at a comfortable reading size and line height (`1.5–1.75`).
- Use mono type for short labels, IDs, stack names, dates, and status—not long-form text.
- Use line breaks intentionally in the hero; do not force awkward wrapping on small screens.
- Limit each section to one dominant typographic moment.
- Use `font-weight` and size for hierarchy before adding extra colors or outlines.

---

## 5. Layout and Spacing

### Grid

- Main content max width: `1200px–1360px`
- Wide-screen page gutters: `clamp(24px, 5vw, 80px)`
- Tablet gutters: `24px–32px`
- Mobile gutters: `20px–24px`
- Desktop project grid: 12-column base grid or a simple 2-column composition
- Mobile project grid: one column
- Use asymmetry for emphasis, but keep text alignment and reading order predictable.

### Spacing scale

Use a consistent 4px base unit.

| Token | Value |
|---|---:|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |

Use larger spacing between sections than between related components. Avoid applying the full spacing scale inconsistently across individual components.

### Shape language

- Editorial panels: square or subtly rounded corners (`0–8px`)
- Interactive cards: `8–16px` radius where it supports the layout
- Pills: reserve for tags, status labels, and compact controls
- Borders: thin and purposeful, typically `1px`
- Diagonal cuts: use on a few key visual elements, not on every button and card
- Shadows: restrained; prefer contrast, borders, and surface shifts over generic floating-card shadows

---

## 6. Navigation

### Desktop

- Compact top navigation with a clear wordmark or monogram
- Links: `WORK`, `ABOUT`, `STACK`, `CONTACT` (adapt labels to actual content)
- Distinct active/hover state using underline, marker, or color shift
- Primary contact action may be visually emphasized, but should not overpower project navigation

### Mobile

- Use a compact menu button with a clear accessible label
- Menu opens and closes predictably, supports keyboard focus, and closes after selecting a destination
- Avoid tiny click targets; aim for at least `44 × 44px`
- Keep navigation available without covering important content unnecessarily

### Navigation behavior

- Active section state must be clear without relying on color alone.
- Use native anchor links for page sections when possible.
- If the page uses smooth scrolling, respect `prefers-reduced-motion`.
- Do not hijack normal browser scrolling or keyboard navigation.

---

## 7. Page Architecture

Recommended single-page structure:

### `00 / INTRO`

Purpose: establish identity and role quickly.

Content:
- Name and concise role statement
- One-sentence value proposition
- Primary CTA: `VIEW PROJECTS`
- Secondary CTA: `CONTACT`
- Optional availability label if accurate
- One original graphic or visual motif

Visual direction:
- Dark base, oversized display type, one dominant red accent
- Strong left/right composition on desktop; clear stacked layout on mobile
- Avoid a giant decorative animation that pushes the actual introduction below the fold

### `01 / SELECTED WORK`

Purpose: show evidence of ability.

Each project card should include:
- Project name
- One-line problem / purpose
- Role and contribution
- Tech stack
- Outcome or measurable result, if available
- Links to live demo, repository, or case study when appropriate

Visual direction:
- Strong thumbnail or project visual
- Alternating card composition is allowed, but card content order remains consistent
- Use numbered labels such as `PROJECT_01`
- Do not invent metrics. If there is no measured outcome, describe the implemented feature or technical challenge honestly.

### `02 / CAPABILITIES`

Purpose: show skills without fake precision.

Group skills by capability, for example:
- Frontend / Web
- Mobile
- Backend / API
- Data / Tooling

Use text labels, technology icons from a consistent icon set, or compact chips. Avoid arbitrary percentages like “React 95%” unless there is a defensible, meaningful measurement.

### `03 / EXPERIENCE`

Purpose: make professional and organizational history scannable.

Each entry:
- Role / organization
- Dates
- One-sentence context
- Contributions and outcomes
- Relevant technologies where useful

Use a mission-log or timeline visual language, but ensure dates and details remain easy to scan.

### `04 / ABOUT`

Purpose: add context beyond a list of tools.

Include:
- Short background
- What kinds of problems you like solving
- Current focus or learning goals, if relevant
- Optional personal interest that supports the portfolio's character

Keep it concise and authentic.

### `05 / CONTACT`

Purpose: make the next action obvious.

Include:
- Direct invitation to connect
- Email link
- Relevant professional profiles
- Optional résumé link
- Clear hover and focus states

Do not hide contact information behind a complex interaction.

---

## 8. Component Rules

### Buttons

Variants:
- **Primary:** signal-red surface with high-contrast text
- **Secondary:** transparent or panel surface with visible border
- **Text / link:** minimal chrome with an underline or directional marker

Rules:
- Minimum target size: `44 × 44px` where practical
- Include hover, active, focus-visible, and disabled states as applicable
- Use action-oriented labels such as `VIEW PROJECTS` rather than vague `CLICK HERE`
- Do not use motion as the only feedback

### Project cards

Required hierarchy:
1. Thumbnail / visual
2. Project title
3. Purpose or problem solved
4. Role and stack
5. Outcome / links

Rules:
- The whole card may be clickable only if it has one clear destination.
- If the card contains multiple links, do not wrap everything in one clickable anchor.
- Hover effects must not be required to reveal essential information.
- Provide a visible keyboard-focus state.

### Tags / chips

- Use neutral panel colors by default.
- Reserve accent chips for primary technologies or notable metadata.
- Keep tag naming consistent (`React Native`, not a mix of `RN`, `ReactNative`, and `react-native`).
- Wrap naturally on narrow screens.

### Status indicators

- Pair a colored dot with text, e.g. `AVAILABLE FOR OPPORTUNITIES`.
- Use lime for a positive, non-critical status only.
- Do not show availability unless it is true and current.

### Dividers and labels

- Use `01 / SECTION NAME`, small mono labels, or thin rules as recurring motifs.
- Keep label sizes legible and do not use low contrast just to achieve a technical aesthetic.

---

## 9. Motion Language

Motion should communicate hierarchy, state, and continuity—not exist merely for spectacle.

### Motion principles

- Fast feedback for small interactions
- Slightly slower transitions for section-level entrances
- Consistent easing
- No motion that blocks reading or delays access to links
- No mandatory sound
- Avoid looping motion unless it communicates a meaningful live state

### Suggested timings

| Token | Duration | Use |
|---|---:|---|
| `--motion-fast` | `120ms` | Button / chip feedback |
| `--motion-base` | `220ms` | Hover and small component transitions |
| `--motion-reveal` | `420ms` | Content entrance |
| `--motion-scene` | `650ms` | One-off section or mask transition |

Suggested easing:
- UI feedback: `cubic-bezier(0.2, 0, 0, 1)`
- Expressive entrance: `cubic-bezier(0.16, 1, 0.3, 1)`

### Allowed signature effects

- Small stagger on heading and supporting copy
- Directional reveal or mask on a few major transitions
- Slight thumbnail scale on hover
- Underline or active marker that moves between navigation items
- Very subtle parallax on decorative shapes only

### Motion restrictions

- Do not animate every card independently on every scroll.
- Avoid long intro sequences before the portfolio becomes usable.
- Never make essential text appear only after a hover that touch devices cannot trigger.
- Do not use large, rapid flashes or aggressive zooming.
- Provide a reduced-motion mode.

Example CSS:

```css
.interactive {
  transition:
    transform var(--motion-base) cubic-bezier(0.2, 0, 0, 1),
    background-color var(--motion-base) ease,
    border-color var(--motion-base) ease;
}

.interactive:hover {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

If using an animation library, ensure the reduced-motion preference is respected there too.

---

## 10. Responsive Behavior

Design mobile deliberately; do not just shrink the desktop composition.

### Breakpoint starting points

| Name | Width | Behavior |
|---|---:|---|
| Mobile | `< 640px` | Single column, reduced decoration, compact nav |
| Tablet | `640px–1023px` | Flexible grid, fewer overlapping elements |
| Desktop | `≥ 1024px` | Full editorial grid, larger typography, richer motion |

These are starting points. Let the content determine the final breakpoint values.

### Mobile rules

- Stack asymmetrical layouts into a clear reading order.
- Reduce oversized typography with `clamp()`.
- Keep body text comfortably readable.
- Avoid horizontal overflow from diagonal decorations, oversized words, or fixed-width cards.
- Disable or simplify parallax on touch devices where it adds little value.
- Make all essential actions visible without hover.
- Test at narrow widths, not just common device presets.

### Responsive QA

Test at least:
- `320px` wide
- `375px` wide
- `768px` wide
- `1024px` wide
- `1440px` wide

Check navigation, heading wraps, card overflow, image crops, focus order, and CTA visibility.

---

## 11. Accessibility and Usability

- Meet WCAG AA contrast targets for text and essential UI where possible and verify the final combinations.
- Use semantic landmarks and a logical heading hierarchy.
- All interactive elements must be keyboard accessible.
- Provide a visible `:focus-visible` state.
- Give meaningful images descriptive alt text; use empty alt text for purely decorative images.
- Use accessible names for icon-only controls.
- Do not communicate state through color alone.
- Respect reduced-motion preferences.
- Avoid flashing effects and unnecessary auto-playing media.
- Ensure text remains usable at 200% zoom.
- Do not sacrifice readability for visual effects.

---

## 12. Technical Implementation Guidance

Framework and libraries are implementation choices, not part of the visual identity. Adapt this section to the existing codebase before adding dependencies.

### Suggested approach

- Use reusable components for navigation, buttons, tags, project cards, section labels, and metadata.
- Define design tokens as CSS custom properties or the project's existing token system.
- Prefer CSS transitions for simple hover/focus feedback.
- Use an animation library only when sequencing or layout animation justifies it.
- Use a consistent icon library rather than mixing unrelated icon styles.
- Optimize images and provide responsive dimensions.
- Avoid loading large animation or media bundles before the main content.
- Preserve semantic HTML and native link behavior.

### Suggested component inventory

```text
App
├── SiteNavigation
├── HeroSection
│   ├── SectionLabel
│   ├── AvailabilityBadge
│   └── Button
├── ProjectsSection
│   └── ProjectCard
├── CapabilitiesSection
│   └── TechnologyTag
├── ExperienceSection
│   └── ExperienceEntry
├── AboutSection
└── ContactSection
```

This is a suggested structure, not a requirement to force the existing codebase into a new architecture.

### Suggested token organization

```text
styles/
  tokens.css       # Colors, type, spacing, motion, radii
  global.css       # Reset, body defaults, selection, focus
  utilities.css    # Small reusable layout utilities (optional)
```

Keep component-specific styling close to each component if that matches the project's conventions.

---

## 13. Content and Asset Rules

- Use original project screenshots, product imagery, and personal visuals where possible.
- Do not use copyrighted game screenshots, logos, characters, or UI assets as if they were portfolio assets.
- Do not imply affiliation with Atlus, HoYoverse, or NTE's publisher/developer.
- Use the games as private visual references; make the final interface recognizably original.
- Use real project names, actual responsibilities, and verifiable outcomes.
- Use real links only; avoid dead buttons or placeholder links in production.
- Do not add sound effects by default. If sound is ever added, it must be optional and muted by default.

---

## 14. Anti-Patterns

Avoid these even if they look visually impressive in a mockup:

- Every section using a different accent color
- Excessive skew, rotation, and diagonal clipping that harms readability
- Tiny low-contrast metadata
- Fake skill percentages
- Animations that delay navigation or content access
- Hover-only interactions
- Overloaded project cards with every detail visible at once
- Decorative scanlines, noise, and glow applied to every surface
- Random rounded cards mixed with random sharp cards without a component rule
- Unverified performance claims or invented project metrics
- Copying a recognizable game screen too closely

---

## 15. Definition of Done

The design is ready for release when:

- [ ] The page has a clear visual hierarchy on desktop and mobile.
- [ ] Color, typography, spacing, and component states use the defined tokens consistently.
- [ ] Each section has a clear purpose and contributes to the portfolio story.
- [ ] Projects communicate problem, contribution, stack, and outcome honestly.
- [ ] Navigation and all actions work with keyboard and touch.
- [ ] Hover, active, focus, and disabled states are defined where applicable.
- [ ] Reduced-motion preferences are respected.
- [ ] Contrast and text scaling have been checked.
- [ ] No essential content depends on animation or hover.
- [ ] Images are optimized and layouts do not overflow at tested widths.
- [ ] No dead links, placeholder actions, or fabricated metrics remain.
- [ ] The final result feels inspired by the references but has its own identity.

---

## 16. Decisions to Confirm Before Final Polish

This document defines the starting system. Confirm these project-specific details before implementation:

- [ ] Final art-direction balance: Persona 5 / ZZZ / NTE
- [ ] Dark-first hybrid theme vs. a single theme
- [ ] Single-page vs. multi-page information architecture
- [ ] Desired motion intensity
- [ ] Actual framework, styling approach, and animation dependencies
- [ ] Final project content, thumbnails, links, and résumé
- [ ] Whether a light-theme switch is necessary or whether alternating light/dark sections are enough

**North star:** A recruiter should understand who you are, what you can build, and how to contact you within seconds—then discover the personality of the design as they explore.
