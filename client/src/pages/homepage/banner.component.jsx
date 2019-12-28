import React from "react";
import Button from "../../components/button/button.component";
import "./banner.styles.scss";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div
      className="banner cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.lookslikefilm.com/wp-content/uploads/2019/03/Celestine-Aerden.jpg)",
        width: "100%",
        height: "600px"
      }}
    >
      <div className="title">
        <span className="f1 pa3 white text-shadow-1">
          GET GEARED UP FOR YOUR NEXT ADVENTURE
        </span>
        <Link to="/shop">
          <Button>SHOP NOW</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
