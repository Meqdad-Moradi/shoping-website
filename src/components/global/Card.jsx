import React from "react";
import { Link } from "react-router-dom";

const Card = ({ rate, img, price, prdName }) => {
   return (
      <div className="card">
         <div className="img-box">
            <img src={img} alt="product name" />
         </div>
         <div className="content">
            <p className="title">{prdName}</p>
            {Array(rate)
               .fill("")
               .map((_) => {
                  return <span className="rate">⭐</span>;
               })}
            <p className="price">
               <span>$</span>
               {price}
            </p>
         </div>
      </div>
   );
};

export default Card;
