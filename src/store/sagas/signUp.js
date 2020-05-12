import { put, takeLatest, call } from 'redux-saga/effects'


import {AUTH, SIGNUP} from '../../constants'
import { signUp } from '../../api/signUp'

function* sign(action) {
    const { name, email, password  } = action.payload
    const response = yield call(signUp, name, email, password)

    yield put({ type: AUTH.SUCCESS, payload: response })
}

export default function* watchSignUp() {
    yield takeLatest(SIGNUP.SIGN_REQUEST, sign)
}