import {useState,useRef} from 'react'

const Counter = () => {
    //array aayega useState(0) se usko destructing krte h (useState re render krta h component )
    const[count,setCount]=useState(0);

    // useRef re render nhi krta h component 
    // const countRef=useRef(0/initialValue)
    // give object i.e {current:0}
    //useRef does not trigger a re-render when its value changes, but it preserves the value between renders.
    const countRef=useRef(0);
  return (
    <div>
        Counter
        <div>
            <h3>useState counter </h3>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <h2>Count is {count}</h2>
        </div>
        <div>
            <h3>useRef counter </h3>
            <button onClick={()=>{countRef.current=countRef.current+1}}>Add</button>
             <h2>Count is {countRef.current}</h2>
        </div>
    </div>
  )
}

export default Counter