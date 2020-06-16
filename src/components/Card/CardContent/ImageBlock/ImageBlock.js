import React from "react";
import * as icon from "../../../../assets/imagecard.jpg";
const imageBlock = (props) => {
  return (
    <div>
      <img
        src={icon}
        alt="ImageCard"
        width="400px"
        height="200px"
        style={{
          borderRadius: "8px",
          paddingTop: "2px",
        }}
      />
    </div>
  );
};
export default imageBlock;
