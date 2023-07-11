import React from "react";

const Input = ({ inputInfo: { label, type, callback, name, error }, style = "" }) => {

  return (
    <>
      <div className="input">
        <label htmlFor="" className="label">
          {label}
        </label>
        <input
          type={type}
          className={`${style} `}
          onChange={callback}
          name={name}
        />
        {
          error.status ? <p className="error">{error.error}</p> : ""
        }
      </div>
    </>
  );
};

export default Input;
