import React from 'react'
import { Navigate,Outlet } from 'react-router'


const SecureNavigation =()=> {
  
    const userauthetication= localStorage.getItem('user');
    if (userauthetication){
      return <Outlet />
    } else {
      return <Outlet />
      
    }

}


export default SecureNavigation