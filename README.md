# Seoul Photo Group — Frontend Monorepo

Four interconnected static sites sharing a unified design system.

## Structure

```
packages/
  design-system/        Shared tokens (CSS custom properties + TS constants)
                        + five shared React components
  seoul-photo-center/   Site 1 — museum microsite     (port 5173)
  monthly-photography/  Site 2 — editorial magazine   (port 5174)
  photo-auction/        Site 3 — art auction catalog  (port 5175)
  kim-gallery/          Site 4 — 김영섭사진화랑        (port 5176)
```

## Running the sites

```bash
# Install all dependencies from the repo root
npm install

# Start each site individually
npm run dev:center    # http://localhost:5173
npm run dev:monthly   # http://localhost:5174
npm run dev:auction   # http://localhost:5175
npm run dev:kim       # http://localhost:5176

# Or from a site's own directory
cd packages/seoul-photo-center && npm run dev
```

## Design System

All color, typography, spacing, and breakpoint tokens live in
`packages/design-system/src/tokens/` and are mirrored as CSS custom
properties in `packages/design-system/src/styles/tokens.css`.

Shared components:

| Component | Description |
|---|---|
| `<GroupNav />` | Fixed 56px bottom bar linking all four sites |
| `<SiteHeader />` | Minimal fixed header (transparent-scroll or always-dark variant) |
| `<ImageBlock />` | Full-bleed image container with optional caption |
| `<EditorialLabel />` | All-caps category label (olive / terracotta) |
| `<Divider />` | 1px rule in `--color-light-gray` |

## Adding a new page (any site)

1. Create `src/pages/YourPage.tsx` in the site package
2. Add one entry to that site's `src/router.tsx` — no other files change

## Tech

- **Monorepo:** npm workspaces
- **Bundler:** Vite 5 + `@vitejs/plugin-react`
- **Language:** TypeScript 5
- **Styles:** CSS Modules, CSS custom properties — no utility framework
- **Routing:** React Router v6, HashRouter (static-compatible)
- **Fonts:** Noto Serif KR (Google Fonts) + Pretendard (CDN)
