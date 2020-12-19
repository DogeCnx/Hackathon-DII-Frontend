import { lazy } from 'react'

const routes = {
  Home: {
    path: '/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  }
}
export default routes
