import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";

function GuestState(props) {
  const initialState = {
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
            id:3,
            name:'Johnny main',
            phone: '555-555-5555',
            dietary:'Vegan',
            isconfirmed:false,
        },
    ]
  };
  const [state, dispatch] = useReducer(GuestReducer, initialState);
  return (
    <GuestContext.Provider
      value={{guests: state.guests }}
    >
      {props.children}
    </GuestContext.Provider>
  );
}

export default GuestState;
