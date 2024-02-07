import React, { useRef } from "react";

import "./styles.css";

export default function App() {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const intervelRef = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervelRef.current);
    intervelRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervelRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div className="App">
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
