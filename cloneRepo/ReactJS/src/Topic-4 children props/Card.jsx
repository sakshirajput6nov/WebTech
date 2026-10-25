import React from 'react'
// children props
// default props 
// primitive , non-primitive props 
// const Card = ({fullname="user",age=15,team="XY team"}) => {
const Card = (props) => {  
    // props.fullname="ms dhoni";// give error bcz props are immutable
  return (
    <div>
        {/* Card
        {props.children[0]}
         {props.children[1]}
        {props.children} */}
        <h1>fullname : {props.fullname}</h1>
        {/* <h1>age: {age}</h1>
        <h2>team : {team}</h2> */}
        
    </div>

  )
}

export default Card