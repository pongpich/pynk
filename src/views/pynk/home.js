import React from "react";

import Home1 from "./home/home1";
import Home2 from "./home/home2";
import Home3 from "./home/home3";
import Home4 from "./home/home4";

import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="page">
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
      </div>
    </>
  );
};
export default Home;
