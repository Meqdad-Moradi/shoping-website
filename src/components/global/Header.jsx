import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
   const [toggled, setToggled] = useState(false);

   return (
      <header className="header">
         <div className="container">
            <Logo />
            <Nav onToggle={toggled}/>
            <button
               className={toggled ? "toggler active" : "toggler"}
               onClick={() => setToggled(!toggled)}
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
      </header>
   );
};

export default Header;
