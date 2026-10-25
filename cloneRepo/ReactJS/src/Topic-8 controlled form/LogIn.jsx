import {useRef} from 'react'

const LogIn = () => {
    const searchTextRef=useRef();
    //searchTextRef={current:null}// is this 
    // searchTextRef={current:<input/>}// using ref={searchTextRef} in input tag
   
  return (
    <div>
       <h1>LogIn page </h1> 
       <input type="text" placeholder="search here ..." ref={searchTextRef} ></input>
       {/* <p>Query is {searchTextRef.current.value}</p>this will give error bcz initial this is undefined  */}
       <button onClick={()=>{ console.log(searchTextRef.current.value);}}>Search btn</button>

    </div>
  )
}

export default LogIn