import React from "react";
import Header from "../Header";
import Exclosive from "./Exclosive";
import ProductSection from "./ProductSection";
import Showcase from "./Showcase";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <ProductSection />
         <Exclosive />
      </>
   );
};

export default Home;
