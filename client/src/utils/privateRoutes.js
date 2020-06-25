import React from "react";
import { Redirect, Route } from "react-router-dom";
import API from "../utils/API";

let userData = API.getUser().then((res) => {
  if (res.headers.access_token) {
    userData = res.headers.access_token;

  }
  userData = undefined;
});

export const ProtectedRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !userData ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
