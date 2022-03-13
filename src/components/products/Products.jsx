import React, { useContext } from "react";
import webContext from "../../context/Context";
import Button from "../global/Button";
import CardContent from "../global/CardContent";
import Footer from "../global/Footer";
import Header from "../global/Header";
import ImageBox from "../global/ImageBox";
import MainTitle from "../global/MainTitle";

const Products = () => {
   const context = useContext(webContext);
   return (
      <>
         <Header />

         <section className="products">
            <div className="container">
               <div className="banner">
                  <img
                     src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                     alt="banner"
                  />
                  <MainTitle
                     titleText="our products"
                     subTitleText="sponsored"
                  />
               </div>

               <div className="product-content">
                  {context.products.map((item, i) => {
                     const { prdName, rate, img, price, id } = item;
                     return (
                        <div key={i} className="product-list-item">
                           <div className="card">
                              <ImageBox image={img} />
                              <CardContent
                                 prdName={prdName}
                                 price={price}
                                 rate={rate}
                              />
                              <Button
                                 btnText="add to cart"
                                 to=""
                                 onclick={context.onAdd}
                                 id={id}
                              />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
};

export default Products;
