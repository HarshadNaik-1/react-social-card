import React from "react";
import CardContent from "./CardContent/CardContent";

function Card(props) {
  console.log(props);
  return (
    <div>
      <CardContent props={props} />
    </div>
  );
}
export default Card;
