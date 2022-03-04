import React, { useContext } from "react";
import webContext from "../../context/Context";
import Header from "../Header";
import Showcase from "./Showcase";
import ProductSection from "./ProductSection";

const Home = () => {
   const context = useContext(webContext);

   return (
      <>
         <Header />
         <Showcase />
         <ProductSection />
      </>
   );
};

export default Home;
