import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Navbar.css'
import LogoImg from './betterhospital-02.png'


const Navbar=()=> {

  const userauthetication= localStorage.getItem('user');
  const navigate=useNavigate(); // hook
  
  function LogoutUser(){
    localStorage.clear();
    navigate('/signup');
  }


  return (
    <div className=''>

<header>
  <div className="inner">
    <div className="logo">
      <div>
      
        <img src={LogoImg} alt="Google logo" />
        
      </div>
    </div>
    <nav>


       { userauthetication? <li><span><Link to="/"> Home </Link></span></li>:null }
       { userauthetication? <li><span><Link to="/add"> Product </Link></span></li>:null }
       { userauthetication? <li><span><Link to="/update"> Update </Link></span></li>:null }
       
      <li>{userauthetication?<span ><div className='button'><Link onClick={LogoutUser}  to="/signup"> Logout </Link></div></span>
      :<span><Link to="/signup"> SignUp </Link></span>}</li>
       {userauthetication?null:
       <li><span><div className='button'><Link to="/login"> Login </Link></div></span></li>
       }
      
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar;