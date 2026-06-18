# Design System — SingleInterface × Beta · Proposal Deck
> Trích xuất từ `beta.html` v3.6 · Deck framework: `deck-stage` web component · 16:9 · 1920×1080px

---

## 1. STAGE & VIEWPORT

```css
/* Web component wrapper — không chỉnh sửa */
deck-stage {
  width: 1920px; height: 1080px;    /* intrinsic */
  display: block;
  background: #05101f;              /* neutral dark between slides */
}

section {
  width: 1920px; height: 1080px;
  position: relative;
  overflow: hidden;
  background: var(--paper);         /* light default */
  box-sizing: border-box;
}

section.dark {
  background: radial-gradient(
    120% 120% at 80% -10%,
    var(--navy-700) 0%,
    var(--navy-900) 60%
  );
}
```

---

## 2. CSS CUSTOM PROPERTIES (Design Tokens)

```css
:root {
  /* Navy scale */
  --navy-900: #081a31;
  --navy-800: #0e2949;
  --navy-700: #143a63;
  --navy-600: #1c4b7d;

  /* Blue */
  --blue:     #2b6cb0;
  --blue-300: #7fb0e0;
  --blue-100: #d6e6f6;

  /* Amber */
  --amber:    #f6ad55;
  --amber-700:#c97e2c;

  /* Neutral backgrounds */
  --paper:    #f4f7fb;   /* slide bg light */
  --paper-2:  #eaf0f8;   /* card tinted bg */
  --card:     #ffffff;

  /* Ink (text) */
  --ink:      #0d2138;   /* h1, bold */
  --ink-2:    #3c5168;   /* body text */
  --ink-3:    #6b7e93;   /* labels, meta, sources */

  /* Borders */
  --line:     #dde6f0;   /* card border light */
  --line-dark:rgba(255,255,255,.14); /* borders on dark bg */

  /* Semantic */
  --good:     #2f8f6b;   /* success / green */
  --bad:      #c0492f;   /* danger / red */
  --star:     #f0a92b;   /* star fill */

  /* Spacing */
  --pad-x:    96px;      /* horizontal slide padding */
  --pad-y:    74px;      /* vertical slide padding */
  --maxw:     1728px;    /* max content width */
}
```

---

## 3. TYPOGRAPHY

### Fonts
```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

body {
  font-family: 'Be Vietnam Pro', sans-serif;
  color: var(--ink-2);
}
```

| Family | Use case | Weight |
|--------|----------|--------|
| **Be Vietnam Pro** | Body text, headings, cards | 400/500/600/700/800 |
| **IBM Plex Mono** | Kicker labels, badges, meta, code-like | 400/500/600/700 |

### Heading Scale

```css
.h { line-height: 1.1; letter-spacing: -.01em; color: var(--ink); font-weight: 800; }

.h.h-xl { font-size: 88px;  max-width: 1500px; } /* Slide 01 only */
.h.h-lg { font-size: 72px;  max-width: 1400px; }
.h.h-md { font-size: 56px;  max-width: 1300px; } /* Slides 02, 09, 12, 18 */
.h.h-sm { font-size: 44px;  max-width: 1300px; } /* Most slides */
```

Light/dark variants:
```css
section.dark .h { color: #ffffff; }
section.dark .sub { color: var(--blue-100); }
```

### Accent / Highlight

```css
.hl { background: var(--amber); border-radius: 6px; padding: 0 8px; color: var(--navy-900); }
.accent { color: var(--amber); } /* text highlight in dark slides */
```

### Kicker (IBM Plex Mono label above headline)

```css
.kick {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px; font-weight: 600;
  letter-spacing: .08em; text-transform: uppercase;
  color: var(--ink-3);
}
.kick-num { /* slide counter "NN / 18" */
  font-family: 'IBM Plex Mono', monospace;
  font-size: 17px; color: var(--ink-3);
}

section.dark .kick     { color: var(--blue-300); }
section.dark .kick-num { color: var(--blue-300); }
```

### Wordmark `.wm`

```css
.wm { font-weight: 800; letter-spacing: -.02em; }
.wm .x { color: var(--amber); font-weight: 400; margin: 0 3px; }
```

---

## 4. SPACING & LAYOUT SYSTEM

### Slide Layout Primitives

