import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import shadow_right from "../../assets/img/sale_page/shadow_right.png";
import shadow_left from "../../assets/img/sale_page/shadow_left.png";
import bg_1 from "../../assets/img/sale_page/bg_1.png";
import bg_left from "../../assets/img/sale_page/bg-left.png";
import logo from "../../assets/img/sale_page/logo.png";
import fb_icon from "../../assets/img/sale_page/fb_icon.png";
import line_icon from "../../assets/img/sale_page/line_icon.png";
import babe_2 from "../../assets/img/sale_page/babe_2.png";
import bg_grey from "../../assets/img/sale_page/bg_grey.png";
import Rectangle383 from "../../assets/img/sale_page/Rectangle383.png";
import Rectangle384 from "../../assets/img/sale_page/Rectangle384.png";
import Rectangle385 from "../../assets/img/sale_page/Rectangle385.png";
import Rectangle386 from "../../assets/img/sale_page/Rectangle386.png";
import Rectangle387 from "../../assets/img/sale_page/Rectangle387.png";
import Rectangle388 from "../../assets/img/sale_page/Rectangle388.png";
import Group74 from "../../assets/img/sale_page/Group74.png";
import Group75 from "../../assets/img/sale_page/Group75.png";
import Group76 from "../../assets/img/sale_page/Group76.png";
import Group49 from "../../assets/img/sale_page/Group49.png";
import bg_grey_2 from "../../assets/img/sale_page/bg_grey_2.png";
import foodImg from "../../assets/img/sale_page/food.png";
import P4FBEBE98661 from "../../assets/img/sale_page/P4FBEBE98661.png";
import Group77 from "../../assets/img/sale_page/Group77.png";
import gym_5 from "../../assets/img/sale_page/gym5.png";
import gym_4 from "../../assets/img/sale_page/gym4.png";
import facebook_5 from "../../assets/img/sale_page/facebook5.png";
import musicnote from "../../assets/img/sale_page/musicnote.png";
import Rectangle3 from "../../assets/img/sale_page/Rectangle3.png";
import shutterstock from "../../assets/img/sale_page/shutterstock.png";
import checkmark from "../../assets/img/sale_page/checkmark.png";
import dumbbell from "../../assets/img/sale_page/dumbbell.png";
import vegetable from "../../assets/img/sale_page/vegetable.png";
import food_icon1 from "../../assets/img/sale_page/food_icon1.png";
import shoppingcart from "../../assets/img/sale_page/shoppingcart.png";
import sleep from "../../assets/img/sale_page/sleep.png";
import woman from "../../assets/img/sale_page/woman.png";
import bodyspa from "../../assets/img/sale_page/bodyspa.png";
import hospital from "../../assets/img/sale_page/hospital.png";
import bg_grey_3 from "../../assets/img/sale_page/bg_grey_3.png";
import Group12 from "../../assets/img/sale_page/Group12.png";
import Group771 from "../../assets/img/sale_page/Group771.png";
import Fittogether0065png from "../../assets/img/sale_page/Fittogether0065png.png";

const dataBoxGold = [
  { id: 1, title: "หลงทางอยู่ ไม่รู้จะเริ่มต้นยังไง", img: Rectangle383 },
  {
    id: 2,
    title: "เคยลองแล้ว แต่รู้สึกว่ายากเกิน ไม่เหมาะกับตัวเอง",
    img: Rectangle384,
  },
  {
    id: 3,
    title: "ฝืนทำจนเหนื่อย แล้วก็ยอมแพ้ เลิกล้มไปซะก่อน",
    img: Rectangle385,
  },
  { id: 4, title: "พยายามมากี่วิธี ก็ไม่ถึงเป้าหมายสักที", img: Rectangle386 },
  {
    id: 5,
    title: "อยากมีคนคอยไกด์ทาง แต่ไม่สะดวก มีเทรนเนอร์ส่วนตัว",
    img: Rectangle387,
  },
  {
    id: 6,
    title: "งานยุ่ง ไม่ค่อยมีเวลา ไม่สะดวกเดินทาง ไปยิม",
    img: Rectangle388,
  },
];

