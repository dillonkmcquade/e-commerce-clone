import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import Banner from "./banner.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner className="banner" />
      <Directory className="pa3" />
    </div>
  );
};
export default HomePage;
