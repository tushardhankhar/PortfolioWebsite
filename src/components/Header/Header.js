import React, { useState } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

export default function Header() {
  const [menuDropdown, setMenuDropdown] = useState(false);
  return (
    <>
    <div id="headerContainer" className="flexClass">
      <div id="logoContainer">Tushar's Portfolio</div>
      <div className="flexClass">
        <ul id="ulBigScreen">
          <li id="list" onClick={() => alert("about")}>About</li>
          <li id="list">Skills</li>
          <li id="list">Experience</li>
          <li id="list">Project</li>
          <li id="list">Contact</li>
        </ul>
        <a
          target="_blank"
          rel="noreferrer"
          href={process.env.REACT_APP_RESUME_LINK}
          id="resume"
        >
          Resume
        </a>
      </div>
      <FiMenu id="menuIcon" size={25} onClick={() => setMenuDropdown(!menuDropdown)} />
    </div>
    <OutsideClickHandler onOutsideClick={() => setMenuDropdown(false)}>
    {menuDropdown && (
      <div id="dropdown">
        <ul id="ulSmallScreen">
          <li id="list">About</li>
          <li id="list">Skills</li>
          <li id="list">Experience</li>
          <li id="list">Project</li>
          <li id="list">Contact</li>
          <a
          target="_blank"
          rel="noreferrer"
          href={process.env.REACT_APP_RESUME_LINK}
          id="resume"
        >
          Resume
        </a>
        </ul>
      </div>
      
    )}
    </OutsideClickHandler>
    </>
  );
}
