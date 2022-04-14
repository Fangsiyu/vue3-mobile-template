import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

// 全局注册vant组件
import { Button } from 'vant';


createApp(App).use(store).use(router)
.use(Button)
.mount('#app')
