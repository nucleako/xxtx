import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//执行创建实例的方法
//加载路由、仓库
//挂载到index.html->app节点上