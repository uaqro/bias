import React, { Component } from "react";
import { Link } from "react-router-dom";

const CloudTag = styled.div``;

export default class CloudView extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => <CloudTag></CloudTag>}
      </MyContext.Consumer>
    );
  }
}
