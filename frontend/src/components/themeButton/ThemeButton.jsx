import React from "react";
import { ReactComponent as SunIcon } from "../../assets/images/icons/f-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icons/f-moon.svg";
import './style.css'

const ThemeButton = () => {
  return (
    <div className="unique_hover_cont prt_theme_hover_button">
      <div className="icon_link prt_theme_icon">
        <SunIcon />
      </div>
    </div>
  );
};

export default ThemeButton;
