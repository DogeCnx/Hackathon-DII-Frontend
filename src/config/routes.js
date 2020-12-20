import { lazy } from "react";

const routes = {
  Home: {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Home")),
  },
  Dispense: {
    path: "/dispense",
    exact: true,
    component: lazy(() => import("../pages/Dispense")),
  },
};
export default routes;
