import Vue from "vue";
import VueRouter from 'vue-router'

import APOD from "./components/APOD.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "APOD",
    component: APOD
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;