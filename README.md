# Abhijith V S - Developer Portfolio

A clean, modern, professional developer portfolio built with Next.js and Tailwind CSS.
Designed for high performance, minimalism, and elegance. Features a dynamic light/dark mode and supports static exports.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- `next-themes` (Dark/Light Mode)
- `lucide-react` (Icons)
- TypeScript

## Getting Started

### 1. Install Node.js
If you haven't already, install [Node.js](https://nodejs.org/). This project requires Node.js v18 or later.

### 2. Install Dependencies
Open your terminal in the root of the project directory and run:

```bash
npm install
```

### 3. Run Development Server
To start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Building and Deployment

This project uses `next export` output (configured in `next.config.mjs`) to generate a static HTML/CSS/JS build.

### GitHub Pages Setup

1. Run the build command:
   ```bash
   npm run build
   ```
2. This creates an `out/` directory with your static files.
3. You can configure GitHub Actions to deploy this `out/` directory to GitHub Pages.

### Vercel Deployment

Deploying to Vercel is seamless since this is a Next.js project.
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and create a new project from your repository.
3. Vercel will automatically detect the settings and build/deploy your portfolio.
