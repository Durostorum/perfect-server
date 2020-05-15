import React, { Component } from "react";
import "./styles.css";

export default class Location extends Component {
  render() {
    return (
      <div>
        <p>
          <span id="address">{this.props.location}</span>
          <a
            id="location"
            href={`http://maps.google.com/?q=${this.props.location}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions via Google Maps
          </a>
          {console.log("comes from location file", this.props.location)}
        </p>
      </div>
    );
  }
}
