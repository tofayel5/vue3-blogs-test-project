import Auth from '@/api/Auth'
import { getToken, setToken, removeToken } from '@/utils/cookie'
const state = () => ({
    token: getToken()
})

// getters
const getters = {
    token: state => state.token
}

// mutations
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}
// actions
const actions = {
    // user login
    login({ commit }, payload) {
        console.log('payload: ', payload)
        return new Promise((resolve, reject) => {
            Auth.login(payload).then(response => {
                console.log('login res: ', response.data)
                const resData = response.data
                const token = 'Bearer' + ' ' + resData.token
                console.log('token: ', token)
                commit('SET_TOKEN', token)
                setToken(token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            Auth.logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}