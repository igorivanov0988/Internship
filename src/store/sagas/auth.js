import { put, takeLatest, call, select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form';

import { AUTH, LOGOUT } from '../../constants'
import { auth } from '../../api/auth'

function* Login(action) {
    const  { login, password } = action.payload

    const token = yield select(({ auth }) => auth.token)

    const response = yield call(auth, login, password, token)
    yield put({ type: AUTH.SUCCESS, payload: response })
 }

 function* LogOut(action) {
     yield put({ type: LOGOUT.LOGOUT_REQUEST_SUCCESS })
 }

export default function* watchAdmin() {
    yield takeLatest(AUTH.LOGIN_REQUEST, Login)
    yield takeLatest(LOGOUT.LOGOUT_REQUEST, LogOut)
}