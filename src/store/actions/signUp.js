import { SIGNUP } from '../../constants';

export const signUp = (payload) => {
    return {
        type: SIGNUP.SIGN_REQUEST,
        payload: payload
    }
}