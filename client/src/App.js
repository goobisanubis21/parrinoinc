import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/Nav/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
