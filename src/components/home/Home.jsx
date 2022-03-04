import React, { useContext } from "react";
import webContext from "../../context/Context";
import Header from "../Header";
import Showcase from "../Showcase";

const Home = () => {
   const context = useContext(webContext);

   return (
      <>
         <Header />
         <Showcase />
      </>
   );
};

export default Home;
