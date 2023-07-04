import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import HomeTest from './views/home-test'
import TestPage from './views/test-page'
import Dmsgbjhshgjfjgjmytergevhfhdfn from './views/dmsgbjhshgjfjgjmytergevhfhdfn'
import Screen1 from './views/screen-1'
import Page1MyPage from './views/page-my-page'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'HomeTest',
      path: '/home-test',
      component: HomeTest,
    },
    {
      name: 'testPage',
      path: '/test-page',
      component: TestPage,
    },
    {
      name: 'dmsgbjhshgjfjgjmytergevhfhdfn',
      path: '/dmsgbjhshgjfjgjmytergevhfhdfn',
      component: Dmsgbjhshgjfjgjmytergevhfhdfn,
    },
    {
      name: 'Screen-1',
      path: '/',
      component: Screen1,
    },
    {
      name: 'Page1MyPage',
      path: '/page-my-page',
      component: Page1MyPage,
    },
  ],
})
