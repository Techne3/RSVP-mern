import React,{useContext} from 'react'
import Guest from './Guest'

//context
import GuestContext from '../../context/guestContext/GuestContext'

function Guests() {
    const {guests, filterGuest, search} = useContext(GuestContext)

    return (
        <div className="guests">
            { search !== null ? search.map(item =><Guest key={item.id}  guest={item}/> ) :
            guests.filter(item=> !filterGuest || item.isconfirmed).map(item=> <Guest key={item.id}  guest={item}/> )
            }
        </div>
    )
}

export default Guests
  