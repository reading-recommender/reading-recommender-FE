import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from "./PrivateRoute";
import Books from './components/Books';
import SignUpForm from './components/SignUpForm'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path='/signup' render={ (props) => <SignUpForm {...props} />} />
      <PrivateRoute exact path="/books" component={Books} />
    </div>
  );
}

export default App;
