import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import "../addButton/addbutton.css";

class AddButton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MDBIcon
          className="addbtn"
          id={this.props.id}
          onClick={(event) => {
            this.props.addToCart(this.props.value);
          }}
          icon="plus-circle"
        />
      </div>
    );
  }
}
export default AddButton;
