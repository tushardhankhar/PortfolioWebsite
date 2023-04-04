import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div id="formContainer">
      <div id="heading">Get In Touch</div>
      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <textarea placeholder="Your Message" />
      <button>
        Say Hello
      </button>
    </div>
  );
}
