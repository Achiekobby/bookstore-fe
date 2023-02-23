import React from "react";
import closeIcon from "../assets/icons/close-color.png";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import linkedinIcon from "../assets/icons/linkedin.png";

import { navLinks } from "../data/NavbarLinks";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const menuVariant = {
  show: {
    opacity: 1,
    x: 50,
    y: 50,
    transition: {
      duration: 0.4,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Mobilenav = ({ showSidebar, mobileMenuClose }) => {
  return (
    <aside className="mobile-nav">
      <AnimatePresence>
        {showSidebar && (
          <>
            <motion.div
              variants={sidebarVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="shade"
            ></motion.div>

            <motion.div
              variants={menuVariant}
              initial="hide"
              animate="show"
              exit="hide"
              className="side-panel o-2 br-lg active"
            >
              <div className="close-icon" onClick={mobileMenuClose}>
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
                            <Link className="font-lg text-f-color" to={link}>
                              {title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="social-icons">
                    <p className="text-primary font-md">Follow Us On</p>
                    <div className="socials mt-1">
                      <img
                        src={facebookIcon}
                        alt=""
                        className="social-icon mr-1"
                      />
                      <img
                        src={twitterIcon}
                        alt=""
                        className="social-icon mr-1"
                      />
                      <img
                        src={linkedinIcon}
                        alt=""
                        className="social-icon mr-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Mobilenav;
