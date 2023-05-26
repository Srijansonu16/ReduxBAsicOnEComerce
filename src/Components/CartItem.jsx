import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action/cart";

const CartItem = () => {
  const dispatcher = useDispatch();
  const item = {
    id: 1,
    name: "prod1"
  };
  return (
    <div className="cart">
      <h2>Awesome Product</h2>
      <button onClick={() => dispatcher(addToCart(item))}>Add</button>
    </div>
  );
};
export default CartItem;
