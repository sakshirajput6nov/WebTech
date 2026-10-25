import React from 'react'
import Card from './Card'
const Parent = () => {
    const nname="sakshi";
    const aage=21;
    const e={age:12,fullname:"Sakshi Rajput",address:"Noida"};
  return (
    <div>Parent component
        <Card e={e}/>
    </div>
  )
}

export default Parent