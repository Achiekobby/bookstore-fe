import React, { useEffect, useState } from "react";
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
    color: "#c1121f",

    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  },
};
const iconVariant = {
  hover: {
    color: "#c1121f",
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
};
const categoryCardVariant = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.6,
      type: "ease",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  },
};
const Searchnav = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [category, setCategory] = useState(categories[0].name);

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleSetCategory = (category_item) => {
    setCategory(category_item);
  };
  useEffect(() => {
    handleSetCategory(category)
  }, [category])
  
  return (
    <div className="search-nav bg-primary">
      <div className="container">
        <div
          className="row justify-space-between"
          
        >
          <div className="category-search bg-secondary "onClick={handleShowCategories}>
            <div className="menu-img mr-2">
              <img src={menuIcon} alt="menu-icon" />
            </div>
            <h3 className="category-name text-white mr-2">{category}</h3>
            <div className="drop-down text-white">
              <AiOutlineDown className="" />
            </div>
            {showCategories && (
              <AnimatePresence>
                <motion.div
                  variants={categoryCardVariant}
                  initial="hidden"
                  animate="visible"
                  className="categories p-2 br-sm"
                >
                  <div className="search_items">
                    <div className="arrow_up">
                      <IoTriangleSharp className="text-white" />
                    </div>
                    <ul className="menu_items">
                      {categories.map((category) => {
                        // const { id, name, icon } = category;
                        return (
                          <motion.li onClick={()=>handleSetCategory(category.name)}
                            variants={listVariant}
                            whileHover="hover"
                            key={category.id}
                            className="list_item font-md text-f-color mt-2 p-1"
                          >
                            <motion.span
                              variants={iconVariant}
                              className="mr-1 font-md"
                            >
                              {category.icon}
                            </motion.span>
                            {category.name}
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
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
            disabled
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
