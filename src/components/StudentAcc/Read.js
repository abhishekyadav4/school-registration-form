import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';


function Read() {

 
  const [val, setVal] = useState()
  useEffect( ()=>{
      axios.get("http://localhost:8000/api/v1/students/getDetails").then((res)=>{
          // console.log(res.data.studentDetails);
          setVal(res.data.studentDetails)
      })
  },[]);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/students/delete/${id}`);
      console.log('Data deleted');
      // Update the UI after deletion
      // setVal(val.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
    <div className='studentDetails'>
    <h3>Details of Student</h3>

<table >

<thead>
<tr>
  <th>id</th>
  <th>Student Name</th>
  <th>Father Name</th>
  <th>Class</th>
</tr>
</thead>

{
val?<tbody>
  {
       val.map((item)=>{
          return(
             
                  <tr>
                      <td>{item._id}</td>
                      <td>{item.studentName}</td>
                      <td>{item.fatherName}</td>
                      <td>{item.studenClass}</td>
                      {/* <td><Link to={'edit/'+item._id}>Edit</Link></td>  */}
                       {/* <td><Link to ={'/delete/'+ item._id}>Dlt</Link></td>  */}
                       <td><button  onClick={()=>deleteUser(item._id)}>Dlt</button></td> 
                  </tr>
            
          )
      })
  }
</tbody>

: <p>data not fetching</p>
}

</table>
    </div>
     


    </>
  )
}

export default Read