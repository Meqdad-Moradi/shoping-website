import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div className="notfound">
         <h1>
            Error<span>404</span>
         </h1>
         <p>Oops! Sorry your page was not found!</p>
         <Link to="/">Go Home</Link>
      </div>
   );
};

export default NotFound;
