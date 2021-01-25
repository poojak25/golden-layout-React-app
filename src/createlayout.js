import react, { Component } from "react";
import $ from "jquery";
import GoldenLayout from "golden-layout";
import myLayout from "golden-layout";
import componentDidMount from "react-dom";
import App from "./App";
//import createDragSource from "golden-layout";
export class createlayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "Hello",
    };
  }
  disp() {
    this.setState({
      form: "Hello",
    });
  }
  render() {
    return (
      <div>
        <App getdata={this.disp()} />
      </div>
    );
  }
}
export default createlayout;
