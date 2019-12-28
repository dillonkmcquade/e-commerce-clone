import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Navigation = ({ currentUser }) => {
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
        <div className="buttons pa3">
          <Link
            className="f5 fw4 shop hover-gray no-underline black dib-ns pv2 ph2"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="f5 fw4 hover-gray no-underline black dib-l pv2 ph2 contact"
            to="/contact"
          >
            Contact
          </Link>

          {currentUser ? (
            <Link
              to="/signin"
              className="f5 fw4 signin hover-gray no-underline black dib ml2 pv2 ph3 ba"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              className="f5 fw4 signin hover-gray no-underline black dib ml2 pv2 ph3 ba"
              to="/signin"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
