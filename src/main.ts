import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import {
//   Layout,
//   LayoutContent,
//   LayoutFooter,
//   LayoutHeader,
//   Row,
//   Col,
//   Button,
//   CardMeta,
//   Card,
//   Tag,

// } from "ant-design-vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import TemplateList from "@/components/template-list/index.vue";

const app = createApp(App);
app.use(store).use(router).use(Antd);

// const antComponents = [
//   Layout,
//   LayoutContent,
//   LayoutFooter,
//   LayoutHeader,
//   Row,
//   Col,
//   Button,
//   CardMeta,
//   Card,
//   Tag,
// ];

// antComponents.forEach((compoment) => app.component(compoment.name, compoment));

const myComponents = [TemplateList];

myComponents.forEach((compoment) => app.component(compoment.name, compoment));

app.mount("#app");
