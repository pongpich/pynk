import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LinearProgress, Container, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SaleChoicePage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(33.33);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setProgress((prev) => (activeStep == 2 ? 100 : prev + 33.33));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((prev) => prev - 33.33);
  };

  const handleReset = () => {
    setActiveStep(0);
    setProgress(33.33);
  };

  React.useMemo(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 25 }}>
      <Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: "#DDDDDD",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#EF60A3",
            },
          }}
        />

        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 16,
                cursor: activeStep == 0 ? "not-allowed" : "pointer",
                mr: 1,
                mt: 1,
                color: activeStep == 0 ? "#DDDDDD" : "black",
              }}
              onClick={activeStep === 0 ? () => {} : handleBack}
            />
            <Box sx={{ flex: "1 1 auto" }} />
            <Typography color={"#7A7A7A"} variant="subtitle2">
              {activeStep + 1} / 3
            </Typography>
          </Box>
          {activeStep == 0 && (
            <Container maxWidth="sm">
              <Typography variant="h5" fontWeight={700} mb={2} mt={3}>
                1. น้ำหนักปัจจุบันของคุณคือ?
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="ระบุน้ำหนักปัจจุบัน (กิโลกรัม)"
              />
              <Button
                sx={{
                  background: "#4F4F4F",
                  width: "100%",
                  mt: 3,
                  height: 40,
                  color: "white",
                  ":hover": {
                    background: "#4F4F4F",
                  },
                }}
                onClick={handleNext}
              >
                ถัดไป
              </Button>
            </Container>
          )}

          {activeStep == 1 && (
            <Container maxWidth="sm">
              <Typography variant="h5" fontWeight={700} mb={2} mt={3}>
                2.ใน 1 เดือนที่ผ่านมา คุณมีอาการบาดเจ็บบาดเจ็บที่เข่า, ข้อเท้า
                หรือ เส้นเอ็นอักเสบที่เข่าหรือข้อเท้าหรือไม่?
              </Typography>

              <Box
                sx={{
                  border: "1px solid #000000",
                  width: "100%",
                  mt: 3,
                  height: 40,
                  color: "black",
                  p: 1,
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <Typography align="left" sx={{ ml: 1 }}>
                  ใช่
                </Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid #000000",
                  width: "100%",
                  mt: 3,
                  height: 40,
                  color: "black",
                  p: 1,
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <Typography align="left" sx={{ ml: 1 }}>
                  ไม่ใช่
                </Typography>
              </Box>
            </Container>
          )}
          {activeStep == 2 && (
            <Container maxWidth="sm">
              <Typography variant="h5" fontWeight={700} mb={2} mt={3}>
                3.คุณต้องการโปรแกรมออกกำลังกายที่มีการกระโดดแบบ High Impact
                เพื่อการเผาผลาญพลังงานที่ดีขึ้นและได้ผลลัพธ์ที่ดีกว่าหรือไม่
              </Typography>

              <Box
                sx={{
                  border: "1px solid #000000",
                  width: "100%",
                  mt: 3,
                  height: 40,
                  color: "black",
                  p: 1,
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <Typography align="left" sx={{ ml: 1 }}>
                  ต้องการ
                </Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid #000000",
                  width: "100%",
                  mt: 3,
                  height: 40,
                  color: "black",
                  p: 1,
                  cursor: "pointer",
                }}
                onClick={handleNext}
              >
                <Typography align="left" sx={{ ml: 1 }}>
                  ไม่ต้องการ
                </Typography>
              </Box>
            </Container>
          )}
        </React.Fragment>
      </Box>

      
    </Container>
  );
}
