import React from "react";
import closeIcon from "../assets/icons/close-color.png";
import facebookIcon from "../assets/icons/facebook.png"
import twitterIcon from "../assets/icons/twitter.png"
import linkedinIcon from "../assets/icons/linkedin.png"

import { navLinks } from "../data/NavbarLinks";
import { Link } from "react-router-dom";

const Mobilenav = () => {
  return (
    <aside className="mobile-nav">
      <div className="shade"></div>
      <div className="side-panel o-2 br-lg">
        <div className="close-icon">
          <img src={closeIcon} alt="close-icon" />
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="side-menu-items">
              <ul className="menu-item">
                {navLinks.map((linkItem) => {
                  const { id, title, link } = linkItem;
                  return (
                    <li key={id} className="item mt-1">
                      <Link className="font-lg text-f-color" to={link}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="social-icons">
              <p className="text-primary font-md">Follow Us On</p>
              <div className="socials mt-1">
                <img src={facebookIcon} alt="" className="social-icon mr-1" />
                <img src={twitterIcon} alt="" className="social-icon mr-1" />
                <img src={linkedinIcon} alt="" className="social-icon mr-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Mobilenav;
