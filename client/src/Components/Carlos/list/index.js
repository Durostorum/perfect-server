import React, { Component } from "react";
import ModalList from "../../Modal";
import AddButton from "../addButton";

import "./style.css";

export default class List extends Component {
  render() {
    return (
      <div id="items">
        <table class="table">
          <tbody>
            <tr>
              <th>Add</th>
              <th>Item</th>
              <th>Type</th>
              <th>Price</th>
            </tr>

            {this.props.details.map((item, index) => {
              // eslint-disable-next-line no-unused-expressions
              return (
                <tr key={index}>
                  <td>
                    <AddButton
                      className="addbutton"
                      id={item._id}
                      value={item}
                      addToCart={this.props.addToCart}
                    />
                  </td>
                  <td>
                    <ModalList
                      addItem={this.props.addToCart}
                      key={item._id}
                      item={item}
                    />
                  </td>
                  <td>{item.subCategory}</td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
