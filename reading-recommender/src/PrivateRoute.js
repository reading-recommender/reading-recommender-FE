import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

 const PrivateRoute =  ( {component: Component,  guest, ...rest} )  => {
  return (
    <div>  {console.log(guest)}
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") || guest) {
          return <Component {...props}/>;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
    </div>); 
};

const mapStateToProps = (state) => ({
  guest: state.guest
})
export default connect(mapStateToProps,{})(PrivateRoute);