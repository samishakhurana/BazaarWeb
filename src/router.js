import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


const router =new Router({
  mode:'history',
  routes:[
  {
    name:'landingpage',
    path:'/landingpage',
    component:LandingPage
  },
  {
    name:'search',
    path:'/search',
    component:Search
  },
  {
    name:'profile',
    path:'/profile',
    component:Profile
  },
  {
    name:'loginsignup',
    path:'/loginsignup',
    component:LoginSignup
  },
  {
    name:'checkout',
    path:'/checkout',
    component:Checkout

  }
]
})

export default router
