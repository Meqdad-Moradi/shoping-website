import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Input from "../global/Input";
import MainTitle from "../global/MainTitle";
import Popup from "./Popup";

const Login = () => {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [nosucced, setNoSucced] = useState(false);
   const [check, setCheck] = useState("");
   const navigate = useNavigate();

   // check user name and password when user want to log in
   const onLogin = (e) => {
      e.preventDefault();

      if (name === "") {
         setNoSucced(true);
         setCheck("Please insert your Username!");
         return;
      } else if (password === "") {
         setNoSucced(true);
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
               {nosucced ? <Popup check={check} /> : null}
               <div className="login-content">
                  <MainTitle
                     titleText="Login"
                     subTitleText="We are happy to see you here :)"
                  />

                  <form action="POST" onSubmit={onLogin}>
                     <Input
                        name="name"
                        setValue={setName}
                        type="name"
                        label="user name"
                        value={name}
                     />
                     <Input
                        name="password"
                        setValue={setPassword}
                        type="password"
                        label="password"
                        value={password}
                     />

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
