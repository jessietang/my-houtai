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
const fatherToChild = resolve => require(['../views/fatherToChild'], resolve)
const childToFather = resolve => require(['../views/childToFather'], resolve)

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: activeManage
    },
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
    // axios的用法
    {
      path: '/axiosTest',
      component: axiosTest
    },
    // 路由信息对象 $route.query
    {
      path: '/queryTest',
      component: queryTest
    },
    // 路由信息对象 $route.params
    {
      path: '/paramsTest/:proId',
      component: paramsTest
    },
    // watch的用法
    {
      path: '/watchTest',
      component: watchTest
    },
    // 父组件向子组件传值
    {
      path: '/fatherToChild',
      component: fatherToChild
    },
    // 子组件向父组件传值
    {
      path: '/childToFather',
      component: childToFather
    }
  ]
})
