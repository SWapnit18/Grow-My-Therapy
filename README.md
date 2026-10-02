# Dr. Maya Reynolds, PsyD — Practice Website

A responsive, production-ready website for Dr. Maya Reynolds, PsyD, a Licensed Clinical Psychologist based in Santa Monica, California, specializing in anxiety, trauma, and burnout for adults.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: Cormorant Garamond & Plus Jakarta Sans via `next/font/google`

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

## Project Structure

```text
├── public/
│   └── images/              # Practice & location imagery
├── src/
│   └── app/
│       ├── globals.css      # Custom styles and theme definitions
│       ├── layout.tsx       # Root layout, metadata & JSON-LD schema
│       └── page.tsx         # Complete single-page therapist homepage
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS setup
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

## Features

- **SEO & Structured Data**: Built-in OpenGraph metadata and MedicalBusiness JSON-LD schema for local Santa Monica discovery.
- **Accessible & Responsive**: Fully responsive layout tailored for mobile, tablet, and desktop viewports.
- **Evidence-Based Practice Presentation**: Dedicated sections for Anxiety Therapy, Trauma Therapy, Burnout Therapy, CBT, EMDR, Mindfulness, and Somatic techniques.
- **Client Consultation Intake**: Interactive intake form for in-person Santa Monica visits and California telehealth sessions.
