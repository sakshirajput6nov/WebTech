import React from 'react'
import Card from './Card'
const Parent = () => {
    const fullname ="virat kholi";
  return (
    <div>
        Parent
        {/* <Card/> */}
        {/* children props  */}
        {/* <Card fullname={"Sakshi rajput"} age={18} team="india"> */}
           {/* <h2> hello developer</h2>
           <h1>i am h1 tag</h1>
           JAI mata dii */}
        {/* </Card> */}
        {/* <Card/> */}
        {/* <Card fullname="abc"/> */}
        {/* immutable props  primitive props  */}
        <Card fullname={fullname}/>


    </div>
  )
}

export default Parent;
