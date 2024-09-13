// initial state
const state = () => ({
    layout: 'auth',
    isShowSidebar: false
})

// getters
const getters = {
    layout(state) {
        return state.layout;
    }
}

// actions
const actions = {}

// mutations
const mutations = {
    setLayout(state, payload) {
        state.layout = payload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}