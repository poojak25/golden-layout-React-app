import logo from "./logo.svg";
import "./App.css";
import createlayout from "./createlayout";
import GoldenLayoutComponent from "./goldenLayoutComponent";
import "./goldenLayout-dependencies";
import AppContext from "./appContext";
import { Component, react, useEffect } from "react";
import $ from "jquery";
import { myLayout } from "golden-layout";
class App extends Component {
  render() {
    const addElements = () => {
      var config = {
        content: [
          {
            type: "row",
            content: [
              {
                type: "component",
                title: "component 1",
                componentName: "example",
                componentState: {
                  text:
                    "Welcome to the dynamic Layout...You are in Component 1.In Order to add the other component you can drag and drop the components from left corner",
                },
              },
              {
                type: "component",
                title: "Component 2",
                componentName: "example",
                componentState: {
                  text:
                    "Welcome to the dynamic Layout...You are in Component 2",
                },
                props: { value: "Welcome to Component2" },
              },
            ],
          },
        ],
      };

      var myLayout = new window.GoldenLayout(config, $("#layoutContainer"));

      myLayout.registerComponent("example", function (container, createlayout) {
        container.getElement().html("<h2>" + createlayout + "</h2>");
      });

      myLayout.init();

      var addMenuItem = function (container, createlayout) {
        var element = $("<li>" + this.props.getdata() + "</li>");
        $("#menuContainer").append(element);

        var newItemConfig = {
          title: "component3",
          type: "component",
          componentName: "example",
          componentState: { text: "Hello" },
        };

        myLayout.createDragSource(element, newItemConfig);
      };

      addMenuItem(createlayout);
      //addMenuItem("Component 4", "This is fourth Component!");
    };
    return (
      <div className="App">
        <div id="wrapper"></div>
        <div id="menuContainer"></div>
        <div id="layoutContainer"></div>
      </div>
    );
  }
}
export default App;
