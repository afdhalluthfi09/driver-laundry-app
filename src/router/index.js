import {
  createRouter,
  createWebHistory
} from 'vue-router'
import home from '../views/home/router'
import pesanan from '../views/pesanan/router'
import setting from '../views/setting/router'
import auth from '../views/auth/router'

const routes = [
    ...auth,
    {
      path:'/',
      name:'main',
      component:()=>import('../views/layout/MainView.vue'),
      children:[
        ...home,
        ...pesanan,
        ...setting
      ]
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router