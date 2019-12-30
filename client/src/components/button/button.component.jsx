import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, bannerlogo, ...otherProps }) => {
  return (
    <button
      className={`${
        isGoogleSignIn ? "google-sign-in" : bannerlogo ? "bannerlogo" : null
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
