import React, { useContext } from "react";
import webContext from "../../context/Context";
import ImageBox from "../global/ImageBox";
import MainTitle from "../global/MainTitle";

const WishList = () => {
   const context = useContext(webContext);

   return (
      <section className="wish-list">
         <div className="container">
            {context.wishList.length === 0 ? (
               <h1>no item saved...</h1>
            ) : (
               <>
                  <MainTitle
                     titleText="items saved for later"
                     subTitleText="these items saved to buy later"
                  />

                  <div className="wish-list-body">
                     {context.wishList.map((item, i) => {
                        const { prdName, img, disc, info, price, rate } = item;
                        return (
                           <div className="saved-items" key={i}>
                              <ImageBox image={img} />
                              <div>
                                 <h2>{prdName}</h2>
                                 {Array(rate)
                                    .fill("")
                                    .map((_, i) => {
                                       return (
                                          <span key={i} className="rate">
                                             ⭐
                                          </span>
                                       );
                                    })}
                                 <p className="price">{price}</p>
                                 <p className="disc">{disc}</p>
                                 <ul className="item-info">
                                    {info.map((item) => (
                                       <li key={i}>{item}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </>
            )}
         </div>
      </section>
   );
};

export default WishList;
