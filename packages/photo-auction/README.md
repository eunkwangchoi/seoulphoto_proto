# Photo Auction

Private gallery / art fair digital catalog — dark theme, commerce restrained.

## Dev

```bash
npm run dev   # runs on http://localhost:5175
```

## Adding a new page

1. Create `src/pages/YourPage.tsx`
2. Add one entry to `src/router.tsx`:
   ```tsx
   const YourPage = lazy(() => import('./pages/YourPage'))
   // inside routes array:
   { path: '/your-path', element: <Suspense fallback={null}><YourPage /></Suspense> }
   ```
3. No other files need to change.
