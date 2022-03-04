import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img }) => {
   return (
      <div>
         <div className="img-box">
            <Link to="/products">
               <img src={img} alt="product name" />
            </Link>
         </div>
      </div>
   );
};

export default Card;
