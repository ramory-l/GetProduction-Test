import React from "react";
import "./styles/LoginPage.css";
import { useHistory, useLocation } from "react-router-dom";

function LoginPage(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    localStorage.setItem("username", document.getElementById("username").value);
    props.setUsername(document.getElementById("username").value);
    history.replace(from);
  };
  return localStorage.getItem("username") ? (
    <div>
      You are already loged in, go <a href="/">Home</a>
    </div>
  ) : (
    <div className="Login">
      <form className="Login-Form">
        <span className="Form-Title">Login to your account</span>
        <input
          id="username"
          type="text"
          title="username"
          placeholder="username"
        />
        <br />
        <input
          id="password"
          type="password"
          title="password"
          placeholder="password"
        />
        <br />
        <button type="button" onClick={() => login()}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
