import Vue from "vue";
import VueRouter from 'vue-router'

import APOD from "./components/APOD.vue";
import Years from "./components/archives/Years.vue";
import Months from "./components/archives/Months.vue";
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
    name: "Years",
    component: Years
  },
  {
    path: "/archives/:years",
    name: "Months",
    component: Months
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