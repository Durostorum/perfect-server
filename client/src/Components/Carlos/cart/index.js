import React, { Component } from "react";
import RemoveButton from "../removeButton";
import "./style.css";

class Cart extends Component {
  total() {
    return this.props.items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }

  render() {
    if (this.props.items === 0) {
      return (
        <div id="cart">
          <p>Cart is empty</p>
        </div>
      );
    }

    return (
      <div id="cart">
        <table class="table">
          <tbody className="">
            <tr>
              <th>Edit</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <RemoveButton
                      className="btn sm"
                      removeFromCart={this.props.removeFromCart}
                    />
                    {/* <RemoveButton /> */}
                  </td>
                  <td>{item.item}</td>
                  <td>{item.subCategory}</td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Total: ${this.total()}</p>
        <button onClick={this.props.onClick}>Order</button>
      </div>
    );
  }
}

export default Cart;
