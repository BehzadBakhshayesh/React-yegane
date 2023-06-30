import { apps } from '../Data/apps'

export function appsList (state=apps, action){
    switch (action.type){
        case 'APPS' : return state
        case  'DELET_APP' : return state.filter(app => app.id !== action.payload)
        case 'ADD_APP' : return [...state, action.payload]
        default : return state
    }
}