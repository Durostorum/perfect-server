import React, { Component } from "react";
import Youtube from "react-youtube";

import "./style.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default class ModalList extends Component {
  state = {
    modal14: false,
  };
  toggleModal = () => {
    const { modal14 } = this.state;
    !modal14
      ? this.setState({ modal14: true })
      : this.setState({ modal14: false });
  };
  render() {
    return (
      <MDBContainer>
        <button id="modal-btn" onClick={this.toggleModal}>
          {this.props.item.item}
        </button>
        <MDBModal
          className="modal"
          isOpen={this.state.modal14}
          toggleModal={this.toggleModal}
          centered
        >
          <MDBModalHeader id="modal-header">
            {this.props.item.item}
          </MDBModalHeader>
          <MDBModalBody>
            <Youtube
              videoId={this.props.item.videoId}
              className="d-block w-100"
              alt="..."
            />
            <div id="modal-description">{this.props.item.description}</div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className="peach-gradient" onClick={this.toggleModal}>
              Close
            </MDBBtn>
            <MDBBtn
              id={this.props.item._id}
              value={this.props.item}
              onClick={(e) => {
                this.props.addItem(this.props.item);
                this.toggleModal();
              }}
              className="peach-gradient"
            >
              Add To Cart
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
