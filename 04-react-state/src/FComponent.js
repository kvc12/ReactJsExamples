//import {useState} from "react";  //react is module in this react class present and this method useState method present
import React from 'react'
function FComponent(){
   const [count, setCount]= React.useState(0);  //function that give one array
    //count is user defined

    return (
        <div>
        <h3>Manage <b>state</b> in Functional Component</h3>
        <button className="btn btn-success mr-2" 
        onClick={()=>{ setCount(count+1); }}> 
        + </button>
        <button className="btn btn-outline-primary mr-2">{count}</button>
        
        <button className="btn btn-success" onClick={()=> {if (count>0) setCount(count-1);}}>
        -</button>
   </div>
    );
}

export default FComponent;