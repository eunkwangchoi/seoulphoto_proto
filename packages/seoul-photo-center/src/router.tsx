import { lazy, Suspense, ReactElement } from 'react'

const Home        = lazy(() => import('./pages/Home'))
const Exhibitions = lazy(() => import('./pages/Exhibitions'))
const Education   = lazy(() => import('./pages/Education'))
const Archive     = lazy(() => import('./pages/Archive'))
const News        = lazy(() => import('./pages/News'))
const About       = lazy(() => import('./pages/About'))

interface Route {
  path: string
  element: ReactElement
}

const wrap = (C: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={null}><C /></Suspense>
)

export const routes: Route[] = [
  { path: '/',             element: wrap(Home) },
  { path: '/exhibitions',  element: wrap(Exhibitions) },
  { path: '/education',    element: wrap(Education) },
  { path: '/archive',      element: wrap(Archive) },
  { path: '/news',         element: wrap(News) },
  { path: '/about',        element: wrap(About) },
]
