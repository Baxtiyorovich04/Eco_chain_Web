# EcoChain Landing Page

AI-powered recycling platform with blockchain NFT certificates and stablecoin rewards for Uzbekistan.

## Setup

```bash
npm create vite@latest ecochain -- --template react
cd ecochain
# copy this project's files into the folder, then:
npm install
npm run dev
```

Or from this folder directly:

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |

## Project structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    ├── components/     # Nav, Footer, NodeNetwork
    ├── hooks/          # useFadeIn, useScrolled
    ├── sections/       # Hero → Contact
    ├── styles/         # Per-section CSS
    └── utils/          # translations, seo
```

## Features

- Mobile hamburger nav (&lt;768px) with full-screen overlay
- Plus Jakarta Sans + Lora + JetBrains Mono typography
- Node network canvas, scroll fade-ins, animated counters
- EN / UZ / RU language switcher
- Contact form with client-side state
