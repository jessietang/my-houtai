// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUi)

let AUTH_TOKEN = 'amVzc2lldGFuZyswOTI1' // base64编码 jessietang+0925 (用户名+密码) AUTH_TOKEN是请求头里面的一个权限参数
axios.defaults.baseURL = 'http://xapi.hcxdi.com/truck'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'

NProgress.inc(0.2) // 一个小增量
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false }) // 通过 ease(一个 CSS 中的 easing 值) 调整动画设置和速度 speed （毫秒ms）
// 想禁用进度环？设置 showSpinner 为 false

// 路由跳转有progress
// 使用 router.beforeEach 注册一个全局的 before 钩子
router.beforeEach((to, from, next) => {
  NProgress.start()
  next() // 确保要调用 next 方法，否则钩子就不会被 resolved
})
// 同样可以注册一个全局的 after 钩子，不过它不像 before 钩子那样，after 钩子没有 next 方法，不能改变导航
router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
