import React from "react";
import { Link } from "react-router-dom"; // นำเข้า Link หากใช้ React Router
import logo from "./logo.png"; // นำเข้า logo หากมีการใช้งานรูปภาพ

export default function header() {
  return (
    <div className="navbar-pynk">
      <nav className="navbar navbar-expand-sm bg-light information-nav fixed-top">
        <div className="information-box">
          <div className="flex-container">
            <Link to="/">
              <img src={logo} alt="vector" />
            </Link>
            {/*       <div className="custom-input ">
              <img
                src={search_line}
                className="search-img-icon display-none"
                alt="vector"
              />
              <input
                type="text"
                className="form-control form-search  display-none"
                placeholder="ค้นหาสินค้า"
              />
            </div>
            <img
              src={search_line}
              className="search_line user-line"
              onClick={() => this.clikSearchStatus(1)}
              alt="vector"
            /> */}
          </div>
          <div>
            <div className="flex-container">
              <img
                src={user_line}
                onClick={() => this.showMinus2()}
                className="truck-line-icon user-line"
                alt="vector"
              />
              {this.props.user ? (
                <div className="nav-pynk">
                  <div class="dropdown">
                    <div
                      class="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={ellipse24}
                        className="nav-ellipse24"
                        alt="vector"
                      />
                      {this.props.user.email}
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="profile-pynk">
                          <img
                            src={icon_exit}
                            className="icon-edit cursor-pointer"
                            alt="icon_exit"
                          />
                          profile
                        </Link>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => this.onUserLogout()}
                        >
                          <img
                            src={icon_exit}
                            className="icon-edit cursor-pointer"
                            alt="icon_exit"
                          />
                          ออกจากระบบ
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="pointer" onClick={() => this.props.logout()}>
                  ออกจากระบบ
                </div> */}
                </div>
              ) : this.props.googleProfile &&
                this.props.googleProfile.profile ? (
                <div className="nav-pynk">
                  <div class="dropdown">
                    <div
                      class="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={ellipse24}
                        className="nav-ellipse24"
                        alt="vector"
                      />
                      {this.props.googleProfile.profile.email}
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="profile-pynk">
                          <img
                            src={icon_exit}
                            alt="icon_exit"
                            className="icon-edit cursor-pointer"
                            style={{ marginLeft: "2px" }}
                          />
                          profile
                        </Link>
                      </li>
                      <li>
                        <div class="google_style">
                          <GoogleLoginComponent />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  className="nav-link nav-linkHead2 pointer bold  display-none"
                  onClick={() => this.props.history.push("/login")}
                >
                  เข้าสู่ระบบ/ลงทะเบียน
                </button>
              )}

              <h2
                style={{
                  color: "#BCCCD6",
                  /*  marginRight: 16, */
                  /*  marginLeft: 16, */
                  fontWeight: 10,
                  height: 30,
                }}
              >
                |
              </h2>
              <div
                className="d-flex justify-content-center align-items-center cursor-pointer"
                onClick={() => this.props.history.push("/order_tracking")}
              >
                <img
                  src={truck_line}
                  className="truck-line-icon"
                  alt="vector"
                />
                <p className="order-status display-none ms-1 mb-0">
                  สถานะคำสั่งซื้อ
                </p>
              </div>

              <h2
                style={{
                  color: "#BCCCD6",
                  fontWeight: 10,
                  height: 30,
                }}
              >
                |
              </h2>
              <img
                onClick={() => this.showMinus2()}
                src={shopping_bag_line}
                className="truck-line-icon pointer"
                alt="vector"
              />
            </div>
          </div>
        </div>
        {searchStatus === 0 ? (
          <div className="information-box-row2">
            <div className="navbar-flex-center user-line">
              {group_image ? (
                <img
                  src={close_line}
                  alt="vector"
                  className="group-icon "
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  onClick={() => this.setState({ group_image: false })}
                  aria-label="Toggle navigation"
                />
              ) : (
                <img
                  src={group}
                  alt="vector"
                  className="group-icon"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  onClick={() => this.setState({ group_image: true })}
                  aria-label="Toggle navigation"
                />
              )}
            </div>

            <div
              className="collapse navbar-collapse navbarNav-ul"
              id="navbarNav"
            >
              <div className="navbar-nav">
                {user && user.authorization === "admin" && (
                  <a
                    className="nav-link link-pynk"
                    onClick={() =>
                      this.props.history.push("/products_management")
                    }
                  >
                    จัดการสินค้า
                  </a>
                )}
                {user && user.authorization === "admin" && (
                  <a
                    className="nav-link link-pynk"
                    onClick={() =>
                      this.props.history.push("/contents_management")
                    }
                  >
                    จัดการบทความ
                  </a>
                )}
                <a
                  className="nav-link  link-pynk active2"
                  href="https://platform.bebefitroutine.com"
                  target="_blank"
                >
                  Online Training
                </a>
                <a
                  className="nav-link link-pynk"
                  href="https://fit.bebefitroutine.com"
                  target="_blank"
                >
                  Stay Fit
                </a>

                {/*   <a
                  className="nav-link link-pynk"
                  href="/#"
                  onClick={() => this.props.history.push("/")}
                >
                  Exclusive Coaching
                </a> */}
                {/*    <a
                  className="nav-link link-pynk"
                  onClick={() => this.props.history.push("/shop")}
                >
                  ร้านค้า
                </a> */}
                <a
                  className="nav-link link-pynk"
                  onClick={() => this.handleClickLogin("BetterShape")}
                >
                  Better Shape
                </a>

                <a
                  className="nav-link link-pynk"
                  // href="/#"
                  onClick={() => this.props.history.push("/content")}
                >
                  บทความ
                </a>
                {/* <a class="nav-link" href="#">
                  Disabled
                </a> */}
              </div>
            </div>
          </div>
        ) : (
          <></>
          /*         <div className="information-box-row3">
            <div className="custom-input2">
              <img
                src={search_line}
                className="search-img-icon"
                alt="vector"
              />
              <input
                type="text"
                className="form-control form-search2"
                placeholder="ค้นหาสินค้า"
              />
            </div>
           
            <img
              src={close_line}
              className="close_line-icon"
              onClick={() => this.clikSearchStatus(0)}
              alt="vector"
            />
          </div>  */
        )}
      </nav>
    </div>
  );
}
