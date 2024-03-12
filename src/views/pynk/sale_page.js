import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function SalePage() {
  return (
    <div>
      <Box sx={{ background: "red", height: 500 }}>
        <h1>ContentForSale</h1>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center">
          คอร์สนี้เหมาะกับใคร
        </Typography>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} sm={4}>
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Avatar sx={{ width: 160, height: 160 }} />
              <Typography mt={3}>มองหาวิธีการออกกำลังกาย</Typography>
              <Typography>แบบถูกวิธี</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Avatar sx={{ width: 160, height: 160 }} />
              <Typography mt={3}>ไม่มีเวลาไปฟิตเนส</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Avatar sx={{ width: 160, height: 160 }} />
              <Typography mt={3}>น้ำหนักตัว</Typography>
              <Typography>ไม่เกิน 80 กิโลกรัม</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ background: "red", height: 500, mt: 5 }}>
        <h1>ContentForSale</h1>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography align="center" variant="h4">
          รีวิวผลลัพธ์สาวๆ BEBE FIT ROUTINE
        </Typography>

        <video width="100%" controls style={{ maxHeight: 400, height: "auto" }}>
          <source
            src={"https://www.youtube.com/watch?v=T_816R7Wvd8"}
            type="video/mp4"
          />
        </video>
      </Container>

      <Box sx={{ background: "red", height: 500, mt: 5 }}>
        <h1>Timeline mui</h1>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8 }}>
        <Box sx={{ background: "#EF60A3", p: 2 }}>
          <Typography align="center" variant="h4" color={"#FFFFFF"}>
            เหลือเวลาอีกเพียง
          </Typography>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <Stack
                sx={{ background: "#FFFFFF", borderRadius: "0.5rem" }}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#EF60A3"} fontWeight={700}>
                  00
                </Typography>
                <Typography>Days</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Stack
                sx={{ background: "#FFFFFF", borderRadius: "0.5rem" }}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#EF60A3"} fontWeight={700}>
                  00
                </Typography>
                <Typography>Hours</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Stack
                sx={{ background: "#FFFFFF", borderRadius: "0.5rem" }}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#EF60A3"} fontWeight={700}>
                  00
                </Typography>
                <Typography>Minutes</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Stack
                sx={{ background: "#FFFFFF", borderRadius: "0.5rem" }}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#EF60A3"} fontWeight={700}>
                  00
                </Typography>
                <Typography>Seconds</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ background: "#D9D9D9", p: 2 }}>
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <button
              style={{
                background: "red",
                width: 350,
                padding: "10px",
                height: 40,
                borderRadius: "0.5rem",
              }}
            >
              สอบถามรายละเอียดเพิ่มเติม
            </button>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Typography>คอร์สอื่นที่น่าสนใจ</Typography>
      </Container>
    </div>
  );
}
