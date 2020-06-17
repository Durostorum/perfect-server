import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      user: "",
      isAuthed: this.props.isAuthed,
      loggedOut: false,
    };
  }
  componentDidUpdate = (prevProps) => {
    // Checks if received props match current props
    if (prevProps.isAuthed !== this.props.isAuthed) {
      this.setState({ isAuthed: this.props.isAuthed });
    }
    //Checking if LogOut was clicked then call /api/logout
    if (!prevProps.loggedOut !== this.state.loggedOut) {
      API.logingOut();
    }
  };
  handleLogOut = () => {
    this.setState({ loggedOut: true });
  };
  render() {
    let isLoggedOut = this.state.loggedOut;
    let isLoggedIn = this.props.isAuthed;
    let toLogOut = (
      <li key={this.state.isAuthed} className="nav-item">
        <Link onClick={this.handleLogOut} to="" className="nav-link active">
          Logout <span className="sr-only"></span>
        </Link>
      </li>
    );
    const toLogIn = (
      <>
        <li className="nav-item ">
          <Link className="nav-link active" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">
            Login <span className="sr-only"></span>
          </Link>
        </li>
      </>
    );

    return (
      <nav
        key={this.props.isAuthed}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <a className="navbar-brand" href="/">
          Perfect Server
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-right"
          id="navbarNavDropdown"
        >
          <div className="space-filler"></div>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {isLoggedIn && !isLoggedOut ? toLogOut : toLogIn}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
