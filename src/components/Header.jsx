import React from "react";
import Logo from "./global/Logo";
import Nav from "./global/Nav";

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <Logo />
            <Nav />
            <button className="toggler">
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
      </header>
   );
};

export default Header;
