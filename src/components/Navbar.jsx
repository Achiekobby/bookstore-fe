import React from 'react'
import {Link} from "react-router-dom"
import {navLinks} from  "../data/NavbarLinks"
import mobileMenu from "../assets/icons/mobile-menu.png"
import logo from "../assets/images/logo-final.png"
import favoriteImg from "../assets/icons/heart.png"
import cartImg from "../assets/icons/cart.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* <div className="row justify-space-between"> */}
          <div className="">
            <img src={mobileMenu} alt="mobile menu" />
          </div>
          <div className="">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="menu-items">
            <ul className="links">
                {
                  navLinks.map((link_item)=>{
                    const {id, title, link} = link_item
                    return (
                      <li key={id} className="link_items">
                        <Link to={link}>{title}</Link>
                      </li>
                    );
                  })
                }
            </ul>
          </div>
          <div className="nav-icons">
            <img src={favoriteImg} alt="" className="fav" />
            <img src={cartImg} alt="" className="cart" />
            <Link to="/login">
              <button className="bg-primary font-sm text-white pl-2 pr-2 pt-1 pb-1 br-sm">Login</button>
            </Link>
          </div>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar