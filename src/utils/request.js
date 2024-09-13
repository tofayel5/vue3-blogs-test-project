import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/cookie'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API + '/api', // url = base url + request url
    baseURL: 'https://blogs.kingofkey.net/api', // url = base url + request url
    timeout: 0, // request timeout
    headers: {'Content-Type': 'application/json',}
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        console.log('config: ', config)
        if (store.getters.token) {
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response
        console.log('request-response: ', response)
        // add custom code
        if (response.status === 200) {
            return res.data
        } else {
            return Promise.reject(new Error(res.statusText || 'Error'))
        }
    },
    error => {
        console.log('err' + error) // for debug
        if (error.response.status === 422) {
            const errors = error.response.data.errors
            console.log(errors)
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)
export default service
