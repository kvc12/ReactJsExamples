import FComponent from "./FComponent";
import { useState } from "react";
import DispCom from "./DispCom";

function App() {
  const [counter, setCounter] = useState(10);
  const incrementCounter = () => setCounter(counter+1);

  return (
    <div><div>o5 react props</div>
      <FComponent onClickFunction={incrementCounter}/>
      <DispCom message={counter}/>
    </div>
  );
}

export default App;

