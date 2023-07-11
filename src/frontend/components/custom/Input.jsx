import React from "react";

const Input = ({ inputInfo: { value, label, type, callback, name, error }, style = "" }) => {

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="" className="label">
          {label}
        </label>
        <input
          type={type}
          className={`${style} `}
          onChange={callback}
          name={name}
          value={value}
        />
        {
          error.status ? <p className="text-red-500 text-sm">{error.error}</p> : ""
        }
      </div>
    </>
  );
};

export default Input;
