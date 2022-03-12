import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";
import MainTitle from "../global/MainTitle";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Testimonials = () => {
   const arrow = useRef();

   const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
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
      <section className="testimonials">
         <div className="container">
            <MainTitle
               titleText="Testimonials"
               subTitleText="you can see down below what our clients are saying about us and we would appreciate that you share your idea with us."
            />

            <div className="testimonials-content">
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
                  {Array(6)
                     .fill("")
                     .map((_, i) => {
                        return (
                           <div className="content" key={i}>
                              <div className="content-body">
                                 <div className="img-box">
                                    <img
                                       src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                       alt="testimonials_image"
                                    />
                                 </div>
                                 <div className="content-details">
                                    <h1>"hello guys"</h1>
                                    <p>
                                       Lorem ipsum dolor sit amet consectetur
                                       adipisicing elit. Voluptates nisi
                                       mollitia enim ipsam fugiat ad!
                                    </p>
                                    <p>
                                       <strong>maryam amini</strong>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
