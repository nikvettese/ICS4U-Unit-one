import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
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
    path: '/register',
    name: 'Register',
    component: Register,
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
    beforeEnter(to, from, next) {
      checkAuth(next);
    }
  }
]

//check if the user is logged in
//if not, force user to the login page
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