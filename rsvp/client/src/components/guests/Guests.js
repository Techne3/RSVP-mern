import React,{useContext} from 'react'
import Guest from './Guest'

//context
import GuestContext from '../../context/guestContext/GuestContext'

function Guests() {
    const {guests} = useContext(GuestContext)
    return (
        <div className="guests">
            {guests.map(item=> <Guest key={item.id}  guest={item}/> )}
        </div>
    )
}

export default Guests
