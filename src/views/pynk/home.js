import React from "react";

import AnimateBebe from "./home/animate_bebe";
import CourseBebe from "./home/course_bebe";
import ReviewBebe from "./home/review_bebe";
import ContentBebe from "./home/content_bebe";

import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="page">
        <AnimateBebe />
        <CourseBebe />
        <ReviewBebe />
        {/* <ContentBebe /> */}
      </div>
    </>
  );
};
export default Home;
