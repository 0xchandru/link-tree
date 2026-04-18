# Link Tree

A personal link-in-bio / linktree-style React app.

## Architecture

- **Frontend only**: Pure React + TypeScript SPA (no backend)
- **Bundler**: Vite (port 5000 in dev)
- **Styling**: Tailwind CSS + shadcn/ui components (Radix UI)
- **Routing**: React Router v6
- **Animations**: Framer Motion

## Key Files

- `src/App.tsx` — root component and routing
- `src/pages/` — page components
- `src/components/` — shared UI components
- `src/hooks/` — custom React hooks
- `vite.config.ts` — Vite configuration (host: 0.0.0.0, port: 5000)

## Running

```bash
npm run dev
```

App starts at `http://localhost:5000`.

## Deployment

```bash
npm run build
```

Outputs static files to `dist/`. Serve with any static host.

## Notes

- Migrated from Lovable to Replit. Removed `lovable-tagger` dev dependency.
- `base` is set to `"/"` for Replit (GitHub Pages mode removed from default config).
