import React, { Component, Profiler } from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import getDefaultNormalizer, { render } from "@testing-library/react";
import { Editor, EditorState } from "draft-js";
import { convertFromRaw } from "draft-js";
import axios from "axios";
import App from "./App";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "",
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(res.data);
      this.setState({ apidata: res.data.title });
    });
  }
  getState() {
    return this.state.apidata;
  }
  render() {
    return <div className="App-header">{this.getState}</div>;
  }
}
export default Profile;
