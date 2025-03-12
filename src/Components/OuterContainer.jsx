import React from "react";

function OuterContainer({ children }) {
  return <div className="container d-flex ">{children}</div>;
}

export default OuterContainer;
