import React from 'react'

const Card = (props) => {
  console.log(props);
  // object destructuring 
  // const {aage,nname}=props;

  // nested destructing 
  // const{age,fullname,address}=props?.e;

  return (
    <div>Card component
      fullname is {props?.e?.fullname}
      age is {props.e.age}
      address is {props.e.address}
        {/* your age is {props.age}
        your name is {props.name} */}
         {/* your age is {aage}
        your name is {nname} */}

    </div>
  )
}

export default Card