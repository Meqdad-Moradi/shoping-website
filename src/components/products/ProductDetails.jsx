import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import webContext from "../../context/Context";
import Footer from "../global/Footer";
import Header from "../global/Header";

const ProductDetails = () => {
   const context = useContext(webContext);

   return (
      <>
         <Header />
         <section className="single-product">
            <div className="container">
               {context.productDetails.length === 0
                  ? "No product to show!"
                  : context.productDetails.map((item, i) => {
                       return (
                          <div key={i} className="single-product-content">
                             <div className="img-box">
                                <img src={item.img} alt="product_image" />
                             </div>

                             <div className="content">
                                <h1 className="product-name">{item.prdName}</h1>
                                {Array(item.rate)
                                   .fill("")
                                   .map((item, i) => {
                                      return <span key={i}>⭐</span>;
                                   })}

                                <div className="product-details">
                                   <h3 className="price">$ {item.price}</h3>

                                   <ul className="info">
                                      {item.info.map((info, infokey) => {
                                         return <li key={infokey}>{info}</li>;
                                      })}
                                   </ul>

                                   <button
                                      className="btn add-to-cart"
                                      onClick={() => context.onAdd(item.id)}
                                   >
                                      add to cart{" "}
                                      <span>
                                         <FaCartPlus />
                                      </span>
                                   </button>
                                </div>
                             </div>
                          </div>
                       );
                    })}
            </div>
         </section>

         <Footer />
      </>
   );
};

export default ProductDetails;
