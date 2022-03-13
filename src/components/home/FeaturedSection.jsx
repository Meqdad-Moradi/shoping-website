import React, { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import webContext from "../../context/Context";
import ImageBox from "../global/ImageBox";
import MainTitle from "../global/MainTitle";

const FeaturedSection = () => {
   const arrow = useRef();
   const context = useContext(webContext);

   const settings = {
      infinite: true,
      arrows: false,
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
      <section className="featured-product">
         <div className="container">
            <MainTitle
               titleText="featured products"
               subTitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            {/* <Link to="/products">see more</Link> */}

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
               {context.onLoading ? (
                  <h1 className="loading">Loading...</h1>
               ) : (
                  <Slider {...settings} ref={arrow}>
                     {context.products.map((item, i) => {
                        return (
                           <div key={i} className="product-list-item">
                              <div className="card">
                                 <ImageBox image={item.img} />
                              </div>
                           </div>
                        );
                     })}
                  </Slider>
               )}
            </div>
         </div>
      </section>
   );
};

export default FeaturedSection;
