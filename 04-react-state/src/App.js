import CComponent from "./CComponent";
import FComponent from "./FComponent";
import Header from "./Header";

function App() {
  return (
    <div className="container"> 
      <Header/>
      <FComponent/>
      <hr/>
      <CComponent/>
    </div>
  );
}

export default App;
