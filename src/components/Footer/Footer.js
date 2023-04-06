import React from "react";
import "./Footer.css";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  const date = new Date();
  return (
    <div id="footerContainer">
      &copy; {date.getFullYear()}, Built with &nbsp; <AiFillHeart size={20} color="red" />{" "}
      &nbsp; in India,
    </div>
  );
}
