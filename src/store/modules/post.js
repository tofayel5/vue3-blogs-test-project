import Post from "@/api/Post";

const state = () => ({
    postInfo: {},
    currentPage: 1,
})

// getters
const getters = {
    getPosts(state) {
        return state.postInfo;
    },
    getCurrentPage(state) {
        return state.currentPage;
    }
}

// mutations
const mutations = {
    SET_POSTS(state, payload) {
        state.postInfo = payload;
    },
    SET_SET_CURRENT_PAGE(state, payload) {
        state.currentPage = payload;
    }
}

// actions
const actions = {
    // get tags data
    getPosts({ commit }, data) {
        return new Promise((resolve, reject) => {
            Post.posts(data).then(response => {
                const resData = response.data
                console.log('resData: ', resData)
                commit('SET_POSTS', resData)
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