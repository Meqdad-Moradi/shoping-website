import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, btnText }) => {
   return <Link className="btn" to={to}>{btnText}</Link>;
};

export default Button;
