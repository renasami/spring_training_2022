import Vue from 'vue'
import { createRouter,createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
]
 
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
 
export default router;