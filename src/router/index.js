import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')

export const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Groove Gurus'
        },
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });
  

export default router