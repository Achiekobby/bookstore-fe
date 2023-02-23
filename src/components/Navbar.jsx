import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/NavbarLinks";
import mobileMenu from "../assets/icons/mobile-menu.png";
import logo from "../assets/images/logo-final.png";
import favoriteImg from "../assets/icons/heart.png";
import cartImg from "../assets/icons/cart.png";
import locationImg from "../assets/icons/location-colored.png";
import { motion } from "framer-motion";

const Navbar = ({showSidebar}) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row justify-space-between">
          <div className="mobile-m" onClick={showSidebar}>
            <img src={mobileMenu} alt="mobile menu icon" />
          </div>
          <div className="logo">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="location-icon">
            <img src={locationImg} alt="location icon" />
          </div>
          <div className="menu-items">
            <ul className="links">
              {navLinks.map((link_item) => {
                const { id, title, link } = link_item;
                return (
                  <motion.li
                    whileHover={{
                      scale: 1.2,
                      type: "spring",
                      stiffness: 120,
                    }}
                    key={id}
                    className="link_items mr-2"
                  >
                    <Link
                      className="text-f-color text-hover-secondary"
                      to={link}
                    >
                      {title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <div className="nav-icons pl-1 pr-1">
            <img src={favoriteImg} alt="" className="fav mr-1" />
            <img src={cartImg} alt="" className="cart mr-2" />
            <Link to="/login">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  type: "spring",
                  duration: 0.5,
                  stiffness: 120,
                }}
                className="bg-primary font-sm text-white pl-2 pr-2 pt-1 pb-1 br-sm"
              >
                Login
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
