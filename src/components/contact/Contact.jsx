import React, { useState } from "react";
import Header from "./../global/Header";
import Footer from "./../global/Footer";
import MainTitle from "./../global/MainTitle";
import Input from "../global/Input";

const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   return (
      <>
         <Header />
         <div className="contact-page">
            <div className="container">
               <MainTitle
                  titleText="Contact me"
                  subTitleText="If you would like to we know each other, I will be happy to see your message."
               />

               <div className="contat-body">
                  <div className="contact-form-container">
                     <form action="POST">
                        <Input
                           name="name"
                           setValue={setName}
                           type="text"
                           label="name"
                           value={name}
                        />
                        <Input
                           name="email"
                           setValue={setEmail}
                           type="email"
                           label="email"
                           value={email}
                        />

                        <div className="form-control message">
                           <textarea
                              className="input"
                              name="message"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder=" "
                           ></textarea>
                           <label htmlFor="message">message</label>
                        </div>

                        <button type="submit" className="btn">
                           Send
                        </button>
                     </form>
                  </div>
                  <div className="contact-info">
                     <h1>contact info</h1>
                     <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsum, voluptate.
                     </p>
                     <p>
                        <strong>email:</strong> example@shoping-website.com
                     </p>
                     <p>
                        <strong>phone:</strong> 0043 660 34 48 348
                     </p>
                     <p>
                        <strong>address:</strong> Darvin gasse 1, 4893 Wien, Austia
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Contact;
