import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BubblePage from './components/BubblePage.js';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);

  const ProtectedRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => 
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    } />
  }
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/BubblePage" component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
