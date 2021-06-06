import { Provider } from "react-redux";
import Header from "./component/Header";
import  MobileShop  from "./component/MobileShop";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <Header/>
     <MobileShop/> 
    </div>
    </Provider>
  );
}

export default App;
