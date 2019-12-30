import React from "react";
import Button from "../../button/button.component";
import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
