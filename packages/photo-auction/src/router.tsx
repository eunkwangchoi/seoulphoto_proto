import { lazy, Suspense, ReactElement } from 'react'

const Home    = lazy(() => import('./pages/Home'))
const Auction = lazy(() => import('./pages/Auction'))
const Market  = lazy(() => import('./pages/Market'))
const Artists = lazy(() => import('./pages/Artists'))
const News    = lazy(() => import('./pages/News'))
const Support = lazy(() => import('./pages/Support'))
const About   = lazy(() => import('./pages/About'))

interface Route {
  path: string
  element: ReactElement
}

const wrap = (C: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={null}><C /></Suspense>
)

export const routes: Route[] = [
  { path: '/',         element: wrap(Home) },
  { path: '/auction',  element: wrap(Auction) },
  { path: '/market',   element: wrap(Market) },
  { path: '/artists',  element: wrap(Artists) },
  { path: '/news',     element: wrap(News) },
  { path: '/support',  element: wrap(Support) },
  { path: '/about',    element: wrap(About) },
]
