/**
 * Created by jessietang on 2017/5/12.
 */
  import Cookies from 'js-cookie'
  import local from './local'
  const mutations = {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SETRULEFORM: (state, payload) => {
      state.ruleForm = payload
      // Object.assign(state.ruleForm, payload)
      localStorage.setItem('ruleForm', JSON.stringify(payload))
    },
    SAVE: (state, activity) => {
      state.tableData.forEach(data => {
        if (data.id === activity.id) {
          data.title = activity.title
          data.type = activity.type
          data.status = activity.status
          data.startTime = activity.startTime
          data.endTime = activity.endTime
          data.place.province = activity.place.province
          data.place.city = activity.place.city
          data.place.detail = activity.place.detail
          data.signUpNum = activity.signUpNum
          data.auditNum = activity.auditNum
        }
      })
      local.set(state)
    },
    PUBLISH: (state, activity) => {
      activity.id = state.tableData.length + 1
      state.tableData.push(activity)
      local.set(state)
    },
    HANDLE_REMOVE: (state, selectItems) => {
      selectItems.forEach(item => {
        state.tableData.forEach(dataItem => {
          if (item.id === dataItem.id) {
            state.tableData.splice(state.tableData.indexOf(dataItem), 1)
          }
        })
      })
      local.set(state)
    },
    HANDLE_MOVE_TO_TOP: (state, selectItems) => {
      // 这里把选项列表颠倒一下再循环置顶，顺序就对了，它会根据你选的先后顺序来组成selectItems
      var selectItemsReverse = selectItems.reverse()
      selectItemsReverse.forEach(item => {
        var topItem = item
        console.log(topItem)
        state.tableData.forEach(dataItem => {
          if (item.id === dataItem.id) {
            state.tableData.splice(state.tableData.indexOf(dataItem), 1)
            state.tableData.unshift(topItem)
          }
        })
      })
      local.set(state)
    }
  }

  export default mutations
