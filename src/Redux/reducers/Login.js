export const isLogin = (state=false, action) => {
    switch (action.type){
        case 'IS_LOGIN' : return action.payload
        case 'LOGOUT' : return false
        default : return state
    }
}

export const submitLoading = (state=false, action) => {
    switch (action.type){
        case 'SUBMIT_LOADING' : return action.payload
        default : return state
    }
}
