import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundBeach from "../../assets/imgs/footer_beach.png";
import FooterBackgroundTop from "../../assets/imgs/footer_background-top.png";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="background-beach">
        <img src={FooterBackgroundTop} alt="FooterBackgroundTop" />
        <img src={BackgroundBeach} alt="BackgroundBeach" />
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-group">
              <h2 className="footer-heading">Legal</h2>
              <ul className="footer-menu">
                <li>
                  <Link className="menu-link" to="/">
                    MSA Self Managed
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    GDPR
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Guidelines for Law Enforcement
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Manage Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h2 className="footer-heading">Product</h2>
              <ul className="footer-menu">
                <li>
                  <Link className="menu-link" to="/">
                    Why move?
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Omnichannel
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h2 className="footer-heading">Company</h2>
              <ul className="footer-menu">
                <li>
                  <Link className="menu-link" to="/">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Press
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <ul className="footer-socials">
                <li>
                  <Link className="menu-link" to="/">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/">
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