```css
/* Full-bleed with padding — used on every slide */
.slide-pad {
  padding: var(--pad-y) var(--pad-x);
  height: 100%;
  display: flex; flex-direction: column;
}

/* Centered content area */
.frame {
  padding: var(--pad-y) var(--pad-x);
  height: 100%;
  display: flex; flex-direction: column;
}
.frame.center {
  align-items: flex-start; justify-content: center;
}

/* Mid-section: takes remaining space, displays content */
.midfill {
  flex: 1; display: flex; flex-direction: column;
  justify-content: center; gap: 28px;
}
```

### Split (2-column)

```css
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* default 50/50 */
  gap: 40px;
  align-items: start;
}
.split.tilt {
  grid-template-columns: 1.05fr 0.95fr; /* slight left-bias */
}
/* Override inline: style="grid-template-columns: .8fr 1fr" etc. */
```

### Flow (horizontal steps with arrows)

```css
.flow {
  display: flex; align-items: stretch; gap: 0;
}
.step {
  flex: 1;
  border: 1.5px solid var(--line);
  border-radius: 14px;
  background: var(--card);
  padding: 22px 24px;
}
.step.bad {
  border-color: rgba(192,73,47,.3);
  background: rgba(192,73,47,.04);
}
.step.good {
  border-color: rgba(47,143,107,.3);
  background: rgba(47,143,107,.04);
}
.arr { /* arrow between steps */
  width: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  color: var(--ink-3);
}
```

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* default, override inline */
  gap: 20px;
}
/* Common overrides */
/* 4 cols: style="grid-template-columns:repeat(4,1fr)" */
/* last item span 2: style="grid-column:span 2" */
```

---

## 5. CARD COMPONENTS

### Base Card

```css
.card {
  background: var(--card);
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 28px 32px;
}
```

### Tinted Variants (inline style overrides)

| Variant | Border | Background |
|---------|--------|------------|
| Blue | `rgba(43,108,176,.3)` | `rgba(43,108,176,.04)` |
| Green | `rgba(47,143,107,.3)` | `rgba(47,143,107,.04)` |
| Red | `rgba(192,73,47,.3)` | `rgba(192,73,47,.04)` |
| Paper | `var(--line)` | `var(--paper-2)` |
| Navy | `var(--navy-800)` bg | white text |
| Amber | `var(--amber)` bg | `var(--navy-900)` text |

---

## 6. BADGE & PILL COMPONENTS

### Num Badge

```css
.num-badge {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--navy-800);
  color: #fff;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
/* Colour override: style="background: var(--blue)" / style="background: var(--bad)" */
```

### Pill

```css
.pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 14px; border-radius: 999px;
  font-size: 16px; font-weight: 600;
  font-family: 'IBM Plex Mono', monospace;
}
.pill.blue   { background: var(--blue-100);  color: var(--blue); }
.pill.amber  { background: var(--amber);     color: var(--navy-900); }
.pill.bad    { background: rgba(192,73,47,.12); color: var(--bad); }
.pill.good   { background: rgba(47,143,107,.12); color: var(--good); }
```

### Chip (`.chip9` — feature chip)

```css
.chip9 {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--paper-2);
  font-size: 17px; font-weight: 500; color: var(--ink-2);
}
.chip9 svg { flex-shrink: 0; color: var(--blue); }
```

### Commit Pill (slide 18 CTA)

```css
.commit {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 9px 18px; border-radius: 999px;
  border: 1px solid var(--line-dark);
  color: #eaf1fa; font-size: 17px; font-weight: 500;
}
.commit::before { content: '✓'; color: var(--good); }
```

---

## 7. FOOTER (`.foot`)

Xuất hiện trên mọi slide — absolute positioned ở bottom.

```css
.foot {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 0 var(--pad-x) 28px;
  display: flex; align-items: center; justify-content: space-between;
  font-size: 17px; font-weight: 600; color: var(--ink-3);
}

.foot .fw { font-weight: 800; color: var(--navy-800); }  /* wordmark side */
```

Dark slide override:
```css
section.dark .foot { color: rgba(255,255,255,.5); }
section.dark .foot .fw { color: rgba(255,255,255,.8); }
```

HTML pattern:
```html
<footer class="foot">
  <span class="fw">SingleInterface<span class="x" style="color:var(--amber);font-weight:400"> × </span>Beta</span>
  <span>[TÊN KHÁCH HÀNG] · [Chủ đề]</span>
