/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./registerform.css";
import API from "../../utils/API";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdbreact";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    email: "",
    pasword: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = async () => {
    let { name, email, password } = this.state;
    API.registerUser(name, email, password).then((user) =>
      console.log("SOMEHTIHSNASD")
    );
    console.log("SOMEHTIHSNASD");

    window.location.href = "/";
  };
  render() {
    return (
      <>
        <div className="loginbody">
          {" "}
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6 offset-3">
                <MDBCard>
                  <div className="header pt-3 peach-gradient">
                    <MDBRow className="d-flex justify-content-center">
                      <h3 className="white-text mb-3 pt-3 font-weight-bold">
                        Register
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody className="hi mx-4 mt-4">
                    <MDBInput
                      label="Name"
                      name="name"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      label="Email"
                      group
                      name="email"
                      type="text"
                      validate
                    />
                    <MDBInput
                      label="Password"
                      group
                      name="password"
                      type="password"
                      validate
                      containerClass="mb-0"
                    />
                    <MDBInput
                      label="Confirm password"
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    />

                    <MDBRow className="d-flex align-items-center mb-4 mt-5">
                      <MDBCol md="5" className="d-flex align-items-start">
                        <div className="text-center">
                          <span
                            onClick={this.handleRegister}
                            className="btn btn-amber"
                            role="button"
                          >
                            Register
                          </span>
                        </div>
                      </MDBCol>
                      <MDBCol
                        md="7"
                        className="d-flex justify-content-end"
                      ></MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}
export default Register;
