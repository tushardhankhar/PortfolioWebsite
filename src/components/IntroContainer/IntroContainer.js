import React, { useState } from "react";
import "./IntroContainer.css";
import { TypeAnimation } from "react-type-animation";
import BasicModal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

export default function IntroContainer() {
 const[openModal,setOpenModal] = useState(false);
 const handleClose = () => setOpenModal(false);

  return (
    <div id="introContainer">
      <div>
        <pre id="heading">
          {`Hello,It's me
TUSHAR DHANKHAR`}
        </pre>
        <span id="spanStyle">I'm a </span>
        <TypeAnimation
          sequence={["Frontend Developer", 1000, "React Developer", 1000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            display: "inline-block",
            fontFamily: "Montserrat",
            fontWeight: "600",
            margin: "0",
            color: "#FF5B2E",
          }}
        />
        <div id="introText">
          I'm a New Delhi-based software engineer who specializes in building
          (and occasionally designing) exceptional digital experiences.
          Currently, I'm an engineer at{" "}
          <a
            href="https://appdeskservices.com/"
            target="_blank"
            rel="noreferrer"
            id="companyAnchor"
          >
            Appdesk Services
          </a>{" "}
          focused on building Progressive Web Apps on ReactJS.
        </div>
        <button id="getInTouch" onClick={() => setOpenModal(true)}>Get In Touch</button>
      </div>
      <div id="imageContainer">
        <img id="displayImg" src={require("../../assests/zoom_dp.jpg")} alt=""></img>
      </div>
      <BasicModal openModal={openModal} handleClose={handleClose}>
        <ContactForm />
      </BasicModal>
    </div>
  );
}
