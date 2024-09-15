import React from "react";
import UniqueHoverOne from "../components/uniqueHoverOne/UniqueHoverOne";
import ThemeButton from "../components/themeButton/ThemeButton";
import UnderConstructionBanner from "../components/underConstructionBanner/UnderConstructionBanner"
import { ReactComponent as LogoIcon } from "../assets/images/icons/rwd-logo.svg";
import useThemeStore from "../app/themeStore";


const Home = () => {
  const { theme } = useThemeStore()

  return (
    <div className="main_layout">
      {/* homescreen overlay */}
      <div className="over_screen_view_cont">
        <div className="top_left_corner_cont">
          <LogoIcon />
        </div>

        <div className="top_right_corner_cont">
          <h3 className="homepage_title_name">Ruff Web Development</h3>
        </div>

        <div className="bottom_left_corner_cont">
          <ThemeButton />
          <UniqueHoverOne content={"Contact."} link={"mailto:tomruffcodes@gmail.com&subject=Let's Get In Touch"} />
          <UniqueHoverOne content={`Social.`} />
        </div>

        <div className="bottom_right_corner_cont">
          <h1 className="homepage_accent_number">[1]</h1>
        </div>
      </div>
      {/* home screen under construction overlay */}
      <UnderConstructionBanner />
    </div>
  );
};

export default Home;
