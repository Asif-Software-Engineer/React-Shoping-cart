import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  if (typeof cartItems === "undefined") {
    cartItems = [];
  }

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>Cart Items</h1>
      </div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}{" "}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">
          Sorry, There is No Item added by You.
        </div>
      )}

      <div>
        {cartItems.map((item, productItem) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item, productItem)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item, productItem)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {" "}
              {item.quantity} * ${item.price}{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price =
        <div className="cart-items-total-price"> $ {totalPrice}</div>
      </div>
    </div>
  );
};
export default Cart;
