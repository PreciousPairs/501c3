import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Programs from '@/components/Programs'
import GetInvolved from '@/components/GetInvolved'
import ContactUs from '@/components/ContactUs'
import Donate from '@/components/Donate'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import AdminDashboard from '@/components/AdminDashboard'
import Analytics from '@/components/Analytics'
import UserManagement from '@/components/UserManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/programs',
      name: 'Programs',
      component: Programs
    },
    {
      path: '/get-involved',
      name: 'GetInvolved',
      component: GetInvolved
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/admin/user-management',
      name: 'UserManagement',
      component: UserManagement
    },
  ]
})
