import React, { useContext } from "react";
import Slider from "react-slick";
import Card from "../global/Card";
import MainTitle from "../global/MainTitle";
import webContext from "../../context/Context";

const ProductSection = () => {
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
      <section id="product-section">
         <div className="container">
            <MainTitle
               titleText="featured products"
               subTitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />

            <div className="product-list">
               <Slider {...settings}>
                  {context.products.map((item, i) => {
                     const { prdName, rate, img, price } = item;
                     return (
                        <div key={i} className="product-list-item">
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo="/product"
                              btnText="show product"
                           />
                        </div>
                     );
                  })}
               </Slider>
            </div>

            <section className="latest-products">
               <MainTitle
                  titleText="latest products"
                  subTitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
               />
               <div className="latest-products-card">
                  {context.products.map((item, i) => {
                     const { prdName, rate, img, price } = item;
                     return (
                        <div key={i} className="product-list-item">
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo="/cart"
                              btnText="add to cart"
                           />
                        </div>
                     );
                  })}
               </div>
            </section>
         </div>
      </section>
   );
};

export default ProductSection;
