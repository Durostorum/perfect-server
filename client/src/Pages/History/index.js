import React, { Component } from "react";
import HistoryComp from "../../Components/HistoryComp";
import HistoryEmpty from "../../Components/HistoryEmpty";
import API from "../../utils/API";

import CircularProgress from "@material-ui/core/CircularProgress";
export default class History extends Component {
  state = {
    lastOrder: "",
    mostOrdered: "",
    orderDetails: [],
    loaded: false,
  };
  componentDidMount() {
    API.getHistory(this.props.match.params.userId).then((res) => {

      this.setState({ lastOrder: res.data.latestOrder, loaded: true });
      if (this.state.lastOrder) {
        this.state.lastOrder.map((ids) => this.findItem(ids));
      }
      return undefined;
    });
  }
  findItem = (id) => {
    API.getDetails(id).then((res) => {

      this.setState({
        orderDetails: [...this.state.orderDetails, res.data[0]],
      });
    });
  };

  render() {
    let history;
    if (this.state.lastOrder && this.state.loaded) {
      history = (
        <HistoryComp
          orderDetails={this.state.orderDetails}
          findItem={() => this.findItem()}
        >
          {this.state.orderDetails}
        </HistoryComp>
      );
    } else if (!this.state.lastOrder && this.state.loaded) {
      history = <HistoryEmpty />;
    } else {
      history = (
        <CircularProgress
          style={{
            width: "50px",
            marginLeft: "50%",
            marginTop: "25%",
          }}
        />
      );
    }
    return <div>{history}</div>;
  }
}
