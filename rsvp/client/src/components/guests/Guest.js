import React,{useContext} from "react";
import GuestContext from '../../context/guestContext/GuestContext'


function Guest({ guest }) {
  const {removeGuest, updateGuest, editGuest, clearEdit} = useContext(GuestContext)
  const {id, name, phone, dietary, isconfirmed, } = guest;

  //delete guest 
  const handleRemove = ()=> {
    removeGuest(id)
  }

  //confirm 
  const handleIsconfirmed = e => {
    updateGuest({...guest, isconfirmed: !isconfirmed})
  }

 

  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={ `${isconfirmed && 'confirm'} `}>
            Confirmed
            <i className={`fas fa-check-square ${isconfirmed && 'confirm'}  `} >
              <input type="checkbox" onChange={handleIsconfirmed} />
            </i>
          </label> 
        </div>
        <div>
          <button onClick={()=>editGuest(guest)}>
            <i className="fas fa-user-edit"></i>
          </button>
          <button onClick={handleRemove}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        {/* checks to see which dietary restriction - then and add className  to badgedepending on which is chosen*/}
        <span class={'badge ' + (dietary === 'Vegan' ? 'green' : dietary === 'Non-Veg' ? 'red' : 'seaGreen')}>{dietary}</span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Guest;
