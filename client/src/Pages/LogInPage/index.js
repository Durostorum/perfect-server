/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginform.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdbreact";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

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
                        Log in
                      </h3>
                    </MDBRow>
                    <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                      <a
                        href="http://localhost:3001/auth/facebook"
                        className="fa-lg p-2 m-2 fb-ic"
                        onClick={this.props.handleClick}
                      >
                        {/* <FacebookAuth /> */}
                        <MDBIcon
                          fab
                          icon="facebook-f"
                          size="lg"
                          className="white-text"
                        />
                      </a>
                      <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                        <MDBIcon fab className="fa-twitter white-text fa-lg" />
                      </a>
                      <a
                        href="/api/auth/google/redirect"
                        className="fa-lg p-2 m-2 gplus-ic"
                        onClick={this.googleAuth}
                      >
                        <MDBIcon
                          fab
                          className="fa-google-plus-g white-text fa-lg"
                        />
                      </a>
                    </MDBRow>
                  </div>
                  <MDBCardBody className="hi mx-4 mt-4">
                    <MDBInput label="Your email" group type="text" validate />
                    <MDBInput
                      label="Your password"
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    />
                    <p className="hi font-small grey-text d-flex justify-content-end">
                      Forgot
                      <a
                        href="#!"
                        className="hi dark-grey-text ml-1 font-weight-bold"
                      >
                        Password?
                      </a>
                    </p>
                    <MDBRow className="d-flex align-items-center mb-4 mt-5">
                      <MDBCol md="5" className="d-flex align-items-start">
                        <div className="text-center">
                          <Link
                            onClick={this.login}
                            className="btn btn-amber"
                            to="/drinkfood"
                            role="button"
                          >
                            Login
                          </Link>
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
export default LoginForm;
