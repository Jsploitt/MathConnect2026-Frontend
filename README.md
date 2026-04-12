# MathConnect 2026 React Website

This project was scaffolded from the original single-file website into a React + Vite application with reusable components and Netlify-ready build configuration.

## Tech Stack

- React 18
- Vite 5
- CSS (component-driven layout styling)

## Project Structure

- `src/App.jsx` - app shell, page state routing, and countdown logic
- `src/components/layout/` - shared layout (`NavBar`, `Footer`)
- `src/components/home/` - home page sections
- `src/components/pages/` - dedicated page components (Speakers, Agenda, Committee, Abstracts, Venue, Registration)
- `src/styles/app.css` - global theme and component styling
- `assets/branding/Mathconnect.png` - source branding file
- `public/Mathconnect.png` - runtime logo asset served by Vite
- `netlify.toml` - Netlify build and SPA redirect settings
- `public/_redirects` - fallback route for SPA pages
- `legacy/MathConnect2026_Website.html` - archived original monolithic file

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Netlify Deployment

This repository is already configured for Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: configured via both `netlify.toml` and `public/_redirects`

If connecting this folder directly to Netlify, no extra build configuration is required.
