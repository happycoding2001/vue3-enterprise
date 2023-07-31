import { createRouter, createWebHashHistory } from "vue-router";

import Index from "../views/Index.vue";
import AddGood from "../views/addGood.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory 为哈希模式的路由，如果需要选择 histiry 模式，可以用 createWebHistory 方法。
  routes: [
    // routes 属性和 vue-router 3 的配置一样，通过数组对象的形式，配置路径对应展示的组件。
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/add",
      name: "add",
      component: AddGood,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
});
router.afterEach((to, from) => {
    
    console.log('path::', router.currentRoute.value.path)
    // 点击的次数多了以后，这里console.log的执行次数 会2次3次4次递增
})
export default router;
