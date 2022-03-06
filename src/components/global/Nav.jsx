import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Nav = ({ onToggle }) => {
   return (
      <nav className={onToggle ? "nav active" : "nav"}>
         <ul className="nav-list">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/products">Products</NavLink>
            </li>
            <li>
               <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
               <NavLink to="/about">About</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="cart-btn">
               <NavLink to="/cart">
                  <FaShoppingCart />
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
