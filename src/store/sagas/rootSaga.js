import { fork } from 'redux-saga/effects'

import auth from './auth'
import signUp from './signUp'
// import ForgotYourPasswordPage from './ForgotYourPasswordPage'

export default function* rootSaga() {
    yield fork (auth)
    yield fork (signUp)
    // yield fork (ForgotYourPasswordPage)
}