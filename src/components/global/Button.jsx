import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, btnText, onclick, id }) => {
   return (
      <Link className="btn" to={to} onClick={() => onclick(id)}>
         {btnText}
      </Link>
   );
};

export default Button;
