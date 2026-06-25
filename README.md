# Unrivaled Network Corporation — Website

> AI-Powered Marketing. Unrivaled Results.

A premium, production-grade website for **Unrivaled Network Corporation** — a Southern California AI-powered digital growth agency targeting mid-market service businesses ($500K–$20M revenue) across 8 industry verticals.

Built with **Next.js 14**, **Tailwind CSS**, and a custom **glassmorphism dark-theme design system**.

🔗 **Live Site:** [unrivalednetwork.com](https://unrivalednetwork.com)

---

## ✨ Features

- **29 statically-generated pages** — blazing-fast load times via Next.js SSG
- **Glassmorphism dark theme** — deep navy backgrounds, frosted-glass panels, gradient orbs, noise textures
- **8 Service pages** — SEO, AEO, Paid Advertising, Content Marketing, Marketing Automation, CRO, Reputation Management, Social Media
- **8 Industry pages** — Home Services, Healthcare, Legal, Beauty & Wellness, Cleaning, Pet Care, Events, Professional Services
- **Scroll-triggered animations** — fade-in, slide-up, and staggered reveals using IntersectionObserver
- **Responsive design** — mobile-first with hamburger navigation, fluid typography (`clamp()`), and adaptive layouts
- **SEO/AEO optimized** — Open Graph, Twitter Cards, JSON-LD schema, semantic HTML, keyword-targeted metadata
- **Custom design system** — Abyss color palette, Space Grotesk + Inter fonts, custom shadows, glow effects, and animation keyframes

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14.2 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3.4 + PostCSS |
| **Fonts** | Space Grotesk (headings), Inter (body), JetBrains Mono (mono) |
| **Animations** | Custom ScrollAnimator (IntersectionObserver), CSS keyframes |
| **Output** | Static Site Generation (`next build` → `/out`) |
| **Deployment** | Vercel / any static host |

---

## 📁 Project Structure

```
unrivaled-website/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, header/footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + CSS custom properties
│   ├── about/page.tsx          # About page
│   ├── blog/page.tsx           # Blog listing
│   ├── case-studies/page.tsx   # Case studies
│   ├── contact/page.tsx        # Contact form
│   ├── free-audit/page.tsx     # Free AI audit lead capture
│   ├── industries/
│   │   ├── page.tsx            # Industries hub
│   │   └── [slug]/page.tsx     # Dynamic industry pages (8)
│   ├── locations/page.tsx      # Service area locations
│   ├── not-found.tsx           # Custom 404
│   ├── pricing/page.tsx        # Pricing tiers
│   └── services/
│       ├── page.tsx            # Services hub
│       └── [slug]/page.tsx     # Dynamic service pages (8)
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with mobile hamburger menu
│   │   └── Footer.tsx          # 4-column footer with links & socials
│   └── ui/
│       └── ScrollAnimator.tsx  # Scroll-triggered animation wrapper
├── lib/
│   └── data.ts                 # Central data layer (services, industries, testimonials, FAQs)
├── docs/                       # Design system & strategic documentation
├── public/                     # Static assets (fonts, images)
├── tailwind.config.js          # Custom theme (colors, typography, animations, shadows)
├── next.config.js              # Static export config
├── tsconfig.json               # TypeScript config (ES2017 target)
└── package.json
```

---

## 🎨 Design System

The site uses a custom **"Abyss"** dark-theme design system:

| Token | Value | Usage |
|-------|-------|-------|
| `abyss-950` | `#0A0E1A` | Page background |
| `abyss-900` | `#0F1629` | Card/panel backgrounds |
| `abyss-800` | `#1A2340` | Elevated surfaces |
| `cyan-400` | `#22D3EE` | Primary accent |
| `indigo-400` | `#818CF8` | Secondary accent |
| `violet-400` | `#A78BFA` | Tertiary accent |
| `gold-400` | `#FFD700` | Highlight/CTA |

**Visual Effects:**
- Glassmorphism panels with `backdrop-blur-glass` (20px)
- Animated gradient orbs (cyan, violet, indigo blurs)
- SVG noise texture overlay for grain effect
- Glow box-shadows on interactive elements
- Fluid typography using `clamp()` across all breakpoints

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/uncdev26/unrivaled-website.git
cd unrivaled-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Generates a static export in the `/out` directory.

### Serve Static Build

```bash
npx serve out
```

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, services grid, industries, process, results, testimonials, FAQ, CTA |
| Services Hub | `/services` | Grid of all 8 service offerings with metrics |
| Service Detail | `/services/[slug]` | Deep-dive with hero, pain points, solutions, deliverables, metrics, CTA |
| Industries Hub | `/industries` | Grid of 8 vertical markets with stats |
| Industry Detail | `/industries/[slug]` | Vertical-specific challenges, solutions, case studies |
| About | `/about` | Company mission, values, team philosophy |
| Pricing | `/pricing` | Three-tier pricing (Growth, Scale, Enterprise) |
| Locations | `/locations` | Service areas across Southern California |
| Case Studies | `/case-studies` | Client success stories with before/after metrics |
| Blog | `/blog` | Content marketing articles |
| Contact | `/contact` | Contact form with business info |
| Free Audit | `/free-audit` | AI-powered marketing audit lead capture |
| 404 | Custom | Branded not-found page |

---

## 📚 Documentation

Detailed design system, service catalog, and implementation documentation lives in the [`/docs`](./docs/) folder:

- **[Design System & Services Guide](./docs/design-system-services-guide.md)** — Full brand identity, color palette, typography, glassmorphism recipes, animation framework, and service catalog with pricing
- **[Website Blueprint & SEO Strategy](./docs/website-blueprint-seo-strategy.md)** — Information architecture, page-by-page content strategy, SEO/AEO integration, internal linking, and schema markup

---

## 🏢 About Unrivaled Network Corporation

**Unrivaled Network Corporation** is a California C-Corp AI-powered digital growth agency based in Southern California. We specialize in serving mid-market service businesses ($500K–$20M revenue) across 8 vertical markets.

**Our UVP:** We are the only Southern California agency combining AI-powered marketing automation with deep vertical industry expertise.

### Core Services
1. SEO & Local Search Optimization
2. AI Answer Engine Optimization (AEO)
3. Paid Advertising (Google, Meta, YouTube)
4. Content Marketing & Strategy
5. Marketing Automation & CRM
6. Conversion Rate Optimization (CRO)
7. Reputation Management
8. Social Media Management

### Target Industries
Home Services · Healthcare · Legal · Beauty & Wellness · Cleaning · Pet Care · Events & Entertainment · Professional Services

---

## 📜 License

Proprietary — © 2026 Unrivaled Network Corporation. All rights reserved.
