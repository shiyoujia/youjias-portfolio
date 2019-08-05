import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactOrigin from './pages/ReactOrigin';
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
          <Route path="/react" component={ReactOrigin} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
