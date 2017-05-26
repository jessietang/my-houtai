/**
 * Created by jessietang on 2017/5/12.
 */
  const actions = {
    toggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
      console.log('test...')
    },
    save: ({commit}, activity) => {
      commit('SAVE', activity)
    },
    publish: ({commit}, activity) => {
      commit('PUBLISH', activity)
    },
    handleRemove: ({commit}, selectItems) => {
      commit('HANDLE_REMOVE', selectItems)
    },
    handleMoveToTop: ({commit}, selectItems) => {
      commit('HANDLE_MOVE_TO_TOP', selectItems)
    }
  }
  export default actions
