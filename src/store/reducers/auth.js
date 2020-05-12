import { AUTH, LOGOUT } from '../../constants'

const defaultState = {
    token: null,
    user: [{name:'Igor'}],
}

export default function user(state = defaultState, action) {
    switch (action.type) {
        case AUTH.SUCCESS:
            return {
                ...state,
                token: action.payload,
                user: action.payload,
            }
        case LOGOUT.LOGOUT_REQUEST_SUCCESS:
            return {
                ...state,
                token: null,
                user: false,
            }
        default:
            return state
    }
}