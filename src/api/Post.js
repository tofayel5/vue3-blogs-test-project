// post related API.
import request from '@/utils/request'
export default {
    posts() {
        return request({
            url: `/posts`,
            method: 'get'
        })
    },
    postInfo(id) {
        return request({
            url: `/posts/${id}`,
            method: 'get'
        })
    },
    postAdd(data) {
        return request({
            url: `/posts`,
            method: 'post',
            data
        })
    },
    postUpdate(data, id) {
        return request({
            url: `/posts/${id}`,
            method: 'put',
            data
        })
    },
    postDelete(id) {
        return request({
            url: `/posts/${id}`,
            method: 'delete'
        })
    }
}