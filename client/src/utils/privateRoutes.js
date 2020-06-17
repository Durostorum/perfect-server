import React from "react";
import { Redirect, Route } from "react-router-dom";
import API from "../utils/API";

let userData = API.getUser().then(
  (res) => (userData = res.headers.access_token)
);

export const ProtectedRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userData !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
