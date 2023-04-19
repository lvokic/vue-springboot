import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.config.productionTip = false

// 首先判断访问的路径是否需要登录，如果需要，判断 store 里有没有存储 user 的信息，如果存在，则放行
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
)


Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
