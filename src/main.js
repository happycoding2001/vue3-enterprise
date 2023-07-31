import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// import 'element-plus/lib/theme-chalk/index.css';  会报错
// import 'element-plus/dist/index.css';  这个似乎不需要引入，引入后主题切换会不生效

// 生成 app 实例。
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 通过 use 引入 路由实例。
app.use(router);
// 将实例挂载到 #app 节点上。
app.use(ElementPlus);
// app.use(ElButton)
app.mount("#app");
