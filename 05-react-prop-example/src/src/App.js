import Header from "./Header";
import Button from "./Button"
import Display from "./Display";
import { useState } from "react";
import CComponent from "./CComponent";
import CComponentDipslay from "./CComponentDisplay";
import DecrementButton from "./DecrementButton";
function App() {
  const [counter,setCounter]  = useState(0);
  const incrementCounter = ()=>setCounter(counter+1);
  const decrementCounter = ()=>{if(counter>0){setCounter(counter-1);}};
  return (
    
    <div className = "container">
     <Header />
     <Button referenceMethod = {incrementCounter} />  

     <DecrementButton referenceMethod = {decrementCounter}/>
     <Display counterValue = {counter}/>
     
     {/* <CComponent referenceMethod = {incrementCounter} /> */}
     {/* <CComponentDipslay counterValue = {counter}/> */}
    </div>
  );
}

export default App;
