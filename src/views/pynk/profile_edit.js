import React, { useState, useEffect } from "react";
import colors from "./colors";
import { useSelector, useDispatch } from "react-redux";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import { useHistory } from "react-router-dom";
import rightContent from "../../assets/img/pynk/shop/RightContent.png";

import "./css/profile.css";

const Profile_edit = () => {
  const history = useHistory();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const [statusProfile, setStatusProfile] = useState(1);

  const personalInformation = () => {
    return (
      <>
        <p className="text-modal-body">ข้อมูลส่วนตัว</p>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
      </>
    );
  };
  const addressInformation = () => {
    return (
      <>
        <p className="text-modal-body">ข้อมูลที่อยู่</p>
      </>
    );
  };

  const onBack = () => {
    history.push("/profile-pynk");
  };

  return (
    <div className="div-edit-profile">
      <div className="head-profile">
        <div className="image-head" />

        <div className="box-edit-profile row row-16">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box-edit">
              <div className="icon-box-edit" onClick={onBack}>
                <img src={icon_profile} className="icon-profile edit-icon" />
                <p className="bebe-fit text-center">BeBe Fit</p>
                <p className="username text-center">
                  @{user && user.first_name}
                </p>
              </div>
              {/*  <p className="lv">LV: มือใหม่หัดฟิตหุ่น</p> */}
              <div
                className={
                  statusProfile == 1
                    ? "box-right-text  box-right-active"
                    : "box-right-text"
                }
                onClick={() => setStatusProfile(1)}
              >
                บัญชีของฉัน{" "}
                <span>
                  {" "}
                  <img src={rightContent} className="icon-rightContent" />
                </span>
              </div>
              <div
                className={
                  statusProfile == 2
                    ? "box-right-text  box-right-active"
                    : "box-right-text"
                }
                onClick={() => setStatusProfile(2)}
              >
                ข้อมูลที่อยู่{" "}
                <span>
                  {" "}
                  <img src={rightContent} className="icon-rightContent" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="from-profile">
              {statusProfile == 1
                ? personalInformation()
                : addressInformation()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_edit;
