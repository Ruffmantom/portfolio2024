import React from "react";
import "./style.css";
import { ReactComponent as CoffeeIcon } from "../../assets/images/icons/f-coffee.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icons/f-instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/icons/f-linkedin.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/icons/m-discord.svg";

const UniqueHoverOne = ({ link, action, content }) => {
  if (link && link !== "") {
    return (
      <a className="unique_hover_cont slide_right" href={link}>
        <div className="slide_right_inner_cont">{content}</div>
      </a>
    );
  } else {
    return (
      <div className="unique_hover_cont slide_right">
        <div className="slide_right_inner_cont">
          <p>{content}</p>
          <a
            className="icon_link"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/praizerskater/"
          >
            <InstagramIcon />
          </a>
          <a
            className="icon_link"
            target="_blank"
            rel="noreferrer"
            href="www.linkedin.com/in/tom-ruff-098330a3"
          >
            <LinkedinIcon />
          </a>
          <a
            className="icon_link"
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/Znhfd7BK"
          >
            <DiscordIcon />
          </a>
          <a
            className="icon_link"
            target="_blank"
            rel="noreferrer"
            href="https://buymeacoffee.com/tomruffcodes"
          >
            <CoffeeIcon />
          </a>
        </div>
      </div>
    );
  }
};

export default UniqueHoverOne;
