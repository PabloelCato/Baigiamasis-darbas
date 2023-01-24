import React, { useState } from "react";
// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


// const Signup = () => {

// const navigate = useNavigate();
// const[firstnameReg,setFirstnameReg] = useState('')
// const[lastnameReg,setLastnameReg] = useState('')
// const[emailnameReg,setEmailReg] = useState('')
// const[passwordReg,setPasswordReg] = useState('')

// const register = (e) => {
//   e.preventDefault();
//     Axios.post('http://localhost:3001/register', {
//       firstname: firstnameReg, 
//       lastname: lastnameReg, 
//       email: emailnameReg, 
//       password: passwordReg,
//     }).then((response) => {
//       navigate("/Login")
//       console.log(response);
//     });
//   };
//   return (
//     <div className="App">
//       <div className="registration">
//       <form>
//         <h1>Registration</h1>
//         <label>Firstname</label>
//         <input type="text" placeholder="Firstname..." onChange= {(e) => {
//           setFirstnameReg(e.target.value);
//         }}
//         />
//         <label>Lastname</label>
//         <input type="text" placeholder="Lastname..." onChange= {(e) => {
//           setLastnameReg(e.target.value);
//         }}
//         />
//         <label>Email</label>
//         <input type="text" placeholder="Email..." onChange= {(e) => {
//           setEmailReg(e.target.value);
//         }}
//         />
//         <label>Password</label>
//         <input type="text" placeholder="Password..." onChange= {(e) => {
//           setPasswordReg(e.target.value);
//         }}
//         />
//         <button onClick={register}> Register </button>
//         Do you have an account? <Link to="/Login">Login</Link>
//         </form>
//       </div>
// </div>
// )};
//       export default Signup;

const Signup = () => {

  const[firstname,setFirstname] = useState('')
  const[lastname,setLastname] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();
  
  // useEffect(() =>{
  //   const auth = localStorage.getItem('user');
  //   if (auth) {
  //     navigate('/')
  //   }
  // }, [])
  
  const handleregister = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:3001/register",{
      method: 'post',
      body: JSON.stringify({firstname,lastname,email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
navigate('/Login')

  }
  return (
  <div className="register">
    <h1>Register</h1>
    <form>
    <label>Firstname</label>         
    <input type="text" placeholder="Firstname..." onChange= {(e) => 
    setFirstname(e.target.value)} value={firstname} />
    <label>Lastname</label>
    <input type="text" placeholder="Lastname..." onChange= {(e) => 
    setLastname(e.target.value)} value={lastname} />
    <label>Email</label>
    <input type="text" placeholder="Username..." onChange= {(e) => 
      setEmail(e.target.value)} value={email} />
    <label>Password</label>
    <input type="text" placeholder="Password..." onChange= {(e) => 
      setPassword(e.target.value)} value={password} />
    <button onClick={ handleregister }> Register </button>
    <span>
    Do you have an account? <Link to="/login">Login</Link>
        </span>
        </form>
  </div>
  )};
  
  export default Signup;
