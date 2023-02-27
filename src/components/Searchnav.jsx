import React from "react";
import menuIcon from "../assets/icons/menu.png";
import { AiOutlineDown } from "react-icons/ai";
import searchIcon from "../assets/icons/search.png";
import addressLocation from "../assets/icons/location.png";
import { IoTriangleSharp } from "react-icons/io5";
import { categories } from "../data/NavbarLinks";
import { AnimatePresence, motion } from "framer-motion";

const listVariant = {
  hover: {
    scale: 1.1,
    x: 5,
    boxShadow: "0px 2px 6px -3px rgba(0,0,0,0.75)",
    border:"1px solid #c1121f",
    color: "#c1121f",

    transition: {
      duration: 0.5,
      type: "ease",
    },
  },
};
const iconVariant = {
  hover:{
    color: "#c1121f",
    transition: {
      duration: 0.5,
      type: "ease",
    },
  }
}
const Searchnav = () => {
  return (
    <div className="search-nav bg-primary">
      <div className="container">
        <div className="row justify-space-between">
          <div className="category-search bg-secondary ">
            <div className="menu-img mr-2">
              <img src={menuIcon} alt="menu-icon" />
            </div>
            <h3 className="category-name text-white mr-2">Magazine</h3>
            <div className="drop-down text-white">
              <AiOutlineDown className="" />
            </div>
            <div className="categories p-2 br-sm">
              <div className="search_items">
                <div className="arrow_up">
                  <IoTriangleSharp className="text-white" />
                </div>
                <ul className="menu_items">
                  {categories.map((category) => {
                    const { id, name, icon } = category;
                    return (
                      <motion.li
                        variants={listVariant}
                        whileHover="hover"
                        key={id}
                        className="list_item font-md text-f-color mt-2 p-1"
                      ><motion.span variants={iconVariant} className="mr-1 font-md">{icon}</motion.span>
                        {name}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="search-input">
            <div className="input bg-white">
              <input
                className="pr-1 pl-2 pt-1 pb-1"
                type="text"
                placeholder="Search Books..."
              />
              <div className="search-i">
                <img src={searchIcon} alt="search-icon" />
              </div>
            </div>
          </div>
          <div className="primary-address p-1">
            <div className="icon">
              <img src={addressLocation} alt="location-icon" />
            </div>
            <input
              className="pt-1 pb-1 pr-1 pl-1 br-sm"
              type="text"
              placeholder="Accra, Ghana"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchnav;
