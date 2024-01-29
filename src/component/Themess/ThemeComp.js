import React, { useState } from "react";
import "./theme.css";

const ThemeComp = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <h1>This is Text which will be changed</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeComp;
