import React, { Component } from "react";
import HistoryComp from "../../Components/HistoryComp";
import API from "../../utils/API";

export default class History extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    lastOrder: "",
    mostOrdered: "",
    orderDetails: [],
  };
  componentDidMount() {
    API.getHistory(this.props.match.params.userId).then((res) => {
      this.setState({ lastOrder: res.data.latestOrder });
      this.state.lastOrder.map((ids) => this.findItem(ids));
      // API.getDetails(...this.state.lastOrder).then((details) => {
      //   this.setState({ ...details.data[0] });
      //   console.log("HISTORY PAGE DETAILS STATE", this.state);
      // });
    });
  }
  findItem = async (id) => {
    await API.getDetails(id).then((res) => {
      console.log("WHAT HAPPENED", res.data);
      this.setState({
        orderDetails: [...this.state.orderDetails, res.data[0]],
      });
    });
    console.log("HISTORY PAGE ORDERDETAILS", this.state.orderDetails);
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
