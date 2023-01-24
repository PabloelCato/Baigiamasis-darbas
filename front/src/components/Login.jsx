import React, { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";

const Loging = () => {

const[email,setEmail] = useState('')
const[password,setPassword] = useState('')

const navigate = useNavigate();

useEffect(()=>{
  const auth = localStorage.getItem('users');
  if(auth){
    navigate("/Cars")
  }
}, )


const handleLogin = async (e) => {
  e.preventDefault();
  let result = await fetch("http://localhost:3001/login",{
    method: 'post',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  result = await result.json();
  console.log(result)
  if(result)
  {
    localStorage.setItem('users',JSON.stringify(result));
    navigate("/Cars")
  }else{
    alert("Wrong password or username")
  }
}
return (
<div className="login">
  <h1>Login</h1>
  <form>
  <label>Email</label>
  <input 
  type="text" placeholder="Email..." onChange= {(e) => 
    setEmail(e.target.value)} value={email} />
  <label>Password</label>
  <input type="text" placeholder="Password..." onChange= {(e) => 
    setPassword(e.target.value)} value={password} />
  <button onClick={ handleLogin }> Login </button>
  <span>
      Don't you have an account? <Link to="/register">Register</Link>
      </span>
      </form>
</div>
)};

export default Loging;
