import React from "react";
import Button from "./Button";

const Card = ({ rate, img, price, prdName, btnTo, btnText }) => {
   return (
      <div className="card">
         <div className="img-box">
            <img src={img} alt="product name" />
         </div>
         <div className="content">
            <p className="title">{prdName}</p>
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
            <Button to={btnTo} btnText={btnText} />
         </div>
      </div>
   );
};

export default Card;
