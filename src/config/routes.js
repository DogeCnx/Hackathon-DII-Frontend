import { lazy } from 'react'

const routes = {
  Home: {
    path: '/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Howto1: {
    path: '/howto1',
    exact: true,
    component: lazy(() => import('../pages/Howto1'))
  },
  Howto2: {
    path: '/howto2',
    exact: true,
    component: lazy(() => import('../pages/Howto2'))
  },
  Pill: {
    path: '/pill',
    exact: true,
    component: lazy(() => import('../pages/Pill'))
  }
}
export default routes
