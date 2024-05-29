import React from "react";
import { useInView } from "react-intersection-observer";
import "./css/review_bebe.css";

import { Grid } from "@mui/material";

import star from "../../../assets/img/home/star.png";
import comment1 from "../../../assets/img/home/comment1.png";
import comment2 from "../../../assets/img/home/comment2.png";
import comment3 from "../../../assets/img/home/comment3.png";
import comment4 from "../../../assets/img/home/comment4.png";
import comment5 from "../../../assets/img/home/comment5.png";
import comment6 from "../../../assets/img/home/comment6.png";

function ReviewBebe() {
  const { ref: home3, inView: Home3ISVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div ref={home3} className="home3">
        <div
          className={`text48 SemiBoldPynk text-align-center ${
            Home3ISVisible && "animate-open-home3"
          }`}
        >
          เสียงตอบรับจากผู้ใช้บริการ
          <div className="">
            <picture>
              <img src={star} width={40} height={40} alt="" />
            </picture>
            <picture>
              <img src={star} width={40} height={40} alt="" />
            </picture>
            <picture>
              <img src={star} width={40} height={40} alt="" />
            </picture>
            <picture>
              <img src={star} width={40} height={40} alt="" />
            </picture>
            <picture>
              <img src={star} width={40} height={40} alt="" />
            </picture>
          </div>
        </div>

        <Grid
          container
          display={"flex"}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          sx={{ pb: 6}}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="500">
              <img src={comment1} alt="" width={375} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="800">
              <picture>
                <img src={comment2} alt="" width={375} />
              </picture>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1300">
              <picture>
                <img src={comment3} alt="" width={375} />
              </picture>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1500">
              <picture>
                <img src={comment4} alt="" width={375} />
              </picture>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1700">
              <picture>
                <img src={comment5} alt="" width={375} />
              </picture>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay="1900">
              <picture>
                <img src={comment6} alt="" width={375} />
              </picture>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ReviewBebe;
