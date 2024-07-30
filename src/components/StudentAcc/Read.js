import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Read() {

    const[getData, setGetData] = useState([]);
const {id} = useParams();


useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/students/regi'+ id)
    .then((res) => {
      console.log(res.data);
      setGetData(res.data)
    }).catch((error) =>
      console.log(error))

},[id])
  return (
    <>
       <h3>Details of User</h3>
       
       <div className='mb-2'>
         <strong>Name: {data.name}</strong>
       </div>
       <div className='mb-2'>
         <strong>UserName: {data.username}</strong>
       </div>
       <div className='mb-2'>
         <strong>Email: {data.email}</strong>
       </div>
       <div className='mb-2'>
         <strong>Phone: {data.phone}</strong>
       </div>
    </>
  )
}

export default Read