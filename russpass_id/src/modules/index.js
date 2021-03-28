import { combineReducers } from 'redux'
import auth from './auth'
import phone from './phone'
import data from './data'

export default combineReducers({
    auth,
    phone,
    data,
})