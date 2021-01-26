import Vue from "vue";
import VueRouter from 'vue-router'

import APOD from "./components/APOD.vue";
import Years from "./components/archives/Years.vue";
import Months from "./components/archives/Months.vue";
import Days from "./components/archives/Days.vue";
import ArchivesAPOD from "./components/archives/ArchivesAPOD.vue";
import Search from "./components/search/Search.vue";
import Random from "./components/Random.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "APOD",
    component: APOD,
  },
  {
    path: "/archives",
    name: "Years",
    component: Years
  },
  {
    path: "/archives/:year",
    name: "Months",
    component: Months
  },
  {
    path: "/archives/:year/:month",
    name: "Days",
    component: Days
  },
  {
    path: "/archives/:year/:month/:day",
    name: "ArchivesAPOD",
    component: ArchivesAPOD,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: (route) => ({ query: route.query.q })
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