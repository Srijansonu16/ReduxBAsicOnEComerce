import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2 className="cart"> Add To Cart {JSON.stringify(cart)}</h2>
    </div>
  );
};
export default Cart;
