import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'

// import 'element-plus/lib/theme-chalk/index.css';  会报错
import 'element-plus/dist/index.css';  

// 生成 app 实例。
const app = createApp(App)
// 通过 use 引入 路由实例。
app.use(router)
// 将实例挂载到 #app 节点上。
app.use(ElementPlus)
// app.use(ElButton)
app.mount('#app')
