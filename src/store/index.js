/**
 * Created by jessietang on 2017/5/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import local from './local'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Cookies from 'js-cookie'

Vue.use(Vuex)
// 把state用localStorage存储在本地
const state = local.get() ||
  {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    userInfo: {
      avatar_img: 'http://1.shrd.zh.ashford.com.edgekey.net/L/8/xjJwXaElI.webp'
    },
    activityStatus: ['未开始', '进行中', '已结束'],
    types: ['测试活动', '免费活动', '收费活动'],
    tableData: []
  }

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
