import { createRouter, createWebHistory } from "vue-router";
import RestaurantIndexView from "../views/RestaurantIndexView.vue";
import RestaurantShowView from "../views/RestaurantShowView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RestaurantIndexView,
    },
    {
      path: "/show/:id",
      name: "show",
      component: RestaurantShowView,
    },
  ],
});

export default router;
