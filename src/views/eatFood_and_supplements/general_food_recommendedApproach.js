import React from 'react';
import shutterstock_1 from "../../assets/img/foot_supplement/shutterstock_1.png";
import shutterstock_2 from "../../assets/img/foot_supplement/shutterstock_2.png";
import shutterstock_3 from "../../assets/img/foot_supplement/shutterstock_3.png";

const general_food_recommendedApproach = function () {
  return (
    <>
      <p className="nutritionHead2">แนวทางที่แนะนำ</p>
      <p className="nutritionText3"> 1. เลือกกิน Fitto Plant Protein เป็นมื้อเช้า</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_2} alt="vector" className="col-12 col-sm-10  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
      <p className="nutritionText3"> 2. เลือกกิน Fitto Plant Protein เป็นมื้อเที่ยง</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_2} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
      <p className="nutritionText3"> 3. เลือกกิน Fitto Plant Protein เป็นมื้อเย็น</p>
      <div className="centerImage ImageTop2">
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_1} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
        <div className="shutterstock_3"></div>
        <img src={shutterstock_2} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
    </>
  );
};
export default general_food_recommendedApproach;