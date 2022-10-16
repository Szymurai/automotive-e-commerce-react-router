import React from "react";

const Coupon = (props, test) => {
  return (
    <div>
      <em>Ścieżka: {props.url}</em>
      <p>
        Kod: <strong>{props.code.toUpperCase()}</strong>
      </p>
      <p>
        Wartość: <strong>{props.amount} $</strong>
      </p>
    </div>
  );
};

export default Coupon;
