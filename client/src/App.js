/* eslint-disable default-case */
import React, { Component } from "react";
import "./App.css";
// import TypesOfFood from './components/TypeOfFood';
// import FoodCategory from './components/FoodCategory';
// import {items} from './data/items';
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import SignUpPage from './Pages/SignUpPage';
import DrinkFoodPage from "./Pages/DrinkFoodPage";
import foodpage from "./Pages/FoodPage/index";
import drinkpage from "./Pages/DrinkPage";
import Login from "./Pages/LogInPage";
import Navbar from "./Components/Navbar";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     typeOfFood: null,
  //     currentCategory: null,
  //     order: [],
  //     session: null,
  //   };
  // }
  // selectFoodType = (food) => {
  //   this.setState({ typeOfFood: food, currentCategory: "apetizers" });
  // };

  // selectItem = (item) => {
  //   let newCategory = null;
  //   switch (this.state.currentCategory) {
  //     case "apetizers":
  //       newCategory = "mainCourses";
  //       break;
  //     case "mainCourses":
  //       newCategory = "desserts";
  //       break;
  //     case "desserts":
  //       newCategory = "drinks";
  //       break;
  //   }
  //   this.setState({
  //     currentCategory: newCategory,
  //     order: [...this.state.order, item],
  //   });
  // };
  // signIn = (session) => this.setState({ session });

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/foodpage/:id" component={MainPage} />
            <Route exact path="/drinkfood" component={DrinkFoodPage} />
            <Route exact path="/foodpage" component={foodpage} />
            <Route exact path="/drinkpage" component={drinkpage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
