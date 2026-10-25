import React from 'react'
import './card.css'
const Card = (props) => {
  console.log(props);
  // props destructuring
  const{fullname,age,address,image}=props?.e;

  return (
    <div className="cardClass">Card component
      {/* fullname is {props?.e?.fullname}
      age is {props.e.age}
      address is {props.e.address} */}
       <div className="profile">
            <img src={image}alt={fullname}/>
       </div>

      <div className="info">
            <h3>fullname is {fullname}</h3>
            <h3> age is {age}</h3>
            <h3>address is {address}</h3>
       </div>
     
      

    </div>
  )
}

export default Card