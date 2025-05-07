import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import BusinessPage from './views/BusinessPage.vue'
import CommunityPage from './views/CommunityPage.vue'
import NewsRoomPage from './views/NewsRoomPage.vue'
import AboutusPage from './views/AboutusPage.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/business', name: 'BusinessPage', component: BusinessPage },
    { path: '/community', name: 'CommunityPage', component: CommunityPage },
    { path: '/newsroom', name: 'NewsRoomPage', component: NewsRoomPage },
    { path: '/aboutus', name: 'AboutusPage', component: AboutusPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router