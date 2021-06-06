import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import ViewStudent from "./component/students/ViewStudent";
import DeleteStudent from "./component/students/DeleteStudent";
import AddStudent from "./component/students/AddStudent";
import ModifyStudent from "./component/students/ModifyStudent";
import LoginComponent from "./component/pages/LoginComponent";
import LogoutComponent from "./component/pages/LogoutComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/students/logout" component={LogoutComponent} />
          <Route exact path="/students" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/students/about" component={About} />
          <Route exact path="/students/contact" component={Contact} />
          <Route exact path="/students/add" component={AddStudent} />
          <Route exact path="/students/view/:id" component={ViewStudent} />
          <Route
            exact
            path="/students/modify/:id"
            component={ModifyStudent}
          />
          <Route
            exact
            path="/students/delete/:id"
            component={DeleteStudent}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );

}

export default App;
