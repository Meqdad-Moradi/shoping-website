import React, { useContext } from "react";
import webContext from "../../context/Context";
import Card from "../global/Card";
import Footer from "../global/Footer";
import Header from "../global/Header";
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
                     src="https://images.unsplash.com/photo-1604759695540-3012f9682c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
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
                        <div
                           key={i}
                           className="product-list-item"
                           onClick={() => context.onAdd(id)}
                        >
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo=""
                              btnText="show product"
                              onclick={context.onAdd}
                              id={id}
                           />
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
