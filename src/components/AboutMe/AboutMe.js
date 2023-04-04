import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div id="aboutHeadingContainer">
        <div id="horizontalLine" />
        <div id="aboutHeading">About Me</div>
      </div>
      <div id="aboutContentContainer">
      <div id="aboutImgContainer">
          <img
            id="aboutImg"
            src={require("../../assests/aboutMe.jpg")}
            alt=""
          />
        </div>
        <div id="aboutContent">
          <div>
            Hello! My name is Tushar and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I tried building College Projects.
          </div>
          <div>
            Fast-forward to today, and I've had the privilege of working at a
            start-up. My main focus these days is
            building ReactJS Based Projects for Appdesk Services.
          </div>
        </div>
        
      </div>
    </div>
  );
}
