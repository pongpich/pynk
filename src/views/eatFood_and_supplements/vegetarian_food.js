import React from 'react';
import veganNutritionProgram from "../../assets/img/foot_supplement/vegan_nutrition_program.jpg";
import frame_01 from "../../assets/img/foot_supplement/frame_01.png";
import frame_02 from "../../assets/img/foot_supplement/frame_02.png";
import shutterstock_5 from "../../assets/img/foot_supplement/shutterstock_5.png";
import shutterstock_6 from "../../assets/img/foot_supplement/shutterstock_6.png";

const vegetarianFood = function () {
  return (
    <>
      <p className="nutritionHead vegeraianTop">โปรแกรมอาหารสำหรับผู้ที่เลือกกินอาหารแบบเน้นพืช และแบบมังสวิรัติเคร่งครัด
        (Plant-Based Diet and Strict Vegan Nutrition Program)</p>
      <p className="nutritionHeadDate">June 6,2022</p>
      <div className="centerImageHead">
      <img src={veganNutritionProgram} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
      <p className="nutritionText">
        ** เพื่อให้เกิดความเข้าใจที่ถูกต้องเกี่ยวกับความแตกต่างระหว่างการเลือกกินอาหารแบบเน้นพืช และการกินอาหารแบบมังสวิรัติเคร่งครัด ขอยกคำอธิบายของทั้ง 2 ประเภทให้ได้ทราบ ดังนี้
      </p>
      <p className="nutritionText0 bold decoration">
        1. คำอธิบายแนวทางการกินแบบเน้นพืช (Plant-Based Diet)
      </p>
      <p className="nutritionText2">เป็นแนวทางการรับประทานอาหารที่เน้นวัตถุดิบของมื้ออาหารที่ทำมาจากแหล่งพืชต่าง ๆ เช่น ผักใบ พืชหัว ผักแป้ง ถั่วประเภทต่าง ๆ ผลไม้หรือผลิตภัณฑ์อาหารต่าง ๆ ที่ทำมาจากพืช เช่น เต้าหู้ นมถั่วเหลือง ถั่วหมัก เทมเป้ และลดปริมาณหรือความถี่ในการบริโภคอาหารที่ทำมาจากสัตว์หรือผลิตภัณฑ์จากสัตว์ เช่น เนื้อสัตว์ต่าง ๆ รวมไปถึงเนื้อสัตว์แปรรูป เช่น ไส้กรอก แฮม</p>
      <p className="nutritionText0 bold decoration">
        ข้อดีของการ<span className="decoration">กินแบบเน้นพืช</span> มีดังต่อไปนี้
      </p>
      <p className="nutritionText2">
        <li>ตัวเลือกอาหารที่รับประทานในแต่ละวันมีความหลากหลาย เพราะยังรวมเอาไข่ นม ชีส เนื้อปลา หรือเนื้อสัตว์บางชนิดบ้างได้</li>
        <li>ลดโอกาสการขาดสารอาหารบางชนิด โดยเฉพาะ B12 ที่มีอยู่ในอาหารที่มาจากสัตว์เท่านั้น หากยังรับประทานไข่ นม บ้างจะไม่ขาดวิตามินตัวนี้ </li>
        <li>ปรับเปลี่ยนการกินได้ง่าย และรองรับกับการไปเลือกกินอาหารนอกบ้านได้ เพราะยังกินเนื้อสัตว์บางชนิดได้อยู่</li>
      </p>
      <div className="centerImage">
        <img src={frame_01} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
        <img src={frame_02} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
      </div>
      <p className="bold decoration vegeraianTop">
      2. คำอธิบายแนวทางการกินแบบมังสวิรัติเคร่งครัด (Strict Vegan)
      </p>
      <p className="nutritionText2">เป็นแนวทางการกินที่ยึดถือหลัก “หลีกเลี่ยง” การบริโภคอาหารที่ทำมาจากสัตว์ รวมถึงผลิตผลที่มาจากสัตว์ เช่น ไข่ต่าง ๆ นมวัว นมแพะ และบางคนยังรวมไปถึงน้ำผึ้ง และเน้นการบริโภคเพียงอาหารที่มาจากพืชต่าง ๆ เท่านั้น อาทิ ธัญพืชต่าง ๆ ผัก ผลไม้ รวมไปถึงผลิตภัณฑ์ที่มาจากพืช เช่น เต้าหู้ นมธัญพืช นมถั่วเหลือง ผักอบกรอบ ผลไม้เชื่อม และต่าง ๆ นานา</p>
      <p className="nutritionText0 bold decoration">
      ข้อดีของการกินแบบ<span className="decoration">มังสวิรัติเคร่งครัด </span> มีดังต่อไปนี้
      </p>
      <p className="nutritionText2">
        <li>ได้รับประโยชน์จากสารต้านอนุมูลอิสระและสารต่าง ๆ จากพืชอย่างเต็มที่ เพราะเน้นกินแต่พืชเท่านั้น</li>
        <li>ไขมันที่ได้จากการรับประทานอาหารแบบนี้ เน้นไปที่ไขมันไม่อิ่มตัวเป็นหลัก จึงมั่นใจได้ว่าดีต่อสุขภาพของหัวใจแน่นอน</li>
        <li>ข้อควรสังเกต อาจเลือกรับประทานวิตามินและแร่ธาตุรวมวันละ 1 เม็ด เพื่อป้องกันการขาดสารอาหารที่พบได้มากในอาหารที่มาจากสัตว์เท่านั้น เช่น B12 เหล็ก แคลเซียม</li>
      </p>
      <div className="centerImage">
        <img src={shutterstock_5} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
        <img src={shutterstock_6} alt="vector" className="col-12 col-sm-12  col-md-6 col-lg-6" />
      </div>
      <p className="nutritionText0 bold ">
      สรุป
      </p>
      <p className="nutritionText2">
      วิถีการรับประทานอาหารแบบเน้นพืชนั้น จะแตกต่างกับการกินอาหารแบบมังสวิรัติแบบเคร่งครัด หรือ Stricted vegan ในประเด็นของ “อาหารที่มาจากสัตว์” เท่านั้น ซึ่งทั้ง 2 รูปแบบ สามารถเลือกปฏิบัติได้ตามที่ตนเองสะดวก ในแง่ของผลดีต่อสุขภาพนั้น ทั้งสองรูปแบบการกิน ถือว่าดีต่อสุขภาพและลดความเสี่ยงของการเกิดโรคได้ทั้งคู่ อีกทั้งยังดีต่อสุขภาพควบคุมน้ำหนักด้วยเช่นกัน เพราะปริมาณไขมันที่ได้รับจากสัตว์ต่าง ๆ นั้นจะลดลง หากเราตั้งใจที่จะกินตามแนวทางสองแบบนี้
      </p>
      <p className="border-bottom3 margin-leftRight"></p>
    </>
  );
};
export default vegetarianFood;