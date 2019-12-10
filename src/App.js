import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>   
          <Route path="/" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;