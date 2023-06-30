import { users } from '../Data/users'

export function usersList (state=users, action){
    switch (action.type){
        case 'USERS' : return state
        case 'DELET_USER' : return state.filter(user => user.id !== action.payload)
        case 'ADD_USER' : return [...state, action.payload]
        case 'EDIT_USER' : return state.map(user => (user.id === action.payload.id ? action.payload : user))
        default : return state
    }
}

