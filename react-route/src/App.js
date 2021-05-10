import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Loggin from "./Loggin";

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
              <Route  path="/home" component={Home} />
              <Route exact path="/" render={props => <Loggin {...props} />} />
          </Switch>
       </Router>
    </div>
  );
}

export default App;
