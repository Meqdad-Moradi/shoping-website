import React, { useContext } from "react";
import webContext from "../../context/Context";
import Button from "../global/Button";
import CardContent from "../global/CardContent";
import ImageBox from "../global/ImageBox";
import MainTitle from "../global/MainTitle";

const LatestProducts = () => {
   const context = useContext(webContext);

   return (
      <section className="latest-products">
         <div className="container">
            <MainTitle
               titleText="latest products"
               subTitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="latest-products-card">
               {context.onLoading ? (
                  <h1 className="loading">Loading...</h1>
               ) : (
                  context.products.map((item, i) => {
                     const { prdName, rate, img, price } = item;
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
                                 btnText="show product"
                                 to="/productDetails"
                                 onclick={context.onAddSingleProduct}
                                 id={item.id}
                              />
                           </div>
                        </div>
                     );
                  })
               )}
            </div>
         </div>
      </section>
   );
};

export default LatestProducts;
