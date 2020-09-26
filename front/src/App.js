import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("username") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <Nav username={username} />
        </header>
        <Switch>
          <PrivateRoute path="/" exact>
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/movie/:id">
            <MovieDetail />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage setUsername={setUsername} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
