import React, { useState } from "react";
import "./css/questionare.css";

const Questionare = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(0);

  const questions = [
    {
      text: "1.เป้าหมายในการดูแลสุขภาพของคุณ คืออะไร",
      options: [
        { id: 0, text: "ลดน้ำหนัก, ลดไขมัน" },
        { id: 1, text: "มีรูปร่างและสัดส่วนที่ดี เช่น มีซิกแพค ลดต้นแขน" },
        { id: 2, text: "มีผลตรวจสุขภาพในเกณฑ์ปกติ" },
        { id: 3, text: "มีสุขภาพดีขึ้น ห่างไกลโรค" },
      ],
    },
    {
      text: "2.คุณออกกำลังกายบ่อยแค่ไหน?",
      options: [
        { id: 0, text: "ทุกวัน" },
        { id: 1, text: "3-5 วัน ต่อสัปดาห์" },
        { id: 2, text: "1-2 วัน ต่อสัปดาห์" },
        { id: 3, text: "ไม่ได้ออกกำลังกาย" },
      ],
    },
    {
      text: "3.จากตัวเลือกเหล่านี้ ข้อไหนตรงกับพฤติกรรมการกินอาหารในปัจจุบันของคุณ",
      options: [
        { id: 0, text: "คุมอาหารทุกมื้อ" },
        { id: 1, text: "คุมอาหารในบางมื้อ" },
        { id: 2, text: "กินอาหารตามต้องการ" },
      ],
    },
    {
      text: "4.เพื่อเป้าหมายแล้ว คุณสนใจที่จะปรับพฤติกรรมด้านสุขภาพอย่างไร",
      options: [
        { id: 0, text: "พร้อมที่จะทำทุกอย่าง ถ้าได้ผลลัพธ์ตามเป้าหมาย" },
        { id: 1, text: "จะพยายามอย่างเต็มที่ แต่ต้องไม่กระทบกับไลฟ์สไตล์ในปัจจุบัน" },
        { id: 2, text: "สนใจดูแลสุขภาพ ในแบบที่ไม่ต้องออกกำลังกาย" },
        { id: 3, text: "ยังไม่มีแผนเลย" },
      ],
    },
    {
      text: "5.คุณมีอุปกรณ์ออกกำลังกายเหล่านี้ หรือไม่?",
      options: [
        { id: 0, text: "ดัมเบลล์ หรือ บาร์, ลูกตุ้มยกน้ำหนัก" },
        { id: 1, text: "เสื่อโยคะ" },
        { id: 2, text: "เชือกกระโดด หรือ ยางยืดออกกำลังกาย" },
        { id: 3, text: "ลูกกลิ้งฝึกกล้ามท้อง" },
        { id: 4, text: "อื่นๆ" },
        { id: 5, text: "ไม่เคยมีอุปกรณ์ออกกำลังกาย" },
      ],
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
              <div className="progress-bar">Progress-bar</div>
              <div className="questionare-card">
                <h2>1. เป้าหมายในการดูแลสุขภาพของคุณคืออะไร</h2>

                <ul>
                  {questions[currentQuestions].options.map((option) => {
                    return (
                    <li key={option.id}>{option.text}</li>
                    );
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
