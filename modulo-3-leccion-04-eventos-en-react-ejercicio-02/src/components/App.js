import React from "react";
import "../stylesheets/App.scss";
import React from "react";
import Destiny from "./Destiny.js";

class App extends React.Component {
  render() {
    return (
      <select className="App">
        <Destiny.js />
      </select>
    );
  }
}

export default App;
