/* eslint-disable default-case */
import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import API from "./utils/API";
// import SignUpPage from './Pages/SignUpPage';
import HistoryPage from "./Pages/History";
import DrinkFoodPage from "./Pages/DrinkFoodPage";
import foodpage from "./Pages/FoodPage/index";
import drinkpage from "./Pages/DrinkPage";
import Register from "./Pages/RegisterPage";
import Login from "./Pages/LogInPage";
import Navbar from "./Components/Navbar";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import { ProtectedRoute } from "./utils/privateRoutes";
class App extends Component {
  state = {
    isAuthed: false,
  };
  handleClick = () => {
    this.setState({ isAuthed: true });
    console.log("APPPppp JS", this.state.isAuthed);
  };
  componentDidMount = () => {
    API.getUser().then((res) => {
      if (res.headers.access_token) {
        this.setState({ isAuthed: true });
      }
    });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar isAuthed={this.state.isAuthed} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  isAuthed={this.state.isAuthed}
                  handleClick={this.handleClick}
                />
              )}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/history/:userId" component={HistoryPage} />
            <ProtectedRoute exact path="/foodpage/:id" component={MainPage} />
            <Route
              exact
              path="/drinkfood"
              render={() => <DrinkFoodPage isAuthed={this.state.isAuthed} />}
            />
            <ProtectedRoute exact path="/foodpage" component={foodpage} />
            <Route exact path="/drinkpage" component={drinkpage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
