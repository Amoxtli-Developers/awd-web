# Amoxtli Website (Next.js + i18next)

Single-page redesign for Amoxtli with bilingual content (EN/ES), Space Grotesk typography, and a minimalist editorial layout.

## Requirements

- Node.js 18+
- npm, yarn, or pnpm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Project Notes

- App Router with semantic HTML sections.
- i18next translations in `src/locales/en/translation.json` and `src/locales/es/translation.json`.
- Theme tokens in `src/theme/tokens.ts` and CSS variables in `src/app/globals.css`.
- Images served via `next/image` for performance.
