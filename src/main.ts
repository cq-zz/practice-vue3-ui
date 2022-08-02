import { createApp } from 'vue'
import App from './App.vue'

import './assets/markdown.css'

import router from './router'
import Preview from './components/Preview.vue'

import TVUI from '../packages'

const app = createApp(App)
app.component('Preview', Preview)
app.use(TVUI)
app.use(router)
app.mount('#app')
