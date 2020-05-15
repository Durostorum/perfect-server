import React, { Component } from "react";
import "../removeButton/removebutton.css";
import { MDBIcon } from "mdbreact";

class RemoveButton extends Component {
  render() {
    return (
      <div>
        <MDBIcon
          className="icon"
          far
          icon="trash-alt"
          onClick={() => this.props.removeFromCart(this.props.index)}
        ></MDBIcon>
      </div>
    );
  }
}
export default RemoveButton;
