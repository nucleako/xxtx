import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
  }
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
//执行创建实例的方法
//加载路由、仓库
//挂载到index.html->app节点上