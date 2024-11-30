import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saroj GT</h1>
        <ul className="footer__list">
          <li>
            <a id="#about" href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social-link">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/saroj_gt/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            rel="noreferrer"
            href="https://www.facebook.com/sssrxxj/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            rel="noreferrer"
            href="https://github.com/gtsaroj"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; coder-Saroj. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
