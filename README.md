# Multipu Developer Documentation (`docs.multipu.fun`)

> Official developer documentation portal for the **Multipu REST API**, **KeeperHub Model Context Protocol (MCP)** server, and multi-chain launchpad orchestrator.

[![Live Documentation](https://img.shields.io/badge/docs-docs.multipu.fun-black?style=flat&logo=vercel)](https://docs.multipu.fun)
[![GitHub Repository](https://img.shields.io/badge/github-multipu--docs-blue?style=flat&logo=github)](https://github.com/wisdomnova/multipu-docs)
[![Main App](https://img.shields.io/badge/app-multipu.fun-violet?style=flat)](https://multipu.fun)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com)

---

## 📖 Overview

**Multipu Docs** provides complete API references, guides, interactive sandboxes, and AI agent integration tooling for developers building on the Multipu ecosystem.

### Core Capabilities Documented:
- **Multi-Chain Launchpad Orchestrator**: Seed and dispatch token pools simultaneously across **Solana** (Pump.fun, Meteora DLMM, Bags App), **BNB Chain** (Four.meme), and **Robinhood Chain** (Pons Protocol).
- **REST API Endpoints**: End-to-end specifications for `/api/tokens`, `/api/launches`, `/api/explore`, `/api/trade/swap`, and `/api/wallet/balances`.
- **KeeperHub MCP Server Protocol**: Deterministic Model Context Protocol (MCP) tool declarations enabling autonomous AI agents (Claude Desktop, Cursor, Custom Agents) to interact directly with DeFi liquidity pools.
- **OlaXBT Strategy Stream**: Query momentum signals, breakout confidence scores, and holder concentration telemetry.
- **Interactive Sandbox Playground**: Test live HTTP payloads and responses directly within the documentation interface.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom light/dark theme variables
- **Typography**: [Geist Sans & Geist Mono](https://vercel.com/font)
- **Icons**: [@tabler/icons-react](https://tabler.io/icons)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **SEO & Social Cards**: Dynamic Sitelinks JSON-LD schema, automated `sitemap.xml`, `robots.txt`, and high-res OpenGraph / Twitter preview cards.

---

## 📂 Project Structure

```
multipu-docs/
├── app/
│   ├── layout.tsx             # Root layout with OpenGraph, SEO tags & Analytics
│   ├── page.tsx               # Main 3-column documentation shell & theme controller
│   ├── opengraph-image.png    # Native Next.js 1200x630 OG social preview
│   ├── twitter-image.png      # Native Next.js Twitter summary card preview
│   ├── sitemap.ts             # Automated sitemap generator (docs.multipu.fun)
│   ├── robots.ts              # Automated robots.txt route
│   └── globals.css            # Tailwind v4 custom styles & dark mode variant
├── components/
│   └── docs/
│       ├── code-block.tsx     # Tabbed multi-language code snippets with copy button
│       ├── content-view.tsx   # Center documentation article renderer
│       ├── docs-data.ts       # Structured documentation content & navigation graph
│       ├── interactive-tester.tsx # In-browser API playground sandbox
│       ├── left-sidebar.tsx   # Grouped navigation sidebar with active indicator
│       ├── sitelinks-json-ld.tsx # Google Sitelinks & TechArticle JSON-LD schema
│       ├── toc-sidebar.tsx    # "On this page" sticky Table of Contents
│       └── top-nav.tsx        # Header navbar with theme toggle and GitHub links
├── lib/
│   └── utils.ts               # Tailwind class merge helper (cn)
├── public/
│   ├── logo.png               # Multipu brand icon
│   ├── og.png                 # High-res social card preview
│   ├── og.jpg                 # Fallback JPEG card preview
│   └── [protocol icons]       # Pumpfun, Meteora, Bags, Four-meme, Pons icons
└── package.json
```

---

## 🛠️ Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/wisdomnova/multipu-docs.git
cd multipu-docs
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Validation

```bash
npm run build
```

---

## 🌐 Deployment

The documentation portal is configured for deployment at **`docs.multipu.fun`**:
- Canonical base: `https://docs.multipu.fun`
- Sitemap: `https://docs.multipu.fun/sitemap.xml`
- Robots: `https://docs.multipu.fun/robots.txt`

---

## 🔗 Related Repositories

- **Main Platform**: [wisdomnova/multipu](https://github.com/wisdomnova/multipu)
- **Live App**: [https://multipu.fun](https://multipu.fun)
- **Documentation**: [https://docs.multipu.fun](https://docs.multipu.fun)

---

## 📄 License

MIT © [Multipu](https://multipu.fun)
