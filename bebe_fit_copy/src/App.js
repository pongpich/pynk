import React, { Component } from "react";
import "./App.css";
import Amplify from 'aws-amplify';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./redux/auth";
import { clearVideoList } from "./redux/exerciseVideos";
import { clearChallenges } from "./redux/challenges"
import { checkQuestionnaireLog, checkNewsLog } from "./redux/get"
import { insertQuestionnaireLog, insertNewsLog } from "./redux/update"

/* import bgintro from "./assets/img/bgintro.png"; */

import Login from "./views/login";
import Register from "./views/register";
import ForgotPassword from "./views/forgotPassword";
import VideoList from "./views/videoList";
import Platform from "./views/platform";
import Package from "./views/package";
import ImportMembers from "./views/importMembers";
import Challenges from "./views/challenges";
import Dashboard from "./views/dashboard";

import { awsConfig } from "./constants/defaultValues";

import ReactGa from 'react-ga';
import { locale } from "moment";
import { calculateWeekInProgram } from "./helpers/utils";

Amplify.configure(awsConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusQuestionnaire: "default",
      statusNews: "default",
      overlay: false,
      overlay2: false,
    }
  }

  async componentDidMount() {
    const { user } = this.props;
    this.props.checkQuestionnaireLog((user && user.user_id), 'satisfaction_assessment');
    this.props.checkNewsLog((user && user.user_id), 'backup_video_player ');
  }

  componentDidUpdate(prevProps, prevState) {
    const { statusCheckQuestionnaireLog, statusGetCheckQuestionnaireLog, user, statusInsertQuestionnaireLog, statusGetCheckNewsLog, statusCheckNewsLog, statusInsertNewsLog } = this.props;
    const { statusQuestionnaire, statusNews } = this.state;

    if ((prevState.statusQuestionnaire !== statusQuestionnaire) && (statusQuestionnaire === "done")) {
      this.props.insertQuestionnaireLog((user && user.user_id), 'satisfaction_assessment')  //อัพเดทว่าผู้ใช้ทำแบบสอบถามแล้ว
      this.closeToggle('popupQuestionnaire');//ปิด Popup
    }

    if ((prevState.statusNews !== statusNews) && (statusNews === "done")) {
      this.props.insertNewsLog((user && user.user_id), 'backup_video_player')  //อัพเดทว่าผู้ใช้เห็นข่าวสารนี้แล้ว
      document.getElementById("popupNews").classList.toggle("active");//ปิด Popup
    }

    if ((prevProps.statusGetCheckQuestionnaireLog !== statusGetCheckQuestionnaireLog) && (statusGetCheckQuestionnaireLog === 'success')) {
      let week;
      if (user) {
        week = calculateWeekInProgram(user.start_date);
      }
      if (!statusCheckQuestionnaireLog && ((week >= 6) && (week <= 8))) {
        this.toggle('popupQuestionnaire');
      }
    }

    if ((prevProps.statusGetCheckNewsLog !== statusGetCheckNewsLog) && (statusGetCheckNewsLog === 'success')) {
      if (!statusCheckNewsLog) {
        this.toggle('popupNews');
      }
    }

    if ((prevProps.statusInsertQuestionnaireLog !== statusInsertQuestionnaireLog) && (statusInsertQuestionnaireLog === 'success')) {
      this.props.checkQuestionnaireLog((user && user.user_id), 'satisfaction_assessment');
    }
    if ((prevProps.statusInsertNewsLog !== statusInsertNewsLog) && (statusInsertNewsLog === 'success')) {
      this.props.checkNewsLog((user && user.user_id), 'backup_video_player');
    }
  }

  onUserLogout(event) {
    this.props.logoutUser();
    this.props.clearVideoList();
    this.props.clearChallenges();
    this.props.history.push('/platform');
  }

  renderNavbar() {
    const { user, statusCheckQuestionnaireLog } = this.props;
    let week;
    if (user) {
      week = calculateWeekInProgram(user.start_date);
    }
    return (
      <nav className="navbar navbar-expand" style={{ backgroundColor: "#F45197", fontFamily: "'Prompt', sans-serif" }}>
        <a className="navbar-brand" href="/#" onClick={() => this.props.history.push('/')} style={{ color: "white", cursor: "pointer" }}>
          <img className="mr-3" src="/assets/img/logo_g3.png" alt="" />
        </a>
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            {
              (this.props.user !== null && this.props.user.authorization === "admin") &&
              <li className="nav-item">
                <a className="nav-link" href="#/videolist" onClick={() => this.props.history.push('/videolist')} style={{ color: "white", cursor: "pointer" }}>
                  Platform
                </a>
              </li>
            }
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* {
              (this.props.user === null || this.props.user.password === null) && //password === null คือกรณีผู้ใช้ทำการ ResetPassword
              <li className="nav-item">
                <a className="nav-link" href="#/register" onClick={() => this.props.history.push('/register')} style={{ color: "white", cursor: "pointer" }}>
                  สมัครสมาชิก
                </a>
              </li>
            } */}
            {
              (this.props.user !== null && this.props.user.authorization === "admin") &&
              <li className="nav-item">
                <a className="nav-link" href="#/import-members" onClick={() => this.props.history.push('/import-members')} style={{ color: "white", cursor: "pointer" }}>
                  จัดการสมาชิก
                </a>
              </li>
            }
            {
              ((this.props.user !== null) && (week >= 6 && week <= 8)) &&
              <li className="nav-item">
                {
                  ((!statusCheckQuestionnaireLog)) ? //ยังไม่ได้ทำแบบสอบถาม
                    <div className="bell-notification" current-count="1">
                      <i class="fas fa-bell" onClick={() => this.toggle("popupQuestionnaire")}  ></i>
                    </div>
                    : //ทำแบบสอบถามแล้ว
                    <div className="bell-default" >
                      <i class="fas fa-bell" onClick={() => this.toggle("popupQuestionnaire")}  ></i>
                    </div>
                }
              </li>
            }
            {
              (this.props.user !== null) &&
              <li className="nav-item">
                <a className="nav-link" href="/#" onClick={() => this.onUserLogout()} style={{ color: "white", cursor: "pointer" }}>
                  ออกจากระบบ
                </a>
              </li>
            }
          </ul>
        </div>
      </nav>
    )
  }

  renderTopbar() {
    return (
      <section className="bg-dark">
        <div className="row top-bar" style={{ fontFamily: "'Prompt', sans-serif" }}>
          <div className="col text-right">
            <span className="text-white">
              <a className="nav-link" href="https://content.bebefitroutine.com/" style={{ color: "white", cursor: "pointer", fontSize: "15px" }}><i class="fa fa-arrow-left" aria-hidden="true"></i> กลับเว็บไซส์ bebefitroutine</a>
            </span>
          </div>
        </div>
      </section>
    )
  }

  toggle(popupName) {
    if (popupName === "popupIntroVDO") {
      document.getElementById("popupIntroVDO").classList.toggle("active");
      var video = document.getElementById(`introVDO`);
      video.play();
    }
    if (popupName === "popupQuestionnaire") {
      document.getElementById("popupQuestionnaire").classList.toggle("active");
      this.setState({ overlay: true });
    }
    if (popupName === "popupNews") {
      if (document.getElementById("popupNews")) {
        document.getElementById("popupNews").classList.toggle("active");
        this.setState({ overlay2: true });
      }
    }
  }

  closeToggle(popupName) {
    if (popupName === "popupIntroVDO") {
      document.getElementById("popupIntroVDO").classList.toggle("active");
      var video = document.getElementById(`introVDO`);
      video.pause();
      video.currentTime = 0;
    }
    if (popupName === "popupQuestionnaire") {
      document.getElementById("popupQuestionnaire").classList.toggle("active");
      this.setState({ overlay: false });
    }
    if (popupName === "popupNews") {
      this.setState({ overlay2: false, statusNews: "done" });
    }
  }

  renderHeader() {
    const { overlay, overlay2 } = this.state;
    return (
      <div className="header">

        <div className="popupIntroVDO" id={`popupIntroVDO`}>
          <video src={'https://player.vimeo.com/external/414645540.hd.mp4?s=d2c95abe8443336f858f4bf9243b79fee350a8d4&profile_id=174'} id="introVDO" controls controlsList="nodownload" disablePictureInPicture ></video>
          <img alt="" src="./assets/img/thumb/close.png" className="close" onClick={() => this.closeToggle('popupIntroVDO')}></img>
        </div>

        {
          overlay &&
          <div
            className="overlayPopupQuestionnaire"
            id="overlayPopupQuestionnaire"
            onClick={() => this.closeToggle('popupQuestionnaire')}
          />
        }
        {
          overlay2 &&
          <div
            className="overlayPopupNews"
            id="overlayPopupNews"
            onClick={() => this.closeToggle('popupNews')}
          />
        }
        <div className="popupQuestionnaire" id={`popupQuestionnaire`}>
          <div style={{ display: "block" }}>
            <h3 ><b>*แบบประเมินความพึงพอใจและประเมินผลการทำตามโปรแกรม*</b></h3>
            <h3 ><b>(ใช้เวลาประมาณ 5 นาที)</b></h3>
            <h5 style={{ color: "black", marginTop: 30 }}>ร่วมตอบแบบสอบถามเพื่อประเมินความพึงพอใจในการเข้าร่วมคอร์ส</h5>
            <h5 style={{ color: "black" }}>ประเมินผลการทำตามโปรแกรมเพื่อรับคำแนะนำ</h5>
            <h5 style={{ color: "black" }}>และรับสิทธิ์สมัครต่ออายุคอร์สในราคาพิเศษ!</h5>
            <a style={{ fontSize: 24, textDecoration: "underline" }} href="https://form.typeform.com/to/fYVxetCs" target="_blank" onClick={() => this.setState({ statusQuestionnaire: "done" })}>ทำแบบสอบถาม</a>
          </div>
          <img alt="" src="./assets/img/thumb/close.png" className="close" onClick={() => this.closeToggle('popupQuestionnaire')}></img>
        </div>

        <div className="popupNews" id={`popupNews`}>
          <div style={{ display: "block" }}>
            <h3 ><b>ใหม่!</b></h3>
            <h3 ><b>เพิ่มฟังก์ชั่น “ตัวเล่นสำรอง” เพื่อรองรับการเล่นวิดีโอคลิปแบบไม่สะดุด</b></h3>
            <h5 style={{ color: "black", marginTop: 30 }}>*เมนูเลือกตัวเล่น จะอยู่ด้านบนของคลิป เมื่อคลิปจากตัวเล่นหลักเปิดไม่ได้ ให้เลือก “ตัวเล่นสำรอง” แทน</h5>
            <img src={`../assets/img/news1.jpg`} width="90%" />
          </div>
          <img alt="" src="./assets/img/thumb/close.png" className="close" onClick={() => this.closeToggle('popupNews')}></img>
        </div>


        <div className="watch_introduction">
          <div
            onClick={() => this.toggle('popupIntroVDO')}
            className=""
            style={{ float: "left" }}
            aria-hidden="true">
            <img className="mr-2" src={`../assets/img/play_button.png`} width="54px" height="54px" />
            WATCH INTRODUCTION
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#F0EEF3" }}>
        {/* {this.renderTopbar()} */}
        {this.renderNavbar()}
        {this.props.user && this.renderHeader()}

        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path='/login' component={Login} />
          {/* <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} /> */}
          <Route path='/import-Members' component={ImportMembers} />
          <Route path='/Challenges' component={Challenges} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/VideoList' component={VideoList} />
          {/* <Route path='/platform' component={Platform} />
          <Route path='/package' component={Package} /> */}
          <Route path='*'>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, exerciseVideos, get, update }) => {
  const { user } = authUser;
  const { statusGetCheckQuestionnaireLog, statusCheckQuestionnaireLog, statusCheckNewsLog, statusGetCheckNewsLog } = get;
  const { statusInsertQuestionnaireLog, statusInsertNewsLog } = update;
  const { exerciseVideo, status, video, videos } = exerciseVideos;
  return { user, exerciseVideo, status, video, videos, statusGetCheckQuestionnaireLog, statusCheckQuestionnaireLog, statusInsertQuestionnaireLog, statusCheckNewsLog, statusGetCheckNewsLog, statusInsertNewsLog };
};

const mapActionsToProps = {
  logoutUser,
  clearVideoList,
  clearChallenges,
  checkQuestionnaireLog,
  insertQuestionnaireLog,
  checkNewsLog,
  insertNewsLog,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
