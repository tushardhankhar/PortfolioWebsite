import React from "react";
import Header from "../Header/Header";
import IntroContainer from "../IntroContainer/IntroContainer";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css"
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";

export default function Dashboard() {
  return (
    <div id="dashboardContainer">
      <Header />
      <IntroContainer />
      <AboutMe />
      <Experience />
      <div id="sideBar">
        <SideBar />
      </div>
    </div>
  );
}
