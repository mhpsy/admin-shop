import {
    createRouter,
    createWebHistory
} from 'vue-router'
import NotFound from '../components/404.vue'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'

const routes = [
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    {path: '/', name: 'Index', component: Index},
    {path: '/login', name: 'Login', component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router