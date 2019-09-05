import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
