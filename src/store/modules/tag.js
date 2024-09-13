// initial state
import Tag from "@/api/Tag.js";

const state = () => ({
    tagList: []
})

// getters
const getters = {
    getTags(state) {
        return state.tagList;
    }
}

// mutations
const mutations = {
    SET_TAGS(state, payload) {
        state.tagList = payload;
    }
}

// actions
const actions = {
    // get tags data
    getTags({ commit }) {
        return new Promise((resolve, reject) => {
            Tag.tags().then(response => {
                const resData = response.data
                console.log('resData: ', resData)
                commit('SET_TAGS', resData)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}