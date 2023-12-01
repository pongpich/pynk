import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { insertQuestion } from "../../redux/pynk/question";
import { useSelector, useDispatch } from "react-redux";

import "./css/questionare.css";

const questions = [
  {
    id: "question1",
    text: "เป้าหมายในการดูแลสุขภาพของคุณ คืออะไร",
    options: [
      "ลดน้ำหนัก, ลดไขมัน",
      "มีรูปร่างและสัดส่วนที่ดี เช่น มีซิกแพค ลดต้นแขน",
      "มีผลตรวจสุขภาพในเกณฑ์ปกติ",
      "มีสุขภาพดีขึ้น ห่างไกลโรค",
    ],
    hasOther: false,
    allowMultiple: false,
  },
  {
    id: "question2",
    text: "คุณออกกำลังกายบ่อยแค่ไหน?",
    options: [
      "ทุกวัน",
      "3-5 วัน ต่อสัปดาห์",
      "1-2 วัน ต่อสัปดาห์",
      "ไม่ได้ออกกำลังกาย",
    ],
    hasOther: false,
    allowMultiple: false,
  },
  {
    id: "question3",
    text: "จากตัวเลือกเหล่านี้ ข้อไหนตรงกับพฤติกรรมการกินอาหารในปัจจุบันของคุณ",
    options: ["คุมอาหารทุกมื้อ", "คุมอาหารในบางมื้อ", "กินอาหารตามต้องการ"],
    hasOther: false,
    allowMultiple: false,
  },
  {
    id: "question4",
    text: "เพื่อเป้าหมายแล้ว คุณสนใจที่จะปรับพฤติกรรมด้านสุขภาพอย่างไร",
    options: [
      "พร้อมที่จะทำทุกอย่าง ถ้าได้ผลลัพธ์ตามเป้าหมาย",
      "จะพยายามอย่างเต็มที่ แต่ต้องไม่กระทบกับไลฟ์สไตล์ในปัจจุบัน",
      "สนใจดูแลสุขภาพ ในแบบที่ไม่ต้องออกกำลังกาย",
      "ยังไม่มีแผนเลย",
    ],
    hasOther: false,
    allowMultiple: false,
  },
  {
    id: "question5",
    text: "คุณมีอุปกรณ์ออกกำลังกายเหล่านี้ หรือไม่?",
    options: [
      "ดัมเบลล์ หรือ บาร์, ลูกตุ้มยกน้ำหนัก",
      "เสื่อโยคะ",
      "เชือกกระโดด หรือ ยางยืดออกกำลังกาย",
      "ลูกกลิ้งฝึกกล้ามท้อง",
      "ไม่เคยมีอุปกรณ์ออกกำลังกาย",
    ],
    hasOther: true,
    allowMultiple: true,
  },
  {
    id: "question6",
    text: "คุณเคยกินอาหารเสริมเหล่านี้ เพื่อดูแลสุขภาพหรือไม่?",
    options: [
      "วิตามินต่างๆ",
      "โปรตีนเสริมมื้ออาหาร",
      "ตัวช่วยเผาผลาญไขมัน",
      "ลูกกลิ้งฝึกกล้ามท้อง",
      "ไม่เคยกินอาหารเสริม",
    ],
    hasOther: true,
    allowMultiple: true,
  },
  {
    id: "question7",
    text: "เพื่อเป้าหมายแล้ว คุณสนใจที่จะปรับพฤติกรรมด้านสุขภาพอย่างไร",
    options: [
      "พร้อมที่จะทำทุกอย่าง ถ้าได้ผลลัพธ์ตามเป้าหมาย",
      "จะพยายามอย่างเต็มที่ แต่ต้องไม่กระทบกับไลฟ์สไตล์ในปัจจุบัน",
      "สนใจดูแลสุขภาพ ในแบบที่ไม่ต้องออกกำลังกาย",
      "ยังไม่มีแผนเลย",
    ],
    hasOther: false,
    allowMultiple: false,
  },
];
const Questionare = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleInputChange = (questionId, answer) => {
    if (questions[currentQuestion].hasOther && answer === "Other") {
      setShowOtherInput(true);
      // Set the selected option to the last option
      answer =
        questions[currentQuestion].options[
          questions[currentQuestion].options.length - 1
        ];
    } else {
      setShowOtherInput(false);
    }

    setFormData((prevData) => ({
      ...prevData,
      [questionId]: answer,
    }));

    setIsOptionSelected(true);

    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions((prevAnswers) => [...prevAnswers, currentQuestion]);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowOtherInput(false);
    setIsOptionSelected(false);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setShowOtherInput(false);
    setIsOptionSelected(true);
  };

  const handleSaveData = () => {
    const savedData =
      JSON.parse(localStorage.getItem("questionnaireData")) || [];
    savedData[currentQuestion] = formData;
    localStorage.setItem("questionnaireData", JSON.stringify(savedData));

    if (currentQuestion < questions.length - 1) {
      handleNextQuestion();
    } else {
      console.log("Survey completed. Data saved:", savedData);
      /* if (formData.question1 === "Blue") {
        history.push("/blue-page");
      } */
    }
  };

  /* dispatch(insertQuestion(user_id, data)); */

  const progress = ((currentQuestion + 1) / questions.length) * 100;


  return (
    <div className="page">
      <progress value={progress} max="100" />
      <p> ย้อนกลับ </p>
      <p>{currentQuestion + 1 + "/" + questions.length}</p>
      <h1>Questionnaire</h1>
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <React.Fragment key={option}>
          <label>
            <input
              type="radio"
              name={questions[currentQuestion].id}
              value={option}
              onChange={() =>
                handleInputChange(questions[currentQuestion].id, option)
              }
              checked={formData[questions[currentQuestion].id] === option}
            />
            {option === "Other" && showOtherInput ? (
              <input
                type="text"
                placeholder="Please specify"
                value={formData[questions[currentQuestion].id] || ""}
                onChange={(e) =>
                  handleInputChange(
                    questions[currentQuestion].id,
                    e.target.value
                  )
                }
              />
            ) : (
              option
            )}
          </label>
          {questions[currentQuestion].hasOther &&
            index === questions[currentQuestion].options.length - 2 && (
              <label>
                Other:
                <input
                  type="radio"
                  value="Other"
                  onChange={() =>
                    handleInputChange(questions[currentQuestion].id, "Other")
                  }
                  checked={formData[questions[currentQuestion].id] === "Other"}
                />
              </label>
            )}
        </React.Fragment>
      ))}

      <br />

      <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
        Previous Question
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={
          (currentQuestion === questions.length - 1 &&
            !answeredQuestions.includes(currentQuestion)) ||
          !isOptionSelected
        }
      >
        Next Question
      </button>
      <button onClick={handleSaveData}>
        {currentQuestion < questions.length - 1
          ? "Save and Next Question"
          : "Complete Survey"}
      </button>
    </div>
  );
};

export default Questionare;
