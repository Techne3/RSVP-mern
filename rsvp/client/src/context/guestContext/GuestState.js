import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";

//action types
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,

} from '../type'

function GuestState(props) {
  const initialState = {
    //filtering through guest array => toggle switch
    filterGuest: false,
    search: null,


    guests: [
        {
            id:1,
            name:'John Doe',
            phone: '555-555-5555',
            dietary:'Non-Veg',
            isconfirmed:false,
        },
        {
            id:2,
            name:'John Smith',
            phone: '555-555-5555',
            dietary:'Vegan',
            isconfirmed:true,
        },
        {
            id:3,
            name:'John Snow',
            phone: '555-555-5555',
            dietary:'Pescatarian',
            isconfirmed:true,
        },
        {
            id:4,
            name:'Johnny main',
            phone: '555-555-5555',
            dietary:'Vegan',
            isconfirmed:false,
        },
    ]
  };
  const [state, dispatch] = useReducer(GuestReducer, initialState);


  //actions
  const toggleFilter = () => {
    dispatch({
        type:TOGGLE_FILTER
    })
  }

  const searchGuest = (guest) => {
    dispatch({
        type:SEARCH_GUEST,
        payload: guest
    })
  }

  const clearSearch = () => {
    dispatch({
        type:CLEAR_SEARCH,
    })
  }


  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        toggleFilter, 
        searchGuest,
        clearSearch,
        search: state.search,
        
 
    }}
    >
      {props.children}
    </GuestContext.Provider>
  );
}

export default GuestState;
