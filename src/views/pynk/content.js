import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import title from "../../assets/img/content/Title.png";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import bebe_bubble from "../../assets/img/home/bebe_bubble.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import fit_item from "../../assets/img/home/fit_item.png";
import fitto_item from "../../assets/img/home/fitto_item.png";
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

const Content = () => {
    const history = useHistory();



    useEffect(() => {

    }, []);

    return (
        <div className="page">


            <img src={title} alt="" />
            <Box sx={{ '& button': { m: 1 } }}>

                <div>
                    <Button variant="outlined" size="medium">
                        ทั้งหมด
                    </Button>
                    <Button variant="outlined" size="medium">
                        อาหาร
                    </Button>
                    <Button variant="outlined" size="medium">
                        ออกกำลังกาย
                    </Button>
                    <Button variant="outlined" size="medium">
                        ไลฟ์สไตล์
                    </Button>
                </div>

            </Box>
            <Footer />
        </div>
    );
};

export default Content;
