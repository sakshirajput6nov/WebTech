import React from 'react'
import Myfile from './Myfile';
const Child=()=>{
    return(
        <React.Fragment> 
            <h4>I am Child Component</h4>
            <Myfile/>
        </React.Fragment>
    );
};
export default Child;