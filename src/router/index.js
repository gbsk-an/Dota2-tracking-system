import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "start-page",
    component: () => import("@/views/StartPage.vue"),
  },
  {
    path: "/TeamPage",
    name: "team-page",
    component: () => import("@/views/TeamPage.vue"),
  },
  {
    path: "/MatchesPage",
    name: "matches-page",
    component: () => import("@/views/MatchesPage.vue"),
  },
  {
    path: "/MatchDetailsPage",
    name: "match-details-page",
    component: () => import("@/views/MatchDetailsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
