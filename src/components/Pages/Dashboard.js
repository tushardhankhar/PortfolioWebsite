import React from "react";
import Header from "../Header/Header";
import IntroContainer from "../IntroContainer/IntroContainer";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css"
import AboutMe from "../AboutMe/AboutMe";

export default function Dashboard() {
  return (
    <div id="dashboardContainer">
      <Header />
      <IntroContainer />
      <AboutMe />
      <div id="sideBar">
        <SideBar />
      </div>
    </div>
  );
}
