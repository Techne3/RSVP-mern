import React, { useState, useContext, useEffect} from "react";
import GuestContext from '../../context/guestContext/GuestContext'

function GuestForm() {
const {addGuest, editTable, updateGuest, clearEdit} =useContext(GuestContext)


useEffect(()=> {
  if(editTable !== null){
    setGuest(editTable)
  }else{
    setGuest({
      name: "",
      phone: "",
      dietary: "Non-Veg"
    });
  }
},[editTable])



  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg"
  });


  const { name, phone, dietary } = guest;

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if(editTable !== null){
      updateGuest(guest)
      clearEdit()
    }else{
      addGuest(guest)
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
  };

  return (
    <div className="invite-section">
      <h1>Invite Someone</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">
            Non-veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === "Non-Veg"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              onChange={handleChange}
              checked={dietary === "Vegan"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
          Pescatarian
            <input
              type="radio"
              name="dietary"
              value="pescatarian"
              onChange={handleChange}
              checked={dietary === "pescatarian"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn" />
      </form>
    </div>
  );
}

export default GuestForm;
