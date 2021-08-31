import React from "react";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import "./homepage.scss";
const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Homepage;
