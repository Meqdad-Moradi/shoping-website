import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import webContext from "../../context/Context";
import Footer from "../global/Footer";
import Header from "../global/Header";

const Cart = () => {
   const [qty, setQty] = useState(1);
   const context = useContext(webContext);

   // UPDATE ITEM'S PRICE
   const handleQty = async (e, id) => {
      const itemQty = Number(e.target.value);
      let newPrice = 0;
      const item = context.cartData.find((item) => item.id === id);

      newPrice += itemQty * item.basePrice;
      const newItem = { ...item, qty: itemQty, price: newPrice };

      context.setCartData(
         context.cartData.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  qty: itemQty,
                  price: item.basePrice * itemQty,
               };
            } else {
               return item;
            }
         })
      );

      // update price and qty
      const res = await fetch(`http://localhost:8000/cart/${id}`, {
         method: "PUT",
         headers: {
            Accept: "application/json",
            "content-type": "application/json",
         },
         body: JSON.stringify(newItem),
      });

      const data = await res.json();
      setQty(data.qty);

      // if qty is 0 then delete item from cart
      if (data.qty === 0) {
         await fetch(`http://localhost:8000/cart/${id}`, {
            method: "DELETE",
         });
         const filteredItems = context.cartData.filter(
            (item) => item.id !== id
         );
         context.setCartData(filteredItems);
      }
   };

   return (
      <div className="cart">
         <Header />
         <div className="cart-page">
            <div className="container">
               <div className="cart-content">
                  <header className="cart-header">
                     <h1 className="title">shopping cart</h1>
                     <p>price</p>
                  </header>

                  {context.cartData.length === 0
                     ? "your cart is empty!"
                     : context.cartData.map((item) => {
                          const {
                             id,
                             prdName,
                             configuration,
                             basePrice,
                             rate,
                             disc,
                             color,
                             info,
                             img,
                          } = item;

                          return (
                             <main key={id} className="cart-main">
                                <div className="img-box">
                                   <img src={img} alt="product_image" />
                                </div>

                                <article className="article-details">
                                   <h2>{prdName}</h2>
                                   <div className="item-rate">
                                      {Array(rate)
                                         .fill("")
                                         .map((_, rateIndex) => {
                                            return (
                                               <span key={rateIndex}>⭐</span>
                                            );
                                         })}
                                   </div>
                                   <p className="colo">
                                      <strong>color: </strong>
                                      {color}
                                   </p>
                                   <p className="configuration">
                                      <strong>configuration: </strong>{" "}
                                      {configuration}
                                   </p>
                                   <ul className="item-info">
                                      {info.map((item, i) => (
                                         <li key={i}>{item}</li>
                                      ))}
                                   </ul>
                                   <p className="disc">
                                      {disc}{" "}
                                      <span>
                                         Details
                                         <FaChevronDown />
                                      </span>
                                   </p>

                                   <div className="article-details-footer">
                                      <select
                                         name="amount"
                                         id="amount"
                                         //   value={qty}
                                         onChange={(e) => handleQty(e, id)}
                                      >
                                         <option value="0">0 Delete</option>
                                         <option defaultValue="1" selected>
                                            1
                                         </option>
                                         <option value="2">2</option>
                                         <option value="3">3</option>
                                         <option value="4">4</option>
                                         <option value="5">5</option>
                                         <option value="6">6</option>
                                         <option value="7">7</option>
                                         <option value="8">8</option>
                                         <option value="9">9</option>
                                         <option value="10">10</option>
                                      </select>{" "}
                                      <span>|</span>
                                      <button
                                         onClick={() => context.onDelete(id)}
                                      >
                                         delete
                                      </button>{" "}
                                      <span>|</span>
                                      <button>save for later</button>{" "}
                                      <span>|</span>
                                      <button>see like this</button>
                                   </div>
                                </article>

                                <div className="price-cover">
                                   <p>$ {basePrice}</p>
                                </div>
                             </main>
                          );
                       })}

                  <footer className="cart-footer">
                     <p>
                        Subtotal ( {context.cartData.length}{" "}
                        {context.cartData.length === 1 ||
                        context.cartData.length === 0
                           ? "Item"
                           : "Items"}{" "}
                        ):
                     </p>
                     <h3 className="total-price">
                        <span>$ </span>
                        {context.cartData.reduce((item, value) => {
                           const totalPrice = item + value.price;
                           return Math.round(totalPrice);
                        }, 0)}
                     </h3>
                  </footer>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
};

export default Cart;
