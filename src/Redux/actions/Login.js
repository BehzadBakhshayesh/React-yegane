import {message} from 'antd'

export const isLogin = (data) =>{
    return{
        type: 'IS_LOGIN',
        payload: data
    }
}

export const submitLoading = (data) =>{
    return{
        type: 'SUBMIT_LOADING',
        payload: data
    }
}

export const logout = () =>{
    return{
        type: 'LOGOUT',
    }
}

export const getlogin = (data) =>{
    return dispatch =>{
        dispatch(submitLoading(true))
        setTimeout(()=>{
            if(data.username === 'admin' && data.password === '123'){
                dispatch(isLogin(true))
                localStorage.setItem('token', 'myToken')
            }
            else{
                message.error('نام کاربری یا رمز عبور صحیح نمیباشد')
            }
            dispatch(submitLoading(false))
        },2000)
    }
}