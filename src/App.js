import React from "react";
import "./App.scss";
import Routing from "./Routing";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
