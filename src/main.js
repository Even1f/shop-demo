import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式
import 'normalize.css'
// 自己的重置样式和公用样式
import '@/assets/style/common.less'


createApp(App).use(store).use(router).mount('#app')
