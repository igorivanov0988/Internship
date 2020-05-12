import { combineReducers } from 'redux'
import { reducer as reduxForms } from 'redux-form'

import auth from "./auth";
import signUp from "./signUp";

export default combineReducers({
    auth,
    // signUp,
    from: reduxForms
})