import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './Header';
import Browse from './Browse';

class App extends React.Component {

  render(){
    return (
    <Router>  
      <div className="container-fluid App">
          <Link to="/">
              <Header />
          </Link>
          <Browse />
      </div>
    </Router>
  );
  } 
}

export default App;
