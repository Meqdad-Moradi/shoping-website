import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import MainTitle from "../global/MainTitle";

const Login = () => {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   // check user name and password when user want to log in
   const onLogin = (e) => {
      e.preventDefault();

      if (name === "" || password === "") {
         alert("Username or password missing!");
      }

      setName("");
      setPassword("");
   };

   return (
      <>
         <Header />
         <section id="login-page">
            <div className="container">
               <div className="login-content">
                  <MainTitle
                     titleText="Login"
                     subTitleText="We are happy to see you here :)"
                  />

                  <form action="POST" onSubmit={onLogin}>
                     <div className="form-control">
                        <input
                           type="text"
                           id="name"
                           value={name}
                           autoComplete="off"
                           placeholder=" "
                           onChange={(e) => setName(e.currentTarget.value)}
                        />
                        <label htmlFor="name">User name</label>
                     </div>
                     <div className="form-control">
                        <input
                           type="password"
                           id="password"
                           value={password}
                           autoComplete="off"
                           placeholder=" "
                           onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <label htmlFor="password">Password</label>
                     </div>

                     <Link to="">forgot your password?</Link>

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
