import { lazy, Suspense, ReactElement } from 'react'

const Home        = lazy(() => import('./pages/Home'))
const Exhibitions = lazy(() => import('./pages/Exhibitions'))
const Artists     = lazy(() => import('./pages/Artists'))
const Collection  = lazy(() => import('./pages/Collection'))
const Visit       = lazy(() => import('./pages/Visit'))
const About       = lazy(() => import('./pages/About'))

interface Route {
  path: string
  element: ReactElement
}

const wrap = (C: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={null}><C /></Suspense>
)

export const routes: Route[] = [
  { path: '/',            element: wrap(Home) },
  { path: '/exhibitions', element: wrap(Exhibitions) },
  { path: '/artists',     element: wrap(Artists) },
  { path: '/collection',  element: wrap(Collection) },
  { path: '/visit',       element: wrap(Visit) },
  { path: '/about',       element: wrap(About) },
]
