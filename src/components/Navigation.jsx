import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { DarkContext } from "../context/DarkContext";

const Navigation = () => {
  const { isLightTheme, light, dark } = useContext(DarkContext);
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.syntax, color: theme.ui }}>
      <h1>Context App</h1>
      <div>{isAuth ? "LoggedIn" : "LoggedOut"}</div>
      <button onClick={toggleAuth}>{isAuth ? "LogedIn" : "LogedOut"}</button>
      <ul>
        <li>About</li>
        <li>contact</li>
        <li>home</li>
      </ul>
    </nav>
  );
};

export default Navigation;
