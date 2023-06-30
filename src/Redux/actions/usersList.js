import { loading } from './loading'


export const usersList = () => {
    return {
        type: 'USERS',
    }
}

export const deleteUser = (data) => {
    return {
        type: 'DELET_USER',
        payload: data
    }
}

export const addUser = (data) => {
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const editUser = (data) => {
    return {
        type: 'EDIT_USER',
        payload: data
    }
}
export const getusersList = () => {
    return (dispatch) => {
        dispatch(loading(true))
        setTimeout(() => {
            dispatch(usersList())
            dispatch(loading(false))
        }, 1500)
    }
}
