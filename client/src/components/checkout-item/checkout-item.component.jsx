import React from "react";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="item-description">{name}</span>
      <span className="item-quantity">{quantity}</span>
      <span className="item-price">{price}</span>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default CheckoutItem;
