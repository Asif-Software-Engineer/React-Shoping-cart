import React from "react";
import { Route, Routes } from "react-router-dom";
import SellingProducts from "../product/SellingProducts";
import SignUp from "../Signup/SignUp";
import Cart from "../cart/Cart";

const Routes1 = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <SellingProducts
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Routes1;
