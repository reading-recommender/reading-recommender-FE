import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from "./PrivateRoute";
import Questions from './components/Questions';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/questions"  component={Questions} />
    </div>
  );
}

export default App;
