import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_r7GWKnk03kJHyoYfhUSgatZ700KL8imw7L";

  const onToken = token => {
    console.log(token);
    alert("payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Green Mountain Gear"
      billingAddress
      shippingAddress
      image="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjeif7NoePmAhULh-AKHXMQAJIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F622765-mountain-vector-logo-and-symbol&psig=AOvVaw26fVYZTpQfoi580V9B6SCg&ust=1577997680765097"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
