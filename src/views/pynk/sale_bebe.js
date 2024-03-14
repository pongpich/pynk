import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import shadow_right from "../../assets/img/sale_page/shadow_right.png";
import shadow_left from "../../assets/img/sale_page/shadow_left.png";
import bg_1 from "../../assets/img/sale_page/bg_1.png";
import bg_left from "../../assets/img/sale_page/bg-left.png";
import logo from "../../assets/img/sale_page/logo.png";

export default function SaleBebePage() {
  return (
    <Box sx={{ background: "#2C2E2F", height: 700 }}>
      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
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
                <div style="height:100px; line-height:100px; background:#EEE;">
                  <span style="vertical-align:middle;">test</span>
                  <span style="font-size:2em; vertical-align:middle;">
                    test
                  </span>
                </div>

                <Typography
                  sx={{ color: "#FCDEEC", fontSize: { xs: 50, lg: 120 } }}
                  fontWeight={700}
                >
                  8 Weeks
                </Typography>
                <Typography
                  sx={{
                    color: "#FCDEEC",
                    fontSize: { xs: 22, lg: 40 },
                    marginTop: { xs: "-20px", lg: "-60px" },
                  }}
                  fontWeight={700}
                  align="right"
                >
                  TRANSFORMATION
                </Typography>
                <button
                  style={{
                    background: "#ED0876",
                    outline: "3px solid #ffffff",
                    height: 40,
                    width: 200,
                    borderRadius: "1.5rem",
                  }}
                >
                  สมัครเข้าร่วม
                </button>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={5}>
            <img
              src={bg_left}
              style={{ width: "100%", height: "auto" }}
              alt="bg_left"
            />
          </Grid>
        </Grid>
      </Container>
      <Stack flexDirection={"column"} justifyContent={"flex-end"}>
        <img
          src={shadow_left}
          style={{ width: "200px", height: "100px" }}
          alt="shadow_left"
        />
      </Stack>
    </Box>
  );
}
