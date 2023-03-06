import React, { useState } from "react";

function App() {
  let [start, changeColor] = useState(false);

  function onHover() {
    changeColor(true);
  }

  function onOut() {
    changeColor(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: start ? "black" : "white" }}
        onMouseMove={onHover}
        onMouseOut={onOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
