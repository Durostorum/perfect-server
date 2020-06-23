import React, { Component } from "react";
import Youtube from "react-youtube";
import "./style.css";
export default class HistoryComp extends Component {
  state = {
    vidWidth: "280",
    vidHeight: "140",
  };

  render() {
    let { orderDetails } = this.props;
    let opts = {
      width: this.state.vidWidth,
      height: this.state.vidHeight,
    };

    return (
      <div className="history-comp">
        <h2>
          <div className="container history-container">
            <div className="row">
              {orderDetails.map((details, index) => (
                <div className="col-4" key={index}>
                  <div className="cardh">
                    <div className="face face1h">
                      <div className="contenth">
                        <div className="iconh">
                          <Youtube
                            videoId={details.videoId}
                            opts={opts}
                            alt="..."
                            aria-hidden="true"
                          ></Youtube>
                        </div>
                      </div>
                    </div>
                    <div
                      className="face face2h"
                      style={{ fontFamily: "Lobster Two" }}
                    >
                      <div className="contenth">
                        <div>
                          <h4 className="history-iName">{details.item}</h4>
                        </div>
                        <h6 className="description">{details.description}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </h2>
      </div>
    );
  }
}
