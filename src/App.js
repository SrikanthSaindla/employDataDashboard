

import React,{useState} from 'react'
import Right from './components/RightComp'
import Left from './components/LeftComp'
import {v4 as uuidv4} from "uuid"
import "./App.css"
 
 


const Employ=[
  {
    "id": 1001,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Thomas",
    "lastName": "Leannon",
    "email": "Thomas.Leannon@dummyapis.com",
    "contactNumber": "4121091095",
    "age": 43,
    "dob": "26/08/1979",
    "salary": 1,
    "address": "Address1"
  },
  {
    "id": 1002,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Faye",
    "lastName": "Sauer",
    "email": "Faye.Sauer@dummyapis.com",
    "contactNumber": "4914696673",
    "age": 60,
    "dob": "28/06/1962",
    "salary": 2,
    "address": "Address2"
  },
  {
    "id": 1003,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Deven",
    "lastName": "Halvorson",
    "email": "Deven.Halvorson@dummyapis.com",
    "contactNumber": "4479795571",
    "age": 29,
    "dob": "06/01/1993",
    "salary": 3,
    "address": "Address3"
  },
  {
    "id": 1004,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Melisa",
    "lastName": "Schuppe",
    "email": "Melisa.Schuppe@dummyapis.com",
    "contactNumber": "4443995334",
    "age": 38,
    "dob": "06/09/1984",
    "salary": 4,
    "address": "Address4"
  },
  {
    "id": 1005,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Dell",
    "lastName": "Kris",
    "email": "Dell.Kris@dummyapis.com",
    "contactNumber": "4505692843",
    "age": 89,
    "dob": "14/03/1933",
    "salary": 5,
    "address": "Address5"
  },
  {
    "id": 1006,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Marcia",
    "lastName": "Gutmann",
    "email": "Marcia.Gutmann@dummyapis.com",
    "contactNumber": "4746199430",
    "age": 56,
    "dob": "24/07/1966",
    "salary": 6,
    "address": "Address6"
  },
  {
    "id": 1007,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Jarrod",
    "lastName": "Ortiz",
    "email": "Jarrod.Ortiz@dummyapis.com",
    "contactNumber": "4859095720",
    "age": 82,
    "dob": "26/12/1940",
    "salary": 7,
    "address": "Address7"
  },
  {
    "id": 1008,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Gabriella",
    "lastName": "Wilkinson",
    "email": "Gabriella.Wilkinson@dummyapis.com",
    "contactNumber": "4379190775",
    "age": 36,
    "dob": "24/06/1986",
    "salary": 8,
    "address": "Address8"
  },
  {
    "id": 1009,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Elisabeth",
    "lastName": "Hayes",
    "email": "Elisabeth.Hayes@dummyapis.com",
    "contactNumber": "4394091994",
    "age": 66,
    "dob": "17/08/1956",
    "salary": 9,
    "address": "Address9"
  },
  {
    "id": 1010,
    "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
    "firstName": "Jaime",
    "lastName": "Reichel",
    "email": "Jaime.Reichel@dummyapis.com",
    "contactNumber": "4622392580",
    "age": 41,
    "dob": "21/01/1981",
    "salary": 10,
    "address": "Address10"
  }
]

const App = () => {
   
  const [NewUser,setUser]=useState(false)
  const[emp,setEmp]=useState(Employ)
  const [active,setActive]=useState(emp[0])
     const [data,setData]=useState({
        fname:'',
        sname:'',
        email:'',
        image:'',
        mobile:'',
        address:'',
        salary:'',
        date:''

     })
     const{fname,sname,email,image,mobile,salary,date,
    address}=data
    const  inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
        e.preventDefault()
         const newUser={
            id:uuidv4(),
            imageUrl:'https://cdn-icons-png.flaticon.com/512/0/93.png',
            firstName:data.fname,
            lastName:data.sname,
            email:data.email,
            contactNumber:data.mobile,
            dob:data.date,
            salary:data.salary,
            address:data.address
         }
         setEmp([...emp,newUser])
         console.log(emp)

    }
  const ChangeHandler=(id)=>{
  const res=Employ.find((each)=>each.id===id)
  setActive(res)

   
    
  }
  const deleteHand=(id)=>{
   const res=emp.filter((each)=>each.id!==id)
     setEmp(res)
  }
  return (
    <div className='app-container'>
      <div className='top'> 
      <h1>Employ Database Management</h1>
      <button className='btn btn-danger'
      onClick={()=>setUser(!NewUser)}>Add</button>
      </div>
      <div className='main'>
        <Left ChangeFun={ChangeHandler} Employ={emp} deleteFun={deleteHand}/>
        <Right active={active}/>
      </div>
      {NewUser && <div className='NewUser'>
        <center> 
         
        <form onSubmit={submithandler}> 
        <h3>Add User</h3>     
        <input type="text"
        placeholder='fisrt name' name='fname'
        value={fname} onChange={inputHandler}/> 
        <input type='text '
        placeholder='Second name' name="sname"
        value={sname} onChange={inputHandler}/> 
       
        <input type="url" placeholder='ImageUrl'
        name="image"  value={image} onChange={inputHandler}/> 
        <input type="email" placeholder='Email'
        name="email"  value={email} onChange={inputHandler}/>
        <input type="number" placeholder='salary'
        name="salary"  value={salary} onChange={inputHandler}/>
        <input type="number" placeholder='number'
        name="mobile"  value={mobile} onChange={inputHandler}/>
        <input type="text" placeholder='Address'
        name="address"  value={address} onChange={inputHandler}/>
        <input type="date" placeholder='mm/dd/yyyy'
        name='date' value={date} onChange={inputHandler}/>
        <button className='btn btn-outline-primary '
        style={{width:"30%"}} type='submit'>Add</button>
        </form>
      </center>
    </div>}
      </div>
  )
}

export default App