const dataGets = [
  {
    id: 1,
    title1: "โปรแกรมออกกำลังกาย",
    title2: "รูปแบบพิเศษที่ออกแบบตามช่วงน้ำหนักตัว ที่เหมาะกับคุณ",
    img: gym_4,
  },
  {
    id: 2,
    title1: "เทคนิคการทานอาหารและการดูแลตัวเอง",
    title2: "สไตล์เบเบ้ทุกสัปดาห์",
    img: gym_5,
  },
  {
    id: 3,
    title1: "กิจกรรมให้ร่วมสนุกตลอดคอร์ส",
    title2: "เพื่อให้การดูแลตัวเองครั้งนี้ไม่น่าเบื่ออีกต่อไป",
    img: musicnote,
  },
  {
    id: 4,
    title1: "Facebook Group Support",
    title2: "ตอบคำถามให้คำแนะนำ ตลอด 8 สัปดาห์",
    img: facebook_5,
  },
];

const dataSecretsCourses = [
  { id: 1, title: "เคล็ดลับวิธีการออกกำลังกาย", icon: dumbbell },
  { id: 2, title: "เคล็ดลับการดูแลตัวเองเรื่องทั่วไป การพักผ่อน", icon: sleep },
  { id: 3, title: "เคล็ดลับวิธีการกินเลือกทาน ผักผลไม้", icon: vegetable },
  { id: 4, title: "เคล็ดลับการดูแลผิวพรรณ", icon: woman },
  { id: 5, title: "เคล็ดลับการเลือกเมนูสุขภาพ", icon: food_icon1 },
  {
    id: 6,
    title: "เคล็ดลับการดูแลรักษารูปร่าง ให้อยู่กับเราไปนาน ๆ",
    icon: bodyspa,
  },
  {
    id: 7,
    title: "เคล็ดลับการเลือกซื้อของใน ซูเปอร์มาร์เก็ต",
    icon: shoppingcart,
  },
  { id: 8, title: "เคล็ดลับการดูแลตัวเองอย่างยั่งยืน", icon: hospital },
];

export default function SaleBebePage() {
  return (
    <Box>
      <Box sx={{ background: "#2C2E2F", height: { xs: "900px", sm: "700px" } }}>
        <Stack
          sx={{ display: { xs: "none", sm: "flex" } }}
          flexDirection={"row"}
          justifyContent={"flex-end"}
        >
          <img
            src={shadow_right}
            style={{ width: "200px", height: "100px" }}
            alt="shadow_right"
          />
        </Stack>

        <Container
          maxWidth="lg"
          sx={{
            backgroundImage: `url(${bg_1})`,
            backgroundSize: "cover",
            height: 500,
            width: "100%",
            borderRadius: "1.5rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  background: "#202020",
                  p: 2,
                  height: 100,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                mt={7}
              >
                <Stack
                  flexDirection={"row"}
                  alignItems={"flex-end"}
                  flexWrap={"wrap"}
                  sx={{ lineHeight: 20 }}
                >
                  <Typography variant="h6" color={"#FFFFFF"}>
                    ให้การ<span style={{ color: "#FF4ABB" }}>ลดน้ำหนัก</span>
                    ครั้งนี้
                  </Typography>
                  <Typography
                    variant="h3"
                    color={"#FFFFFF"}
                    sx={{ lineHeight: 1 }}
                  >
                    เป็นครั้งสุดท้าย
                  </Typography>
                </Stack>
              </Box>

              <Stack
                flexDirection={"row"}
                // flexWrap={"wrap"}
                alignItems={"center"}
                ml={2}
                mt={4}
              >
                <Box>
                  <img
                    src={logo}
                    style={{ width: "40px", height: "80px" }}
                    alt="logo"
                  />
                </Box>

                <Stack flexDirection={"row"}>
                  <Typography
                    sx={{
                      color: "#FCDEEC",
                      fontSize: { xs: 90, sm: 140, lg: 200 },
                      textShadow: "2px 2px 4px black",
                    }}
                    lineHeight={0.7}
                    fontWeight={700}
                  >
                    8
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "#FCDEEC",
                        fontSize: { xs: 50, sm: 80, lg: 120 },
                        lineHeight: 0.7,
                        textShadow: "2px 2px 4px black",
                      }}
                      fontWeight={700}
                    >
                      Weeks
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FCDEEC",
                        fontSize: { xs: 22, sm: 30, lg: 40 },
                        textShadow: "2px 2px 4px black",
                      }}
                      fontWeight={700}
                      align="right"
                    >
                      TRANSFORMATION
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <button
                style={{
                  background: "#ED0876",
                  outline: "3px solid #ffffff",
                  height: 60,
                  width: 250,
                  borderRadius: "2rem",
                  fontWeight: 700,
                  fontSize: 26,
                }}
              >
                สมัครเข้าร่วม
              </button>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img
                src={bg_left}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="bg_left"
              />
            </Grid>
          </Grid>
        </Container>
        <Stack
          flexDirection={"column"}
          justifyContent={"flex-end"}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <img
            src={shadow_left}
            style={{ width: "200px", height: "100px" }}
            alt="shadow_left"
          />
        </Stack>
      </Box>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        sx={{ background: "#545454", height: 200, p: 2, pb: { xs: 5 } }}
        gap={{ xs: 2, sm: 5 }}
      >
        <Typography variant="h4" color={"#FCDEEC"}>
          สอบถามข้อมูลเพิ่มเติม
        </Typography>
        <img src={fb_icon} style={{ width: 80, height: 80 }} alt="fb_icon" />
        <img
          src={line_icon}
          style={{ width: 80, height: 80 }}
          alt="line_icon"
        />
      </Stack>

