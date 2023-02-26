import React from "react";
import locationIcon from "../assets/icons/location-colored.png";
import { motion, AnimatePresence } from "framer-motion";

const addressVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, type:"spring", stiffness:120 },
  },
};
const AddressCard = ({ showAddress }) => {
  return (
    <div className="mobile-address">
      <AnimatePresence>
        {showAddress && (
          <motion.div
            variants={addressVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="container"
          >
            <div className="row">
              <div className="address-card br-sm bg-white o-3">
                <div className="logo">
                  <img src={locationIcon} alt="address-location-icon" />
                </div>
                <div className="location p-1">
                  <p className="font-sm text-f-color mt-1">
                    Achimota Mall, Number 4 Block G,
                  </p>
                  <p className="font-sm text-f-color mt-1">
                    Achimota, Greater Accra Region
                  </p>
                  <p className="font-sm text-f-color mt-1">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddressCard;
