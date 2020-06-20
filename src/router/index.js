import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layout/default'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    }, {
      path: 'poem',
      name: 'poem',
      meta: {
        login: true
      },
      component: () => import('@/views/poem.vue'),
    }, {
      path: 'famous',
      name: 'famous',
      component: () => import('@/views/famous.vue'),
    }, {
      path: 'author',
      name: 'author',
      component: () => import('@/views/author.vue'),
    }, {
      path: 'books',
      name: 'books',
      component: () => import('@/views/books.vue'),
    }, {
      path: 'books/lunyu',
      name: 'lunyu',
      component: () => import('@/views/bookslunyu.vue'),
    }, {
      path: 'books/shiji',
      name: 'shiji',
      component: () => import('@/views/booksshiji.vue'),
    },
    {
      path: 'bookContent',
      name: 'sbookContent',
      component: () => import('@/views/bookContent.vue'),
    },{
      path: 'poem/search',
      name: 'search',
      meta: {
        login: true
      },
      component: () => import('@/views/poemSearch.vue'),
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('@/layout/blank.vue'),
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    }, {
      path: 'register',
      name: 'register',
      component: () => import('@/views/register.vue'),
    }]
  },
  {
    path: '*',
    redirect(to) {
      if (to.path === '/') {
        return '/home';
      } else {
        return '/NotFound';
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes
})

export default router