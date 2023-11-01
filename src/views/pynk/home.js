import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import bebe_bubble from "../../assets/img/home/bebe_bubble.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import fit_item from "../../assets/img/home/group-37365.png";
import fitto_item from "../../assets/img/home/group-37366.png";
import star from "../../assets/img/home/star.png";
import comment1 from "../../assets/img/home/comment1.png";
import comment2 from "../../assets/img/home/comment2.png";
import comment3 from "../../assets/img/home/comment3.png";
import comment4 from "../../assets/img/home/comment4.png";
import comment5 from "../../assets/img/home/comment5.png";
import comment6 from "../../assets/img/home/comment6.png";
import content1 from "../../assets/img/home/content1.png";
import content2 from "../../assets/img/home/content2.png";
import content3 from "../../assets/img/home/content3.png";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

import "./css/home.css";
import styles from "./css/home.module.css"; // เชื่อมต่อไฟล์ CSS
let slidesToShow = 3;

const carouselProperties = {
  prevArrow: false,
  nextArrow: false,
  slidesToShow: slidesToShow,
  slidesToScroll: 3,
  infinite: true,
  autoplay: true, // ให้ Slider หมุนเอง
  autoplaySpeed: 9000, // ตั้งค่าให้หมุนทุก ๆ 30 วินาที
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.1,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2.5,
        centerMode: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
  ],
};

