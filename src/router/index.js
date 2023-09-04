import Vue from 'vue';
import Router from 'vue-router';

// Import your components
import Home from '@/components/Home';
import AboutUs from '@/components/AboutUs';  // If you have an AboutUs component
import Programs from '@/components/Programs';
import GetInvolved from '@/components/GetInvolved';
import ContactUs from '@/components/ContactUs';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Donate from '@/components/Donate';
import AdminDashboard from '@/components/AdminDashboard'; // If you have an AdminDashboard component
import Analytics from '@/components/Analytics'; // If you have an Analytics component
import UserManagement from '@/components/UserManagement'; // If you have a UserManagement component

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
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
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
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
      path: '/donate',
      name: 'Donate',
      component: Donate
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
    }
  ]
});
