import React from "react";
import "./styles/Nav.css";

function Nav(props) {
  return (
    <div className="Nav">
      <a className="active" href="#">
        Brand Name
      </a>
      <a href="#">Vasya</a>
    </div>
  );
}

export default Nav;
