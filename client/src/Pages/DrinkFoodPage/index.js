import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/Navbar";
import "../../Pages/DrinkFoodPage/drinkfood.css";
import API from "../../utils/API";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

class DrinkFood extends Component {
  constructor() {
    super();
  }
  state = {
    userName: "",
  };

  componentDidMount = () => {
    API.getUser()
      .then((res) => {
        if (res.data.user === undefined) {
          window.location.href = "login";
        } else {
          console.log("Res data exists", res.data);
          this.setState({ userName: res.data.user });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
          <div>
            <h1 className="h1">
              What are you in the mood for, {this.state.userName}?
            </h1>
          </div>
          <div className="row col-12">
            <div className="drink-food-card offset-3 m-auto">
              <MDBCol className="">
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://img4.goodfon.com/wallpaper/nbig/5/ae/iaponskaia-kukhnia-moreprodukty-assorti.jpg"
                    height=""
                    width=""
                    waves
                  />

                  <MDBCardBody>
                    <MDBCardTitle>Food</MDBCardTitle>
                    <MDBCardText>
                      Select this to see options of delicious foods. Nom Nom
                      Nom!
                      <br />
                      <br />
                    </MDBCardText>
                    <Link to="/foodpage">
                      <MDBBtn className="header pt-3 peach-gradient">
                        Select{" "}
                      </MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>

            {/* <div className="drink-food-card col-">
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://i.imgur.com/frgLB7o.jpg?1"
                  height=""
                  width="500"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Drinks</MDBCardTitle>
                  <MDBCardText>
                    Select this to see options of alcholic and non-alcholic
                    beverages. Cheers, mate!
                    <br />
                    <br />
                  </MDBCardText>
                  <MDBBtn
                    className="header pt-3 peach-gradient"
                    href="#"
                    to="/foodpage/:id"
                  >
                    Select
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default DrinkFood;
