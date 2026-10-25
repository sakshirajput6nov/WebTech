import React from 'react'
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import { useState } from 'react';
const Toggle1 = () => {
   const[isLogIn,setIsLogIn]=useState(true);
    const handleClick=()=>{
        setIsLogIn(!isLogIn);
    }
    console.log("component re render ");
  return (
    <div>
        <button onClick={handleClick}>click me </button>
        {isLogIn?<Dashboard/>:<LogIn/>}
    </div>


  )
}

export default Toggle1;