import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav className="nav">
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
         </ul>
      </nav>
   );
};

export default Nav;
