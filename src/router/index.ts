import attractionRoutes from "@/features/attractions/common/Attractions.routes";
import HomeView from "@/features/home/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...attractionRoutes(),
  ],
});

export default router;
