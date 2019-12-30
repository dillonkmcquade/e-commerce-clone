import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart-black-shape.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleDropDown } from "../../redux/cart/cart.actions";

const CartIcon = ({toggleDropDown}) => (
  <div className="cart-icon" onClick={toggleDropDown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropDown: () => dispatch(toggleDropDown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
