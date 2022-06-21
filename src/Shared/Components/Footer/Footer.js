import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.style.css";

const Footer = () => {
  return (
    <section>
      <div class="footer">
        <h4></h4>
        <p>
          "O direito do trabalho existe para poupar o trabalhador da exploração do capital e para<br></br>poupar a criança do roubo de suas infâncias".
        </p>
        <span>Felipe Caetano</span>
        <div class="contact-medias">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
          </a>

          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram
              style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
            />
          </a>

          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin
              style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
            />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube
              style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
