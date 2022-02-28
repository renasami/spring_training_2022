import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import AddFriends from "../pages/AddFriends.vue";
import MakeGroup from "../pages/MakeGroup.vue";
import JoinGroup from "../pages/JoinGroup.vue";
import Store from '../store'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/join-group",
    name: "JoinGroup",
    component: JoinGroup,
  },
  {
    path:"/add-friend",
    name:"AddFriend",
    component:AddFriends
  },
  {
    path:"/make-group",
    name:"MakeGroup",
    component: MakeGroup
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.token) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});


export default router;
