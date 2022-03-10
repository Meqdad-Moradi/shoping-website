import React, { useContext } from "react";
import { Link } from "react-router-dom";
import webContext from "../../context/Context";

const Button = ({ to, btnText, id }) => {
   const context = useContext(webContext);

   return (
      <Link className="btn" to={to} onClick={() => context.onAdd(id)}>
         {btnText}
      </Link>
   );
};

export default Button;
