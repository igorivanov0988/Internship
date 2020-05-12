import { AUTH } from '../../constants/'

export const login = (payload) => {
    return {
        type: AUTH.LOGIN_REQUEST,
        payload: payload
    }
}



