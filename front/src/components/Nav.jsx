import React from "react";
import "./styles/Nav.css";

function Nav(props) {
  function logout() {
    localStorage.removeItem("username");
  }
  return (
    <div className="Nav">
      <a className="Nav-Title" href="/">
        Brand Name
      </a>
      {props.username ? (
        <a className="Nav-Logout" href="/" onClick={logout}>
          Log Out
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
