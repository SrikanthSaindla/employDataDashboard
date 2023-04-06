import React, {  useEffect, useState } from 'react'
import "./index.css"
 
 

const Left = ({ChangeFun,Employ,deleteFun}) => {

  useEffect(()=>{
    setData(Employ)
  },[Employ])

     const [data,setData]=useState([])
     
  return (
    <div className='leftCon'>
         
      <h2 style={{textAlign:"center"}}>Employ List</h2>
      <hr/>
      {data.map((each)=>(
        <div className='listData m-3' key={each.id}>
            <h4 onClick={()=>ChangeFun(each.id)}>{each.firstName}</h4> 
            <button className='btn btn-outline-danger m-3'
           onClick={()=>deleteFun(each.id)}>Delete</button>
        </div>
      ))}
       
    </div>
  )
}

export default Left
