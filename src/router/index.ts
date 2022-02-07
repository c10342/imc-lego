import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
import Editor from "@/views/editor/index.vue";
import TplDetail from "@/views/tpl-detail/index.vue";
import Layout from "@/components/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/tpl-detail/:id",
        name: "TplDetail",
        component: TplDetail,
      },
    ],
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
