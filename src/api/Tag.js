// tag related API.
import request from '@/utils/request'
export default {
    tags() {
        return request({
            url: `/tags`,
            method: 'get'
        })
    }
}