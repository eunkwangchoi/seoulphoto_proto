# 김영섭사진화랑 / Kim Young Sup Gallery

Photography-only commercial gallery microsite — off-white theme, exhibition-first.

## Dev

```bash
npm run dev   # runs on http://localhost:5176
```

## Pages

| Route | Page | Contents |
|---|---|---|
| `/` | `Home` | Current-exhibition hero, statement, upcoming shows, selected works, news + visit info |
| `/exhibitions` | `Exhibitions` | Current / upcoming / past shows with type filter |
| `/artists` | `Artists` | Represented-artist grid + full artist table |
| `/collection` | `Collection` | Print inventory grid with availability status, inquiry block |
| `/visit` | `Visit` | Hours, directions, viewing notices, contacts |
| `/about` | `About` | Gallery statement, space, figures, timeline, contact |

## Adding a new page

1. Create `src/pages/YourPage.tsx`
2. Add one entry to `src/router.tsx`:
   ```tsx
   const YourPage = lazy(() => import('./pages/YourPage'))
   // inside routes array:
   { path: '/your-path', element: <Suspense fallback={null}><YourPage /></Suspense> }
   ```
3. No other files need to change.
