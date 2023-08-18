import React, { useState } from "react";
import "./css/questionare.css";

const Questionare = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(0);

  const [selectedCoice, setSelectedCoice] = useState([]);

  function selectCoice(questions, choice) {
    console.log(questions, choice);
  }

  const questions = [
    {
      text: "1.เป้าหมายในการดูแลสุขภาพของคุณ คืออะไร",
      options: [
        { id: 0, text: "ลดน้ำหนัก, ลดไขมัน" },
        { id: 1, text: "มีรูปร่างและสัดส่วนที่ดี เช่น มีซิกแพค ลดต้นแขน" },
        { id: 2, text: "มีผลตรวจสุขภาพในเกณฑ์ปกติ" },
        { id: 3, text: "มีสุขภาพดีขึ้น ห่างไกลโรค" },
      ],
      type: "single choice"
    },
    {
      text: "2.คุณออกกำลังกายบ่อยแค่ไหน?",
      options: [
        { id: 0, text: "ทุกวัน", isExercise: true },
        { id: 1, text: "3-5 วัน ต่อสัปดาห์", isExercise: true },
        { id: 2, text: "1-2 วัน ต่อสัปดาห์", isExercise: true },
        { id: 3, text: "ไม่ได้ออกกำลังกาย", isExercise: false },
      ],
      type: "single choice"
    },
    {
      text: "3.จากตัวเลือกเหล่านี้ ข้อไหนตรงกับพฤติกรรมการกินอาหารในปัจจุบันของคุณ",
      options: [
        { id: 0, text: "คุมอาหารทุกมื้อ" },
        { id: 1, text: "คุมอาหารในบางมื้อ" },
        { id: 2, text: "กินอาหารตามต้องการ" },
      ],
      type: "single choice"
    },
    {
      text: "4.เพื่อเป้าหมายแล้ว คุณสนใจที่จะปรับพฤติกรรมด้านสุขภาพอย่างไร",
      options: [
        { id: 0, text: "พร้อมที่จะทำทุกอย่าง ถ้าได้ผลลัพธ์ตามเป้าหมาย", motivation: "high" },
        {
          id: 1,
          text: "จะพยายามอย่างเต็มที่ แต่ต้องไม่กระทบกับไลฟ์สไตล์ในปัจจุบัน", motivation: "moderate"
        },
        { id: 2, text: "สนใจดูแลสุขภาพ ในแบบที่ไม่ต้องออกกำลังกาย", motivation: "moderate" },
        { id: 3, text: "ยังไม่มีแผนเลย", motivation: "low" },
      ],
      type: "single choice"
    },
    {
      text: "5.คุณมีอุปกรณ์ออกกำลังกายเหล่านี้ หรือไม่?",
      options: [
        { id: 0, text: "ดัมเบลล์ หรือ บาร์, ลูกตุ้มยกน้ำหนัก", isEquipment: true },
        { id: 1, text: "เสื่อโยคะ", isEquipment: true },
        { id: 2, text: "เชือกกระโดด หรือ ยางยืดออกกำลังกาย", isEquipment: true },
        { id: 3, text: "ลูกกลิ้งฝึกกล้ามท้อง", isEquipment: true },
        { id: 4, text: "อื่นๆ", isEquipment: true },
        { id: 5, text: "ไม่เคยมีอุปกรณ์ออกกำลังกาย", isEquipment: false  },
      ],
      type: "multi choice"
    },
    {
      text: "6.คุณเคยกินอาหารเสริมเหล่านี้ เพื่อดูแลสุขภาพหรือไม่?",
      options: [
        { id: 0, text: "วิตามินต่างๆ" },
        { id: 1, text: "โปรตีนเสริมมื้ออาหาร" },
        { id: 2, text: "ตัวช่วยเผาผลาญไขมัน" },
        { id: 3, text: "อื่นๆ" },
        { id: 4, text: "ไม่เคยกินอาหารเสริม" },
      ],
      type: "multi choice"
    },
  ];

  return (
    <div>
      <div className="background-container">
        {showFinalResults ? (
          <div>ผลลัพธ์ก็คืออออออออ</div>
        ) : (
          <div className="frame">
            <div className="questionare-container">
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${(currentQuestions+1)/questions.length*100}%` }}
                >
                </div>
              </div>
              <div className="lower-progress-bar">
                  <p style={{textAlign:"left"}}> ย้อนกลับ </p>
                  <p style={{textAlign:"end"}}> {currentQuestions+1 + "/" + questions.length} </p>
                </div>
              <div className="questionare-card">
                <h2>{questions[currentQuestions].text}</h2>

                <ul>
                  {questions[currentQuestions].options.map((option) => {
                    return <li onClick={() => {selectCoice(questions[currentQuestions].text,option.text)}} key={option.id}>{option.text}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionare;
