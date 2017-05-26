import Vue from 'vue'
import VueRouter from 'vue-router'

const activeManage = resolve => require(['../views/activeManage/index'], resolve)
const detail = resolve => require(['../views/activeManage/detail'], resolve)
const step1 = resolve => require(['../views/activePublish/step1'], resolve)
const step2 = resolve => require(['../views/activePublish/step2'], resolve)
const step3 = resolve => require(['../views/activePublish/step3'], resolve)
const step4 = resolve => require(['../views/activePublish/step4'], resolve)
const activePublish = resolve => require(['../views/activePublish'], resolve)
const axiosTest = resolve => require(['../views/axiosTest'], resolve)
const queryTest = resolve => require(['../views/queryTest'], resolve)
const paramsTest = resolve => require(['../views/paramsTest'], resolve)
const watchTest = resolve => require(['../views/watchTest'], resolve)

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/activeManage',
      component: activeManage
    },
    {
      path: '/detail/:activityId',
      component: detail
    },
    {
      path: '/activePublish',
      component: activePublish,
      children: [
        {path: '', component: step1},
        {path: 'step1', component: step1},
        {path: 'step2', component: step2},
        {path: 'step3', component: step3},
        {path: 'step4', component: step4}
      ]
    },
    {
      path: '/axiosTest',
      component: axiosTest
    },
    {
      path: '/queryTest',
      component: queryTest
    },
    {
      path: '/paramsTest/:proId',
      component: paramsTest
    },
    {
      path: '/watchTest',
      component: watchTest
    }
  ]
})
