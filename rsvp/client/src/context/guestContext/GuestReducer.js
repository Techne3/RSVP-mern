import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    DELETE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,

} from '../type.js'

export default (state, {type, payload})=> {
    switch(type){
        case TOGGLE_FILTER:
            return{
                ...state,
                filterGuest: !state.filterGuest,
            }  
        case ADD_GUEST:
            return{
                ...state,
                guests: [...state.guests, payload],
            }  
        case DELETE_GUEST:
            return{
                ...state,
                guests: state.guests.filter(item=> item.id !== payload),
            }  
        case UPDATE_GUEST:
            return{
                ...state,
                guests: state.guests.map(item => item.id === payload.id ?  payload:item),
            }  
        case EDIT_GUEST:
            return{
                ...state,
                editTable: payload 
            }  
        case CLEAR_EDIT:
            return{
                ...state,
                editTable:null
            }  
        case SEARCH_GUEST:
            const reg= new RegExp(`${payload}`, 'gi')
            return{
                ...state,
                search: state.guests.filter(item => item.name.match(reg))
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                search:null
            }
        default:
        return state
    }
}