import React from "react";
// import '../App.css';
import "bootstrap/dist/css/bootstrap.css";

function Resume() {
  const getContent = () => {
    return "Resume";
  };

  let content = getContent();

  return <span> {content} </span>;
}

export default Resume;
