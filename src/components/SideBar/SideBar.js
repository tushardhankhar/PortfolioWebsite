import React from "react";
import "./SideBar.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";

export default function SideBar() {
  return (
    <div id="sideBarContainer">
      <a href="www.linkedin.com/in/tushar-dhankhar" target="_blank">
        <AiFillLinkedin size={35} color="#ff5b2e" />
      </a>
      <a href="https://github.com/tushardhankhar" target="_blank" rel="noreferrer">
        <AiFillGithub size={35} color="#ff5b2e" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <AiOutlineInstagram size={35} color="#ff5b2e" />
      </a>
      <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
        <SlSocialTwitter size={35} color="#ff5b2e" />
      </a>
      <div id="VerticalLine"></div>
    </div>
  );
}
