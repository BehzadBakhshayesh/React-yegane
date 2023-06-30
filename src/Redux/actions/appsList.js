import { loading } from './loading'

export const appsList = () => {
    return {
        type: 'APPS',
    }
}

export const deleteApp = (data) => {
    return {
        type: 'DELET_APP',
        payload: data
    }
}

export const addApp = (data) => {
    return {
        type: 'ADD_APP',
        payload: data
    }
}

export const getappsList = () => {
    return (dispatch) => {
        dispatch(loading(true))
        setTimeout(() => {
            dispatch(appsList())
            dispatch(loading(false))
        }, 1500)
    }
}
