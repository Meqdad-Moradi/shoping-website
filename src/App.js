import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import Products from "./components/products/Products";
import webContext from "./context/Context";

function App() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const getDate = async () => {
         try {
            const res = await fetch("http://localhost:8000/products");
            const data = await res.json();
            setProducts(data);
         } catch (error) {
            console.error(error);
         }
      };

      getDate();
   }, []);

   return (
      <>
         <webContext.Provider
            value={{
               products: products,
               setProducts: setProducts,
            }}
         >
            <Routes>
               <Route path="/home" element={<Navigate to="/" />} />
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </webContext.Provider>
      </>
   );
}

export default App;
