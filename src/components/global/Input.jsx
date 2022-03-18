import React from "react";

const Input = ({ name, setValue, type, label, value }) => {
   return (
      <div className="form-control">
         <input
            className="input"
            type={type}
            id={name}
            value={value}
            autoComplete="off"
            placeholder=" "
            onChange={(e) => setValue(e.currentTarget.value)}
         />
         <label htmlFor={name}>{label}</label>
      </div>
   );
};

export default Input;
