/**
 * Created by jessietang on 2017/5/12.
 */
  import Cookies from 'js-cookie'
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
      Object.assign(state.ruleForm, payload)
      localStorage.setItem('ruleForm', JSON.stringify(payload))
    }
  }

  export default mutations
