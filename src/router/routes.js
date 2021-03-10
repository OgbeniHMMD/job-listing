import Home from "../views/index.vue"
import Login from "../views/account/login.vue"

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
]

export default routes
