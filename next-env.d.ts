# ShopHub

A full e-commerce storefront built with Next.js, Tailwind CSS, and Prisma.

## Features

- Responsive storefront
- Product listing and detail views
- Shopping cart
- Checkout summary page
- Prisma database schema
- Tailwind styling

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Zustand

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and update your values.
3. Run Prisma migration:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

Open http://localhost:3000.
