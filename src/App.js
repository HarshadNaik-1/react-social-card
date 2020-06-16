import React from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App(props) {
  return (
    <div>
      <Card name="Harshad" email="harshadnaik@gmail.com" job="Developer" />
      <Card name="Jonas" email="Jonas@gmail.com" job="Time Traveler" />
    </div>
  );
}

export default App;
