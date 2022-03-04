import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <div className="logo">
         <Link to="/">
            {/* <img src={logo} alt="logo" /> */}
            logo
         </Link>
      </div>
   );
};

export default Logo;
