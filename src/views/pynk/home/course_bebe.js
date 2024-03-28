import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";

import fitto4week from "../../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../../assets/img/home/bikini_body_challenge.png";
import suggest_icon from "../../../assets/img/pynk/shop/suggest.png";
import bebefitroutine from "../../../assets/img/home/bebefitroutine.png";
import pilates7day from "../../../assets/img/home/pilates7day.png";
import getfitwithcarrot from "../../../assets/img/home/getfitwithcarrot.png";
import better_preem from "../../../assets/img/home/better-preem.png";
import icon_circle from "../../../assets/img/pynk/shop/icon-circle.png";
import bg_grey_1 from "../../../assets/img/pynk/bg_grey_1.png";
import Group37365 from "../../../assets/img/pynk/Group37365.png";
import LOGO from "../../../assets/img/pynk/LOGO.png";
import Group11 from "../../../assets/img/pynk/Group11.png";
import Rectangle4390 from "../../../assets/img/pynk/Rectangle4390.png";

import styles from "../css/home.module.css";

const boxServices = [
  {
    id: 1,
    title: "Fitto 4 Week Starter Program",
    img: fitto4week,
    link: "/#",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    title: "STAY FIT WITH BEBE",
    img: stayfit_with_bebe,
    link: "/#t",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 3,
    title: "Bikini Body Challenge",
    img: bikini_body_challenge,
    link: "/#",
    content: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 4,
    title: "Bebe for Beginner",
    img: bebefitroutine,
    link: "/sale-page?link=bebe",
    content:
      "คอร์สปั้นหุ่นฉบับมือใหม่ 8 สัปดาห์ ที่ไม่ว่าใครก็เริ่มต้นความฟิตกับเบเบ้ได้ ฟิตหุ่นเป๊ะปังกับโปรแกรมพิเศษจากเบเบ้ที่สนุก ง่าย ทำตามได้ และได้ผลจริง",
  },
  {
    id: 5,
    title: "7 DAY WITH PILATES RING",
    img: pilates7day,
    link: "/sale-page?link=7day",
    content:
      "สาว ๆ ตัว Top แห่งวงการความฟิต เบเบ้ จินนี่ และลิตา ชวนคุณมาสนุกกับคอร์สปั้นหุ่นเฟิร์มปัง กระชับทั้งตัวแบบ Full Body 360° ใน 4 สัปดาห์ ด้วยอุปกรณ์ Pilates Ring",
  },
  {
    id: 6,
    title: "Get Fit With Carrot In 8 Week",
    img: getfitwithcarrot,
    link: "/sale-page?link=getfit",
    content: `คอร์ส 8 สัปดาห์ ที่จะพาคุณมาปั้นหุ่นสับ แบบ Full Body 
        สร้างเอวเอสก้นกลมเด้ง กับโปรแกรมพิเศษสไตล์ “แครอท ปภาดา”`,
  },
  {
    id: 7,
    title: "Better Shape in 60 Days",
    img: better_preem,
    link: "/sale-page?link=bettershape",
    content:
      "คอร์สปั้นหุ่น 8 สัปดาห์ ฉบับซุปตาร์พรีม รณิดา ฝึกความยืดหยุ่นและสร้างความแข็งแรงให้กับกล้ามเนื้อแกนกลางลำตัว โปรแกรมออกแบบมาพิเศษสำหรับผู้ที่ต้องการเริ่มต้นออกกำลังกาย สร้างสุขภาพและรูปร่างที่ดีในแบบของตนเอง",
  },
];

const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className={`previous-btn-home`} onClick={onClick}>
        <img src={icon_circle} className="icon-previous-btn" alt="" />
      </div>
    </>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className={`next-btn-home`} onClick={onClick}>
        <img src={icon_circle} className="icon-next-btn" alt="" />
      </div>
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 9000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 476,
      settings: {
        centerMode: true,
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
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
};

function CourseBebe() {
  const history = useHistory();

  return (
    <>
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
                    {item.id === 2 ? (
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
                    height: { xs: 454, sm: 480 },
                    p: 2,
                    borderRadius: "1rem",
                    border: "1px solid #E8E8E8",
                    // width: { xs: 250, sm: 300, lg: 300 },
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
                  <Box
                    component={"img"}
                    sx={{
                      height: "auto",
                      maxHeight: 250,
                      width: "100%",
                      backgroundSize: "cover",
                      borderRadius: "1.5rem",
                    }}
                    src={item.img}
                    alt={item.title}
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
                      {item.content.slice(0, 70) + "..."}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      onClick={() => history.push(item.link)}
                      style={{
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#2C2E2F",
                      }}
                    >
                      ดูรายละเอียด
                    </button>
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
              backgroundSize: "cover",
              borderRadius: "1.5rem",
              height: { xs: "100%", lg: 270 },
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
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "582px",
                    maxHeight: "250px",
                  }}
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
              backgroundSize: "cover",
              borderRadius: "1.5rem",
              height: { xs: "100%", lg: 270 },
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{ height: { xs: "100%", lg: 320 } }}
            >
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
                  <img
                    src={LOGO}
                    style={{ width: 120, height: 60 }}
                    alt="img"
                  />
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
    </>
  );
}

export default CourseBebe;
