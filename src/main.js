import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//import components
import UpdateScore from './components/UpdateScore.vue'
import Scoreboard from './components/Scoreboard.vue'

//import vue router
import * as VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Scoreboard },
    { path: '/updatescore', component: UpdateScore },
]

const router = VueRouter.createRouter({
history: VueRouter.createWebHashHistory(),
routes, 
})

const app = createApp(App) 
app.use(router)

app.mount('#app')