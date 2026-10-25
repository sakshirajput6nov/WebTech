import React from 'react'
import Card from './Card'
const Parent = () => {
    // copy image address
const emp=[{fullname:"Virat",age:38,address:"Delhi",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf40Lbq7VO-BhmXixIapTIUnxu5oBxqMRgLHuHbv0ag&s=10"},
    {fullname:"Dhoni",age:45,address:"Chennai",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfQeMipZHv5-FW-XkKHKE81eHG-t8cA45MZq5BqpddQ&s=10"},
    {fullname:"Rahul",age:37,address:"Mumbai",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VPzl-1QG70LiRAZP0dL_hr0z-T19GSgrzBiqGUOwIw&s"}
]
    
  return (
    <div className='cardContainer'>
        {emp.map((element,index) => <Card key={index} e={element}/>)}
    </div>
  )
}

export default Parent