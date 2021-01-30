import React, { Component } from "react";

export default class CreateLayout extends Component {
  render() {
    return (
      <div className="container">
        <form name="f1">
          <h2>
            Name:<input type="text"></input>
            <br />
            <br />
            Mob:<input type="number"></input>
            <br />
            <br />
            Qualification: <br />
            SSC:<input type="checkbox"></input>
            <br />
            HSC:<input type="checkbox"></input>
            <br />
            Graduation:<input type="checkbox"></input>
          </h2>
        </form>
      </div>
    );
  }
}
