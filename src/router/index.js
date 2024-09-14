import { createRouter, createWebHistory } from "vue-router";
import RestuarantIndexView from "../views/RestaurantIndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RestuarantIndexView,
    },
  ],
});

export default router;
