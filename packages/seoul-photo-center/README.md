# 서울사진센터 / Seoul Photography Center

Museum microsite — extreme whitespace, single-image focus.

## Dev

```bash
npm run dev   # runs on http://localhost:5173
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
