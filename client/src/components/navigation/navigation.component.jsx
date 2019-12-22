import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../logo_transparent.png";
import { auth } from "../../firebase/firebase.utils";

const Navigation = ({ currentUser }) => {
  return (
    <header>
      <div
        className="cover bg-black bg-left bg-center-l"
        style={{
          height: "100%"
        }}
      >
        <div className="bg-black-80">
          <nav className="dt mw8 w-100 center">
            <div className="logo link dim pointer">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className=" dtc v-mid tr pa3">
              <Link
                className="f4 fw4 hover-gray no-underline white dn dib-ns pv2 ph3"
                to="/shop"
              >
                Shop
              </Link>
              <Link
                className="f4 fw4 hover-gray no-underline white dn dib-l pv2 ph3"
                to="/contact"
              >
                Contact
              </Link>
              {currentUser ? (
                <Link
                  className="f4 fw4 hover-gray no-underline white dib ml2 pv2 ph3 ba"
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  className="f4 fw4 hover-gray no-underline white dib ml2 pv2 ph3 ba"
                  to="/signin"
                >
                  Sign In
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
