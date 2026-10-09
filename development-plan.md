# Master Execution Plan: Tata Motors Luxury Dealership Portal

## 1. Project Overview & Vision
- **Objective**: Build a high-converting, cinematic frontend engineering portfolio that functions as an exclusive flagship car dealership portal for Tata Motors.
- **Key Strategy (Keep vs. Drop)**:
  - **KEEP**: Visual Mega Menu Navigation, Cinematic Hero Carousel with VIP CTAs, 360° Interactive Vehicle Explorer with color selector, Floating Quick-Action Rail, and Lead Capture Modals (Home Test Drive, Trade-in Valuation).
  - **DROP**: Corporate history, leadership, IR updates, caution notices, newsroom links, and compliance filler.
- **Tech Stack**: Next.js (App Router), Tailwind CSS, TypeScript, Three.js / WebGL, Framer Motion, Lucide Icons.

---

## 2. Directory & Asset Mapping
Organize fetched resources from `assets/` into Next.js `public/assets/`:

```text
public/
└── assets/
    ├── fonts/
    │   ├── ParallelDisplay-Bold.otf     # Primary Display Font
    │   └── Supreme-Regular.ttf          # UI Body Copy
    ├── 3d/
    │   ├── basis_transcoder.wasm        # WebAssembly Texture Transcoder
    │   ├── TIAGO_STUDIO_HDR_4k_NEW_4.hdr# Studio Lighting Environment
    │   └── models/                      # .bin and .json 3D Mesh Geometry
    └── images/
        ├── cars/                        # High-res renders (Sierra, Harrier, Safari, Curvv, Nexon, etc.)
        └── icons/                       # Dealership CTAs & Feature Icons
```

---

## 3. Step-by-Step Build Phases for Antigravity CLI

### Phase 1: Core Design System & Configuration
1. **Font Setup**: Configure `@next/font/local` in `src/app/layout.tsx` for `ParallelDisplay` and `Supreme`.
2. **Tailwind Config**: Extend theme with obsidian dark colors (`#0B0F17`, `#161C28`), `tata-blue` (`#0052CC`), and custom font families.
3. **Global Layout**: Wrap application in dark mode theme with glassmorphism utility classes.

### Phase 2: High-Impact Header & Navigation
1. **MegaMenuNav Component**:
   - Implement sticky glassmorphic header with Tata Dealership logo and primary links.
   - Build visual hover dropdown grid displaying model categories (SUVs, EV Range, Hatchbacks, Sedans) with thumbnail previews, starting price tags, and "Live Showroom Stock" badges.

### Phase 3: Hero Section & Quick Actions
1. **CinematicHeroCarousel Component**:
   - 10-slide high-resolution carousel featuring flagship models (Sierra #DARK, Harrier, Curvv, Safari).
   - Overlay typography with staggered Framer Motion entrance animations.
   - Dual CTAs per slide: **"Explore 360°"** and **"Book VIP Home Test Drive"**.
2. **QuickActionRail Component**:
   - Floating side/bottom rail with quick tools: Test Drive, Exchange Evaluator, Finance Calculator, Stock Finder.

### Phase 4: Interactive 360° Digital Showroom
1. **VehicleExplorer Component**:
   - Tabbed model switcher (Curvv, Sierra, Harrier, Nexon EV, Altroz).
2. **ThreeViewer360 Component**:
   - WebGL canvas using Three.js loading 3D `.bin`/`.json` assets and WebAssembly basis transcoder from `public/assets/3d/`.
   - Orbit controls restricted to smooth horizontal 360° drag-to-rotate interaction.
   - Studio HDR environment map lighting (`TIAGO_STUDIO_HDR_4k_NEW_4.hdr`).
3. **ColorVariantSelector Component**:
   - Interactive color swatches updating vehicle texture/materials in real time.

### Phase 5: High-Converting Lead Capture System
1. **LeadCaptureModal Component**:
   - Floating modal triggered by "Book VIP Test Drive" or "Get Instant Trade-In Quote".
   - 2-step streamlined form with date picker, doorstep delivery option, and preferred vehicle trim selection.
2. **ShowroomStockWidget**:
   - Real-time inventory status badges (*"2 Units Available in Showroom • Ready for 48h Delivery"*).

### Phase 6: Performance Optimization & Testing
1. Asset preloading for WebAssembly transcoder and 3D models.
2. Responsive breakpoint testing (Mobile, Tablet, Ultra-wide Desktop).
3. Lighthouse audit for smooth FPS rendering and core web vitals.
