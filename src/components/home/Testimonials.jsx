import React from "react";
import MainTitle from "../global/MainTitle";

const Testimonials = () => {
   return (
      <section className="testimonials">
         <div className="container">
            <MainTitle
               titleText="Our visitore comments"
               subTitleText="you can see down below what our clients are saying about us and we would appreciate that you share your idea with us."
            />

            <div className="testimonials-content">
               {Array(6)
                  .fill("")
                  .map((_, i) => {
                     return (
                        <div className="content" key={i}>
                           <h1>hellow guys</h1>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptates nisi mollitia enim ipsam fugiat
                              ad!
                           </p>
                           <p>
                              <strong>ali kamali</strong>
                           </p>
                        </div>
                     );
                  })}
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
