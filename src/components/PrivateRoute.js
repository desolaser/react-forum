import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((store) => store.auth);
  const authExists =
    Object.keys(auth).length !== 0 && auth.constructor === Object;
  return (
    <Route
      {...rest}
      render={(props) =>
        authExists ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
