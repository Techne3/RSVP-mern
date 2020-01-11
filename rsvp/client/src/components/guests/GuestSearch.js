import React,{useRef, useContext} from 'react'
import GuestContext from '../../context/guestContext/GuestContext'

function GuestSearch() {
  const {searchGuest,clearSearch} = useContext(GuestContext)

  const searchValue = useRef('')

  const handleChange = e => {
    if(searchValue.current.value !== ''){
      searchGuest(e.target.value)
    }else{
      clearSearch()
    }
  }

    return (
        <div>
        <input ref={searchValue} type="text" className="search" placeholder=" Search Guest"  onChange={handleChange} />
        <i className="fas fa-search search-icon" />
      </div>
    )
}

export default GuestSearch
