import React from "react";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Exclosive from "./Exclosive";
import ProductSection from "./ProductSection";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <ProductSection />
         <Exclosive />
         <Testimonials />
         <Footer />
      </>
   );
};

export default Home;
