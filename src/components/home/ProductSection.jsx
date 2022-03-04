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
   };

   return (
      <section id="product-section">
         <div className="container">
            <MainTitle
               titleText="Our products"
               subTitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />

            <div className="product-list">
               <Slider {...settings}>
                  {context.products.map((item, i) => {
                     const {img } = item;
                     return (
                        <div key={i} className="product-list-item">
                           <Card img={img} />
                        </div>
                     );
                  })}
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default ProductSection;
