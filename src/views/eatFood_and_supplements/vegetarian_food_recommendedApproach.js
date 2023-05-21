import React from 'react';
import shutterstock_11 from "../../assets/img/foot_supplement/shutterstock_11.png";
import shutterstock_10 from "../../assets/img/foot_supplement/shutterstock_10.png";
import shutterstock_9 from "../../assets/img/foot_supplement/shutterstock_9.png";

const vegetarian_food_recommendedApproach = function () {
  return (
    <>
      <p className="nutritionHead2">แนวทางที่แนะนำ</p>
      <p className="nutritionText3"> 1. เลือกกิน Fitto Plant Protein เป็นมื้อเช้า</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_10} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_9} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_11} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
      <p className="nutritionText3"> 2. เลือกกิน Fitto Plant Protein เป็นมื้อเที่ยง</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_9} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_10} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_11} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
      </div>
      <p className="nutritionText3"> 3. เลือกกิน Fitto Plant Protein เป็นมื้อเย็น</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_9} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_11} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_10} alt="vector" className="col-12 col-sm-12  col-md-10 col-lg-10" />
      </div>
    </>
  );
};
export default vegetarian_food_recommendedApproach;