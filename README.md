# Dr. Maya Reynolds, PsyD — Practice Website

A responsive, production-quality therapist homepage designed for Dr. Maya Reynolds, PsyD, a Licensed Clinical Psychologist based in Santa Monica, California, specializing in anxiety, trauma, and burnout for adults.

Built with Next.js (App Router), Tailwind CSS, and TypeScript, following modern web design aesthetics, responsive best practices, and local SEO standards.

---

## Live Demo & Deployment

- Live Website: [https://grow-my-therapy.vercel.app](https://grow-my-therapy-vert.vercel.app/)
- GitHub Repository: [https://github.com/SWapnit18/Grow-My-Therapy](https://github.com/SWapnit18/Grow-My-Therapy)

---

## Tech Stack & Tools

- Framework: Next.js (App Router, Server & Client Components)
- Styling: Tailwind CSS (Custom calming palette & typography)
- Language: TypeScript (Strict type safety)
- Typography: Google Fonts — Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Clean Modern Sans)
- Optimization: next/image for responsive high-performance image rendering
- Deployment: Vercel

---

## Features & Sections

1. Header & Sticky Navigation: Responsive desktop menu, consultation button, and mobile hamburger drawer.
2. Hero Section: Exact H1 headline, subheadline, credentials badges, and 1:1 rounded portrait card with floating reassurance badge.
3. Trust & Philosophy: Highlights Dr. Maya's grounded, collaborative therapeutic philosophy.
4. Dedicated Services (3 Core Focus Areas):
   - Anxiety Therapy in Santa Monica
   - Trauma Therapy in Santa Monica
   - Burnout Therapy in Santa Monica
5. Therapy Modalities (4 Approaches):
   - Cognitive Behavioral Therapy (CBT)
   - Eye Movement Desensitization & Reprocessing (EMDR)
   - Mindfulness-Based Practices
   - Body-Oriented / Somatic Techniques
6. Who I Work With: Empathetic focus areas for high-achieving adults, creatives, and professionals.
7. Therapy Formats (In-Person & Telehealth): Highlighting the quiet Santa Monica consultation office and secure statewide California telehealth sessions.
8. Office Location & Map Visual: Santa Monica practice address with a clean interactive map visual.
9. Consultation Intake Form: Client-friendly interactive intake form for booking consultations.
10. SEO & Structured Data: Built-in OpenGraph metadata and Schema.org MedicalBusiness JSON-LD schema for local discovery.

---

## Project Architecture

```text
next-therapist/
├── public/
│   ├── favicon.svg          # Brand favicon
│   └── images/              # Practice & Santa Monica imagery
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom styles, design tokens & animations
│   │   ├── layout.tsx       # Root layout, Google fonts, metadata & JSON-LD
│   │   └── page.tsx         # Structured single-page composite layout
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navigation & mobile drawer
│   │   ├── Hero.tsx         # Hero section & portrait showcase
│   │   ├── Services.tsx     # 3 Core service cards
│   │   ├── Approach.tsx     # 4 Therapeutic modality cards
│   │   └── ContactForm.tsx  # Consultation intake form
│   └── data/
│       └── content.ts       # Typed content data
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## Getting Started Locally

### Prerequisites

- Node.js (version 18.17+ or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SWapnit18/Grow-My-Therapy.git
   cd Grow-My-Therapy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

---

## License

This project was developed as a frontend engineering assessment for Dr. Maya Reynolds, PsyD practice. All rights reserved.
