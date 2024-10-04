import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import TermsAndConditions from '@/components/TermsAndConditions.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import Welcome from '@/components/WelcomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/terms-and-conditions', name: 'terms and conditions', component: TermsAndConditions},
  { path: '/privacy-policy', name: 'privacy policy', component: PrivacyPolicy},
  { path: '/:pathMatch(.*)*', redirect: '/' },   // Add a catch-all route to redirect to home
  { path: '/welcome', name: 'welcome', component: Welcome},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router