import { lazy } from 'react'

const routes = {
  Home: {
    path: '/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Howto1: {
    path: '/Howto1',
    exact: true,
    component: lazy(() => import('../pages/Howto1'))
  },
  Howto2: {
    path: '/Howto2',
    exact: true,
    component: lazy(() => import('../pages/Howto2'))
  }
}
export default routes
