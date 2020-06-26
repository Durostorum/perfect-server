/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./loginform.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  handleLogin = (provider) => {
    window.location.assign(`http://localhost:3001/auth/${provider}`);
  };
  render() {
    return (
      <>
        <div className="loginbody">
          {" "}
          <MDBContainer className="form-body">
            <MDBRow>
              <MDBCol md="6 offset-3">
                <MDBCard>
                  <div className="header pt-3 peach-gradient">
                    <MDBRow className="d-flex justify-content-center">
                      <h3 className="white-text mb-3 pt-3 font-weight-bold">
                        Log in
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody className="hi mx-4 mt-4">
                    <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                      <MDBBtn
                        social="gplus"
                        className="google-btn btns"
                        size="lg"
                        onClick={() => this.handleLogin("google")}
                      >
                        <MDBIcon
                          fab
                          icon="google-plus-g  fa-lg"
                          className="pr-3"
                        />
                        LOGIN WiTH Google
                      </MDBBtn>
                      <MDBBtn
                        social="slack"
                        size="lg"
                        onClick={() => this.handleLogin("slack")}
                        className="slack-btn btns"
                      >
                        <MDBIcon fab icon="slack fa-lg" className="pr-4" />
                        LogIn with Slack
                      </MDBBtn>
                      <MDBBtn
                        className="fb-btn btns"
                        social="fb"
                        size="lg"
                        onClick={() => this.handleLogin("facebook")}
                      >
                        <MDBIcon fab icon="facebook-f fa-lg" className="pr-2" />{" "}
                        Login With Facebook
                      </MDBBtn>
                    </MDBRow>

                    {/* <MDBInput
                      label="Your password"
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    /> */}
                    {/* <p className="hi font-small grey-text d-flex justify-content-end">
                      Forgot
                      <a
                        href="#!"
                        className="hi dark-grey-text ml-1 font-weight-bold"
                      >
                        Password?
                      </a>
                    </p> */}
                    {/* <MDBRow className="d-flex align-items-center mb-4 mt-5">
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
                    </MDBRow> */}
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
