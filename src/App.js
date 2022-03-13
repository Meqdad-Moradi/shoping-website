import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import Login from "./components/login/Login";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import webContext from "./context/Context";

function App() {
   const [products, setProducts] = useState([]);
   const [cartData, setCartData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [productDetails, setProductDetails] = useState([]);

   // get product data from database
   const getDate = async () => {
      try {
         const res = await fetch("http://localhost:8000/products");
         const data = await res.json();
         setProducts(data);
         setIsLoading(false);
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

   // get product detials data from database
   const getDetailsData = async () => {
      try {
         const res = await fetch("http://localhost:8000/detailsPage");
         const data = await res.json();
         setProductDetails(data);
      } catch (error) {}
   };
   useEffect(() => {
      getCartData();
      getDate();
      getDetailsData();
   }, []);

   // ADD ITEM TO CART
   const handleAdd = async (id) => {
      const newItem = products.find((item) => item.id === id);

      await fetch("http://localhost:8000/cart", {
         method: "POST",
         headers: {
            "content-type": "Application/json",
         },
         body: JSON.stringify(newItem),
      });

      setCartData([...cartData, newItem]);
   };

   // ADD ITEM TO PRODUCT DETAILS PAGE
   const addSingleProduct = async (id) => {
      const newItem = products.find((item) => item.id === id);
      setProductDetails([newItem]);
   };

   // DELTE ITEM FORM CART
   const handleDelete = async (id) => {
      await fetch(`http://localhost:8000/cart/${id}`, {
         method: "DELETE",
      });

      const newitem = cartData.filter((item) => item.id !== id);
      setCartData(newitem);
   };

   // SHOW SINGLE PRODUCT
   const showSingleProduct = (id) => {
      console.log(id);
   };

   return (
      <>
         <webContext.Provider
            value={{
               products: products,
               setProducts: setProducts,
               onAdd: handleAdd,
               cartData: cartData,
               setCartData: setCartData,
               onshow: showSingleProduct,
               onDelete: handleDelete,
               onAddSingleProduct: addSingleProduct,
               productDetails: productDetails,
               setProductDetails: setProductDetails,
               onLoading: isLoading,
               setLoading: setIsLoading,
            }}
         >
            <Routes>
               <Route path="/home" element={<Navigate to="/" />} />
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
               <Route path="/productDetails" element={<ProductDetails />} />
               <Route path="/login" element={<Login />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </webContext.Provider>
      </>
   );
}

export default App;
