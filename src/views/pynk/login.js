import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import slide4 from "../../assets/img/home/slide4.png";
import home2 from "../../assets/img/home/home_2.png";
import home2_1 from "../../assets/img/home/home2_1.png";
import home2_2 from "../../assets/img/home/home2_2.png";
import frame37407 from "../../assets/img/home/frame37407.png";
import frame37408 from "../../assets/img/home/frame37408.png";
import frame37409 from "../../assets/img/home/frame37409.png";
import frame37410 from "../../assets/img/home/frame37410.png";
import frame37545 from "../../assets/img/home/frame37545.png";
import frame37399 from "../../assets/img/home/frame37399.png";
import frame37547 from "../../assets/img/home/frame37547.png";
import frame37549 from "../../assets/img/home/frame37549.png";
import footer from "../../assets/img/home/footer.png";
import pinklogo from "../../assets/img/home/pinklogo.png";
import phonelogo from "../../assets/img/home/phonelogo.png";
import emaillogo from "../../assets/img/home/emaillogo.png";
import social from "../../assets/img/home/social.png";
import footer51 from "../../assets/img/home/footer51.png";
// import login_background from "../../assets/img/home/login_background.png";
import "./css/home.css";
import "./css/login.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from "../../redux/pynk/auth";

const Login = () => {
    // const handleSubmit = () => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //       email: data.get('email'),
    //       password: data.get('password'),
    //     });
    //   };
    useEffect(() => {

    }, []);
    const defaultTheme = createTheme();

    return (
        <div>
            {/*  <div className="login_background">
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
 */}

            <div>,</div>
            <div>,</div>
            <div>,</div>
            <div>,</div>
            <div>,</div>
            <div>,</div>

            <div>อีเมล</div>
            <input
                type="text"
                placeholder="อีเมล"
            />
            <div>รหัสผ่าน</div>
            <input
                type="password"
                placeholder="รหัสผ่าน"
            />

            <div className='d-flex justify-content-center'>
                <button >เข้าสู่ระบบ</button>
            </div>



        </div>
    )
}

export default Login;