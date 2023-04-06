
 
import React   from 'react'
import "./index.css"
 

const Right = ({active}) => {
   
  
  return (
    <div className='rightCon'>
        <center> 
      <h2>Employ Details</h2>
      <hr/>
       <img src={active.imageUrl} alt="x"/>
        <ul>
            <li>{active.firstName} {active.lastName} </li>
            <li>{active.address}</li>
            <li>{active.email}</li>
            <li>phone:{active.contactNumber}</li>
            <li>DOB:{active.dob}</li>
             
        </ul>
       
      </center>
    </div>
  )
}

export default Right
