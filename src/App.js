import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import Products from "./components/products/Products";
import webContext from "./context/Context";

function App() {
   const [products, setProducts] = useState([
      { id: 1, name: "love toy", mark: "niva" },
      { id: 2, name: "cream roy", mark: "niva" },
      { id: 3, name: "moybar", mark: "jaqulin" },
   ]);

   return (
      <>
         <webContext.Provider
            value={{
               products: products,
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
