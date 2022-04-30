import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate()
    const handleSubmit= async (e) => {
        e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
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
    <div>
      <form onSubmit = {handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label"style={{color:"White",textDecoration:"none"}}>Email address</label>
    <input type="email" className="form-control" value={credentials.email} placeholder='Enter your Email ID' onChange = {onChange} id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{color:"	darkslategray",textDecoration:"none"}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"style={{color:"White",textDecoration:"none"}}>Password</label>
    <input type="password" className="form-control" value = {credentials.password} placeholder='Enter your Password' onChange = {onChange} name ="password" id="password"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>

    </div>
  )
}

export default Login
