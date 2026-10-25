// new way
// const greet=<h1>hii people </h1>
//old way of react code , more complex in this way when multiple nested tag ,so chaos, new version is so easier then this bcz similar to html
// import React from "react";
// const h1=React.createElement("h1",{id:"heading"},"hello world i am sakshi ")
// export default h1;

// export default greet;

// const Greet=()=>{
//     return <h1>hello Qspider students </h1>
// }
// const PGreet=()=>{
//     return
//      <div>
//         <h1> i am div</h1>
//         {Greet()}
//         {/* <Greet></Greet> */}
//         {/* <Greet/> */}
//     </div>
// }
// export default PGreet;

import Component from "./Topic-1JSX-rules/Component";
// import Parent from './Topic-2 props/Parent'
// import Parent from './Topic-3Looping/Parent'
// import Parent from './Topic-4 children props/Parent'
// import Parent from './Topic-5 useStateHook/Parent'
// import Toggle from "./Topic-6 CONDITIONAL RENDERING/Toggle";
// import Toggle1 from "./Topic-6 CONDITIONAL RENDERING/Toggle1";
// import Counter from "./Topic-7 useRef hook/Counter";
// import SignUp from "./Topic-8 controlled form/SignUp";
import LogIn from "./Topic-8 controlled form/LogIn";

const App = () => {
  
  return (
    // <div id="App">
    //   <h1> hello App.jsx</h1>
    //   <h2> in App.jsx</h2>
    //   <Component />
    // </div>
    <div>
      {/* <Parent/> */}
      {/* <Toggle/> */}
      {/* <Toggle1/> */}
      {/* <Counter/> */}
      {/* <SignUp/> */}
      <LogIn/>

    </div>
  );
};
export default App;
