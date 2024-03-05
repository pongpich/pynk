import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import bubblesBottom from "../../assets/img/home/bubblesBottom.png";
import bubblesTop from "../../assets/img/home/bubblesTop.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import stay_fit_with_bebe from "../../assets/img/home/stay_fit_with_bebe.png";
import lets_challenge from "../../assets/img/home/lets_challenge.png";
import shop_fin from "../../assets/img/home/shop_fin.png";
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
import { useDispatch } from "react-redux";

import "./css/home.css";
import "./css/home_animation.css";
import styles from "./css/home.module.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "@mui/icons-material";
import { clearGetPage, getPage } from "../../redux/pynk/contents";

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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
  const reqURL =
    "https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf";
  const dispatch = useDispatch();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(2);
  const [contents, setContents] = useState([]);

  const handleButtonHover = (buttonId) => {
    setHoveredButton(buttonId);
  };
  const resetHoveredButton = () => {
    setHoveredButton(2);
  };

  const { ref: home4, inView: Home4ISVisible } = useInView({
    triggerOnce: true,
  });

  function previousIndex(curr, prev) {
    setPreviousSlideIndex(prev);
    if (curr !== currentSlideIndex) {
      setCurrentSlideIndex(curr);
    }
  }

  const nextPage = (contents) => {
    dispatch(getPage(contents));
  };

  useEffect(() => {
    const carousel = document.getElementById("carouselExampleAutoplaying");
    // เมื่อสไลด์เปลี่ยน
    carousel.addEventListener("slid.bs.carousel", (event) => {
      setCurrentSlideIndex(event.to);
      setAnimation(true);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const req = await fetch(reqURL);
      const contentsData = await req.json();
      setContents(contentsData);
    })();
  }, []);
  return (
    <div className="">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            onClick={() => previousIndex(0, currentSlideIndex)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            onClick={() => previousIndex(1, currentSlideIndex)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            onClick={() => previousIndex(2, currentSlideIndex)}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="box_animation">
            <div className="row">
              <div className="col-12 col-md-6 relative flex_center">
                <img
                  src={bubblesTop}
                  className={`bubbles-top  ${
                    (animation &&
                      currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "rotate2to0-1") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "rotate1to0-1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "rotate0to1-1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "rotate2to1-1") ||
                    (currentSlideIndex === 2 && "rotate1to2-1")
                  }`}
                  id="bubbles-top"
                  alt=""
                />
                <img
                  src={bubblesBottom}
                  className={`bubbles-bottom  ${
                    (animation &&
                      currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "rotate2to0") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "rotate1to0") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "rotate0to1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "rotate2to1") ||
                    (currentSlideIndex === 2 && "rotate1to2")
                  }`}
                  id="bubbles-bottom"
                  alt=""
                />
                <div
                  className={`${
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 0 &&
                      "bebe-slide1") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "bebe-slide1 bebe-slide2to0") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "bebe-slide1 bebe-slide1to0") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "bebe-slide2 bebe-slide0to1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "bebe-slide2 bebe-slide2to1") ||
                    (currentSlideIndex === 2 && "bebe-slide3 bebe-slide1to2")
                  }`}
                />
              </div>
              <div className="col-12 col-md-6 relative flex_center">
                {currentSlideIndex === 0 ? (
                  <div className="home1-detail">
                    <img
                      src={stay_fit_with_bebe}
                      className="slide-img1"
                      alt=""
                    />
                    <p className="slide-text1 SemiBoldPynk">
                      คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตีความสำเร็จจากนักเรียนกว่าสิบรุ่น
                    </p>
                  </div>
                ) : currentSlideIndex === 1 ? (
                  <div className="home1-detail">
                    <img src={lets_challenge} className="slide-img2" alt="" />
                    <p className="slide-text2 SemiBoldPynk">
                      ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝันได้กับไอเทมฮอตฮิตจาก
                      bebe fit routine
                    </p>
                  </div>
                ) : currentSlideIndex === 2 ? (
                  <div className="home1-detail">
                    <img src={shop_fin} className="slide-img3" alt="" />
                    <p className="slide-text3 SemiBoldPynk">
                      รวมดีลเด็ดที่คุณต้องไม่พลาด ช้อปเลย!
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <button
                  /* onClick={() => history.push("/questionare")} */
                  className="btn  bold button-home1 col-10 col-sm-10 button-home1"
                >
                  เริ่มฟิตไปด้วยกัน
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item active" data-interval="1000">
            <div className="box_screen1">
              <div className="line3"></div>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <div className="box_screen2">
              <div className="line3"></div>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <div className="box_screen3">
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-home2">
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
      </div>

      <div className="slider-container">
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
                <i className={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
          </div>
          <div className="box-home-slider-2">
            {/* <div className="box-suggestion"></div> */}
            <div className="slider-card-item-course-center">
              <div className="box-fitto4week">
                {/* <p className="suggestion text24 SemiBoldPynk white">แนะนำ</p> */}
                <img className="fitto4week" src={stayfit_with_bebe} alt="" />
              </div>
              <div className="card-text-box">
                <p className="SemiBoldPynk text24">STAY FIT WITH BEBE</p>
                <p className="RegularPynk text20">
                  โปรแกรมออกกำลังกาย 8 สัปดาห์ที่ เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ
                </p>
                <i className={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
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
                <i className={`fa-solid fa-arrow-right fa-xl`} />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div ref={home4} className="home4">
        <div
          className={`text48 SemiBoldPynk text-align-center ${
            Home4ISVisible && "animate-open-home4"
          }`}
        >
          เสียงตอบรับจากผู้ใช้บริการ
          <div className="">
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

        <Grid
          container
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="500">
              <img src={comment1} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="800">
              <picture>
                <img src={comment2} alt="" />
              </picture>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1300">
              <picture>
                <img src={comment3} alt="" />
              </picture>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1800">
              <picture>
                <img src={comment4} alt="" />
              </picture>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="2300">
              <picture>
                <img src={comment5} alt="" />
              </picture>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="2500">
              <picture>
                <img src={comment6} alt="" />
              </picture>
            </div>
          </Grid>
        </Grid>
      </div>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <div className="d-block d-md-flex justify-content-between mb-5">
          <p className="text48 SemiBoldPynk mb-0px">
            เคล็ด (ไม่) ลับ ฉบับอยากแชร์
          </p>
          <button
            className="text18 SemiBoldPynk ef60a3"
            style={{ alignSelf: "center", backgroundColor: "#fff" }}
            onClick={() => {
              history.push("/content");
              window.scrollTo(0, 0);
            }}
          >
            ดูเพิ่มเติม
          </button>
        </div>

        <Grid container spacing={3}>
          {contents
            .filter((item) => item.acf.category.name === "Home")
            .map((content, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <div
                  className="card-content-home5"
                  onClick={() => {
                    history.push(`/content_detail/${content.id}`);
                    nextPage(content);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    className="content_img"
                    src={content.acf.thumbnail}
                    alt={content.title.rendered}
                  />
                  <p className="text24 SemiBoldPynk">
                    {content.title.rendered}
                  </p>
                  <p className="text20 RegularPynk">
                    {content.acf.summary.slice(0, 105) + "..."}
                  </p>
                </div>
              </Grid>
            ))
            .slice(0, 3)}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};
export default Home;
