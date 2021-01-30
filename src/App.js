import "./App.css";
import CreateLayout from "./createlayout";
import React, { Component, useEffect } from "react";
import { renderToString } from "react-dom/server";
import $ from "jquery";
import Profile from "./profile";
import { renderIntoDocument } from "react-dom/test-utils";
class App extends Component {
  componentDidMount() {
    this.addElements();
  }
  //Create Layout Components.
  addElements() {
    var config = {
      content: [
        {
          type: "row",
          content: [
            {
              type: "component",
              title: "component 1",
              componentName: "example",
              componentState: { text: renderToString(<CreateLayout />) },
            },
            {
              type: "component",
              title: "Component 2",
              componentName: "example",
              componentState: { text: renderToString(<CreateLayout />) },
            },
          ],
        },
      ],
    };
    //Initialize the variable with GoldenLayout.
    var myLayout = new window.GoldenLayout(config, $("#layoutContainer"));

    //Register the Components using registerComponent method of GoldenLayout.
    myLayout.registerComponent("example", function (container, state) {
      container.getElement().html("<h1>" + state.text + "</h1>");
    });

    //Start the layout.
    myLayout.init();

    var addMenuItem = function (title, component) {
      var element = $("<li>" + component + "</li>");
      $("#menuContainer").append(element);
      var newItemConfig = {
        title: title,
        type: "component",
        componentName: "example",
        componentState: { text: renderToString(<Profile />) },
      };

      //Create dynamic components.
      myLayout.createDragSource(element, newItemConfig);
    };

    const comp = renderToString(<Profile />);
    addMenuItem("Component 3", comp);
    addMenuItem("Component 4", comp);
  }
  render() {
    return (
      <div>
        <div id="wrapper" />
        <div id="menuContainer" />
        <div id="layoutContainer" />
      </div>
    );
  }
}
export default App;
