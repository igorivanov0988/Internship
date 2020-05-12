import {LOGOUT} from "../../constants";

export const Log_Out = (payload) => {
    return {
        type: LOGOUT.LOGOUT_REQUEST,
        payload: payload
    }
}