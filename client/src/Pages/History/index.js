import React, { Component } from "react";
import HistoryComp from "../../Components/HistoryComp";
import API from "../../utils/API";

export default class History extends Component {
  state = {
    lastOrder: "",
    mostOrdered: "",
    orderDetails: [],
  };
  componentDidMount() {
    API.getHistory(this.props.match.params.userId).then((res) => {
      this.setState({ lastOrder: res.data.latestOrder });
      this.state.lastOrder.map((ids) => this.findItem(ids));
    });
  }
  findItem = async (id) => {
    await API.getDetails(id).then((res) => {
      this.setState({
        orderDetails: [...this.state.orderDetails, res.data[0]],
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.lastOrder && (
          <HistoryComp
            orderDetails={this.state.orderDetails}
            findItem={() => this.findItem()}
          >
            {this.state.orderDetails}
          </HistoryComp>
        )}
      </div>
    );
  }
}
