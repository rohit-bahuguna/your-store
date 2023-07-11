import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, callback, to = "", style }) => {
  return (
    <>
      {to !== "" ? (
        <Link to={to}>
          <button className={style}>{title}</button>
        </Link>
      ) : (
        <button onClick={callback} className={style}>
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
