import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式
import 'normalize.css'
// 自己的重置样式和公用样式
import '@/assets/style/common.less'

// 导入自己的UI组件库
import UI from '@/components/library'


createApp(App).use(store).use(router).use(UI).mount('#app')
