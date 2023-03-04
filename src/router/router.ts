import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/view/Home.vue'
import Login from '@/view/Login.vue'
import SearchByName from '@/components/SearchByName.vue'
import Details from '@/components/Details.vue'
import SearchByCategory from '@/components/SearchByCategory.vue'
import Ranking from '@/components/Ranking.vue'
import Setting from '@/components/Setting.vue'
import Concern from '@/components/Concern.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    {
      path: '/home', component: Home, children: [
        { path: 'ranking', component: Ranking },
        { path: 'searchbyname', component: SearchByName },
        { path: 'searchbycategory', component: SearchByCategory },
        { path: 'details', component: Details },
        { path: 'setting', component: Setting },
        { path: 'concern', component: Concern },
      ]
    },


  ]
})
export default router