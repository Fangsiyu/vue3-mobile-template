import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

// import {install} from '@icon-park/vue-next/es/all';

import '@icon-park/vue-next/styles/index.css';

// 全局注册vant组件
import { Button } from 'vant';

const app = createApp(App);

// install(app, 'i'); // use custom prefix 'i', eg: icon is People, name is i-people.

app.use(store).use(router)
.use(Button)
.mount('#app');





