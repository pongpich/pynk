import React from 'react';
import basedProgram from "../../assets/img/foot_supplement/based-butrition-program.jpg";


const generalFood = function () {
  return (
    <>
      <p className="nutritionHead">โปรแกรมอาหาร (Nutrition Program)</p>
      <p className="nutritionHeadDate">June 6,2022</p>
      <br />
      <div className="centerImageHead">
        <img src={basedProgram} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
      </div>
      <br />
      <p className="nutritionText">
        อาหาร ถือเป็นปัจจัยสำคัญที่สุดในการดูแลสุขภาพและเปลี่ยนแปลงรูปร่าง ซึ่งการกินอาหารที่มีประโยชน์ สารอาหารครบถ้วน ทำให้ได้รับสารอาหารที่จำเป็นต่อระบบต่าง ๆ ในร่างกาย รวมถึงการกินอาหารให้ได้สัดส่วน ทำให้ร่างกายได้รับพลังงานที่เพียงพอและพอเหมาะต่อการใช้ชีวิตประจำวันและการออกกำลังกาย
        เพื่อการเปลี่ยนแปลงรูปร่างด้วย
      </p>
      <p className="nutritionText0"> ในโปรแกรมนี้ ขอแนะนำการกินอาหารเพื่อสุขภาพและรูปร่าง 2 แนวทางใหญ่ ๆ ดังนี้</p>
      <p className="nutritionText2">1. แนวทางการกินเพื่อสุขภาพแบบง่าย ซึ่งสามารถนำไปปฏิบัติตามได้ ไม่ว่าจะอยู่ในโปรแกรมหรือไม่ หรือนำไปปฏิบัติต่อเองเมื่อจบโปรแกรมแล้ว</p>
      <p className="nutritionText2">2. แนวทางการกินระหว่างอยู่ในโปรแกรม ซึ่งจะช่วยให้การคุมอาหารในระหว่างโปรแกรมมีแบบแผน และปฏิบัติตามได้ง่ายขึ้น</p>
    </>
  );
};
export default generalFood;