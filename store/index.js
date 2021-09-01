export const state = () => ({
  drawer: true,
  currentPage: '',
})

export const mutations = {
  SET_DRAWER: (state, value) => {
    state.drawer = value
  },
  SET_CURRENT_PAGE: (state, value) => {
    state.currentPage = value
  },
}

export const actions = {
  toggleDrawer({ commit }, value) {
    commit('SET_DRAWER', value)
  },
  changeCurrentPage({ commit }, value) {
    commit('SET_CURRENT_PAGE', value)
  },
}
