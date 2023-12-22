import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

const Cart = () => {
  //get all cart item from our store
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("Before removal:", cartItem);
    dispatch(remove(id));
    console.log("After removal:", cartItem);
  };

  return (
    <div>
      <div>
        {cartItem.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
