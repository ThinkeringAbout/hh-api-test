import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/createUser",
      name: "createUserPage",
      component: () => import('../components/CreateUserPage.vue'),
    },
    {
      path: "/updateUser",
      name: "updateUserPage",
      component: () => import('../components/UpdateUserPage.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "notFoundPage",
      component: () => import('../components/NotFoundPage.vue'),
    }
  ],
});

export default router;
