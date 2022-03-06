import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import webContext from "../../context/Context";

const SingleProduct = () => {
   const context = useContext(webContext);

   return (
      <div className="single-product">
         <div className="container">
            <div className="img-box">
               <img src={""} alt="product_image" />
            </div>

            <div className="content">
               <h1 className="product-name">Apple watch ser.7</h1>
               {Array(5)
                  .fill("")
                  .map((item, i) => {
                     return <span key={i}>⭐</span>;
                  })}

               <div className="product-details">
                  <h3 className="price">$ 1100</h3>
                  <p className="info">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officia delectus, rerum porro mollitia corporis quidem, qui
                     totam soluta, numquam pariatur ut quisquam deserunt dolore
                     doloribus minus excepturi amet aliquid accusamus.
                  </p>
                  <p className="info">
                     Rerum porro mollitia corporis quidem, qui totam soluta,
                     numquam pariatur ut quisquam deserunt dolore doloribus
                     minus excepturi amet aliquid accusamus.
                  </p>

                  <button className="btn add-to-cart">
                     add to cart{" "}
                     <span>
                        <FaCartPlus />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
