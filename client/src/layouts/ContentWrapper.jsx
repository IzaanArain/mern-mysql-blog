import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <>
      <div className="app">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default ContentWrapper;
