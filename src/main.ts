import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import aiComponents from "./globalcomponent/index";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import * as Icons from "@ant-design/icons-vue";

const app = createApp(App);

const icons: any = Icons;
for (const i in icons) {
  app.component(i, icons[i]);
}

app.use(aiComponents);
app.use(store);
app.use(router);
app.use(Antd);
app.mount("#app");
