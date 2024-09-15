import React from "react";
import { ReactComponent as SunIcon } from "../../assets/images/icons/f-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icons/f-moon.svg";
import useStore from "../../app/store";
import "./style.css";

const ThemeButton = () => {
  const { theme, setTheme } = useStore();

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <input
        className="radio"
        type="radio"
        name="theme"
        id="light"
        checked={theme === "light"}
        onChange={() => setTheme("light")}
        hidden
      />

      <input
        className="radio"
        type="radio"
        name="theme"
        id="dark"
        checked={theme === "dark"}
        onChange={() => setTheme("dark")}
        hidden
      />

      <div className="unique_hover_cont prt_theme_hover_button" onClick={handleTheme}>
        <div className="icon_link prt_theme_icon">
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </>
  );
};

export default ThemeButton;
