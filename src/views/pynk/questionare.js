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
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const [formData, setFormData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleInputChange = (text, answer) => {
    let updatedAnswers;
    if (questions[currentQuestion].allowMultiple) {
      const currentAnswers = formData[text] || [];
      updatedAnswers = [...currentAnswers];

      if (updatedAnswers.includes(answer)) {
        updatedAnswers = updatedAnswers.filter(
          (selectedAnswer) => selectedAnswer !== answer
        );
      } else {
        updatedAnswers.push(answer);
      }
    } else {
      updatedAnswers = answer;
    }

    setFormData((prevData) => ({
      ...prevData,
      /* "หัวข้อ": questions[currentQuestion].text, */
      [text]: updatedAnswers,
    }));

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
    let savedData = JSON.parse(localStorage.getItem("questionnaireData"));
    savedData[savedData.length - 1] = formData;
    savedData = savedData.filter((data) => data !== null);

    console.log("savedData",savedData);

    localStorage.setItem("questionnaireData", JSON.stringify(savedData));

    if (currentQuestion < questions.length - 1) {
      handleNextQuestion();
    } else {
      console.log("Survey completed. Data saved:", savedData);
      /* if (formData.question1 === "Blue") {
        history.push("/blue-page");
      } */
      dispatch(insertQuestion(user.user_id, savedData));
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
              type={
                questions[currentQuestion].allowMultiple ? "checkbox" : "radio"
              }
              name={questions[currentQuestion].text}
              value={option}
              onChange={() =>
                handleInputChange(questions[currentQuestion].text, option)
              }
              checked={
                questions[currentQuestion].allowMultiple
                  ? formData[questions[currentQuestion].text]?.includes(option)
                  : formData[questions[currentQuestion].text] === option
              }
            />
            {option === "Other" && showOtherInput ? (
              // Show text box for "Other" option
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData[questions[currentQuestion].text]?.includes("Other")
                    ? ""
                    : formData[questions[currentQuestion].text]
                }
                onChange={(e) =>
                  handleInputChange(
                    questions[currentQuestion].text,
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
                  type={
                    questions[currentQuestion].allowMultiple
                      ? "checkbox"
                      : "radio"
                  }
                  value="Other"
                  onChange={() =>
                    handleInputChange(questions[currentQuestion].text, "Other")
                  }
                  checked={
                    questions[currentQuestion].allowMultiple
                      ? formData[questions[currentQuestion].text]?.includes(
                          "Other"
                        )
                      : formData[questions[currentQuestion].text] === "Other"
                  }
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
