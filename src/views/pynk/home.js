import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import bebe_bubble from "../../assets/img/home/bebe_bubble.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import fit_item from "../../assets/img/home/fit_item.png";
import fitto_item from "../../assets/img/home/fitto_item.png";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(2);

  const { ref: textHome2, inView: textHome2ISVisible } = useInView();
  const { ref: bounceContainer, inView: bounceContainerISVisible } =
    useInView();
  const { ref: stayfitItem, inView: statfitItemISVisible } = useInView();
  const { ref: home3, inView: Home3ISVisible } = useInView();

  const images = [slide1, slide2, slide3];

  const autoSlideIntervalRef = useRef(null);

  const handleRadioChange = (newIndex) => {
    setCurrentIndex(newIndex);
    clearInterval(autoSlideIntervalRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const handleButtonHover = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const resetHoveredButton = () => {
    setHoveredButton(2);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  return (
    <div className="page">
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active_home" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateX(${100 * (index - currentIndex)}%)`,
              }}
            ></div>
          ))}
          <div className="radio-buttons">
            {images.map((_, index) => (
              <div
                className={
                  index === currentIndex
                    ? "button-carousel-active"
                    : "button-carousel"
                }
                aria-current="true"
                aria-label="Slide 1"
                checked={index === currentIndex}
                onClick={() => handleRadioChange(index)}
              />
            ))}
          </div>
          {currentIndex === 0 ? (
            <div className="box-text-home1">
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">Stay fit with Bebe</p>
              <p className="text24 SemiBoldPynk color-4a4a4a">
                คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตี
              </p>
              <p className="text24 SemiBoldPynk color-4a4a4a">
                ความสำเร็จจากนักเรียนกว่าสิบรุ่น
              </p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom: "0px",
                    position: "absolute",
                    fontFamily: "SemiBoldPynk",
                    fontSize: "18px",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          ) : currentIndex === 1 ? (
            <div className="box-text-home1">
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">Let's Challenge</p>
              <p className="text24 SemiBoldPynk color-4a4a4a">
                ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝัน
              </p>
              <p className="text24 SemiBoldPynk color-4a4a4a">
                ได้กับไอเทมฮอตฮิตจาก bebe fit routine
              </p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 button-home2 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom: "0px",
                    position: "absolute",
                    fontFamily: "SemiBoldPynk",
                    fontSize: "18px",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          ) : (
            <div className="box-text-home1">
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">Shop สุดฟิน!!!</p>
              <p className="text24 SemiBoldPynk color-4a4a4a">รวมดีลเด็ดที่คุณต้องไม่พลาด</p>
              <p className="text24 SemiBoldPynk color-4a4a4a">ช้อปเลย!</p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom: "0px",
                    position: "absolute",
                    fontFamily: "SemiBoldPynk",
                    fontSize: "18px",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="home2">
        <div
          ref={textHome2}
          className={`head-home2 ${textHome2ISVisible && "animate-open-div"}`}
        >
          <p className="text48 text-align-center SemiBoldPynk">
            บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข
            และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน
          </p>
          <p className="text32 text-align-center MediumPynk">
            “ไม่ใช่แค่หุ่นดี แต่มันคือการรักตัวเองอย่างมีความสุข”
          </p>
        </div>

        <div
          ref={bounceContainer}
          className={`bounce-container ${
            bounceContainerISVisible && "animate-bounce-container"
          }`}
        >
          <div className="background-container-bounce">
            <div className="content-home2">
              <div className="first-content-bubble">
                <picture
                  ref={bounceContainer}
                  className={`bebe-bubble ${
                    bounceContainerISVisible && "animate-bebe-bubble"
                  }`}
                >
                  <source media="(max-width: 480px)" srcset={bebe_bubble} />
                  <img src={bebe_bubble} width={640} height={600} alt="" />
                </picture>
                <div
                  ref={bounceContainer}
                  className={`bubble6 ${
                    bounceContainerISVisible && "animate-bubble6"
                  }`}
                ></div>
                <div
                  ref={bounceContainer}
                  className={`bubble7 ${
                    bounceContainerISVisible && "animate-bubble7"
                  }`}
                ></div>
                <div
                  ref={bounceContainer}
                  className={`bubble8 ${
                    bounceContainerISVisible && "animate-bubble8"
                  }`}
                ></div>
                <div
                  ref={bounceContainer}
                  className={`bubble9 ${
                    bounceContainerISVisible && "animate-bubble9"
                  }`}
                ></div>
              </div>
              <div className="second-content-bubble">
                <p className="text-home2-128px LightPynk">STAY FIT</p>
                <p className="text-home2-48px LightPynk">WITH BEBE</p>
                <p className="text-home2-24px SemiBoldPynk">
                  คอร์สสอนออกกำลังกายสุดปังจากวงการเบเบ้
                  ที่จะพาคุณมาอัปเกรดความฟิต ด้วยโปรแกรม 8 สัปดาห์
                </p>
                <p className="text-home2-24px RegularPynk">
                  ที่เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ พร้อมการันตีความสนุก
                  และผลลัพธ์ของการเปลี่ยนแปลง มาแล้วมากกว่าสิบรุ่น!
                </p>
              </div>
            </div>
          </div>
          <div className="bubble"></div>
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
          <div className="bubble4"></div>
          <div className="bubble5"></div>
        </div>

        <div
          ref={stayfitItem}
          className={`stayfit-item-home2 ${
            statfitItemISVisible && "animate-stayfit-item"
          }`}
        >
          <div class="grid-item">
            <img src={fit_item} alt="" />
            <div className="first-content-stayfit">
              <p className="text48 LightPynk">FIT ITEMS</p>
              <p className="text24 RegularPynk">
                ให้เรื่องการออกกำลังกายเป็นเรื่องที่ ง่าย และใกล้ตัว ด้วยอุปกรณ์
                ออกกำลังกายสไตล์เบเบ้ที่พร้อมตอบโจทย์
                ทุกไลฟ์สไตล์ของสายฟิตที่ไม่ว่าคุณจะเป็นสายฟิตมือใหม่
                หรือสายฟิตมือโปรก็สามารถสนุกไปกับการออกกำลังกายที่บ้านได้แบบไม่จำเจ
              </p>
            </div>
          </div>
          <div class="grid-item">
            <img src={fitto_item} style={{ marginLeft: "50px" }} alt="" />
            <div className="second-content-stayfit">
              <p className="text48 LightPynk" style={{ marginBottom: "0" }}>
                FITTO
              </p>
              <p
                className="text48 LightPynk"
                style={{ marginBottom: "16px", marginTop: "-16px" }}
              >
                ปั้นหุ่นสวยได้ทุกไลฟ์สไตล์
              </p>
              <p className="text24 RegularPynk">
                ตัวช่วยสร้างทางลัดฉบับสายฟิตที่ทำให้ภารกิจพิชิตหุ่นในฝัน ของคุณ
                เป็นไปได้ และมีสุขภาพที่ดีขึ้นอย่างยั่งยืน ตอบโจทย์ ทุกไลฟ์สไตล์
                พร้อมพาคุณไปสู่เป้าหมายได้เร็ว ง่าย แบบไร้กังวล!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={home3} className="home3">
        <div
          className={`home3-container ${
            Home3ISVisible && "animate-open-home3"
          }`}
        >
          <div
            className="text48 SemiBoldPynk white text-align-center"
            style={{ marginBottom: "100px" }}
          >
            คอร์สแนะนำที่อยากบอกต่อ
          </div>
          <div className="card-item-container">
            <div
              className={`card-item-course ${hoveredButton === 1 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(1)}
              onMouseLeave={resetHoveredButton}
            >
              <img
                className="card-image"
                src={fitto4week}
                width={273}
                height={263}
                alt=""
              />
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">
                  Fitto 4 Week Starter Program
                </p>
                <p className="RegularPynk text20">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <i class={`fa-solid fa-arrow-right fa-xl ${hoveredButton === 1 && "hovered"}`}></i>
            </div>
            <div
              className={`card-item-course ${hoveredButton === 2 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(2)}
              onMouseLeave={resetHoveredButton}
            >
              <div className="suggestion text24 SemiBoldPynk white">
                แนะนำ
              </div>
              <img
                className="card-image"
                src={stayfit_with_bebe}
                width={273}
                height={263}
                alt=""
              />
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">STAY FIT WITH BEBE</p>
                <p className="RegularPynk text20">
                  โปรแกรมออกกำลังกาย 8 สัปดาห์ที่ เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ
                </p>
              </div>
              <i class={`fa-solid fa-arrow-right fa-xl ${hoveredButton === 2 && "hovered"}`}></i>
            </div>
            <div
              className={`card-item-course ${hoveredButton === 3 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(3)}
              onMouseLeave={resetHoveredButton}
            >
              <img
                className="card-image"
                src={bikini_body_challenge}
                width={273}
                height={263}
                alt=""
              />
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">Bikini Body Challenge</p>
                <p className="RegularPynk text20">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <i class={`fa-solid fa-arrow-right fa-xl ${hoveredButton === 3 && "hovered"}`}></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
