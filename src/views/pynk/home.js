import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import bebe_bubble from "../../assets/img/home/bebe-bubble.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import frame37409 from "../../assets/img/home/frame37409.png";
import frame37410 from "../../assets/img/home/frame37410.png";
import frame37547 from "../../assets/img/home/frame37547.png";
import frame37549 from "../../assets/img/home/frame37549.png";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const { ref: textHome2, inView: textHome2ISVisible } = useInView();
  const { ref: bounceContainer, inView: bounceContainerISVisible } =
    useInView();
  const { ref: stayfitItem, inView: statfitItemISVisible } = useInView();

  const handleHover = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };

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
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Stay fit with Bebe</p>
              <p className="text-home1-24px">
                คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตี
              </p>
              <p className="text-home1-24px">
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
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Let's Challenge</p>
              <p className="text-home1-24px">
                ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝัน
              </p>
              <p className="text-home1-24px">
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
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Shop สุดฟิน!!!</p>
              <p className="text-home1-24px">รวมดีลเด็ดที่คุณต้องไม่พลาด</p>
              <p className="text-home1-24px">ช้อปเลย!</p>

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
          className={`head-home2 ${textHome2ISVisible && "animate-text-home2"}`}
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
            <img src={frame37409} alt="" />
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
            <img src={frame37410} style={{ marginLeft: "50px" }} alt="" />
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
      <div className="home3">
        <div
          className="text48 SemiBoldPynk white text-align-center"
          style={{ marginBottom: "100px" }}
        >
          คอร์สแนะนำที่อยากบอกต่อ
        </div>
        <div className="card-item-container">
          <div
            className={`card-item-course ${isActive ? "active" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="card-image"
              src={fitto4week}
              width={273}
              height={263}
              alt=""
            />
          </div>
          <div
            className={`card-item-course ${isActive ? "active" : ""}`}
          >
            <img
              className="card-image"
              src={stayfit_with_bebe}
              width={273}
              height={263}
              alt=""
            />
          </div>
          <div
            className={`card-item-course ${isActive ? "active" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="card-image"
              src={bikini_body_challenge}
              width={273}
              height={263}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="background37399">
        <img src={frame37547} alt="" className="frame37547" />
      </div>

      <img src={frame37549} alt="" className="frame37549" />

      <Footer />
    </div>
  );
};

export default Home;
