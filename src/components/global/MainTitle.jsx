import React from "react";

const MainTitle = ({ titleText, subTitleText }) => {
   return (
      <div className="main-title">
         <h1 className="title">{titleText}</h1>
         <p className="sub-title">{subTitleText}</p>
      </div>
   );
};

export default MainTitle;
