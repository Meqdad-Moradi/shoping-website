import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import webContext from "./context/Context";

function App() {
   const [products, setProducts] = useState([]);
   const [cartData, setCartData] = useState([]);

   // get product data from database
   const getDate = async () => {
      try {
         const res = await fetch("http://localhost:8000/products");
         const data = await res.json();
         setProducts(data);
      } catch (error) {
         console.error(error);
      }
   };

   // get cart data from database
   const getCartData = async () => {
      try {
         const res = await fetch("http://localhost:8000/cart");
         const data = await res.json();
         setCartData(data);
      } catch (error) {
         console.error(error);
      }
   };
   useEffect(() => {
      getCartData();
      getDate();
   }, []);

   // ADD ITEM TO CART
   const handleAdd = async (id) => {
      console.log(id);
   };

   // DELTE ITEM FORM CART
   const handleDelete = async (id) => {
      await fetch(`http://localhost:8000/cart/${id}`, {
         method: "DELETE",
      });

      const newitem = cartData.filter((item) => item.id !== id);
      setCartData(newitem);
   };

   return (
      <>
         <webContext.Provider
            value={{
               products: products,
               setProducts: setProducts,
               onAdd: handleAdd,
               cartData: cartData,
               onDelete: handleDelete,
            }}
         >
            <Routes>
               <Route path="/home" element={<Navigate to="/" />} />
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
               <Route path="/productDetails" element={<ProductDetails />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </webContext.Provider>
      </>
   );
}

export default App;
