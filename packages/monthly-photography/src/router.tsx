import { lazy, Suspense, ReactElement } from 'react'

const Home     = lazy(() => import('./pages/Home'))
const About    = lazy(() => import('./pages/About'))

interface Route {
  path: string
  element: ReactElement
}

export const routes: Route[] = [
  { path: '/',      element: <Suspense fallback={null}><Home /></Suspense> },
  { path: '/about', element: <Suspense fallback={null}><About /></Suspense> },
  // Add new pages here — no other files need to change
]
