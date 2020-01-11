import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,

} from '../type.js'

export default (state, {type, payload})=> {
    switch(type){
        case TOGGLE_FILTER:
            return{
                ...state,
                filterGuest: !state.filterGuest,
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
                search:null,
            }
        default:
        return state
    }
}