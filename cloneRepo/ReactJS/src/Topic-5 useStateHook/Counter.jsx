import React from 'react'
import {useState} from "react"
const Counter = () => {

        // let count=0;// local JS variable could not be able to manage local state 
        const [count,setCount]=useState(0);// React state variable 
   
        const handleIncreaseClick=()=>{
            // alert(" increase btn  clicked");
            // count=count+1;
            //  console.log(count);
            setCount(count+1);
            console.log("re render bcz of incre");
        }
        const handleDecreaseClick=()=>{
            // alert(" Decrease btn  clicked");
             // count=count-1;
            //  console.log(count);
             setCount(count-1);
             console.log("re render bcz of decre");

        }
        console.log("component re render ");
  return (
    <div>
        <h1>i am Counter jsx </h1>
        <h2>count is {count}</h2>
        <button onClick={handleIncreaseClick}>Increase </button>
        {/* <button onClick={handleDecreaseClick}>Decrease</button> */}
        <button onClick={()=>{ setCount(count-1);
             console.log("re render bcz of decre");}}>Decrease</button>
        
    </div>
  )
  //whenever state variable value change then react will re render (re call ) the component again 
  // hamesha call karega Component ko for every change 
}

export default Counter;