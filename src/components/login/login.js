import React,{useState} from 'react';
import '../signup/SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login =()=> {
 
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')
    const navigate= useNavigate();

    function authenticateUserLogin(){
        console.log(email +"    "+password);
        localStorage.setItem("user",JSON.stringify({email:"armish@gmail.com",password:"123"}));
        navigate('/');
        // axios.post("http://localhost:5000/login", ({email,password}) ).then(response=>{
        //     console.log(response);
        //     if (response){
        //         navigate("/");
        //     }
        // }).catch(error=>{
        //     console.log(error);
        // })

    }

      
  return (
    <div>

<div className="container">
  <div className="forms">
    <div className="form login">
      <span className="title"> Login </span>
      <form  >
     
        <div className="input-field">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon" />
        </div>
        <div className="input-field">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="password" placeholder="Enter your password" required />
          <i className="uil uil-lock icon" />
          <i className="uil uil-eye-slash showHidePw" />
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">Remember me</label>
          </div>
          <a href="#" className="text">Forgot password?</a>
        </div>
        <div className="input-field button">
          <input onClick={authenticateUserLogin} type="button" defaultValue="Login" />
        </div>
      </form>
  

    </div>
  </div></div>


    </div>
  )
}



export default Login;