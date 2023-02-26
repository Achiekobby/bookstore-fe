import React from "react";
import locationIcon from "../assets/icons/location-colored.png";
import { motion, AnimatePresence } from "framer-motion";

const mobile_address = {
  hidden: {
    x: 20,
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "inertia",
      velocity: 50,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "inertia", velocity: 50 },
    },
  },
};
const AddressCard = ({ showAddressCard }) => {
  return (
    <AnimatePresence>
      <div className="mobile-address">
        {showAddressCard && (
          <motion.div
            variants={mobile_address}
            initial="hidden"
            animate="visible"
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
      </div>
    </AnimatePresence>
  );
};

export default AddressCard;
