# Northern Kings GT Website

This is the website for the Northern Kings GT event.

## Tech Stack

- [Astro](https://astro.build/) v5 - Web framework for content-focused websites
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) v6 - Frontend tooling
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Development

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at http://localhost:4321

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Directory Structure

- `src/` - Source code
  - `assets/` - Static assets (images, fonts, etc.)
  - `components/` - React components
  - `data/` - Data files
  - `layouts/` - Astro layout components
  - `pages/` - Astro pages (file-based routing)
  - `styles/` - Global CSS styles
  - `views/` - Page-specific components

## Deployment

The site is built into the `dist/` directory, which can be deployed to any static hosting service.
