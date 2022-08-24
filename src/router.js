import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const routes = [
    { path: "/", name: "主頁面", component: () => import("./views/Home.vue") },
    { path: "/about", name: "關於我", component: () => import("./views/About.vue") },
    { path: "/projects", name: "我參與的計畫", component: () => import("./views/Projects.vue") },
    { path: "/:catchAll(.*)*", redirect: "/" },
];

export const router = createRouter({
    history,
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
});
