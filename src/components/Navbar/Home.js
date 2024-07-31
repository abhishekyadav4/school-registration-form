import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
   <div className='home'>
   <h1>Welcome ! </h1>

<Link to="/create">Create</Link>
<Link to="/read">Read</Link>

   </div>
    </>
  )
}

export default Home