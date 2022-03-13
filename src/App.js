import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import webContext from "./context/Context";

function App() {
   const [products, setProducts] = useState([]);
   const [cartData, setCartData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [productDetails, setProductDetails] = useState([]);
   const [wishList, setWishList] = useState([]);

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
      const tartgetItem = products.find((item) => item.id === id);

      if (!cartData.includes(tartgetItem)) {
         setCartData([...cartData, tartgetItem]);
         await fetch("http://localhost:8000/cart", {
            method: "POST",
            headers: {
               "content-type": "Application/json",
            },
            body: JSON.stringify(tartgetItem),
         });
      } else {
         return false;
      }
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

   return (
      <>
         <webContext.Provider
            value={{
               products: products,
               setProducts: setProducts,
               onAdd: handleAdd,
               cartData: cartData,
               setCartData: setCartData,
               onDelete: handleDelete,
               onAddSingleProduct: addSingleProduct,
               productDetails: productDetails,
               setProductDetails: setProductDetails,
               onLoading: isLoading,
               setLoading: setIsLoading,
               wishList: wishList,
               setWishList: setWishList,
            }}
         >
            <Routes>
               <Route path="/home" element={<Navigate to="/" />} />
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Products />} />
               <Route path="/productDetails" element={<ProductDetails />} />
               <Route path="/login" element={<Login />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </webContext.Provider>
      </>
   );
}

export default App;
