import React, { useContext } from "react";
import webContext from "../../context/Context";
import Footer from "../Footer";
import Card from "../global/Card";
import MainTitle from "../global/MainTitle";
import Header from "../Header";
import ProductDetails from "./ProductDetails";

const Products = () => {
   const context = useContext(webContext);

   return (
      <>
         <Header />
         <ProductDetails />

         <section className="popular-products">
            <div className="container">
               <MainTitle
                  titleText="Products related to this item"
                  subTitleText="sponsored"
               />
               <div className="product-content">
                  {context.products.map((item, i) => {
                     const { prdName, rate, img, price } = item;
                     return (
                        <div
                           key={i}
                           className="product-list-item"
                           onClick={() => context.onAdd(item.id)}
                        >
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo=""
                              btnText="add to cart"
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
