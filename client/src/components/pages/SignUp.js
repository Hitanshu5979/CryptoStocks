import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
const SignUp = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    
    const navigate = useNavigate()
    const handleSubmit= async (e) => {
        e.preventDefault();
    const {name,email,password} = credentials;
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            },
            body: JSON.stringify({name,email,password})
        });
const json = await response.json()
console.log(json);   
if(json.success){
  //Save the authtoken and redirect
  localStorage.setItem('token',json.authtoken);
  navigate('/')

}
else{
  alert("Invalid Credentials");
}

}     

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
}

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label"style={{color:"White",textDecoration:"none"}}>Full Name</label>
    <input type="text" className="form-control" id="name"name = "name" placeholder='Enter your Name' onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label"style={{color:"White",textDecoration:"none"}}>Email address</label>
    <input type="email" className="form-control" id="email"name="email" placeholder='Enter your email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"style={{color:"darkslategray",textDecoration:"none"}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"style={{color:"White",textDecoration:"none"}}>Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder='Create a passsword ' onChange={onChange} minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"style={{color:"White",textDecoration:"none"}}>Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder='Confirm your Password' onChange={onChange} minLength={5}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default SignUp
