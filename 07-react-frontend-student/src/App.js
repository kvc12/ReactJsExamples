import Header from './component/pages/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './component/pages/Home';
import { DeleteStudent } from './component/student/DeleteStudent';
import AddStudent from './component/student/AddStudent';
import { ViewStudent } from './component/student/viewStudent';
import {  Card} from "@material-ui/core";
import UpdateStudent from './component/student/UpdateStudent';
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch><Card>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={Home} />
          <Route exact path='/students/add' component={AddStudent} />
          <Route exact path='/students/view/:id' component={ViewStudent} />
          <Route exact path='/students/update/:id' component={UpdateStudent} />
          <Route exact path='/students/delete/:id' component={DeleteStudent} />  
          </Card>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
