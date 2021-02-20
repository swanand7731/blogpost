import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 m-auto">
        <h1 className="text-secondary">{props.header}</h1>
        <hr />
      </div>
    </div>
  );
};

export default Header;
