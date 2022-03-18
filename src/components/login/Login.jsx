import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import MainTitle from "../global/MainTitle";
import Popup from "./Popup";

const Login = () => {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [succed, setSucced] = useState(false);
   const [check, setCheck] = useState("");
   const navigate = useNavigate();

   // check user name and password when user want to log in
   const onLogin = (e) => {
      e.preventDefault();

      if (name === "") {
         setSucced(true);
         setCheck("Please insert your Username!");
         return;
      } else if (password === "") {
         setSucced(true);
         setCheck("Please insert your Password!");
         return;
      } else {
         navigate("/dashboard", { state: name });
      }

      setName("");
      setPassword("");
   };

   return (
      <>
         <Header />
         <section id="login-page">
            <div className="container">
               {succed ? <Popup check={check} /> : ""}
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
