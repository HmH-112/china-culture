import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(route => route.meta && route.meta.login);
  if (needLogin) {
    //校验
    const isLogin = document.cookie.includes('login=true');
    if (isLogin) {
      next();
      return;
    }
    const toLoginFlag = window.confirm('该页面需要登录后访问，需要登陆吗？');
    if (toLoginFlag) {
      next('/blank/login');
    }
    return;
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')