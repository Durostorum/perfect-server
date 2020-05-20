/* eslint-disable default-case */
import React, { Component } from "react";
import "./App.css";
// import TypesOfFood from './components/TypeOfFood';
// import FoodCategory from './components/FoodCategory';
// import {items} from './data/items';
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import API from "./utils/API";
// import SignUpPage from './Pages/SignUpPage';
import DrinkFoodPage from "./Pages/DrinkFoodPage";
import foodpage from "./Pages/FoodPage/index";
import drinkpage from "./Pages/DrinkPage";
import Login from "./Pages/LogInPage";
import Navbar from "./Components/Navbar";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import Auth from "./utils/auth";
class App extends Component {
  state = {
    userName: "",
    isLoggedIn: false,
  };
  componentWillMount = () => {
    console.log("appplog", Auth.isAuthenticated());
    Auth.checkAuth();
    console.log("applog 2", Auth.isAuthenticated());
    // API.getUser()
    //   .then((res) => {
    //     if (res.data.user !== undefined) {
    //       this.setState({ userName: res.data.user.name, isLoggedIn: true });
    //     }
    //   })

    //   .catch((err) => console.log(err));
  };
  loggedIn(req, res, next) {
    if (this.state.userName && this.state.isLoggedIn === true) {
      console.log("LoggedIn", this.state.userName);
      return next();
    }
    console.log("LoggedIn not", this.state.userName);
    res.redirect("/");
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/foodpage/:id" component={MainPage} />
            <Route loggedIn exact path="/drinkfood" component={DrinkFoodPage} />
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
