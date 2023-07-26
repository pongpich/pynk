import React, { Component } from "react";
import colors from "./colors";
import home_shop from "../../assets/img/pynk/shop/home_shop.jpg";
import icon_kg from "../../assets/img/pynk/shop/icon_kg.png";
import icon_fitto from "../../assets/img/pynk/shop/icon_fitto.png";
import icon_burner from "../../assets/img/pynk/shop/icon_burner.png";
import icon_cup from "../../assets/img/pynk/shop/icon_cup.png";
import icon_supplement from "../../assets/img/pynk/shop/icon_supplement.png";
import icon_other from "../../assets/img/pynk/shop/icon_other.png";

import "./css/shop.css";

export default class ShopPynk extends Component {
  render() {
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
          <img height={355} width={"100%"} src={home_shop}></img>
        </div>
        <div
          className="row gap-5 mt-5"
          style={{
            justifyContent: "center",
            display: "flex",
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
              <span className="d-flex justify-content-center">ออกกำลังกาย</span>
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
              <span className="d-flex justify-content-center">Plant Protein</span>
            </div>
          </div>


          <div
            className="row d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: colors.primary2,
              width: "180px",
              height: "180px",
              borderRadius: 50,
              padding: 0
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
              <span className="d-flex justify-content-center">& Fat Burner</span>
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
              <span className="d-flex justify-content-center align-items-center" style={{
                height: 48
              }}>
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
              <span className="d-flex justify-content-center align-items-center" style={{
                height: 48
              }}>
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
              borderRadius: 50
            }}
          >
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop:  15
                }}
              >
                <img width={74} height={74} src={icon_other} />
              </div>
              <span className="d-flex justify-content-center align-items-center" style={{
                height: 48
              }}>
                อื่นๆ
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
