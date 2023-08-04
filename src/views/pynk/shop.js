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
import bfr_rope from "../../assets/img/pynk/shop/bfr_rope.png";
import bfr_coupon from "../../assets/img/pynk/shop/bfr_coupon.png";
import icon_cart_white from "../../assets/img/pynk/shop/icon_cart_white.png";

import "./css/shop.css";

function ShopPynk() {

  const [promotionalProduct, setPromotionalProduct] = useState([
    { name: "BEBE FIT ROUTINE BALL", price: 199, discount_price: 99, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 2", price: 299, discount_price: 199, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 3", price: 399, discount_price: 299, img: bfr_ball },
    { name: "BEBE FIT ROUTINE BALL 4", price: 499, discount_price: 399, img: bfr_ball },
  ]);

  const [newProduct, setNewProduct] = useState([
    { name: "BEBE FIT ROUTINE ROPE", price: 456, discount_price: 123, img: bfr_rope },
    { name: "BEBE FIT ROUTINE ROPE 2", price: 400, discount_price: 300, img: bfr_rope },
    { name: "BEBE FIT ROUTINE ROPE 3", price: 320, discount_price: 250, img: bfr_rope },
    { name: "BEBE FIT ROUTINE ROPE 4", price: 1000, discount_price: 770, img: bfr_rope },
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


      <div style={{ marginTop: 70, marginBottom: 108, cursor: "pointer" }}>
        <div>

          <div className="d-flex justify-content-between" style={{ paddingLeft: "10%", paddingRight: "10%", marginBottom: 16 }}>
            <span className="fw-bold" style={{ color: "#4F4F4F", fontSize: 20 }} >สินค้าดีมีโปร</span>
            <span className="text-decoration-underline" style={{ color: colors.primary4, fontSize: 14 }} >ดูทั้งหมด</span>
          </div>

          <div className="row d-flex justify-content-center" style={{ gap: 30 }}>

            {promotionalProduct.map((item) => (
              <div className="product" style={{ width: 275, padding: 0 }}>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ width: 51, height: 30, position: "absolute", marginTop: 8, marginLeft: 2, backgroundColor: "#FF4858", color: "white", borderRadius: 2 }}
                >
                  HOT
                </div>

                <div className="d-flex  justify-content-center align-items-center img_product" style={{ height: 250 }}>
                  <img width={275} height={250} src={item.img} />
                </div>

                <div className=" d-flex flex-column justify-content-center align-items-center detail_product" style={{ paddingTop: 23, paddingBottom: 31 }}>
                  <div className="fw-bold" style={{ fontSize: 15, color: colors.neutral6 }}>{item.name}</div>
                  <div className="fw-bold" style={{ fontSize: 22, color: colors.primary4 }}>
                    {`฿${item.discount_price}`}{` `}
                    <span className="fw-light text-decoration-line-through" style={{ fontSize: 15, color: "#9098B1" }}>
                      {`฿${item.price}`}
                    </span>
                  </div>
                  <button type="button" className="btn justify-content-center align-items-center" style={{ backgroundColor: colors.primary4, width: 237, height: 46, borderRadius: 46, gap: 7, marginTop: 15, border: 0 }}>
                    <img width={18} height={18} src={icon_cart_white} />
                    <span style={{ color: "white", fontSize: 18 }}>เพิ่มลงถุงช้อปปิ้ง</span>
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      <div style={{ marginTop: 70, marginBottom: 108, cursor: "pointer" }}>

        <div className="d-flex justify-content-between" style={{ paddingLeft: "10%", paddingRight: "10%", marginBottom: 16 }}>
          <span className="fw-bold" style={{ color: "#4F4F4F", fontSize: 20 }} >แนะนำสินค้าใหม่</span>
          <span className="text-decoration-underline" style={{ color: colors.primary4, fontSize: 14 }} >ดูทั้งหมด</span>
        </div>

        <div className="row d-flex justify-content-center" style={{ gap: 30 }}>

          {newProduct.map((item) => (
            <div className="product" style={{ width: 275, padding: 0 }}>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ width: 51, height: 30, position: "absolute", marginTop: 8, marginLeft: 2, backgroundColor: "#FF4858", color: "white", borderRadius: 2 }}
              >
                HOT
              </div>

              <div className="d-flex  justify-content-center align-items-center img_product" style={{ height: 250 }}>
                <img width={275} height={250} src={item.img} />
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center detail_product" style={{ paddingTop: 23, paddingBottom: 31 }}>
                <div className="fw-bold" style={{ fontSize: 15, color: colors.neutral6 }}>{item.name}</div>
                <div className="fw-bold" style={{ fontSize: 22, color: colors.primary4 }}>
                  {`฿${item.discount_price}`}{` `}
                  <span className="fw-light text-decoration-line-through" style={{ fontSize: 15, color: "#9098B1" }}>
                    {`฿${item.price}`}
                  </span>
                </div>
                <button type="button" className="btn justify-content-center align-items-center" style={{ backgroundColor: colors.primary4, width: 237, height: 46, borderRadius: 46, gap: 7, marginTop: 15, border: 0 }}>
                  <img width={18} height={18} src={icon_cart_white} />
                  <span style={{ color: "white", fontSize: 18 }}>เพิ่มลงถุงช้อปปิ้ง</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="d-flex justify-content-center" style={{ paddingLeft: 121, paddingRight: 121, marginTop: 70, marginBottom: 108, gap: 30 }}>
        <img width={584} height={292} src={bfr_coupon} />
        <img width={584} height={292} src={bfr_coupon} />
      </div>

    </div>
  );
}

export default ShopPynk;
