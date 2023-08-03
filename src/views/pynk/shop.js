import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import colors from "./colors";
import home_shop from "../../assets/img/pynk/shop/home_shop.jpg";
import icon_kg from "../../assets/img/pynk/shop/icon_kg.png";
import icon_fitto from "../../assets/img/pynk/shop/icon_fitto.png";
import icon_burner from "../../assets/img/pynk/shop/icon_burner.png";
import icon_cup from "../../assets/img/pynk/shop/icon_cup.png";
import icon_supplement from "../../assets/img/pynk/shop/icon_supplement.png";
import icon_other from "../../assets/img/pynk/shop/icon_other.png";
import bfr_ball from "../../assets/img/pynk/shop/bfr_ball.png";

import "./css/shop.css";

function ShopPynk() {

  const [promotionalProduct, setPromotionalProduct] = useState([
    { name: "BEBE FIT ROUTINE BALL", price: 199, discount_price: 99, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 2", price: 299, discount_price: 199, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 3", price: 399, discount_price: 299, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 4", price: 499, discount_price: 399, img: bfr_ball },
  ]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: colors.red2,
          justifyContent: "center",
          alignItems: "center",
          height: 54,
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "20px",
          }}
        >
          Special Offer Discount 20%
        </h1>
      </div>

      <div className="head-shop">
        <img height={355} width={"100%"} src={home_shop} />
      </div>

      <div
        className="row gap-5 mt-5"
        style={{
          justifyContent: "center",
          display: "flex",
          margin: 0
        }}
      >

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img width={70} height={90} src={icon_kg} />
            </div>
            <span className="d-flex justify-content-center">
              อุปกรณ์ <br />
            </span>
            <span className="d-flex justify-content-center">
              ออกกำลังกาย
            </span>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img width={70} height={90} src={icon_fitto} />
            </div>
            <span className="d-flex justify-content-center">
              Fitto <br />
            </span>
            <span className="d-flex justify-content-center">
              Plant Protein
            </span>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
            padding: 0,
          }}
        >
          <div>
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img width={50} height={92} src={icon_burner} />
            </div>
            <span className="d-flex justify-content-center">
              Fitto Pre-Work Out
            </span>
            <span className="d-flex justify-content-center">
              & Fat Burner
            </span>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img width={62} height={91} src={icon_cup} />
            </div>
            <span
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 48,
              }}
            >
              Fitto Drink
            </span>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img width={98} height={88} src={icon_supplement} />
            </div>
            <span
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 48,
              }}
            >
              อาหารเสริม
            </span>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 50,
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                marginTop: 15,
              }}
            >
              <img width={74} height={74} src={icon_other} />
            </div>
            <span
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 48,
              }}
            >
              อื่นๆ
            </span>
          </div>
        </div>
      </div>


      <div style={{ paddingLeft: 121, paddingRight: 121, marginTop: 70 }}>

        <div className="d-flex justify-content-between" style={{ marginBottom: 16 }}>
          <span className="fw-bold" style={{ color: "#4F4F4F", fontSize: 20 }} >สินค้าดีมีโปร</span>
          <span className="text-decoration-underline" style={{ color: colors.primary4, fontSize: 14 }} >ดูทั้งหมด</span>
        </div>

        <div className="row d-flex justify-content-between">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: 51, height: 30, position: "absolute", marginTop: 8, marginLeft: 2, backgroundColor: "#FF4858", color: "white", borderRadius: 2 }}
          >
            HOT
          </div>
          
          {promotionalProduct.map((item) => (
            <div className="product" style={{ width: 275, padding: 0 }}>
              <div className="d-flex  justify-content-center align-items-center product" style={{ height: 250 }}>
                <img width={275} height={250} src={item.img} />
              </div>
              <div className=" d-flex flex-column justify-content-center align-items-center product" style={{ height: 110  }}>
                <div className="fw-bold" style={{ fontSize: 15, color: colors.neutral6 }}>{item.name}</div>
                <div className="fw-bold" style={{ fontSize: 22, color: colors.primary4 }}>
                  {`฿${item.discount_price}`}{` `}
                  <span className="fw-light text-decoration-line-through" style={{ fontSize: 15, color: "#9098B1" }}>
                    {`฿${item.price}`}
                  </span>
                </div>
                <button type="button" className="btn btn-danger">เพิ่มลงถุงช้อปปิ้ง</button>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default ShopPynk;
