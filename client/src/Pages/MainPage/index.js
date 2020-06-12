import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../Components/Carousel";
import { Col, Row, Container } from "../../Components/Grid";
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
    partMenu: false,
    fullMenu: false,
    fullMenuResults: [],
    collapseID: "",
    name: "",
    details: [],
    address: "7535 N Kendall Drive Unit 2510, Miami FL",
    location: false,
    userId: "",
  };
  handlePurchase = () => {
    API.placeOrder(this.state.userId, { order: this.state.cart });
  };

  outside = (id) => {
    API.getDetails(id)
      .then((res) => {
        this.setState({
          result: [...this.state.result, res.data[0]],
          details: [...this.state.details, res.data[0]],
          userId: res.data[1],
        });
      })
      .catch((err) => console.log(err));
  };

  switchTwo = (step) => {
    switch (step) {
      case 1:
        try {
          this.state.moreApps.forEach((apps) => {
            this.outside(apps);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 2:
        try {
          this.state.moreMain.forEach((main) => {
            this.outside(main);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 3:
        try {
          this.state.moreDesserts.forEach((desert) => {
            this.outside(desert);
          });
        } catch (err) {
          console.log(err);
        }
        break;

      case 4:
        try {
          this.state.moreDrinks.forEach((drink) => {
            this.outside(drink);
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
  displayLocation = () => {
    const { location } = this.state;
    this.setState({ location: !location });
  };
  displayMenu = () => {
    this.setState({ details: [] });
  };

  nextStep = () => {
    let { current, skipped, selectedSteps } = this.state;
    this.setState({
      result: [],
      details: [],
      current: current + 1,
      location: false,
      partMenu: false,
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

  async componentDidMount() {
    let newState = this.props.location.state;
    console.log("Lets see", newState);
    let { current } = this.state;
    this.setState({ ...newState }, () => {
      this.switchIt(current);
    });
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

  display = () => {
    if (this.state.partMenu === false) {
      const partMenu = true;
      this.setState({ partMenu });
    } else {
      const partMenu = false;
      this.setState({ partMenu });
    }
  };
  showCart = () => {
    const { showCart } = this.state;
    this.setState({ showCart: !showCart });
  };
  render() {
    return (
      <div className="body">
        <Container fluid>
          <div>
            <Row>
              <Col size="md-2">
                <MDBCard className="menucard">
                  <MDBCardBody id="features-card">
                    <MDBCardTitle className="title">Features</MDBCardTitle>

                    <MDBCardText>
                      <ul className="features-card-text">
                        <a className="icon" onClick={this.display}>
                          <MDBIcon icon="book-open" />
                        </a>
                        {this.state.partMenu && (
                          <List
                            details={this.state.details}
                            addToCart={this.addToCart}
                            next={this.nextStep}
                          />
                        )}
                        <a className="icon" onClick={this.displayLocation}>
                          <MDBIcon icon="globe-americas" />
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
                        <a className="icon">
                          <MDBIcon icon="cocktail" />
                        </a>

                        <a className="icon">
                          {" "}
                          <MDBIcon icon="phone" />
                        </a>
                        <a className="icon">
                          {" "}
                          <MDBIcon far icon="images" />
                        </a>
                        <a className="icon" onClick={this.showCart}>
                          <MDBIcon icon="shopping-cart" />
                        </a>
                        {this.state.showCart && (
                          <Cart
                            onClick={this.handlePurchase}
                            items={this.state.cart}
                            removeFromCart={this.removeFromCart}
                          />
                        )}
                      </ul>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </Col>

              {/* Top features for: {this.state.name} */}
              <div>
                <Col size="md-10">
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
              </div>

              {/* <Col size="3">
                <MDBCol className="">
                  <MDBCard className="cartcard">
                    <MDBCardBody>
                      <MDBCardTitle className="cart-title">Cart</MDBCardTitle>
                      <MDBCardText></MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Detail;
