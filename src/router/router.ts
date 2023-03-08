import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/view/Home.vue'
import Index from '@/view/Index.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import SearchByName from '@/components/SearchByName.vue'
import Details from '@/components/Details.vue'
import SearchByCategory from '@/components/SearchByCategory.vue'
import Ranking from '@/components/Ranking.vue'
import Setting from '@/components/Setting.vue'
import Concern from '@/components/Concern.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/index/login' },
    {
      path: '/index', component: Index, children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register },
      ]
    },
    {
      path: '/home', component: Home, children: [
        { path: 'ranking', component: Ranking },
        { path: 'searchbyname', component: SearchByName },
        { path: 'searchbycategory', component: SearchByCategory },
        { path: 'details/:id', component: Details },
        { path: 'setting', component: Setting },
        { path: 'concern', component: Concern },
      ]
    },


  ]
})
router.beforeEach((to, from, next) => {
  // 判断有没有登录
  if (!localStorage.getItem('userInfo')) {
    console.log(1);

    if (to.path == "/index/login" || to.path == "/index/register" || to.path == '/') {
      console.log(2);

      next();
    } else {
      console.log(3);

      router.push('/index/login')
    }
  } else {
    console.log(4);

    next();
  }
});

export default router