const Home = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(2);

  const { ref: textHome2, inView: textHome2ISVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: bounceContainer, inView: bounceContainerISVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: stayfitItem, inView: statfitItemISVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: home3, inView: Home3ISVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: home4, inView: Home4ISVisible } = useInView({
    triggerOnce: true,
  });

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
      {/*   <div className="slider-container">
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
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">
                Stay fit with Bebe
              </p>
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
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">
                Let's Challenge
              </p>
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
              <p className="text48 SemiBoldPynk ef60a3 mb-10px">
                Shop สุดฟิน!!!
              </p>
              <p className="text24 SemiBoldPynk color-4a4a4a">
                รวมดีลเด็ดที่คุณต้องไม่พลาด
              </p>
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
      </div> */}

      {/*  <p className={`${styles["text-test"]} ${styles["text-b"]} ${"col-5"}`}>
        {" "}
        TEST CSS
      </p> */}

      <div className={`${styles["home2"]}`}>
        <p className={`${styles["services-happily"]} ${"text-center"}`}>
          บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข
          และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน
        </p>
        <p className={`${styles["not-good"]} ${"text-center"}`}>
          “ไม่ใช่แค่หุ่นดี{" "}
          <span className={`${styles["not-good-span"]}`}>
            {" "}
            แต่มันคือการรักตัวเองอย่างมีความสุข”
          </span>
        </p>

        <div className={`${styles["box-stay-fit-bebe"]}`}>
          <div className="row">
            <div className="col-md-6 text-align-center">
              <picture
                ref={bounceContainer}
                className={`bebe-bubble ${
                  bounceContainerISVisible && "animate-bebe-bubble"
                }`}
              >
                <source media="(max-width: 480px)" srcset={bebe_bubble} />
                <img
                  src={bebe_bubble}
                  className={styles.img_bebe_bubble}
                  alt=""
                />
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
            <div className="col-md-6">
              <p className={styles["stay-fit"]}>STAY FIT</p>
              <p className={styles["with-bebe"]}>WITH BEBE</p>
              <p className={styles["teaching-course"]}>
                คอร์สสอนออกกำลังกายสุดปังจากวงการเบเบ้
                ที่จะพาคุณมาอัปเกรดความฟิต ด้วยโปรแกรม 8 สัปดาห์
              </p>
              <p className={styles["special-design"]}>
                ที่เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ พร้อมการันตีความสนุก
                และผลลัพธ์ของการเปลี่ยนแปลง มาแล้วมากกว่าสิบรุ่น!
              </p>
            </div>
          </div>
          {/*   <div className="bubble"></div>
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
          <div className="bubble4"></div>
          <div className="bubble5"></div> */}
        </div>

        <div className="row">
          <div className="col-md-6 mb-16">
            <div className={styles["content-stays-fit"]}>
              <img src={fit_item} alt="" className={styles["fit_item"]} />
              <p className={styles["text48-LightPynk"]}>FIT ITEMS</p>
              <p className={styles["text24-RegularPynk"]}>
                ให้เรื่องการออกกำลังกายเป็นเรื่องที่ ง่าย และใกล้ตัว ด้วยอุปกรณ์
                ออกกำลังกายสไตล์เบเบ้ที่พร้อมตอบโจทย์
                ทุกไลฟ์สไตล์ของสายฟิตที่ไม่ว่าคุณจะเป็นสายฟิตมือใหม่
                หรือสายฟิตมือโปรก็สามารถสนุกไปกับการออกกำลังกายที่บ้านได้แบบไม่จำเจ
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-16">
            <div
              className={`${styles["content-stays-fit"]} ${styles["ml-16"]}`}
            >
              <img src={fitto_item} className={styles["fitto_item"]} />
              <p
                className={styles["text48-LightPynk"]}
                style={{ marginBottom: "0" }}
              >
                FITTO
              </p>
              <p
                className={styles["text48-LightPynk"]}
                style={{ marginBottom: "16px" }}
              >
                ปั้นหุ่นสวยได้ทุกไลฟ์สไตล์
              </p>
              <p className={styles["text24-RegularPynk"]}>
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
          className="text48 SemiBoldPynk white text-align-center"
          style={{ marginBottom: "32px" }}
        >
          คอร์สแนะนำที่อยากบอกต่อ
        </div>
        <Slider {...carouselProperties}>
          <div className="box-home-slider-1">
            <div className="slider-card-item-course">
              <div className="box-fitto4week">
                <img className="fitto4week" src={fitto4week} alt="" />
              </div>

              <div className="card-text-box">
                <p className="SemiBoldPynk text24">
                  Fitto 4 Week Starter Program
                </p>
                <p className="RegularPynk text20">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <i class={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
            {/*  <div
              className={`slider-card-item-course ${hoveredButton === 1 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(1)}
              onMouseLeave={resetHoveredButton}
            >
              card-item-course
            </div> */}
          </div>
          <div className="box-home-slider-2">
            <div className="box-suggestion"></div>
            <div className="slider-card-item-course-center">
              <div className="box-fitto4week">
                <p className="suggestion text24 SemiBoldPynk white">แนะนำ</p>
                <img className="fitto4week" src={stayfit_with_bebe} alt="" />
              </div>
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">STAY FIT WITH BEBE</p>
                <p className="RegularPynk text20">
                  โปรแกรมออกกำลังกาย 8 สัปดาห์ที่ เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ
                </p>
                <i class={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
            {/*  <div
              className={`card-item-course ${hoveredButton === 2 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(2)}
              onMouseLeave={resetHoveredButton}
            >
              <div className="suggestion text24 SemiBoldPynk white">แนะนำ</div>
            </div> */}
          </div>
          <div className="box-home-slider-3">
            <div className="slider-card-item-course">
              <div className="box-fitto4week">
                <img
                  className="fitto4week"
                  src={bikini_body_challenge}
                  alt=""
                />
              </div>
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">Bikini Body Challenge</p>
                <p className="RegularPynk text20">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <i class={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
            {/*   <div
              className={`card-item-course ${hoveredButton === 3 && "hovered"}`}
              onMouseEnter={() => handleButtonHover(3)}
              onMouseLeave={resetHoveredButton}
            >
              {" "}
              card-item-course
            </div> */}
          </div>

          {/* <div
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
                className={`card-item-course ${
                  hoveredButton === 1 && "hovered"
                }`}
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
                <i
                  class={`fa-solid fa-arrow-right fa-xl ${
                    hoveredButton === 1 && "hovered"
                  }`}
                ></i>
              </div>
              <div
                className={`card-item-course ${
                  hoveredButton === 2 && "hovered"
                }`}
                onMouseEnter={() => handleButtonHover(2)}
                onMouseLeave={resetHoveredButton}
              >
                
                <i
                  class={`fa-solid fa-arrow-right fa-xl ${
                    hoveredButton === 2 && "hovered"
                  }`}
                ></i>
              </div>
              <div
                className={`card-item-course ${
                  hoveredButton === 3 && "hovered"
                }`}
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
                <i
                  class={`fa-solid fa-arrow-right fa-xl ${
                    hoveredButton === 3 && "hovered"
                  }`}
                ></i>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
      {/*    <div ref={home4} className="home4">
        <div className="home4-container">
          <div
            className={`text48 SemiBoldPynk text-align-center ${
              Home4ISVisible && "animate-open-home4"
            }`}
          >
            เสียงตอบรับจากผู้ใช้บริการ
            <div className="home-star">
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
            </div>
          </div>

          <div className="comment-item-container">
            <div className={Home4ISVisible && "card-comment1"}>
              <picture>
                <img src={comment1} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment2"}>
              <picture>
                <img src={comment2} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment3"}>
              <picture>
                <img src={comment3} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment4"}>
              <picture>
                <img src={comment4} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment5"}>
              <picture>
                <img src={comment5} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment6"}>
              <picture>
                <img src={comment6} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="home5">
        <div className="text-home5">
          <p className="text48 SemiBoldPynk mb-0px">
            เคล็ด (ไม่) ลับ ฉบับอยากแชร์
          </p>
          <button
            className="text18 SemiBoldPynk ef60a3"
            style={{ alignSelf: "center", backgroundColor: "#fff" }}
          >
            ดูเพิ่มเติม
          </button>
        </div>
        <div className="card-container-home5">
          <div className="card-content-home5">
            <img
              src={content1}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="card-content-home5">
            <img
              src={content2}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="card-content-home5">
            <img
              src={content3}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