</footer>
```

---

## 8. TAKEAWAY BAR (`.takeaway`)

Xuất hiện cuối mỗi slide trừ slide 18.

```css
.takeaway {
  background: var(--navy-800);
  color: var(--blue-100);
  padding: 18px var(--pad-x);
  font-size: 20px; font-weight: 500;
  position: absolute; bottom: 60px; left: 0; right: 0;
}
.takeaway b { color: #fff; }
```

Dark slide override:
```css
section.dark .takeaway {
  background: rgba(255,255,255,.08);
  color: var(--blue-100);
}
```

---

## 9. BIGSTAT

```css
.bigstat {
  font-size: 120px;           /* default — override inline for smaller */
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.04em;
  color: var(--blue);
}
/* Variants: style="font-size: 88px; color: var(--good)" */
```

---

## 10. GBP MOCKUP (`.gbp`)

Sử dụng ở slides 06, 08, 09. Mimics Google Business Profile card.

```css
.gbp {
  border-radius: 18px; overflow: hidden;
  border: 1.5px solid var(--line);
  background: var(--card);
  font-size: 15px;
}
.gbp .photo {
  aspect-ratio: 16/9;
  background: var(--paper-2) center/cover no-repeat;
}
.gbp .body     { padding: 18px 18px 0; }
.gbp .name     { font-size: 21px; font-weight: 700; color: var(--ink); line-height: 1.2; }
.gbp .cat      { font-size: 14px; color: var(--ink-3); margin-top: 4px; }
.gbp .rate     { display: flex; align-items: center; gap: 6px; margin-top: 8px;
                 font-size: 15px; font-weight: 700; color: var(--ink); }
.gbp .stars    { color: var(--star); letter-spacing: -1px; }
.gbp .rcount   { font-weight: 400; color: var(--ink-3); font-size: 14px; }
.gbp .rows     { padding: 10px 0; border-top: 1px solid var(--line); margin-top: 12px; }
.gbp .row      { display: flex; align-items: flex-start; gap: 8px;
                 padding: 7px 18px; font-size: 14px; color: var(--ink-2); }
.gbp .row svg  { flex-shrink: 0; color: var(--ink-3); margin-top: 1px; }
.gbp .actions  { display: flex; border-top: 1px solid var(--line); }
.gbp .act      { flex: 1; display: flex; flex-direction: column; align-items: center;
                 gap: 4px; padding: 12px 4px;
                 font-size: 13px; font-weight: 600; color: var(--blue);
                 cursor: pointer; }
.gbp .act svg  { color: var(--blue); }
```

Image auto-detection (JS snippet in `<script>` at bottom of body):
```javascript
// Auto-detect .png vs .jpg for data-bg-name
document.querySelectorAll('[data-bg-name]').forEach(el => {
  const name = el.dataset.bgName;
  const img = new Image();
  img.onload = () => el.style.backgroundImage = `url('${name}.png')`;
  img.onerror = () => el.style.backgroundImage = `url('${name}.jpg')`;
  img.src = name + '.png';
});
```

Hai ảnh chuẩn: `loc.png` (showroom/location) và `man.png` (staff).
Slide 08 cột 3 dùng `service.png` — set trực tiếp, không qua `data-bg-name`.

---

## 11. MAP PACK MOCKUP (`.mp`, `.res`)

Sử dụng ở slides 04, 07, 09.

```css
.mp {
  border: 1.5px solid var(--line); border-radius: 14px;
  overflow: hidden; background: var(--card);
}
.res {
  padding: 13px 16px;
  border-bottom: 1px solid var(--line);
  display: flex; flex-direction: column; gap: 3px;
}
.res:last-child { border-bottom: none; }
.res .rname  { font-size: 17px; font-weight: 700; color: var(--blue); }
.res .rcat   { font-size: 14px; color: var(--ink-3); }
.res .rrate  { font-size: 14px; color: var(--ink-2); }
.res .rnote  { font-size: 13px; color: var(--ink-3); }

/* Highlighted slot (winning position) */
.res.win {
  background: rgba(246,173,85,.08);
  border-left: 3px solid var(--amber);
}
.res.win .rname { color: var(--navy-800); }
```

`.mapbg` — decorative map grid background for slide 04:
```css
.mapbg {
  background:
    linear-gradient(rgba(214,230,246,.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(214,230,246,.4) 1px, transparent 1px);
  background-size: 48px 48px;
  border-radius: 18px; padding: 28px;
}
```

---

## 12. COMPARISON TABLE (`.ctab`)

Sử dụng ở slides 04, 14, 15.

```css
.ctab {
  border: 1.5px solid var(--line);
  border-radius: 16px; overflow: hidden;
  border-collapse: collapse; width: 100%;
}
.ctab th, .ctab td {
  padding: 11px 18px; text-align: center; font-size: 17px;
  border-bottom: 1px solid var(--line);
}
.ctab th:first-child, .ctab td:first-child { text-align: left; }
.ctab tr:last-child td { border-bottom: none; }

/* Cell classes */
.ctab .hi   { background: var(--navy-800); color: #fff; font-weight: 700; }
.ctab .new  { font-weight: 700; color: var(--navy-800); }
.ctab .col-new { background: rgba(14,41,73,.04); }
.ctab .old  { color: var(--ink-3); font-weight: 400; }
.ctab .y    { color: var(--good); font-weight: 700; }
.ctab .y2   { color: var(--good); font-weight: 600; }
.ctab .x    { color: var(--ink-3); font-weight: 400; }
.ctab .part { color: var(--amber-700); font-weight: 600; }

/* KPI variant */
.kpibig { font-size: 26px; font-weight: 800; color: var(--good); }
```

---

## 13. BEFORE/AFTER (`.ba`)

Sử dụng ở slide 08.

```css
.ba {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--line);
  font-size: 17px;
}
.ba:last-child { border-bottom: none; }
.ba .bk { font-weight: 600; color: var(--ink-3); flex-shrink: 0; min-width: 120px; }
.ba .bv { color: var(--ink-2); }

/* Good variant */
.ba.good .bv  { color: var(--good); font-weight: 600; }
.ba.good .bk  { color: var(--ink); }
```

---

## 14. Q&A CARD (`.qa`)

Sử dụng ở slide 17.

```css
.qa {
  background: var(--card);
  border: 1.5px solid var(--line);
  border-radius: 16px;
  padding: 20px 22px;
  display: flex; flex-direction: column; gap: 10px;
}
.qmark {
  width: 38px; height: 38px; border-radius: 50%;
  background: var(--navy-800); color: #fff;
  font-weight: 800; font-size: 18px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.qq { font-size: 20px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.qa-line { height: 1px; background: var(--line); }
.qans { font-size: 17px; color: var(--ink-2); line-height: 1.5; }
```

---

## 15. CTA STEP (`.cta-step`)

Sử dụng ở slide 18.

```css
.cta-step {
  flex: 1;
  border: 1.5px solid var(--line-dark);
  border-radius: 18px;
  padding: 28px 30px;
  display: flex; flex-direction: column; gap: 12px;
  color: rgba(255,255,255,.8);
}
.cta-step.active {
  background: rgba(246,173,85,.1);
  border-color: var(--amber);
  color: #fff;
}
.cs-ic {
  width: 48px; height: 48px; border-radius: 50%;
  border: 2px solid var(--line-dark);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; font-weight: 800;
}
.cs-ic.active { background: var(--amber); border-color: var(--amber); color: var(--navy-900); }
.cs-title { font-size: 24px; font-weight: 800; }
.cs-sub   { font-size: 17px; font-weight: 600; color: var(--amber); }
.cs-desc  { font-size: 16px; line-height: 1.5; }
```

---

## 16. FLOW DIAGRAM NODE (`.node`)

Sử dụng ở slide 12.

```css
.node {
  border: 1.5px solid var(--line);
  border-radius: 16px;
  background: var(--card);
  padding: 22px 24px;
  display: flex; flex-direction: column; gap: 8px;
  align-items: flex-start;
}
.node .ntitle { font-size: 21px; font-weight: 700; color: var(--ink); }
.node .nsub   { font-size: 15px; color: var(--ink-3); }
```

---

## 17. DASHBOARD PANEL (`.dpanel`)

Sử dụng ở slide 16.

```css
.dpanel {
  background: #fff;
  padding: 22px 24px;
  display: flex; flex-direction: column; gap: 10px;
}
.dph {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px; font-weight: 600;
  letter-spacing: .05em; text-transform: uppercase;
  color: var(--ink-3);
  display: flex; align-items: center; gap: 8px;
}
.dnum { font-size: 34px; font-weight: 800; color: var(--ink); line-height: 1; }
.dlab { font-size: 15px; color: var(--ink-3); margin-top: 3px; }
.drow {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 0; border-bottom: 1px solid var(--line);
  font-size: 16px;
}
.drow:last-child { border-bottom: none; }
.drow .dn  { font-weight: 600; color: var(--ink); }
.drow .dv  { font-weight: 700; color: var(--blue); }
.drow .dbad { color: var(--bad); font-weight: 600; }
.drow .dgood { color: var(--good); font-weight: 600; }
.drow .dalert { color: var(--amber); font-weight: 700; }
```

Browser chrome (dashboard container):
```css
.db-wrap {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 30px 70px -30px rgba(0,0,0,.8);
  overflow: hidden;
  flex: 1;
}
.db-bar {
  background: var(--navy-800);
  padding: 16px 24px;
  display: flex; align-items: center; gap: 10px;
}
.db-traffic { /* 3 circle macOS buttons */
  display: flex; gap: 6px;
}
.db-dot { width: 13px; height: 13px; border-radius: 50%; }
/* Colors: #ff5f56, #ffbd2e, #27c93f */
.db-title { color: #fff; font-weight: 600; font-size: 17px; margin-left: 8px; }
.db-live  { margin-left: auto; font-family: 'IBM Plex Mono', monospace;
            font-size: 15px; color: var(--blue-300); }
.db-grid  { display: grid; grid-template-columns: repeat(4,1fr);
            gap: 1px; background: var(--line); }
```

---

## 18. 5R CELLS (`.r5`)

Sử dụng ở slide 13.

```css
.r5 {
  background: var(--card);
  border: 1.5px solid var(--line-dark);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex; flex-direction: column; gap: 6px;
}
.r5h {
  font-size: 22px; font-weight: 800; color: #fff;
  display: flex; align-items: center; gap: 8px;
}
.r5h .map {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px; font-weight: 500; color: var(--amber);
  letter-spacing: .02em;
}
.r5 p { font-size: 16px; color: var(--blue-100); line-height: 1.4; }
```

---

## 19. ANIMATION SYSTEM

Tất cả elements có class `.anim` sẽ animate vào khi slide active.

```css
/* Default state (hidden) */
.anim {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .45s ease, transform .45s ease;
}

/* Active state — triggered by deck engine */
[data-deck-active] .anim {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delays */
.anim.d1 { transition-delay: .1s; }
.anim.d2 { transition-delay: .2s; }
.anim.d3 { transition-delay: .3s; }
```

Keyframe fallback:
```css
@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0);  }
}
```

Cách dùng:
```html
<div class="anim">Xuất hiện khi slide active</div>
<div class="anim d1">Delay 100ms</div>
<div class="anim d2">Delay 200ms</div>
<div class="anim d3">Delay 300ms</div>
```

---

## 20. ICON SYSTEM

**Quy tắc bắt buộc:**
- **Tất cả icon là SVG inline** — không dùng icon font, không dùng emoji
- `stroke: currentColor` — màu thừa hưởng từ parent
- `stroke-width: 1.5` (default), `stroke-width: 2` (emphasis)
- `fill: none` (trừ `.star-fill` dùng `fill: currentColor`)
- `width: 22px; height: 22px` (default size)

```html
<!-- Ví dụ — pin icon -->
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
```

Palette đặt màu icon:
```html
<svg style="color: var(--blue)">...</svg>    <!-- info, maps, features -->
<svg style="color: var(--amber)">...</svg>   <!-- warnings, stars, highlights -->
<svg style="color: var(--bad)">...</svg>     <!-- errors, distance, danger -->
<svg style="color: var(--good)">...</svg>    <!-- success, check, savings -->
<svg style="color: var(--ink-3)">...</svg>   <!-- neutral meta -->
```

---

## 21. DARK / LIGHT SLIDE RHYTHM

| Slide | Mode | Hex bg |
|-------|------|--------|
| 01 | **dark** | `radial-gradient navy-700→navy-900` |
| 02 | light | `#f4f7fb` |
| 03 | light | `#f4f7fb` |
| 04 | light | `#f4f7fb` |
| 05 | **dark** | `radial-gradient navy-700→navy-900` |
| 06 | light | `#f4f7fb` |
| 07 | light | `#f4f7fb` |
| 08 | light | `#f4f7fb` |
| 09 | light | `#f4f7fb` |
| 10 | light | `#f4f7fb` |
| 11 | light | `#f4f7fb` |
| 12 | light | `#f4f7fb` |
| 13 | **dark** | `radial-gradient navy-700→navy-900` |
| 14 | light | `#f4f7fb` |
| 15 | light | `#f4f7fb` |
| 16 | **dark** | `radial-gradient navy-700→navy-900` |
| 17 | light | `#f4f7fb` |
| 18 | **dark** | `radial-gradient navy-700→navy-900` |

Quy tắc: dark slides tạo "breathing rhythm" và đánh dấu narrative transitions:
- S01 = Open (hook)
- S05 = Problem (pivot to solutions)
- S13 = Methodology (deep dive)
- S16 = Dashboard (proof)
- S18 = Close (CTA)

---

## 22. SPEAKER NOTES

```html
<!-- Cuối body, trước </body> -->
<script type="application/json" id="speaker-notes">
[
  "Speaker note slide 1 text...",
  "Speaker note slide 2 text...",
  ...
  "Speaker note slide 18 text..."
]
</script>
```

18 strings, index 0–17 tương ứng với slides 1–18.

---

## 23. VERSION TRACKING

```html
<!-- Version comment block — cuối file -->
<!--
  beta.html CHANGE LOG
  v1.0 ... v1.x = initial build
  ...
  v3.x = current — always add version entry when making structural changes
  Last entry: v3.6 – [description of change]
-->
```

---

## 24. HTML SCAFFOLD MỚI

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>[CLIENT] × SingleInterface × Beta — GBP Proposal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Paste entire <style> block from beta.html here -->
  <style>...</style>
</head>
<body>
<deck-stage width="1920" height="1080">

  <!-- 18 sections here -->
  <section data-label="[Slide Label]">
    <!-- .frame or .slide-pad wrapper -->
    <!-- .kick + .kick-num -->
    <!-- .h.h-sm headline -->
    <!-- .midfill content -->
    <!-- .takeaway bar -->
    <!-- .foot footer -->
  </section>

</deck-stage>

<!-- Speaker notes JSON -->
<script type="application/json" id="speaker-notes">
[...]
</script>

<!-- deck-stage component script -->
<script src="deck-stage.js"></script>

<!-- Image auto-detect -->
<script>
document.querySelectorAll('[data-bg-name]').forEach(el => {
  const n = el.dataset.bgName;
  const img = new Image();
  img.onload = () => el.style.backgroundImage = `url('${n}.png')`;
  img.onerror = () => el.style.backgroundImage = `url('${n}.jpg')`;
  img.src = n + '.png';
});
</script>
</body>
</html>
```

---

## 25. COMMON PATTERNS — QUICK REFERENCE

### Slide header (top of every slide)
```html
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
  <span class="kick">[KICKER TEXT]</span>
  <span class="kick-num">NN / 18</span>
</div>
<h2 class="h h-sm anim">[HEADLINE]</h2>
```

### Takeaway bar
```html
<div class="takeaway anim d3">
  [Summary text] — <b>[KEY PHRASE]</b>
</div>
```

### Footer
```html
<footer class="foot">
  <span class="fw">SingleInterface<span class="x" style="color:var(--amber);font-weight:400"> × </span>Beta</span>
  <span>[CLIENT] · [Topic]</span>
</footer>
```

### 2-col split slide
```html
<section data-label="...">
  <div class="frame">
    <!-- header -->
    <div class="midfill">
      <div class="split">
        <div><!-- left col --></div>
        <div><!-- right col --></div>
      </div>
    </div>
    <!-- takeaway + footer -->
  </div>
</section>
```

### Dark slide
```html
<section class="dark" data-label="...">
  ...
</section>
```
