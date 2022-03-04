import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
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
         {/* slide arrow buttons */}
         <div className="arrows-btn">
            <div className="arrow-btn">
               <FaChevronLeft />
            </div>
            <div className="arrow-btn">
               <FaChevronRight />
            </div>
         </div>

         {/* slides */}
         <Slider {...settings} ref={arrows}>
            <div className="slide-cover">
               <div
                  className="slide"
                  style={{
                     height: `${window.innerHeight - 70}px`,
                     background:
                        "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat center bottom / cover",
                  }}
               >
                  <div className="content">
                     <h1 className="title">Polarid Camera Apple Product</h1>
                     <p className="sub-title">
                        Consectetur adipisicing elit. Sit, unde non ipsa quas
                        consequatur error.
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
                        Lorem, ipsum dolor sit amet consectetur.
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
                        "url('https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80') no-repeat center / cover",
                  }}
               >
                  <div className="content">
                     <h1 className="title">Cactus makes your table nice</h1>
                     <p className="sub-title">
                        Sit, unde non ipsa quas consequatur error.
                     </p>
                     <a href="#product-section" className="btn">
                        show more
                     </a>
                  </div>
               </div>
            </div>
         </Slider>
      </div>
   );
};

export default Showcase;
