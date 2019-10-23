import VueRouter from 'vue-router'
import List from '../components/assets/List'
import Assets from '@/pages/Assets'
import Users from '@/pages/Users'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: List },
    { path: '/assets', component: Assets },
    { path: '/users', component: Users }
  ]
})

export default router
