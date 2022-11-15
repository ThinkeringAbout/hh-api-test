import { createRouter, createWebHistory } from "vue-router";
import CreateUserPage from "../components/CreateUserPage.vue";
import UpdateUserPage from "../components/UpdateUserPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/createUser",
      name: "createUserPage",
      component: CreateUserPage,
    },
    {
      path: "/updateUser",
      name: "updateUserPage",
      component: UpdateUserPage,
    }
  ],
});

export default router;
