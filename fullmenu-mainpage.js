import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../Components/Carousel";
import { Col, Row, Container } from "../../Components/Grid";
import ShoppingCart from "../../Components/Carlos";
import List from "../../Components/Carlos/list";
import Cart from "../../Components/Carlos/cart";
import "../MainPage/MainPage.css";
import Location from "../../Components/Location";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class Detail extends Component {
  state = {
    current: 1,
    selectedSteps: [1],
    result: [],
    skipped: [],
    currentSlide: 0,
    itemId: 0,
    cart: [],
    fullmenu: false,
    collapseID: "",
    name: "",
    details: [],
    address: "7535 N Kendall Drive Unit 2510, Miami FL",
    location: false,
  };

  fetchMenu = () => {
    API.fullMenu()
      .then((res) => {
        this.setState({
          details: [...res.data],
        });
        console.log(
          "FETCHING MENUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
          this.state.details
        );
      })
      .catch((err) => console.log(err));
    console.log(this.state.result);
  };
  outside = (id) => {
    API.getDetails(id)
      .then((res) => {
        this.setState({
          result: [...this.state.result, res.data],
        });
      })
      .catch((err) => console.log(err));
    console.log(this.state.result);
  };

  // switchTwo = (step) => {
  //   switch (step) {
  //     case 1:
  //       try {
  //         this.state.moreApps.forEach((apps) => {
  //           this.outside(apps);
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       break;

  //     case 2:
  //       try {
  //         this.state.moreMain.forEach((main) => {
  //           this.outside(main);
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       break;

  //     case 3:
  //       try {
  //         this.state.moreDesserts.forEach((desert) => {
  //           this.outside(desert);
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       break;

  //     case 4:
  //       try {
  //         this.state.moreDrinks.forEach((drink) => {
  //           this.outside(drink);
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       break;

  //     default:
  //       console.log("switch case default");
  //       break;
  //   }
  // };

  nextStep = () => {
    let { current, skipped, selectedSteps } = this.state;
    this.setState({
      result: [],
      // details: [],
      current: current + 1,
      location: false,
      fullmenu: false,
    });

    // SHOWS CATEGORIES FROM WHICH WE HAVEN'T CHOSEN AN ITEM
    if (current >= 4 && skipped.length > 0) {
      this.setState(
        {
          current: skipped[0],
          skipped: skipped.filter((item) => {
            return item !== item[0];
          }),
        },
        () => {
          this.switchIt(skipped[0]);
        }
      );
    } else if (current > 4 && skipped.length < 1) {
      return;
    } else if (selectedSteps.includes(current + 1)) {
      this.setState(
        { current: current + 2, skipped: [...this.state.skipped, current] },
        () => {
          this.switchIt(current + 2);
          console.log(selectedSteps.includes(current));
        }
      );
    } else {
      this.setState(
        { current: current + 1, skipped: [...this.state.skipped, current] },
        () => {
          this.switchIt(current + 1);
          console.log(selectedSteps.includes(current));
        }
      );
    }
  };
  switchIt = (step) => {
    switch (step) {
      case 1:
        try {
          this.setState({ name: "Appetizers" });
          this.state.apetizers.forEach((main) => {
            this.outside(main);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 2:
        try {
          this.setState({ name: "Main Course" });
          this.state.mainCourses.forEach((main) => {
            this.outside(main);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 3:
        try {
          this.setState({ name: "Desserts" });
          this.state.desserts.forEach((main) => {
            this.outside(main);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 4:
        try {
          this.setState({ name: "Drinks" });
          this.state.drinks.forEach((main) => {
            this.outside(main);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      default:
        console.log("switch case default");
        break;
    }
  };
  select = () => {};
  componentWillMount = () => {
    let newState = this.props.location.state;
    console.log("Lets see", newState);
    let { current } = this.state;
    this.setState({ ...newState }, () => {
      this.switchIt(current);
    });
  };
  async componentDidMount() {
    this.fetchMenu();
  }

  prevStep = () => {
    this.setState({ result: [] });
    const { current } = this.state;

    if (current !== 1) {
      this.setState({ current: current - 1 }, () => {
        this.switchIt(current - 1);
      });
    } else {
      this.setState({ current: 4 }, () => {
        this.switchIt(4);
      });
    }
  };

  addToCart = (item) => {
    const cart = [...this.state.cart, item];
    this.setState({ cart });
  };

  removeFromCart = (index) => {
    const cart = [...this.state.cart];
    cart.splice(index, 1);
    this.setState({ cart });
  };
  displayLocation = () => {
    const { location } = this.state;
    !location
      ? this.setState({ location: true })
      : this.setState({ location: false });
  };
  displayMenu = () => {
    const { fullmenu } = this.state;
    !fullmenu
      ? this.setState({ fullmenu: true })
      : this.setState({ fullmenu: false });
  };
  render() {
    return (
      <div className="body">
        <Container fluid>
          <div className="box2">
            <Row>
              <Col size="md-2">
                <MDBCard className="menucard" style={{ width: "21rem" }}>
                  <MDBCardBody>
                    <MDBCardTitle className="title">Features</MDBCardTitle>

                    <MDBCardText>
                      <ul>
                        <a onClick={this.displayMenu}>
                          <MDBIcon icon="bars" />
                          More {this.state.name}
                        </a>
                        {this.state.fullmenu && (
                          <List
                            details={this.state.details}
                            addToCart={this.addToCart}
                            next={this.nextStep}
                          />
                        )}
                        <a onClick={this.displayLocation}>
                          <MDBIcon icon="globe-americas" /> Location
                        </a>
                        {this.state.location && (
                          <Location location={this.state.address} />
                        )}

                        {/* <a>
                          <MDBIcon icon="address-book" /> Reservations
                        </a>
                        <a>
                          {" "}
                          <MDBIcon icon="user-check" /> Reviews
                        </a> */}
                        <a>
                          <MDBIcon icon="cocktail" /> Happy Hour Menu
                        </a>

                        <a>
                          {" "}
                          <MDBIcon icon="phone" /> Contact
                        </a>
                        <a>
                          {" "}
                          <MDBIcon far icon="images" /> Gallery{" "}
                        </a>
                      </ul>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <h1 className="caro-row">
                Top features for: {this.state.name}
                {console.log(this.state.name, "NAME TEST")}
                <Col size="sm-5">
                  <Carousel
                    next={this.nextStep}
                    addToCart={this.addToCart}
                    result={this.state.result}
                    currentSlide={this.state.currentSlide}
                    onNext={() =>
                      this.setState({
                        currentSlide:
                          this.state.currentSlide < this.state.result.length - 1
                            ? this.state.currentSlide + 1
                            : 0,
                      })
                    }
                    onPrevious={() =>
                      this.setState({
                        currentSlide:
                          this.state.currentSlide > 0
                            ? this.state.currentSlide - 1
                            : this.state.result.length - 1,
                      })
                    }
                  ></Carousel>
                </Col>
              </h1>
              <Col size="3">
                <MDBCol className="">
                  <MDBCard className="cartcard">
                    <MDBCardBody>
                      <MDBCardTitle className="title2">Cart</MDBCardTitle>
                      <MDBCardText>
                        <Cart
                          items={this.state.cart}
                          removeFromCart={this.removeFromCart}
                        />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Detail;
