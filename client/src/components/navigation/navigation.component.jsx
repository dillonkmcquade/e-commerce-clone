import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import UserIcon from "../sign-in-icon/sign-in-icon.component";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.component";

const Navigation = ({ currentUser, hidden }) => {
  return (
    <header className="navbar w-100 flex">
      <div className="logo">
        <Link
          className="title flex black bold pointer hover-gray f2 no-underline"
          to="/"
        >
          <span>GREEN MOUNTAIN GEAR</span>
        </Link>
      </div>

      <nav>
        <div className="buttons flex pa3">
          <Link
            className="f5 fw4 shop hover-blue no-underline black dib-ns pv3 ph2"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="f5 fw4 hover-blue no-underline black dib-l pv3 ph2 contact"
            to="/contact"
          >
            Contact
          </Link>

          {currentUser ? (
            <Link
              to="/"
              className="f5 fw4 signin hover-blue no-underline black dib ml2 pv3 ph3"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </Link>
          ) : (
            <Link to="/signin">
              <UserIcon />
            </Link>
          )}
            <CartIcon />         
        </div>
        {hidden ? null : <CartDropDown />}
      </nav>
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Navigation);
