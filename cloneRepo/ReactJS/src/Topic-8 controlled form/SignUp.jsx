import {useState} from 'react'

const SignUp = () => {
  const[searchData,setSearchData]=useState();
  const handleChange=(e)=>{
    setSearchData(e.target.value);
    console.log("searchData : "+searchData);
  }
    return (
    <div>
        {/* SignUp Page  */}
        <input onChange={handleChange} type="text"value={searchData} placeholder='search here .....'></input>
        <h2>query :{searchData}</h2>
    </div>
  )
}

export default SignUp