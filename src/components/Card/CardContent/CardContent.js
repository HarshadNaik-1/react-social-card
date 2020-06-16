import React from "react";
import "./CardContent.css";

import ImageBlock from "./ImageBlock/ImageBlock";
import InfoBlock from "./InfoBlock/InfoBlock";

const CardContent = (props) => {
  console.log(props);
  return (
    <div className="card">
      <ImageBlock />
      <InfoBlock props={props} />
    </div>
  );
};
export default CardContent;
