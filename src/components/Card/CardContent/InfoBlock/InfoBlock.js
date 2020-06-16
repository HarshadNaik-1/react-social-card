import React from "react";

const infoBlock = (props) => {
  const { name, email, job } = props;
  console.log(props);
  return (
    <div className="info">
      <p>Name : {name} </p>
      <p>E-mail: {email}</p>
      <p>Job : {job}</p>
    </div>
  );
};
export default infoBlock;
