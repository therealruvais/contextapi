import React, { useContext } from "react";

import { DarkContext } from "../context/DarkContext";

const Toggle =() => {
  
  const {isLightTheme,toggleTheme} = useContext(DarkContext)
  
    return (
      <div className="button">
            <button onClick={toggleTheme}>{isLightTheme ? "Light" : "Dark" }</button>
      </div>
    );
  
}

export default Toggle;
