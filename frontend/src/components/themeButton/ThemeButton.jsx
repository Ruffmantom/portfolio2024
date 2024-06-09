import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from '../../features/theme/themeSlice';
import themeService from '../../features/theme/themeService';

import { ReactComponent as SunIcon } from "../../assets/images/icons/f-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icons/f-moon.svg";
import './style.css'

const ThemeButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const isChecked = theme === "light"
  const handleTheme = async (selectedTheme) => {
    try {
      await themeService.saveThemeToLocalStorage(selectedTheme);
      dispatch(setTheme(selectedTheme));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // get theme from local storage and set state
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await themeService.getTheme();
        if (storedTheme) {
          dispatch(setTheme(storedTheme));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTheme();
  }, [dispatch]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'id_doc_theme') {
        const storedTheme = event.newValue;
        if (storedTheme) {
          dispatch(setTheme(storedTheme));
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]);

  return (
    <>
      <input
        className="radio"
        type="radio"
        name="light"
        id="light"
        checked={isChecked}
        hidden
      />

      <input
        className="radio"
        type="radio"
        name="dark"
        id="dark"
        checked={!isChecked}
        hidden
      />

      <div className="unique_hover_cont prt_theme_hover_button" onClick={handleTheme}>
        <div className="icon_link prt_theme_icon">
          <SunIcon />
        </div>
      </div>
    </>
  );
};

export default ThemeButton;
