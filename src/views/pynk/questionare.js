import React, { useState, useEffect } from "react";
import "./css/questionare.css";

const Questionare = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(4);

  const [data, setData] = useState([]);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);

  function handleCheckboxChange(id) {
    id === 0
      ? setIsChecked1(!isChecked1)
      : id === 1
      ? setIsChecked2(!isChecked2)
      : id === 2
      ? setIsChecked3(!isChecked3)
      : id === 3
      ? setIsChecked4(!isChecked4)
      : id === 4
      ? setIsChecked5(!isChecked5)
      : setIsChecked6(!isChecked6);
  }

  function selectCoice(index, questions, type, choice) {
    const selectedUser = {
      index: index,
      questions: questions,
      type: type,
      selected_choice: choice,
    };
    setData([...data, selectedUser]);
    if (type === "multi choice") {
    } else {
      setCurrentQuestions(currentQuestions + 1);
    }
  }

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const questions = [
    {
      index: 1,
      question: "เป้าหมายในการดูแลสุขภาพของคุณ คืออะไร",
      options: [
        { id: 0, text: "ลดน้ำหนัก, ลดไขมัน" },
        { id: 1, text: "มีรูปร่างและสัดส่วนที่ดี เช่น มีซิกแพค ลดต้นแขน" },
        { id: 2, text: "มีผลตรวจสุขภาพในเกณฑ์ปกติ" },
        { id: 3, text: "มีสุขภาพดีขึ้น ห่างไกลโรค" },
      ],
      type: "single choice",
    },
    {
      index: 2,
      question: "คุณออกกำลังกายบ่อยแค่ไหน?",
      options: [
        { id: 0, text: "ทุกวัน", isExercise: true },
        { id: 1, text: "3-5 วัน ต่อสัปดาห์", isExercise: true },
        { id: 2, text: "1-2 วัน ต่อสัปดาห์", isExercise: true },
        { id: 3, text: "ไม่ได้ออกกำลังกาย", isExercise: false },
      ],
      type: "single choice",
    },
    {
      index: 3,
      question:
        "จากตัวเลือกเหล่านี้ ข้อไหนตรงกับพฤติกรรมการกินอาหารในปัจจุบันของคุณ",
      options: [
        { id: 0, text: "คุมอาหารทุกมื้อ" },
        { id: 1, text: "คุมอาหารในบางมื้อ" },
        { id: 2, text: "กินอาหารตามต้องการ" },
      ],
      type: "single choice",
    },
    {
      index: 4,
      question: "เพื่อเป้าหมายแล้ว คุณสนใจที่จะปรับพฤติกรรมด้านสุขภาพอย่างไร",
      options: [
        {
          id: 0,
          text: "พร้อมที่จะทำทุกอย่าง ถ้าได้ผลลัพธ์ตามเป้าหมาย",
          motivation: "high",
        },
        {
          id: 1,
          text: "จะพยายามอย่างเต็มที่ แต่ต้องไม่กระทบกับไลฟ์สไตล์ในปัจจุบัน",
          motivation: "moderate",
        },
        {
          id: 2,
          text: "สนใจดูแลสุขภาพ ในแบบที่ไม่ต้องออกกำลังกาย",
          motivation: "moderate",
        },
        { id: 3, text: "ยังไม่มีแผนเลย", motivation: "low" },
      ],
      type: "single choice",
    },
    {
      index: 5,
      question: "คุณมีอุปกรณ์ออกกำลังกายเหล่านี้ หรือไม่?",
      options: [
        {
          id: 0,
          text: "ดัมเบลล์ หรือ บาร์, ลูกตุ้มยกน้ำหนัก",
          isEquipment: true,
        },
        { id: 1, text: "เสื่อโยคะ", isEquipment: true },
        {
          id: 2,
          text: "เชือกกระโดด หรือ ยางยืดออกกำลังกาย",
          isEquipment: true,
        },
        { id: 3, text: "ลูกกลิ้งฝึกกล้ามท้อง", isEquipment: true },
        { id: 4, text: "อื่นๆ", isEquipment: true },
        { id: 5, text: "ไม่เคยมีอุปกรณ์ออกกำลังกาย", isEquipment: false },
      ],
      type: "multi choice",
    },
    {
      index: 6,
      question: "คุณเคยกินอาหารเสริมเหล่านี้ เพื่อดูแลสุขภาพหรือไม่?",
      options: [
        { id: 0, text: "วิตามินต่างๆ" },
        { id: 1, text: "โปรตีนเสริมมื้ออาหาร" },
        { id: 2, text: "ตัวช่วยเผาผลาญไขมัน" },
        { id: 3, text: "อื่นๆ" },
        { id: 4, text: "ไม่เคยกินอาหารเสริม" },
      ],
      type: "multi choice",
    },
  ];

  const index = questions[currentQuestions].index;
  const question = questions[currentQuestions].question;
  const type = questions[currentQuestions].type;
  const options = questions[currentQuestions].options;

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
                  style={{
                    width: `${
                      ((currentQuestions + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="lower-progress-bar">
                <p> ย้อนกลับ </p>
                <p>{currentQuestions + 1 + "/" + questions.length}</p>
              </div>
              <div className="questionare-card">
                <h2>{index + ". " + question}</h2>

                <ul>
                  {options.map((option) => {
                    return type === "multi choice" ? (
                      <li
                        onClick={() => {
                          selectCoice(index, question, type, option);
                        }}
                        key={option.id}
                      >
                        <input
                          type="checkbox"
                          checked={
                            option.id === 0
                              ? isChecked1
                              : option.id === 1
                              ? isChecked2
                              : option.id === 2
                              ? isChecked3
                              : option.id === 3
                              ? isChecked4
                              : option.id === 4
                              ? isChecked5
                              : isChecked6
                          }
                          onChange={() => handleCheckboxChange(option.id)}
                        />
                        {option.text}
                      </li>
                    ) : (
                      <li
                        onClick={() => {
                          selectCoice(index, question, type, option);
                        }}
                        key={option.id}
                      >
                        {option.text}
                      </li>
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