<<<<<<< HEAD
<<<<<<< HEAD
      <Box sx={{ background: "#FCDEEC" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <img
                src={babe_2}
                style={{ width: "100%", height: "auto" }}
                alt="babe_2"
              />
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Stack
                flexDirection={"column"}
                justifyContent={"center"}
                height={"100%"}
              >
=======
=======
>>>>>>> a7f5a25 (update sale bebe)
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: `url(${bg_1})`,
          backgroundSize: "cover",
          height: 500,
          width: "100%",
          borderRadius: "1.5rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                background: "#202020",
                p: 2,
                height: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              mt={7}
            >
              <Stack flexDirection={"row"} alignItems={"flex-end"}>
                <Typography variant="h6" color={"#FFFFFF"}>
                  ให้การ<span style={{ color: "#FF4ABB" }}>ลดน้ำหนัก</span>
                  ครั้งนี้
                </Typography>
                <Typography variant="h3" color={"#FFFFFF"} sx={{ p: "-20px" }}>
                  เป็นครั้งสุดท้าย
                </Typography>
              </Stack>
            </Box>

            <Stack
              flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems={"center"}
              ml={2}
            >
              <Box>
                <img
                  src={logo}
                  style={{ width: "40px", height: "80px" }}
                  alt="logo"
                />
              </Box>
              <Box>
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
=======
>>>>>>> a9fcb07 (update ui sale_page (for test))
                <div style="height:100px; line-height:100px; background:#EEE;">
                  <span style="vertical-align:middle;">test</span>
                  <span style="font-size:2em; vertical-align:middle;">
                    test
                  </span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                
>>>>>>> f4e1cd9 (demo push)
=======
>>>>>>> a9fcb07 (update ui sale_page (for test))
=======
                
>>>>>>> f4e1cd9 (demo push)

                <Typography
                  sx={{ color: "#FCDEEC", fontSize: { xs: 50, lg: 120 } }}
                  fontWeight={700}
                >
                  8 Weeks
                </Typography>
<<<<<<< HEAD
>>>>>>> bff9e96 (update ui sale_page (for test))
=======
=======
      <Box sx={{ background: "#FCDEEC" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <img
                src={babe_2}
                style={{ width: "100%", height: "auto" }}
                alt="babe_2"
              />
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Stack
                flexDirection={"column"}
                justifyContent={"center"}
                height={"100%"}
              >
>>>>>>> c1ea535 (update sale bebe)
>>>>>>> a7f5a25 (update sale bebe)
                <Typography
                  sx={{
                    typography: { xs: "h3", sm: "h3", md: "h2" },
                    fontWeight: "700 !important",
                  }}
                  color={"#ED0876"}
                >
                  เบเบ้ขอชวนคุณ
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", md: "block" } }}
                  />
                  ! มาเข้าวงการ!
                </Typography>

                <Typography variant="h5" fontWeight={500}>
                  กับคอร์สสอนปั้นหุ่น
                </Typography>
                <Typography variant="h5" fontWeight={500}>
                  ที่ไม่ว่าใครก็เริ่มต้นความฟิต
                </Typography>
                <Typography variant="h5" fontWeight={500}>
                  ไปกับเบเบ้ได้!!
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${bg_grey})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Container sx={{ pt: 10, pb: 10 }} maxWidth="xl">
          <Box sx={{ background: "white", borderRadius: "1.5rem", p: 5 }}>
            <Typography variant="h4" align="center" fontWeight={500}>
              หากคุณเป็นคนหนึ่ง ที่มีเป้าหมายอยากจะพิชิตหุ่นสวยปัง!
            </Typography>
            <Typography variant="h4" align="center" fontWeight={500}>
              อยากเริ่มต้นดูแลสุขภาพและดูแลตัวเอง แต่ติดที่ข้อจำกัด
            </Typography>

            <Grid container spacing={3} mt={3}>
              {dataBoxGold.map((item) => (
                <Grid item xs={12} sm={6} lg={4} key={item.id}>
                  <Stack>
                    <img
                      src={item.img}
                      style={{ width: "100%", height: "auto" }}
                      alt={item.title}
                    />
                    <Typography variant="h5" align="center" mt={2}>
                      {item.title}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Stack flexDirection={"column"} alignItems={"center"} mt={5}>
            <Typography variant="h4" color={"#FFFFFF"} fontWeight={600}>
              เพราะเราเข้าใจว่าปัญหาเหล่านี้ไม่ใช่{" "}
              <span style={{ color: "#F7ABCE" }}>“ ข้ออ้าง ”</span>
            </Typography>
            <Typography variant="h4" color={"#FFFFFF"} fontWeight={600}>
              แต่เป็นข้อจำกัดที่ทำให้คุณไปถึงเส้ยชัยไม่ได้สักที
            </Typography>
          </Stack>
        </Container>

        <Box sx={{ background: "#FCDEEC", height: "100%" }}>
          <Container sx={{ pt: 10, pb: 10 }} maxWidth="xl">
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                <Typography
                  color={"#ED0876"}
                  variant="h3"
                  fontWeight={600}
                  align="center"
                >
                  เราขอพาคุณมาปลดล็อกทุกข้อจำกัด!
                </Typography>
                <Typography variant="h5" align="center">
                  ฟิตหุ่นเป๊ะปังไปกับโปรแกรมพิเศษจากเบเบ้
                </Typography>
                <Typography variant="h5" align="center">
                  ที่พร้อมให้คุณทำไปอย่างสนุก ทำตามได้และเห็นผลได้จริง
                </Typography>
                <img
                  src={Group74}
                  style={{ width: "100%", height: "auto" }}
                  alt="Group74"
                />
              </Box>
              <Grid container spacing={3} mt={5}>
                <Grid item xs={12} sm={6}>
                  <Stack
                    flexDirection={"column"}
                    justifyContent={"center"}
                    height={"100%"}
                  >
                    <Typography variant="h4" color={"#2C2E2F"} fontWeight={500}>
                      คอร์สสอนออกกำลังกายออนไลน์
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ที่{" "}
                      <span style={{ color: "#ED0876" }}>เบเบ้ ธันย์ชนก</span>{" "}
                      และทีมโค้ช
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ระดับแนวหน้า ร่วมกันพัฒนา ออกแบบมาพิเศษ
                    </Typography>

                    <Typography variant="h6" color={"#2C2E2F"}>
                      ให้เหมาะกับมือใหม่ที่เริ่มต้นดูแลตัวเอง
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      และสายฟิตที่อยากกลับมาฟิต ดูแลตัวเอง
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      เพื่อไปสู่เป้าหมายอย่างเห็นผล และถูกวิธี
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      โดยที่คุณจะสนุกไปกับการออกกำลังกาย โดยไม่ต้องฝืนทำ
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img
                    src={Group75}
                    style={{ width: "100%", height: "auto" }}
                    alt="Group75"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3} mt={5}>
                <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                  <img
                    src={Group76}
                    style={{ width: "100%", height: "auto" }}
                    alt="Group76"
                  />
                </Grid>
                <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                  <Stack
                    flexDirection={"column"}
                    justifyContent={"center"}
                    height={"100%"}
                  >
                    <Typography variant="h4" fontWeight={500}>
                      ฟิตได้สุด หมดทุกความกังวล
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      เพราะเราดูแลจบ! ครบลูป!
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ตลอดคอร์สทั้งด้านการออกกำลังกาย
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      และโภชนาการ
                    </Typography>

                    <Typography variant="h6" color={"#2C2E2F"}>
                      ด้วยโปรแกรมที่ช่วยเตรียมความพร้อมและค่อย ๆ
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      เพิ่มประสิทธิภาพของการออกกำลังกายให้ดีขึ้น
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      อย่างเป็นลำดับ จึงทำให้ทุกคนสามารถ
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      เริ่มต้นความฟิต กับโปรแกรมนี้ได้ทุกเลเวล
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ไม่ว่าจะเป็นสายฟิตมือใหม่ หรือสายฟิตมือโปร
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${bg_grey_2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Container sx={{ pt: 10, pb: 10 }}>
          <Stack flexDirection={"row"} justifyContent={"center"} mb={"-80px"}>
            <img
              src={Group49}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "250px",
                maxHeight: "350px",
              }}
              alt="Group49"
            />
          </Stack>
          <Box
            sx={{ background: "white", p: 5, borderRadius: "1.5rem", pt: 13 }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
              เพราะภายในคอร์สนี้ เบเบ้ออกแบบโปรแกรม
              <Box
                component={"br"}
                sx={{ display: { xs: "none", md: "block" } }}
              />
              อย่างเหมาะสมตามน้ำหนักตัวของแต่ละคน
            </Typography>

            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "left", sm: "center" } }}
              mt={2}
            >
              โดยไม่ต้องฝืนทำเยอะ ๆ ให้เหนื่อย แต่เป็นการทำอย่างพอดี
              <Box
                component={"br"}
                sx={{ display: { xs: "none", md: "block" } }}
              />
              เพื่อก้าวไปสู่ผลลัพธ์ของการ เปลี่ยนแปลงที่ดีที่สุดของคุณ!
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: "left", sm: "center" } }}
              color={"#EF60A3"}
              mt={2}
            >
              สะดวกสบาย ตอบโจทย์สาย Busy! เพราะเล่นที่ไหน ฝึกเมื่อไหร่ก็ได้!
              <Box
                component={"br"}
                sx={{ display: { xs: "none", md: "block" } }}
              />
              แค่ 3 - 4 วัน / สัปดาห์ ใช้เวลาไม่เกิน 60 นาทีต่อวัน!
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={3}>
                <img
                  src={foodImg}
                  style={{
                    width: "100%",
                    height: "auto",
                    // marginTop: "-100px",
                  }}
                  alt="foodImg"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Stack
                  flexDirection={"column"}
                  justifyContent={"center"}
                  height={"100%"}
                >
                  <Divider
                    sx={{
                      borderBottom: "2px dashed #EF60A3",
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ textAlign: { xs: "left", sm: "center" } }}
                    mt={3}
                  >
                    พร้อมเทคนิคการทานและโปรแกรมอาหาร
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ textAlign: { xs: "left", sm: "center" } }}
                  >
                    ไม่ยุ่งยาก ไม่กดดัน เป็นแนวทางที่ง่าย
                    เห็นผลและทำได้จริงสามารถนำ มาปรับได้ ตามไลฟ์สไตล์ของคุณ
                  </Typography>

                  <Divider
                    sx={{
                      borderBottom: "2px dashed #EF60A3",
                      mt: 5,
                      mb: 3,
                    }}
                  />

                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ textAlign: { xs: "left", sm: "center" } }}
                    mt={3}
                  >
                    ไปถึงเป้าหมายได้ ไม่ต้องกลัวหลงทาง
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ textAlign: { xs: "left", sm: "center" } }}
                  >
                    เพราะในคอร์สนี้เรามี ทีมโค้ช และทีมนักโภชนาการ
                    มืออาชีพที่จะคอยดูแล ตอบปัญหาทุกข้อสงสัยของคุณ
                    พร้อมแนะนำเทคนิคฟิตหุ่น พร้อมติดตามผล ตลอดโปรแกรม!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <img
                  src={P4FBEBE98661}
                  style={{
                    width: "100%",
                    height: "auto",
                    // marginTop: "-100px",
                  }}
                  alt="P4FBEBE98661"
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              background: "rgba(255,255,255,0.8)",
              p: 5,
              borderRadius: "1.5rem",
              mt: 8,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <img
                  src={Group77}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Group70"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack
                  flexDirection={"column"}
                  justifyContent={"center"}
                  height={"100%"}
                >
                  <Typography variant="h4" fontWeight={600}>
                    คอร์สนี้… บอกเลยไม่มีเหงา!
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    ฟิตสนุกไปถึงเป้าหมายแบบไม่น่าเบื่อ ด้วยระบบ{" "}
                    <span style={{ color: "#ED0876" }}>“Gamification”</span>
                  </Typography>

                  <Typography variant="h5">
                    กับกิจกรรมที่จะให้คุณ ได้ร่วมเล่นเกมกับเพื่อน ๆ
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    ภายในคอร์สตลอดโปรแกรมเพื่อจะช่วยกระตุ้น
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    และสร้างแรงจูงใจ ให้คุณสามารถออกกำลังกาย
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    ได้ครบรูทีน พร้อมลุ้นเป็นผู้ชนะรับรางวัล
                    <Box
                      component={"br"}
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    สุดพิเศษจาก Bebe Fit Routine !!
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box sx={{ background: "#353535" }}>
        <Container maxWidth="xl" sx={{ pt: 13, pb: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                color={"#F7ABCE"}
                variant="h4"
                fontWeight={700}
                align="center"
              >
                สิ่งที่คุณ
                <Box
                  component={"br"}
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                จะได้รับภายใน
                <Box
                  component={"br"}
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                BEBE FIT ROUTINE
                <Box component={"br"} />
                <span style={{ fontSize: 80 }}> 8 Week</span>
                <Box component={"br"} />
                <span style={{ fontSize: 38 }}>TRANSFORMATION</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {dataGets.map((item) => (
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  key={item.id}
                  gap={2}
                  mb={2}
                >
                  <img
                    src={item.img}
                    style={{ width: 60, height: 60 }}
                    alt={item.title1}
                  />
                  <Box>
                    <Typography color={"#FFFFFF"} variant="h6" fontWeight={600}>
                      {item.title1}
                    </Typography>
                    <Typography color={"#FFFFFF"} variant="h6">
                      {item.title2}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Rectangle3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Container maxWidth="xl" sx={{ pt: 10, pb: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                color={"#F45197"}
                fontWeight={700}
                mt={5}
              >
                และหากคุณ
              </Typography>
              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  mt={3}
                >
                  <img
                    src={checkmark}
                    style={{ width: 30, height: 30 }}
                    alt="checkmark"
                  />
                  <Box>
                    <Typography variant="h5">
                      <span style={{ fontWeight: 700 }}>อยากรู้เคล็ดลับ</span>{" "}
                      วิธีการดูแลตัวเอง
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ของเบเบ้ยังไงให้ เป๊ะ ปัง
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  sx={{
                    borderBottom: "2px dashed #EF60A3",
                    mt: 2,
                  }}
                />
              </Box>

              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  mt={3}
                >
                  <img
                    src={checkmark}
                    style={{ width: 30, height: 30 }}
                    alt="checkmark"
                  />
                  <Box>
                    <Typography variant="h5">
                      <span style={{ fontWeight: 700 }}>
                        กำลังมองหาโปรแกรมการออกกำลังกาย
                      </span>{" "}
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      สนุก ๆ ไม่น่าเบื่อ
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  sx={{
                    borderBottom: "2px dashed #EF60A3",
                    mt: 2,
                  }}
                />
              </Box>

              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  mt={3}
                >
                  <img
                    src={checkmark}
                    style={{ width: 30, height: 30 }}
                    alt="checkmark"
                  />
                  <Box>
                    <Typography variant="h5">
                      <span style={{ fontWeight: 700 }}>
                        อยากเริ่มต้นดูแลตัวเอง
                      </span>{" "}
                      แต่ยังไม่รู้จะเริ่มยังไง
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  sx={{
                    borderBottom: "2px dashed #EF60A3",
                    mt: 2,
                  }}
                />
              </Box>

              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                  mt={3}
                >
                  <img
                    src={checkmark}
                    style={{ width: 30, height: 30 }}
                    alt="checkmark"
                  />
                  <Box>
                    <Typography variant="h5">
                      <span style={{ fontWeight: 700 }}>
                        อยากได้แรงบันดาลใจ แรงกระตุ้น
                      </span>{" "}
                      <Box
                        component={"br"}
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      ในการออกกำลังกาย
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  sx={{
                    borderBottom: "2px dashed #EF60A3",
                    mt: 2,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                color={"#FF0F76"}
                fontWeight={600}
                mt={10}
              >
                มาทำให้การเข้าคอร์สครั้งนี้
                <Box
                  component={"br"}
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                เป็นการเปลี่ยนแปลงตัวเองครั้งสุดท้ายด้วยกันนะคะ
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={shutterstock}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 750,
                }}
                alt="shutterstock"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ background: "#EF60A3" }}>
        <Container maxWidth="lg" sx={{ pt: 10, pb: 10, color: "white" }}>
          <Typography
            variant="h3"
            fontWeight={600}
            sx={{ textAlign: { xs: "left", sm: "center" } }}
          >
            เนื้อหาเคล็ดลับที่จะได้เจอในคอร์ส
          </Typography>
          <Grid container spacing={3} mt={5}>
            {dataSecretsCourses.map((item) => (
              <Grid item xs={12} sm={6} key={item.id}>
                <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                  <img
                    src={item.icon}
                    style={{ width: 50, height: 50 }}
                    alt="icon"
                  />
                  <Typography variant="h6">{item.title}</Typography>
                </Stack>
                <Divider sx={{ background: "white", borderBottomWidth: 2 }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${bg_grey_3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={13}
            flexWrap={"wrap"}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(#FCDEEC, #FCDEEC) padding-box,linear-gradient(to bottom, #EF60A3, #FCDEEC) border-box",
                borderWidth: 20,
                borderStyle: "solid",
                borderImage: "linear-gradient(to bottom, #EF60A3, #FCDEEC) 2",
                borderRadius: "50%",
                border: "20px solid transparent",
                width: 360,
                height: 350,
              }}
            >
              <Typography
                mt={5}
                variant="h5"
                align="center"
                color={"#3E2B2F"}
                fontWeight={600}
              >
                เปิดรับสมัคร
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
                mt={2}
              >
                วันนี้
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
                mb={2}
                mt={2}
              >
                -
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                31 มีนาคาม
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                2567
              </Typography>
            </Box>
            <Box
              sx={{
                height: 350,
                background:
                  "linear-gradient(#FCDEEC, #FCDEEC) padding-box,linear-gradient(to bottom, #EF60A3, #FCDEEC) border-box",
                borderWidth: 20,
                borderStyle: "solid",
                borderImage: "linear-gradient(to bottom, #EF60A3, #FCDEEC) 2",
                borderRadius: "50%",
                border: "20px solid transparent",
                width: 360,
              }}
            >
              <Typography
                mt={5}
                variant="h5"
                align="center"
                color={"#3E2B2F"}
                fontWeight={600}
              >
                ระยะเวลาโปรแกรม
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
                mt={2}
              >
                22 เมษายน
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                2567
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                -
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                16 มิถุนายน
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color={"#ED0876"}
                fontWeight={700}
              >
                2567
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: "#EF60A3" }}>
        <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
          <Box
            className="triangle"
            sx={{
              background: "white",
              p: 3,
              borderRadius: "1rem",
            }}
          >
            <Stack
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h2"
                color={"#EF60A3"}
                fontWeight={700}
                sx={{
                  marginTop: "-50px",
                  background: "white",
                  width: "fit-content",
                }}
              >
                PROMOTION
              </Typography>
              <Typography variant="h5">เพียงสมัครภายใน 31 มี.ค. นี้</Typography>

              <Typography
                variant="h4"
                color={"#ED0876"}
                fontWeight={600}
                align="center"
              >
                รับส่วนลดทันที 800 บาท
                <Box
                  component={"span"}
                  sx={{
                    fontSize: 18,
                    color: "black",
                  }}
                >
                  จาก 2,990 บาท
                </Box>
              </Typography>
            </Stack>
          </Box>

          <Typography
            variant="h3"
            color="#ffffff"
            align="center"
            fontWeight={600}
            mt={7}
          >
            พิเศษเพียง 2190.- เท่านั้น!
            <Box
              component={"br"}
              sx={{ display: { xs: "none", md: "block" } }}
            />
            โปรมีจำนวนจำกัด!!
          </Typography>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            // width={"100%"}
          >
            <img
              src={Group12}
              style={{ width: "100%", maxWidth: 600, height: 170 }}
              alt="Group12"
            />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: "#545454" }}>
        <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
          <Typography
            variant="h4"
            color={"#FCDEEC"}
            fontWeight={600}
            align="center"
          >
            มีผู้ลงทะเบียนมาแล้วทั้งหมด
          </Typography>

          <Box
            sx={{
              background: "#FCDEEC",
              borderRadius: "2rem",
              width: "100%",
              height: 50,
              mt: 3,
            }}
          >
            <Box
              sx={{
                background: "#EF60A3",
                width: { xs: "fit-content", sm: "25%" },
                color: "white",
                p: 1.1,
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  typography: { xs: "subtitle1", md: "h5" },
                  fontWeight: "600 !important",
                  ml: { xs: 0, sm: 3 },
                }}
              >
                สมัครมาแล้ว 25 คน
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            align="right"
            color={"#FCDEEC"}
            mt={3}
            fontWeight={400}
          >
            จำกัด 200 คน
          </Typography>
        </Container>
      </Box>

      <Box sx={{ background: "#FCDEEC" }}>
        <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <button
              style={{
                background: "#ED0876",
                outline: "3px solid #ffffff",
                height: 60,
                width: 250,
                borderRadius: "2rem",
                fontWeight: 700,
                fontSize: 26,
              }}
            >
              สมัครเข้าร่วม
            </button>
          </Stack>
        </Container>
      </Box>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        sx={{ background: "#545454", height: 200, p: 2, pb: { xs: 5 } }}
        gap={{ xs: 2, sm: 5 }}
      >
        <Typography variant="h4" color={"#FCDEEC"}>
          สอบถามข้อมูลเพิ่มเติม
        </Typography>
        <img src={fb_icon} style={{ width: 80, height: 80 }} alt="fb_icon" />
        <img
          src={line_icon}
          style={{ width: 80, height: 80 }}
          alt="line_icon"
        />
      </Stack>
      <Box
        sx={{
          backgroundImage: `url(${Group771})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 800,
          backgroundColor: "#393939",
        }}
      >
        <Container maxWidth="lg" sx={{}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack
                flexDirection={"column"}
                justifyContent={"center"}
                height={"100%"}
              >
                <Typography variant="h4" color={"#FFFFFF"}>
                  มาลองแล้วจะรู้ว่า
                </Typography>
                <Typography variant="h3" color={"#F7ABCE"}>
                  วงการเบเบ้
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", md: "block" } }}
                  />
                  ไม่ยาก และสนุก
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", md: "block" } }}
                  />
                  จนไม่อยากออก
                </Typography>

                <Typography variant="h4" color={"#EF60A3"}>
                  สมัครเลย!!
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={Fittogether0065png}
                style={{ width: "100%", height: "auto" }}
                alt="Fittogether0065png"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
