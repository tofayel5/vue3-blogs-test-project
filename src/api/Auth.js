// auth related API.
import request from '@/utils/request'
export default {
    login(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    },
    register(data) {
        return request({
            url: '/register',
            method: 'post',
            data
        })
    },
    resetPassword(data) {
        return request({
            url: '/reset-password',
            method: 'post',
            data
        })
    },
    forgotPassword(data) {
        return request({
            url: '/forgot-password',
            method: 'post',
            data
        })
    },
    logout() {
        return request({
            url: '/auth/logout',
            method: 'post'
        })
    }
}