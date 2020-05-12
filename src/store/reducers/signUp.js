import { SIGNUP } from '../../constants';

const defaultState = {
    user: [],
}

export default function signUp(state = defaultState, action) {
    switch (action.type) {
        case SIGNUP.SUCCESS:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}