import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'
import TestIndex from '../components/test/TestIndex'
import FlaskIndex from '../components/flask/FlaskIndex'
import TempandHumi from '../components/home/TempandHumi.vue'
import Light from '../components/home/Light.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // 可以删除'#'
  routes: [
    {
      path: '/home',
      name: '/Home',
      component: Home,
      //不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/test',
          name: 'Test',
          component: TestIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/flask',
          name: 'Flask',
          component: FlaskIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path:'/tempandhumi',
          name:'TempandHumi',
          component:TempandHumi,
          meta: {
            requireAuth: true
          }
        },
        {
          path:'/light',
          name:'Light',
          component:Light,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }

  ]
})
