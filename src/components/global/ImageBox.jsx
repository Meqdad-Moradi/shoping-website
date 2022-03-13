import React from "react";

const ImageBox = ({ image, imageAlt }) => {
   return (
      <div className="img-box">
         <img src={image} alt={imageAlt} />
      </div>
   );
};

export default ImageBox;
