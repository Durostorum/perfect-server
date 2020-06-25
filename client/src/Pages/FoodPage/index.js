/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "../FoodPage/FoodPage.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
class foodpage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    foodPairings: [],
    name: "",
    userName: "",
  };

  foodClicked = (item) => {
    this.setState({
      app: item.apetizers,
      mainCourses: item.mainCourses,
      dessert: item.desserts,
      drink: [...item.drinks],
    });
  };
  componentDidMount() {
    this.loadFoods();
    this.setState({ ...this.state.foodPairings });
  }

  loadFoods = () => {
    API.getFoodPair()
      .then((res) => this.setState({ foodPairings: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="foodcategory">
          <h2>Choose a food category:</h2>
        </div>
        {this.state.foodPairings.map((food, index) => (
          <div key={index} className="card1 col-3 offset-">
            <MDBCol>
              <MDBCard style={{ width: "21rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={food.image}
                  height=""
                  width=""
                  waves
                />

                <MDBCardBody>
                  <MDBCardTitle>{food.name}</MDBCardTitle>
                  <MDBCardText>
                    {food.description}
                    <br />
                    <br />
                    <Link
                      to={{
                        pathname: "/foodpage/" + food._id,
                        state: { ...food },
                      }}
                    >
                      <MDBBtn
                        onClick={() => this.foodClicked(food)}
                        className="header pt-3 peach-gradient"
                      >
                        Select{" "}
                      </MDBBtn>
                    </Link>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    );
  }
}

export default foodpage;
