/**
 * Created by jessietang on 2017/5/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const date = 'Mon Oct 17 2016 00:00:00 GMT+0800 (中国标准时间)'
const ruleForm = {
  name: '测试活动',
  fenLeis: [
    {name: '未发布'},
    {name: '测试活动'},
    {name: '精彩活动'}
  ],
  fenLei: '未发布',
  tags: [{name: '喳喳'}],
  activeStartTimeDate: date,
  activeStartTimeTime: '00:45',
  activeEndTimeDate: date,
  activeEndTimeTime: '00:45',
  signStartTimeDate: date,
  signStartTimeTime: '00:45',
  signEndTimeDate: date,
  signEndTimeTime: '00:45',
  activePerson: '',
  activePersonNum: '',
  activeDescribe: '',
  UseMsgShow: '',
  evaluate: '',
  adTitle: '',
  adContent: '',
  adLink: '',
  province: '广东省',
  city: '广州市',
  detail: '番禺区广州大学城超谷科技园'
}

const state = {
  sidebar: {
    opened: !+Cookies.get('sidebarStatus')
  },
  userInfo: {
    avatar_img: 'http://1.shrd.zh.ashford.com.edgekey.net/L/8/xjJwXaElI.webp'
  },
  ruleForm: ruleForm,
  tableData: [
    {
      id: '001',
      title: '王小虎',
      type: '测试活动',
      status: '已结束',
      readNum: 200,
      signUpNum: 100,
      auditNum: 100
    }, {
      id: '002',
      title: '王小虎',
      type: '测试活动',
      status: '已结束',
      readNum: 200,
      signUpNum: 100,
      auditNum: 100
    }, {
      id: '003',
      title: '王小虎',
      type: '测试活动',
      status: '已结束',
      readNum: 200,
      signUpNum: 100,
      auditNum: 100
    }, {
      id: '004',
      title: '王小虎',
      type: '测试活动',
      status: '已结束',
      readNum: 200,
      signUpNum: 100,
      auditNum: 100
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
