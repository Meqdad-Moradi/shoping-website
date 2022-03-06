import React, { useContext } from "react";
import Slider from "react-slick";
import webContext from "../../context/Context";
import Card from "../global/Card";
import MainTitle from "../global/MainTitle";
import Header from "../Header";
import SingleProduct from "./SingleProduct";

const Products = () => {
   const context = useContext(webContext);

   const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <>
         <Header />
         <SingleProduct />

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
                           />
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
};

export default Products;
