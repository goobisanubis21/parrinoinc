import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/Nav/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import ChildrensBook from './pages/ChildrensBook';
import RRated from './pages/RRated';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/books/children" component={ChildrensBook} />
            <Route exact path="/books/rrated" component={RRated} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
