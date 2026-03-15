# Deimler Concessions

A premium single-page website for Deimler Concessions food truck. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Swap Photos

Every image placeholder is a styled `<div>` with "Photo Coming Soon". To replace with a real image:

1. Drop your images into the `public/` folder (e.g., `public/hero.jpg`)
2. Find the placeholder `<div>` in the component file (they're marked with `{/* EDIT: ... */}`)
3. Replace the div with:

```tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

Make sure the parent container has `relative` in its className (it already does).

## Edit Content

All editable content is marked with `{/* EDIT: ... */}` comments in the component files:

- **Hero text**: `src/components/Hero.tsx`
- **About/story**: `src/components/About.tsx`
- **Menu items**: `src/components/Menu.tsx` (edit the `menuItems` array)
- **Schedule/locations**: `src/components/FindUs.tsx` (edit the `schedule` array)
- **Contact info**: `src/components/Contact.tsx`
- **Instagram handle**: `src/components/FindUs.tsx`

## Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy — no configuration needed

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
