import React, { useContext, useState } from "react";
import webContext from "../../context/Context";
import Footer from "../global/Footer";
import Header from "../global/Header";

const Cart = () => {
   const [qty, setQty] = useState(1);
   const context = useContext(webContext);

   const handleQty = async (e, id) => {
      const itemQty = e.target.value;
      let newPrice = 0;

      setQty(itemQty);

      context.setCartData(
         context.cartData.map((item) => {
            newPrice = item.price * item.qty;

            if (item.id === id) {
               return { ...item, qty, price: newPrice };
            } else {
               return item;
            }
         })
      );

      // const res = await fetch("http://localhost:8000/cart", {
      //    method: "PUT",
      //    headers: {
      //       "content-type": "application/json",
      //    },
      //    body: JSON.stringify(newItem),
      // });
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
                             price,
                             rate,
                             //   disc,
                             color,
                             //   info,
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

                                   <div className="article-details-footer">
                                      <select
                                         name="amount"
                                         id="amount"
                                         onChange={(e) => handleQty(e, id)}
                                      >
                                         <option value="0">0 Delete</option>
                                         <option value="1" selected>
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
                                   <p>$ {price}</p>
                                </div>
                             </main>
                          );
                       })}

                  <footer className="cart-footer">
                     <p>
                        Subtotal ( {context.cartData.length}{" "}
                        {context.cartData.length === 1 ||
                        context.cartData.length === 0
                           ? "item"
                           : "items"}{" "}
                        ):
                     </p>
                     <h3 className="total-price">
                        <span>$ </span>
                        {context.cartData.reduce((item, value) => {
                           return item + value.price;
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
