import { createStore } from "vuex"
import app from './modules/app'
import auth from './modules/auth'
import tag from './modules/tag'
export default new createStore({
    modules: {
        app,
        auth,
        tag
    }
});
