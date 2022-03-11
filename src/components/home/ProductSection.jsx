import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import Card from "../global/Card";
import MainTitle from "../global/MainTitle";
import webContext from "../../context/Context";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProductSection = () => {
   const arrow = useRef();
   const context = useContext(webContext);

   const settings = {
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
               <button
                  className="arrow left"
                  onClick={() => arrow.current.slickPrev()}
               >
                  <FaChevronLeft />
               </button>
               <button
                  className="arrow right"
                  onClick={() => arrow.current.slickNext()}
               >
                  <FaChevronRight />
               </button>

               <Slider {...settings} ref={arrow}>
                  {context.products.map((item, i) => {
                     const { prdName, rate, img, price } = item;
                     return (
                        <div key={i} className="product-list-item">
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo="/products"
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
                        <div
                           key={i}
                           className="product-list-item"
                           onClick={() => context.onAddSingleProduct(item.id)}
                        >
                           <Card
                              img={img}
                              prdName={prdName}
                              rate={rate}
                              price={price}
                              btnTo="/productDetails"
                              btnText="show product"
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
