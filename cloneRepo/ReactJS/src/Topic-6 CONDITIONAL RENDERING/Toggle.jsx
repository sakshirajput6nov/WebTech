import React from 'react'
import Dashboard from './Dashboard';
import LogIn from './LogIn';

const Toggle = () => {
    let isLogIn=false;
//if condition
    // if(isLogIn){
    //     return <Dashboard/>
    // }
     console.log("component re render ");
  return (
//    <LogIn/>

// ternary operator 
    isLogIn?<Dashboard/>: <LogIn/>

  )
}

export default Toggle