import Vue from "vue";
import VueRouter from 'vue-router'

import APOD from "./components/APOD.vue";
import Archives from "./components/Archives.vue";
import Random from "./components/Random.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "APOD",
    component: APOD
  },
  {
    path: "/archives",
    name: "Archives",
    component: Archives
  },
  {
    path: "/random",
    name: "Random",
    component: Random
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;