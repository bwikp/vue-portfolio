import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutMe from '../views/AboutMe.vue'
import SkillPage from '../views/SkillPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/about',
      name : 'about',
      component: AboutMe
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillPage
    }
  ]
})

export default router
