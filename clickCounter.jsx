import React, { useRef } from "react";

import "./styles.css";

export default function App() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times  ");
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
