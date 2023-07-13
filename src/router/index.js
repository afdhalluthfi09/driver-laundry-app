import {
  createRouter,
  createWebHistory
} from 'vue-router'
import home from '../views/home/router'
import pesanan from '../views/pesanan/router'
import setting from '../views/setting/router'
import auth from '../views/auth/router'
import { requireAuth } from './auth';
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
      ],
      meta:{
        middleware:[requireAuth]
      }
    }
]
const router =createRouter({
  history:createWebHistory(process.env.BASE_URL),
  base:__dirname,
  routes:routes
})

router.beforeEach((to, from, next) => {
if (to.meta.middleware) {
  const middleware = to.meta.middleware;
  console.log(middleware);
  middleware.forEach(mw => mw(to, from, next));
}else {
  next();
}
});

export default router