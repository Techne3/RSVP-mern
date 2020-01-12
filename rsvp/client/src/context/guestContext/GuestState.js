import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";

//action types
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    DELETE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,

} from '../type'

function GuestState(props) {
  const initialState = {
   
    filterGuest: false,
    search: null,
    editTable: null,

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
            dietary:'pescatarian',
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


  //actions******************

  const addGuest = (guest) => {
    guest.id = Date.now()
    guest.isconfirmed = false
      dispatch({
          type:ADD_GUEST,
          payload:guest
      })
  }

const editGuest = (guest) => {
    dispatch({
        type:EDIT_GUEST,
        payload:guest
    })
}
 
const clearEdit = () => {
    dispatch({
        type:CLEAR_EDIT,
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

  const removeGuest = (id) => {
      dispatch({
          type:DELETE_GUEST,
          payload:id
      })
  }

  const updateGuest = (guest) => {
    dispatch({
        type:UPDATE_GUEST,
        payload:guest
    })
  }

  const toggleFilter = () => {
    dispatch({
        type:TOGGLE_FILTER
    })
  }

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search: state.search,
        editTable:state.editTable,
        toggleFilter, 
        searchGuest,
        clearSearch,
        addGuest,
        removeGuest,
        updateGuest,
        clearEdit,
        editGuest,
    }}
    >
      {props.children}
    </GuestContext.Provider>
  );
}

export default GuestState;
