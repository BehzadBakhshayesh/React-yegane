import {combineReducers} from 'redux'
import {usersList} from './usersList'
import {appsList} from './appsList'
import {loading} from './loading'
import {isLogin, submitLoading} from './Login'

export default combineReducers({
    usersList,
    appsList,
    loading,
    isLogin,
    submitLoading,
})
