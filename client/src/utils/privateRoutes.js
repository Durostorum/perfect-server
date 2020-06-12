import React from "react";
import { Redirect, Route } from "react-router-dom";
import API from "../utils/API";

let userData = API.getUser().then((res) => (userData = res.data));

export const ProtectedRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userData.token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
