import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Menu from "@/views/Menu";
import PostDetails from "@/views/PostDetails";
import CommunityList from "@/views/CommunityList";
import CommunityPost from "@/views/CommunityPost";
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      checkAuth(next);
    }
  },
  {
    path: '/communities',
    name: 'CommunityList',
    component: CommunityList,
    beforeEnter(to, from, next) {
      checkAuth(next);
    }
  },
  {
    path: '/communities/:id',
    name: 'CommunityPost',
    component: CommunityPost,
    beforeEnter(to, from, next) {
      checkAuth(next);
    }
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: PostDetails,
    beforeEnter(to, from, next) {
      checkAuth(next);
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  }
]
const checkAuth = (next) => {
  const authUser = localStorage.getItem('auth');
    if(authUser == null || authUser == undefined){
      next({name: 'Login'});
    }else{
      next()
    }
}
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router