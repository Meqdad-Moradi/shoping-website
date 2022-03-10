import React from "react";
import Footer from "../Footer";
import Header from "../Header";
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
