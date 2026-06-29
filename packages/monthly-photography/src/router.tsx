import { lazy, Suspense, ReactElement } from 'react'

const Home      = lazy(() => import('./pages/Home'))
const Art       = lazy(() => import('./pages/Art'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Interview = lazy(() => import('./pages/Interview'))
const Review    = lazy(() => import('./pages/Review'))
const Archive   = lazy(() => import('./pages/Archive'))
const About     = lazy(() => import('./pages/About'))

interface Route {
  path: string
  element: ReactElement
}

const wrap = (C: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={null}><C /></Suspense>
)

export const routes: Route[] = [
  { path: '/',           element: wrap(Home) },
  { path: '/art',        element: wrap(Art) },
  { path: '/portfolio',  element: wrap(Portfolio) },
  { path: '/interview',  element: wrap(Interview) },
  { path: '/review',     element: wrap(Review) },
  { path: '/archive',    element: wrap(Archive) },
  { path: '/about',      element: wrap(About) },
]
