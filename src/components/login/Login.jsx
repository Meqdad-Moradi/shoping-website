import React from "react";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import MainTitle from "../global/MainTitle";

const Login = () => {
   return (
      <>
         <Header />
         <section id="login-page">
            <div className="container">
               <div className="login-content">
                  <MainTitle
                     titleText="login"
                     subTitleText="We are happy to see you here :)"
                  />

                  <form action="POST">
                     <div className="form-control">
                        <input
                           type="text"
                           id="name"
                           autoComplete="off"
                           placeholder=" "
                        />
                        <label htmlFor="name">User name</label>
                     </div>
                     <div className="form-control">
                        <input
                           type="password"
                           id="password"
                           autoComplete="off"
                           placeholder=" "
                        />
                        <label htmlFor="password">Password</label>
                     </div>

                     <a href="#">forgot your password?</a>

                     <button className="btn">log in</button>
                  </form>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Login;
