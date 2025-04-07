# Scripts

This directory contains utility scripts used for development and maintenance of the codebase.

## Available Scripts

### nuke.ts

Cleans up the monorepo by removing various build artifacts and dependencies.

Usage:

```bash
npx tsx scripts/nuke.ts [flags]
```

Available flags:

- `--all`: Remove everything (all artifacts and dependencies)
- `--lock`: Remove pnpm-lock.yaml
- `--dependencies`: Remove all node_modules directories
- `--astro`: Remove .astro build directories
- `--netlify`: Remove .netlify directories
- `--turbo`: Remove .turbo cache directories
- `--dist`: Remove dist build directories
- `--coverage`: Remove coverage report directories
- `--vite`: Remove .vite cache directories

Running without flags will display the help menu.

### prefixNodeImports.ts

Scans JavaScript/TypeScript files and adds the `node:` prefix to Node.js built-in module imports.
This ensures compatibility with Node.js 20+ and ESM modules.

The script will:

1. Recursively scan all JS/TS files (excluding node_modules, dist, etc.)
2. Find imports of Node.js built-in modules
3. Add the `node:` prefix if missing
4. Report all changes made

Usage:

```bash
npx tsx scripts/prefixNodeImports.ts [directory]
```

If no directory is specified, it defaults to the current directory.
