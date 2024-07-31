

import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <>
   <div className='navbar'>


    <Link to="/" >Home</Link>
    <Link to="/create" >Create</Link>
    <Link to="/read" >Read</Link>
    </div>
   </>
  )
}

export default Header