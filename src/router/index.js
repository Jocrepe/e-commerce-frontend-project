import { createRouter, createWebHistory } from 'vue-router'

// User
import HomeView from '@/views/user/HomeView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import SearchView from '@/views/user/SearchView.vue'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import SuccessView from '@/views/user/SuccessView.vue'

// Admin
import AdminLogin from '@/views/admin/LoginView.vue'
import AdminDashboard from '@/views/admin/DashboardView.vue'

import AdminProductUpdate from '@/views/admin/product/UpdateView.vue'
import AdminProductList from '@/views/admin/product/ListView.vue'

import AdminUserUpdate from '@/views/admin/user/UpdateView.vue'
import AdminUserList from '@/views/admin/user/ListView.vue'

import AdminOrderDetail from '@/views/admin/order/DetailView.vue'
import AdminOrderList from '@/views/admin/order/ListView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },

    // admin site
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/product/create',
      name: 'admin-product-create',
      component: AdminProductUpdate
    },
    {
      path: '/admin/product/update/:id',
      name: 'admin-product-update',
      component: AdminProductUpdate
    },
    {
      path: '/admin/product/list',
      name: 'admin-product-list',
      component: AdminProductList
    },
    {
      path: '/admin/user/list',
      name: 'admin-user-list',
      component: AdminUserList
    },
    {
      path: '/admin/user/update/:id',
      name: 'admin-user-update',
      component: AdminUserUpdate
    },
    {
      path: '/admin/order/list',
      name: 'admin-order-list',
      component: AdminOrderList
    },
    {
      path: '/admin/order/detail',
      name: 'admin-order-detail',
      component: AdminOrderDetail
    }
    
  ]
})

export default router
