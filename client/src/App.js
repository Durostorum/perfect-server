/* eslint-disable default-case */
import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
// import SignUpPage from './Pages/SignUpPage';
import HistoryPage from "./Pages/History";
import DrinkFoodPage from "./Pages/DrinkFoodPage";
import foodpage from "./Pages/FoodPage/index";
import drinkpage from "./Pages/DrinkPage";
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
            <Route
              exact
              path="/history/latest/:userId"
              component={HistoryPage}
            />
            <Route
              exact
              path="/drinkfood"
              render={() => <DrinkFoodPage isAuthed={this.state.isAuthed} />}
            />
            <ProtectedRoute exact path="/foodpage/:id" component={MainPage} />

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
