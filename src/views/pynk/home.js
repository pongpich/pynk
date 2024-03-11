import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import bubblesBottom from "../../assets/img/home/bubblesBottom.png";
import bubblesTop from "../../assets/img/home/bubblesTop.png";
import bebeSlide from "../../assets/img/home/bebeSlide.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import stay_fit_with_bebe from "../../assets/img/home/stay_fit_with_bebe.png";
import suggest_icon from "../../assets/img/pynk/shop/suggest.png";
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
import icon_circle from "../../assets/img/pynk/shop/icon-circle.png";
import bg_grey_1 from "../../assets/img/pynk/bg_grey_1.png";
import Group37365 from "../../assets/img/pynk/Group37365.png";
import LOGO from "../../assets/img/pynk/LOGO.png";
import Group11 from "../../assets/img/pynk/Group11.png";
import Rectangle4390 from "../../assets/img/pynk/Rectangle4390.png";

import Footer from "./footer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./css/home.css";
import "./css/home_animation.css";
import styles from "./css/home.module.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

import { Link } from "@mui/icons-material";
import { clearGetPage, getPage } from "../../redux/pynk/contents";
import { Button } from "@mui/material";

let slidesToShow = 3;

const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      <div className={`previous-btn-home`} onClick={onClick}>
        <img src={icon_circle} className="icon-previous-btn" />
      </div>
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      <div className={`next-btn-home`} onClick={onClick}>
        <img src={icon_circle} className="icon-next-btn" />
      </div>
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  infinite: true,
  autoplay: true, // ให้ Slider หมุนเอง
  autoplaySpeed: 9000, // ตั้งค่าให้หมุนทุก ๆ 30 วินาที
  responsive: [
    {
      breakpoint: 476,
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
        slidesToShow: 2,
        // centerMode: true,
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
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 1800,
    //   settings: {
    //     slidesToShow: 3,
    //     centerMode: true,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
};

const boxServices = [
  {
    id: 1,
    title: "Fitto 4 Week Starter Program",
    img: fitto4week,
    link: "",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    title: "STAY FIT WITH BEBE",
    img: stayfit_with_bebe,

    link: "",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 3,
    title: "Bikini Body Challenge",
    img: bikini_body_challenge,
    link: "",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
];
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
                <img
                  src={bebeSlide}
                  className={`bebe-slide ${
                    (animation &&
                      currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "bebe-slide2to0") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "bebe-slide1to0") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "bebe-slide0to1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "bebe-slide2to1") ||
                    (currentSlideIndex === 2 && "bebe-slide1to2")
                  }`}
                  id="bebe-slide"
                  alt=""
                />
              </div>
              <div className={`texthome1 col-12 col-md-6`}>
                <div className={`text-anime col-12 col-md-6`}>
                  <div
                    className={`text-slide ${
                      (animation &&
                        currentSlideIndex === 0 &&
                        previousSlideIndex !== 1 &&
                        "text-anime2to0") ||
                      (currentSlideIndex === 0 &&
                        previousSlideIndex === 1 &&
                        "text-anime1to0") ||
                      (currentSlideIndex === 1 &&
                        previousSlideIndex !== 2 &&
                        "text-anime0to1") ||
                      (currentSlideIndex === 1 &&
                        previousSlideIndex === 2 &&
                        "text-anime2to1") ||
                      (currentSlideIndex === 2 && "text-anime1to2")
                    }`}
                  >
                    <div className="home1-detail">
                      <img
                        src={stay_fit_with_bebe}
                        className="slide-img1"
                        alt=""
                      />
                      <p className="slide-text1 SemiBoldPynk">
                        คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตีความสำเร็จจากนักเรียนกว่าสิบรุ่น
                      </p>
                      <button
                        onClick={() => history.push("/questionare")}
                        className="btn  bold button-home1 col-10 col-sm-10 button-home1"
                      >
                        เริ่มฟิตไปด้วยกัน
                      </button>
                    </div>
                    <div className="home1-detail1">
                      <img src={lets_challenge} className="slide-img2" alt="" />
                      <p className="slide-text2 SemiBoldPynk">
                        ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝันได้กับไอเทมฮอตฮิตจาก
                        bebe fit routine
                      </p>
                      <button
                        onClick={() => history.push("/questionare")}
                        className="btn  bold button-home1 col-10 col-sm-10 button-home1"
                      >
                        เริ่มฟิตไปด้วยกัน
                      </button>
                    </div>
                    <div className="home1-detail2">
                      <img src={shop_fin} className="slide-img3" alt="" />
                      <p className="slide-text3 SemiBoldPynk">
                        รวมดีลเด็ดที่คุณต้องไม่พลาด ช้อปเลย!
                      </p>
                      <button
                        onClick={() => history.push("/questionare")}
                        className="btn  bold button-home1 col-10 col-sm-10 button-home1"
                      >
                        เริ่มฟิตไปด้วยกัน
                      </button>
                    </div>
                  </div>
                </div>
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

      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Slider {...carouselProperties}>
          {boxServices.map((item) => (
            <Grid container spacing={3} alignItems={"center"} key={item.id}>
              <Grid item xs={12}>
                {
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {item.id == 2 ? (
                      <img
                        src={suggest_icon}
                        alt="suggest"
                        style={{
                          width: 100,
                          height: 50,
                          marginBottom: "-20px",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 100,
                          height: 50,
                          marginBottom: "-20px",
                        }}
                      />
                    )}
                  </Stack>
                }
                <Card
                  sx={{
                    height: 500,
                    p: 2,
                    borderRadius: "1rem",
                    border: "1px solid #E8E8E8",
                    width: { xs: 350, lg: 300 },
                    ":hover": {
                      // borderImage:
                      //   "linear-gradient(#7E74F2, #F05098, #F4A7BC, #DCDBDB) 2",
                      borderColor: "#F05098",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderRadius: "1rem",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 290,
                      width: "100%",
                    }}
                    image={item.img}
                    title={item.title}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color={"#2C2E2F"}
                      fontWeight={600}
                      height={"64px"}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="#2C2E2F">
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="/#"
                      color="#2C2E2F"
                      style={{ textDecoration: "underline" }}
                    >
                      ดูรายละเอียด
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          ))}
        </Slider>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Stack
          sx={{
            backgroundImage: `url(${bg_grey_1})`,
            p: 2,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "1.5rem",
            height: { xs: "100%", lg: 320 },
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={Group37365}
                style={{ width: "100%", height: "auto" }}
                alt="img"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography variant="h2" color={"#FCDEEC"} fontWeight={700}>
                  FIT ITEMS
                </Typography>
                <Typography variant="h4" fontWeight={500} color={"#FFFFFF"}>
                  ‘ตอบโจทย์ ทุกไลฟ์สไตล์ของสายฟิต’
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color={"#FFFFFF"}
                  mt={1}
                >
                  ไม่ว่าจะสายฟิตมือใหม่หรือสายฟิตมือโปร
                </Typography>
                <Typography variant="h6" fontWeight={400} color={"#FFFFFF"}>
                  ก็สามารถสนุกไปกับการออกกำลังกายที่บ้านได้แบบไม่จำเจ
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        <Stack
          sx={{
            backgroundImage: `url(${Rectangle4390})`,
            p: 2,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "1.5rem",
            height: { xs: "100%", lg: 320 },
          }}
        >
          <Grid container spacing={3} sx={{ height: { xs: "100%", lg: 320 } }}>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              order={{ xs: 2, sm: 1 }}
            >
              <Box>
                <img src={LOGO} style={{ width: 120, height: 60 }} alt="img" />
                <Typography variant="h4" fontWeight={500} color={"#000000"}>
                  ‘ทางลัดปั้นหุ่นสวยฉบับสายฟิต’
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color={"#000000"}
                  mt={1}
                >
                  ไม่ว่าจะสายฟิตมือใหม่หรือสายฟิตมือโปร
                </Typography>
                <Typography variant="h6" fontWeight={400} color={"#000000"}>
                  ก็สามารถสนุกไปกับการออกกำลังกายที่บ้านได้แบบไม่จำเจ
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              order={{ xs: 1, sm: 2 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={Group11}
                style={{ width: "100%", height: "auto" }}
                alt="img"
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>

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
