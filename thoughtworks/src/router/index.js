import Vue from 'vue'
import Router from 'vue-router'
// import menu from './menu'
import index from '../components/layout/AppMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          name: 'DASHBOARD',
          path: 'dashboard',
          component: require('../views/page/dashboard.vue')
        },
        {
          name: 'AGENT',
          path: 'agent',
          component: require('../views/page/agent.vue')
        },
        {
          name: 'MY CRUISE',
          path: 'mycruise',
          component: require('../views/page/mycruise.vue')
        },
        {
          name: 'HELP',
          path: 'help',
          component: require('../views/page/help.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/dashboard'
    }
  ]
})
// Menu should have 2 levels.
// function generateRoutesFromMenu (menu = [], routes = []) {
//   for (let i = 0, l = menu.length; i < l; i++) {
//     let item = menu[i]
//     if (item.path) {
//       routes.push(item)
//     }
//   }
//   return routes
// }
