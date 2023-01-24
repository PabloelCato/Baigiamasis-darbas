import React, { useEffect, useState } from "react"; 
// import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
// import { application } from "express";

// const Loging = () => {

// const[emailname,setEmail] = useState('')
// const[password,setPassword] = useState('')

// const[LoginStatus,setLoginStatus] = useState('')

// const login = (e) => {
//   e.preventDefault();
//     Axios.post('http://localhost:3001/login', {
//       emailname: emailname, 
//       password: password,
//     }).then((response) => {
//       if(response.data.message){
//         setLoginStatus(response.data.message);
//       } else {
//         setLoginStatus(response.data[0].username)
//       }
//     });
//   };
  
//   return (
//     <div className="App"> 
//   <div className="login">
//     <h1>Login</h1>
//     <form>
//     <label>Email</label>
//     <input 
//     type="text" placeholder="Username..." onChange= {(e) => {
//       setEmail(e.target.value);
//     }}
//     />
//     <label>Password</label>
//     <input type="text" placeholder="Password..." onChange= {(e) => {
//       setPassword(e.target.value);
//     }}
//     />
//     <button onClick={ login }> Login </button>
//     <span>
//         Don't you have an account? <Link to="/register">Register</Link>
//         </span>
//         </form>
//   </div>
//   <h1>{LoginStatus}</h1>
//   </div>
// )};


// export default Loging;

// // import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";;

// const Loging = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [err, setError] = useState(null);

//   const navigate = useNavigate();

//     const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await (inputs)
//       navigate("/Cars");
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };
//   return (
//     <div className="auth">
//       <h1>Login</h1>
//       <form>
//         <input
//           required
//           type="text"
//           placeholder="username"
//           name="username"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="password"
//           placeholder="password"
//           name="password"
//           onChange={handleChange}
//         />
//         <button onClick={handleSubmit}>Login</button>
//         {err && <p>{err}</p>}
//         <span>
//           Don't you have an account? <Link to="/register">Register</Link>
//         </span>
//       </form>
//     </div>
//   );
// };
// export default Loging;


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
