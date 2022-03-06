import React, { useEffect, useState } from "react";
import Header from "../Header";

const Cart = () => {
   const [cartData, setCartData] = useState([]);
   // const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      const getCartData = async () => {
         try {
            const res = await fetch("http://localhost:8000/cart");
            const data = await res.json();
            setCartData(data);
         } catch (error) {
            console.error(error);
         }
      };

      getCartData();
   }, []);
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

                  {cartData.map((item) => {
                     const { id, prjName, image, color, price, configuration } =
                        item;

                     return (
                        <main key={id} className="cart-main">
                           <div className="img-box">
                              <img src={image} alt="product_image" />
                           </div>

                           <article className="article-details">
                              <h2>{prjName}</h2>
                              <p className="colo">
                                 <strong>color: </strong>
                                 {color}
                              </p>
                              <p className="configuration">
                                 <strong>configuration: </strong>{" "}
                                 {configuration}
                              </p>

                              <div className="article-details-footer">
                                 <select name="amount" id="amount">
                                    <option value="0">0 delete</option>
                                    <option defaultValue="1">1</option>
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
                                 <button>delete</button> <span>|</span>
                                 <button>save for later</button> <span>|</span>
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
                     <h3 className="total-price">
                        Total Price: $
                        {cartData.reduce((item, value) => {
                           return item + value.price;
                        }, 0)}
                     </h3>
                  </footer>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
