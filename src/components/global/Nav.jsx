import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
   return (
      <nav className="nav">
         <ul className="nav-list">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/products">Products</Link>
            </li>
            <li>
               <Link to="/gallery">Gallery</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
