import React from "react";
import Button from "../../button/button.component";
import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

import CartItem from "../../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);
