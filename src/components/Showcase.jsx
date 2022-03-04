import React, { useRef } from "react";
import Slider from "react-slick";

const Showcase = () => {
   const arrows = useRef();

   const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
   };

   return (
      <div className="showcase">
         <div className="container">
            <Slider {...settings} ref={arrows}>
               <div className="slide-cover">
                  <div
                     className="slide"
                     style={{
                        height: `${window.innerHeight - 70}px`,
                        background:
                           "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat center / cover",
                     }}
                  >
                     <div className="content">
                        <h1 className="title">Polarid Camera Apple Product</h1>
                        <p className="sub-title">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Sit, unde non ipsa quas consequatur error.
                        </p>
                        <a href="#product-section" className="btn">
                           show more
                        </a>
                     </div>
                  </div>
               </div>

               <div className="slide-cover">
                  <div
                     className="slide"
                     style={{
                        height: `${window.innerHeight - 70}px`,
                        background:
                           "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80') no-repeat center / cover",
                     }}
                  >
                     <div className="content">
                        <h1 className="title">Apple Watch ser.7</h1>
                        <p className="sub-title">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Sit, unde non ipsa quas consequatur error.
                        </p>
                        <a href="#product-section" className="btn">
                           show more
                        </a>
                     </div>
                  </div>
               </div>

               <div className="slide-cover">
                  <div
                     className="slide"
                     style={{
                        height: `${window.innerHeight - 70}px`,
                        background:
                           "url('https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80') no-repeat center / cover",
                     }}
                  >
                     <div className="content">
                        <h1 className="title">Cactus makes your table nice</h1>
                        <p className="sub-title">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Sit, unde non ipsa quas consequatur error.
                        </p>
                        <a href="#product-section" className="btn">
                           show more
                        </a>
                     </div>
                  </div>
               </div>
            </Slider>
         </div>
      </div>
   );
};

export default Showcase;
