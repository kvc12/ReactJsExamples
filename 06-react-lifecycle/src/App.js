import Header from "./Header"
import ChildComponent from "./ChildComponent"
import { useState } from "react";

function App() {
const[loaded, setLoaded] = useState(true);
 
     
  return (
    <div className="container">
      <Header />
      <button className="btn btn-danger" onClick={
        ()=>{
          setLoaded(!loaded);
        }
      }> Show/Remove</button>
      <hr/>
      {loaded ?(<ChildComponent/>): null}
     
     
    </div>
  );
}

export default App;


