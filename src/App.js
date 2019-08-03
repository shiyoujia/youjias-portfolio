import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactOrigin from './pages/ReactOrigin';
import Register from './pages/Register';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route path="/" exact component={Home} />
        <Route path="/react" component={ReactOrigin} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
