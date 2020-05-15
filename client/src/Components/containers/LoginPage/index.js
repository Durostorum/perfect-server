import React, { Component } from "react";
import LoginForm from "../../../Pages/LogInPage";

class Login extends Component {
  render() {
    return <LoginForm onLogin={this.props.onLogin} />;
  }
}

export default Login;
