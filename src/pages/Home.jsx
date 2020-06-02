import React, { Component } from "react";

import Bookssection from "../components/Bookssection";
import Blogssection from "../components/Blogssection";
import Newslettersection from "../components/Newslettersection";
import Featuressection from "../components/Featuressection";
import Herosection from "../components/Herosection";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Herosection />
        <Bookssection />
        <Featuressection />
        <Blogssection />
        <Newslettersection />
      </>
    );
  }
}

export default Home;
