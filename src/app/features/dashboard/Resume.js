import React from "react";
// import '../App.css';
import "bootstrap/dist/css/bootstrap.css";

function OtherComponent() {
  const getContent = () => {
    return "Other component";
  };

  let content = getContent();

  return <span> {content} </span>;
}

export default OtherComponent;
