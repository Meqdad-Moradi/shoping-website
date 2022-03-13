import React from "react";
import Button from "../global/Button";
import MainTitle from "../global/MainTitle";
import smartWatch from "./../../assets/images/smart-watch.png";

const Cta = () => {
   return (
      <section className="exclosive">
         <div className="container">
            <div className="cxclosive-content">
               <div className="img-box">
                  <img src={smartWatch} alt="exclosive_product_image" />
               </div>
               <div className="content">
                  <h4>Exclosively available on Shopping-website</h4>
                  <MainTitle
                     titleText="smart brand"
                     subTitleText="Repellat doloribus deserunt voluptatum praesentium, incidunt fugiat."
                  />
                  <Button to="/products" btnText="buy now" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Cta;
