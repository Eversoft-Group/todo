import * as types from "./constant"
import * as api from "../../api/login"
import {toast} from "react-toastify"

const loginSuccessAction = (data) => ({
    type: types.POST_LOGIN,
    data
})

const loginUser = (data) => (dispatch) => {
    return api.login(data).then((res) => {
        dispatch(loginSuccessAction(res.data.token))
    }).catch((err) => {
        toast.error("Error on user login")
    })
}

export {loginUser}