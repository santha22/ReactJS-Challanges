import React, { useState } from "react";


import "./styles.css";

export default function App() {
  const [obj, setObj] = useState({
    firstname: "santha",
    secondname: "kumar",
    address: {
      firstLine: "test",
      secondLine: "test2",
    },
  });


  const update = () => {
    setObj({
      ...obj,
      address: {
        ...obj.address,
        secondLine: "santha kumar",
      },
    });
  };
  return (
    <div className="App">
      <h1>{obj.firstname}</h1>
      <h1>{obj.secondname}</h1>
      <h1>{obj.address.firstLine}</h1>
      <h1>{obj.address.secondLine}</h1>
      <button onClick={update}>change</button>
    </div>
  );
}
