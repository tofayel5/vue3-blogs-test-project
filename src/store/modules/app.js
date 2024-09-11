// initial state
const state = () => ({
    layout: 'app',
    isShowSidebar: false
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    setLayout(state, payload) {
        state.layout = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}