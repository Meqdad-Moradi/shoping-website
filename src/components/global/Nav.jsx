import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import webContext from "../../context/Context";

const Nav = ({ onToggle }) => {
   const context = useContext(webContext);

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
            <li className="login-btn">
               <NavLink to="/login">sign In</NavLink>
            </li>
            <li className="cart-btn">
               <NavLink to="/cart">
                  <FaShoppingCart />
               </NavLink>
               <span className="cart-amount">{context.cartData.length}</span>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
