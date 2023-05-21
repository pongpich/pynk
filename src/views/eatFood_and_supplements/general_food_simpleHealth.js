import React from 'react';
import simple_health_1 from "../../assets/img/foot_supplement/simple_health_1.png";
import simple_health_2 from "../../assets/img/foot_supplement/simple_health_2.png";
import simple_health_3 from "../../assets/img/foot_supplement/simple_health_3.png";
import simple_health_4 from "../../assets/img/foot_supplement/simple_health_4.png";
import simple_health_5 from "../../assets/img/foot_supplement/simple_health_5.png";
import simple_health_6 from "../../assets/img/foot_supplement/simple_health_6.png";

const general_food_simpleHealth = function () {
  return (
    <>
      <p className="nutritionHead2">แนวทางการกินเพื่อสุขภาพแบบง่าย</p>
      <p className="nutritionText3">การเริ่มปรับเปลี่ยนพฤติกรรมการกินเพื่อสุขภาพ เราสามารถเริ่มต้นอย่างง่าย ๆ ได้ จากการ “ลดปัจจัยเสี่ยง” ลงก่อน ดังต่อไปนี้</p>
      <p className="nutritionText2">
        <li>ลดเครื่องดื่มที่มีรสหวาน เช่น น้ำอัดลม ชา กาแฟที่ชงรสหวาน</li>
        <li>ดื่มน้ำเปล่าอย่างน้อยวันละ 2 ลิตร เพื่อป้องกันการกระหายน้ำ และช่วยลดเครื่องดื่มหวาน ๆ ลงได้</li>
        <li>หากอยากดื่มน้ำหวาน ให้เลือกเครื่องดื่มที่ใช้น้ำตาลเทียม หรือสารให้ความหวานทดแทนน้ำตาล</li>
      </p>
      <br />
      <div className="centerImage">
        <img src={simple_health_1}  className="col-12 col-sm-12 col-md-6 col-lg-6" />
        <img src={simple_health_2}  className="col-12 col-sm-12  col-md-6 col-lg-6" />
      </div>
      <br />
      <p className="nutritionText2 ImageTop">
        <li>ลดอาหารไขมันสูง เช่น เนื้อสัตว์ติดมันหรือหนัง อาหารทอด อาหารผัดน้ำมันท่วม ๆ </li>
        <li>เลือกไขมันไม่อิ่มตัวแทน เช่น ถั่วต่าง ๆ เมล็ดพืช งา อะโวคาโด</li>
        <li>เลือกใช้น้ำมันรำข้าว น้ำมันงา น้ำมันมะกอกในการปรุงอาหาร ซึ่งไขมันเหล่านี้ดีต่อสุขภาพมากกว่า</li>
      </p>
      <div className="centerImage">
        <img src={simple_health_3} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
        <img src={simple_health_4} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
      </div>
      <br />
      <p className="nutritionText2 ImageTop">
        <li>เลี่ยงการกินอาหารรสจัด เพราะจะกระตุ้นให้กินมากเกินไป ลดการใช้เครื่องปรุงต่าง ๆ และใช้พวกเครื่องเทศหรือสมุนไพรในการปรุงอาหารแทน</li>
      </p>
      <br />
      <div className="centerImage">
        <img src={simple_health_5} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
        <img src={simple_health_6} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
      </div>
      <br />
    </>
  );
};
export default general_food_simpleHealth;