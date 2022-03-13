import React from "react";

const CardContent = ({ prdName, rate, price }) => {
   return (
      <div className="content">
         <h2 className="title">{prdName}</h2>
         {Array(rate)
            .fill("")
            .map((_, i) => {
               return (
                  <span key={i} className="rate">
                     ⭐
                  </span>
               );
            })}
         <p className="price">
            <span>$</span>
            {price}
         </p>
      </div>
   );
};

export default CardContent;
