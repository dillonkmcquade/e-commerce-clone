import React from "react";
import Button from "../../components/button/button.component";
import "./banner.styles.scss";
import { Link } from "react-router-dom";

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
        <span className="bannerTitle f1 pa3 white">
          GET GEARED UP FOR YOUR NEXT ADVENTURE
        </span>
        <Link to="/shop">
          <Button bannerlogo>SHOP NOW</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
