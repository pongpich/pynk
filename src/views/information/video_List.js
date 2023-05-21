import React, { Component } from "react";
import "./video_List.css";
import user_circle from "../../assets/img/user_circle.svg";
import play_circle_filled from "../images/play_circle_filled.png";
import rectangle13 from "../images/rectangle13.png";
import edit from "../images/edit.png";
import ellipse2 from "../images/ellipse2.png";
import line1 from "../images/line1.png";
import ellipse5 from "../images/ellipse5.png";
import eCheck from "../images/check.svg";
import frame41 from "../../assets/img/frame41.png";
import frame40 from "../../assets/img/frame40.png";
import frame42 from "../../assets/img/frame42.png";
import frame43 from "../../assets/img/frame43.png";
import frame44 from "../../assets/img/frame44.png";
import frame45 from "../../assets/img/frame45.png";
import frame46 from "../../assets/img/frame46.png";
import frame47 from "../../assets/img/frame47.png";
import e2 from "../images/2.png";
import icon_web from "../../assets/img/icon-web.png";
import facebook from "../../assets/img/icon-facebook.png";
import twitter from "../../assets/img/icon-Twitter.png";
import message from "../../assets/img/icon-message-fa.png";
import line from "../../assets/img/icon-line.png";
import tiktok from "../../assets/img/icon-tiktok.png";
import whatsApp from "../../assets/img/icon-WhatsApp.png";
import instagram from "../../assets/img/icon-instagram.png";
import e3 from "../images/3.png";
import e4 from "../images/4.png";
import e5 from "../images/5.png";
import group47 from "../images/group47.png";
import alarm from "../images/alarm.png";
import ellipse61 from "../images/ellipse61.png";
import union from "../images/union.png";
import vector4 from "../images/vector4.png";
import { loadingLogo } from "aws-amplify";
import { connect } from "react-redux";
import { videoListForUser, createWeeklyStayfitProgram, updatePlaytime, randomVideo, selectChangeVideo, updatePlaylist, updateBodyInfo } from "../../redux/exerciseVideos"
import { getExpireDate, checkUpdateMaxFriends } from "../../redux/auth"
import { getRegister_log } from "../../redux/get"
import { getDailyWeighChallenge, postDailyWeighChallenge } from "../../redux/challenges"
import { convertFormatTime, convertSecondsToMinutes } from "../../helpers/utils"
import { completeVideoPlayPercentage, minimumVideoPlayPercentage, updateFrequency } from "../../constants/defaultValues";
import backgroundImag from '../../assets/img/bgintro_lg.d22ae02a.png';
import Food_supplement from '../information/food_supplement';
/* import challenge from '../information/challenge'; */
/* import Challenge from "../information/challenge"; */
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';
import { FacebookShareButton, TwitterShareButton, FacebookMessengerShareButton, LineShareButton, WhatsappShareButton } from "react-share";

class videoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicApp: "1",
      clickManu: "manu1",
      borderBottom1: "video-link rectangle13 color1",
      borderBottom2: "video-link",
      borderBottom3: "video-link",
      videoLi: "video-li ",
      focusDay: 0,
      urlVideo: null,
      autoPlayCheck: false,
      selectedVDO: null,
      editVDO_click: "default",
      tempPlaylist: [],
      spinnerRandomVideo: "default",
      indexPlaylist: 0,
      selectChangeVideoList: [],
      pleaseVerifyNumberPhone: true,
      statusOtherAttributes: "default",
      otherAttributesPage: "basicInfo",
      sex: "female",
      age: "",
      weight: "",
      height: "",
      chest: "",
      waist: "",
      hip: "",
      staticSex: "hr",
      staticAge: "hr",
      staticWeight: "hr",
      staticHeight: "hr",
      staticChest: "hr",
      staticWaist: "hr",
      staticHip: "hr",
      other_attributes: "",
      weightInDailyWeighChallenge: "",
    }
    this.addEventToVideo = this.addEventToVideo.bind(this);
    this.onVideoTimeUpdate = this.onVideoTimeUpdate.bind(this);
  }

  componentDidMount() {
    const { user, exerciseVideo, statusVideoList, dailyWeighChallenge } = this.props;

    if (user === null) {
      this.props.history.push('/welcome_new_nember');
    }
    if (user && !user.other_attributes) {
      this.props.history.push('/basic_information');
    }

    if (user && user.other_attributes) {
      this.props.videoListForUser(
        this.props.user.user_id,
        this.props.user.other_attributes.weight,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.props.user.offset
      );
      if (this.props.statusVideoList !== "no_video") {
        this.addEventToVideo();
      }

      if (user.other_attributes.sex && user.other_attributes.age) {
        this.setState({
          sex: user.other_attributes.sex,
          age: user.other_attributes.age,
        })
      } else {
        this.setState({
          sex: JSON.parse(user.other_attributes).sex,
          age: JSON.parse(user.other_attributes).age,
        })
      }

      this.props.getExpireDate(user.email);

      this.props.getRegister_log(user.user_id);

      this.props.getDailyWeighChallenge(user.user_id);

      this.props.checkUpdateMaxFriends(user.user_id);
    }

    /*    if (user && statusVideoList === "no_video") {
         this.props.createWeeklyStayfitProgram(
           this.props.user.user_id,
           this.props.user.start_date,
           this.props.user.expire_date,
         );
       } */
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user, statusVideoList, exerciseVideo, dailyWeighChallenge, statusGetDailyWeighChallenge, statusPostDailyWeighChallenge } = this.props;
    if (user && prevProps.user && ((prevProps.statusVideoList !== statusVideoList) && statusVideoList === "no_video")) {
      /* this.props.createWeeklyStayfitProgram(
        this.props.user.user_id,
        this.props.user.start_date,
        this.props.user.expire_date,
      ); */
    }

    if (user && prevProps.user && (prevProps.user.expire_date !== user.expire_date)) {
      this.props.videoListForUser(
        this.props.user.user_id,
        this.props.user.other_attributes.weight,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.props.user.offset
      );
    }

    if (user && prevProps.user && ((prevProps.statusVideoList !== statusVideoList) && statusVideoList !== "no_video")) {
      this.props.videoListForUser(
        this.props.user.user_id,
        this.props.user.other_attributes.weight,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.props.user.offset
      );
      if (this.props.user.other_attributes && this.props.statusVideoList !== "no_video") {
        this.addEventToVideo();
      }
      this.props.updateBodyInfo(
        this.props.user.user_id,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.state.other_attributes
      );
    }

    if (prevProps.status === "processing" && this.props.status === "success") {
      this.closeEditVDO();
    }
    if (prevState.editVDO_click === "show" && this.state.editVDO_click !== "show") {
      this.addEventToVideo();
    }
    if (prevState.editVDO_click !== "show" && this.state.editVDO_click === "show") {
      this.addEventToVideo();
    }

    if (this.props.video && prevProps.video.video_id !== this.props.video.video_id) {
      const { indexPlaylist } = this.state;
      // playlist เป็น Array ที่เก็บ Object ของ video หลายๆอันไว้ข้างใน
      let playlist = [...this.state.tempPlaylist];
      // ...playlist[indexPlaylist] เพื่อเอาAttribute (order, play_time) ซึ่งไม่มีใน database
      // ...this.props.video เพื่อเอาAttribute ต่างๆของ video ใหม่ที่สุ่มได้นั้น นำมา assigned ทับ ...playlist[indexPlaylist]
      // play_time: 0 เพื่อให้Attribute play_time เท่ากับ 0 เสมอเมื่อสุ่ม video มา
      playlist[indexPlaylist] = { ...playlist[indexPlaylist], ...this.props.video, play_time: 0 };
      this.setState({
        tempPlaylist: playlist
      })
    }
    if (prevProps.exerciseVideo !== exerciseVideo) { //เพื่อ update playtime ของ renderEditVDO 
      const { focusDay } = this.state;
      const todayExercise = this.exerciseDaySelection(focusDay);
      const tempPlaylist = [...todayExercise];
      this.setState({
        tempPlaylist: tempPlaylist
      })
    }
    if (prevProps.videos !== this.props.videos) {
      const videos = this.props.videos;
      this.setState({
        selectChangeVideoList: videos
      })
    }
    if (prevProps.status === "processing" && this.props.status === "success") {
      this.closeEditVDO();
    }
    if ((prevProps.statusGetDailyWeighChallenge !== statusGetDailyWeighChallenge) && (statusGetDailyWeighChallenge === "success")) {
      if (dailyWeighChallenge) {
        document.getElementById("modalDailyWeighChallengeClick") && document.getElementById("modalDailyWeighChallengeClick").click();
      }
    }
    if (prevProps.statusPostDailyWeighChallenge !== statusPostDailyWeighChallenge && statusPostDailyWeighChallenge === "success") {
      //เมื่อกรอกน้ำหนักภารกิจประจำวันเสร็จ สั่งให้ซ่อน Popup
      document.getElementById("modalDailyWeighChallengeClick") && document.getElementById("modalDailyWeighChallengeClick").click();
    }
  }

  submitDailyWeighChallenge(weight) {
    const { user } = this.props;
    if (weight > 0 && weight < 300) {
      this.props.postDailyWeighChallenge(user.user_id, weight)
    }
  }

  onDayChange = (day) => {
    this.setState({
      focusDay: day
    });
  }

  closeEditVDO() {
    this.setState({
      editVDO_click: "default"
    })
  }

  editVDO() {
    const { focusDay } = this.state;
    const todayExercise = this.exerciseDaySelection(focusDay);
    const tempPlaylist = [...todayExercise];
    this.setState({
      editVDO_click: "show",
      tempPlaylist: tempPlaylist
    })
  }

  randomVideo(video_id, category, type, index) {
    this.setState({
      indexPlaylist: index,
      spinnerRandomVideo: "loading"
    });
    this.props.randomVideo(video_id, category, type);
    var delayInMilliseconds = 500; //0.5 second
    setTimeout(() => { // แสดง Spinner 0.5 วินาที 
      this.setState({
        spinnerRandomVideo: "default"
      })
    }, delayInMilliseconds);
  }

  togglePopupSelectEditVideo(video_id, category, type, index) {
    document.getElementById("popupSelectEditVideo").classList.toggle("active");
    this.setState({
      indexPlaylist: index
    });
    this.props.selectChangeVideo(video_id, category, type);
    this.props.resetStatus();
    document.body.style.overflow = "hidden";
  }

  closeTogglePopupSelectEditVideo() {
    document.getElementById("popupSelectEditVideo").classList.toggle("active");
    this.setState({
      selectChangeVideoList: [],
      indexPlaylist: 0
    })
    document.body.style.overflow = "auto";
  }

  selectEditVideo(video) {
    const { indexPlaylist } = this.state;
    let playlist = [...this.state.tempPlaylist];
    playlist[indexPlaylist] = { ...playlist[indexPlaylist], ...video, play_time: 0 };
    this.setState({
      tempPlaylist: playlist,
      selectChangeVideoList: []
    })
    document.getElementById("popupSelectEditVideo").classList.toggle("active");
    document.body.style.overflow = "auto";
  }

  onVideoListUpdate() {
    const { focusDay, tempPlaylist } = this.state;
    const user_id = this.props.user.user_id;
    const start_date = this.props.user.start_date;
    const day_number = focusDay;
    const playlist = [...tempPlaylist];
    const tempExerciseVideo = [...this.props.exerciseVideo];
    tempExerciseVideo[focusDay] = tempPlaylist;
    this.props.updatePlaylist(
      user_id, start_date, day_number, playlist, tempExerciseVideo
    );
  }

  clickBottom = (e) => {

    let name = e.target.name;
    console.log("name", name);
    if (name === 'borderBottom1') {
      console.log("1");
      var clickManu = "manu1"
      var bottom1 = "video-link rectangle13 color1"
      var bottom2 = "video-link"
      var bottom3 = "video-link"

    } else if (name === 'borderBottom2') {
      console.log("2");
      var clickManu = "manu2"
      var bottom1 = "video-link "
      var bottom2 = "video-link rectangle13 color1"
      var bottom3 = "video-link"
    } else {
      var clickManu = "manu3"
      var bottom1 = "video-link"
      var bottom2 = "video-link"
      var bottom3 = "video-link  rectangle13 color1"
    }
    this.setState({
      clickManu: clickManu,
      borderBottom1: bottom1,
      borderBottom2: bottom2,
      borderBottom3: bottom3,
    });

  }


  closeToggle() {
    var video = document.getElementById(`videoPlayer`);
    video.pause();
    video.currentTime = 0;
  }
  closeToggleIntro() {
    var video = document.getElementById(`videoPlayerIntro`);
    video.pause();
    video.currentTime = 0;
  }

  toggle(selectedVDO) {
    /*   if (selectedVDO) {
        this.setState({
          selectedVDO: selectedVDO
        })
      } */
    if (selectedVDO) {
      this.setState({
        selectedVDO
      }, () => {
        var video = document.getElementById(`videoPlayer`);
        video.play();
      })
    }

  }

  toggleList(index) {
    const { focusDay } = this.state;
    const todayExercise = this.exerciseDaySelection(focusDay);
    const selectedVDO = todayExercise.find(element => (element.order === index));
    if (selectedVDO) {
      this.setState({
        selectedVDO
      }, () => {
        var video = document.getElementById(`videoPlayer`);
        video.play();
      })
    }
  }


  videoHead() {

    console.log("adasd");



  }


  addEventToVideo() {
    var video = document.getElementById(`videoPlayer`);
    video.onended = () => this.onVideoEnd();
    video.ontimeupdate = () => this.onVideoTimeUpdate("video");
  }

  onVideoEnd() {
    console.log("onVideoEnd !!!")
    const { focusDay, selectedVDO } = this.state;
    var todayExercise;
    todayExercise = this.exerciseDaySelection(focusDay);

    const nextVDO = todayExercise.find(
      element => (element.order > selectedVDO.order)
    );

    if (nextVDO) {
      if (this.state.autoPlayCheck) {
        this.setState({
          selectedVDO: nextVDO
        }, () => {
          var video = document.getElementById(`videoPlayer`);
          video.play();
        })
      }
    }

    var numbExeciseComplete = 0;
    for (let exIndex = 0; exIndex < todayExercise.length; exIndex++) {
      const exercise = todayExercise[exIndex];
      if (parseFloat(exercise.play_time) / parseFloat(exercise.duration) >= 0.9) {
        numbExeciseComplete = numbExeciseComplete + 1;
      }
    }

    if (!nextVDO && (numbExeciseComplete >= todayExercise.length - 1)) { //!nextVDO = ไม่มีวีดีถัดไป(คือเป็นวีดีโอสุดท้ายของวันนั้น) และ numbExeciseComplete เช็คจำนวนคลิปที่ดูสำเร็จป้องกันดุคลิปสุดท้ายอันเดียว
      document.getElementById("modalAchievement2Btn") && document.getElementById("modalAchievement2Btn").click();
    }
  }

  onVideoTimeUpdate(compName = "video") {
    const { selectedVDO, focusDay } = this.state;
    var video = document.getElementById(`videoPlayer`);
    if (!video || !selectedVDO) { return }

    const diffTime = Math.abs(video.currentTime - this.prevPlayTime);
    if (diffTime < updateFrequency) { return }
    this.prevPlayTime = video.currentTime

    if (
      !video.duration ||
      video.currentTime / video.duration < minimumVideoPlayPercentage ||
      selectedVDO.play_time / selectedVDO.duration >= completeVideoPlayPercentage) {
      return
    }

    //if (video.currentTime >= (video.duration * 0.85) && (selectedVDO.duration !== selectedVDO.play_time)) {
    const user_id = this.props.user.user_id;
    const start_date = this.props.user.start_date;
    const expire_date = this.props.user.expire_date;
    const day_number = focusDay;
    const video_number = selectedVDO.order;
    const play_time = video.currentTime;
    const duration = video.duration;
    //const tempExerciseVideoLastWeek = [...this.props.exerciseVideoLastWeek];
    const tempExerciseVideo = [...this.props.exerciseVideo];

    tempExerciseVideo[day_number][video_number] = { ...tempExerciseVideo[day_number][video_number], play_time: play_time, duration: duration };

    const newVideo = { ...selectedVDO, play_time, duration };
    this.setState({
      selectedVDO: newVideo
    });

    this.props.updatePlaytime(user_id, start_date, expire_date, day_number, video_number, play_time, duration, tempExerciseVideo);
    //}
  }

  exerciseDaySelection(focusDay) {
    if (this.props.exerciseVideo) {
      return this.props.exerciseVideo[focusDay];
    }
  }

  autoPlayCheck() {
    if (document.getElementById("autoPlayCheck").checked === true) {
      this.setState({ autoPlayCheck: true })
    } else {
      this.setState({ autoPlayCheck: false })
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onUpdateBasicInfo() {
    const {
      sex,
      age,
      weight,
      height
    } = this.state;

    if (sex !== "" && age !== "" && weight !== "" && height !== "") {
      if (age % 1 === 0) {
        this.setState({
          otherAttributesPage: "bodyInfo",
          statusOtherAttributes: "default"
        })
      } else {
        this.setState({
          statusOtherAttributes: "ageNotUseDecimals"
        })
      }
    } else {
      this.setState({
        statusOtherAttributes: "fail"
      })
    }
  }

  onUpdateBodyInfo() {
    const {
      chest,
      waist,
      hip
    } = this.state;

    this.setState({ statusOtherAttributes: "default" });

    if (chest !== "" && waist !== "" && hip !== "") {
      this.setState({ otherAttributesPage: "renderBasicBodyInfo" });
    } else {
      this.setState({ statusOtherAttributes: "fail" });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onUpdateProfile(event) {
    const {
      sex,
      age,
      weight,
      height,
      chest,
      waist,
      hip
    } = this.state;

    this.setState({
      statusOtherAttributes: "default"
    })

    if (sex !== "" && age !== "" && weight !== "" && height !== "" && chest !== "" && waist !== "" && hip !== "") {
      const other_attributes = {
        sex,
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        chest: Number(chest),
        waist: Number(waist),
        hip: Number(hip)
      }

      this.setState({
        other_attributes: other_attributes
      })

      // ให้จัดตารางVDO และ updateBodyInfo (ที่ componentDidUpdate)
      this.props.createWeeklyStayfitProgram(
        this.props.user.user_id,
        this.props.user.start_date,
        this.props.user.expire_date,
      );

    } else {
      this.setState({
        statusOtherAttributes: "fail"
      })
    }
  };

  renderHr(event) {
    const idHr = event.target.id;

    if (idHr === "sex") {
      this.setState({
        staticSex: "hrPink"
      });

    } else {
      this.setState({
        staticSex: "hr"
      });
    }
    if (idHr === "age") {
      this.setState({
        staticAge: "hrPink"
      });
    } else {
      this.setState({
        staticAge: "hr"
      });
    }
    if (idHr === "weight") {
      this.setState({
        staticWeight: "hrPink"
      });
    } else {
      this.setState({
        staticWeight: "hr"
      });
    }
    if (idHr === "height") {
      this.setState({
        staticHeight: "hrPink"
      });
    } else {
      this.setState({
        staticHeight: "hr"
      });
    }
    if (idHr === "chest") {
      this.setState({
        staticChest: "hrPink"
      });
    } else {
      this.setState({
        staticChest: "hr"
      });
    }
    if (idHr === "waist") {
      this.setState({
        staticWaist: "hrPink"
      });
    } else {
      this.setState({
        staticWaist: "hr"
      });
    }
    if (idHr === "hip") {
      this.setState({
        staticHip: "hrPink"
      });
    } else {
      this.setState({
        staticHip: "hr"
      });
    }
  }

  boxFrom() {
    const { messages } = this.props.intl;
    return (
      <>
        {/*          <nav className="navbar navbar-expand-lg bg-light information-box">
          <div className="container-fluid nav-left2">
            <h4 className="color1">BEBEStayFit</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse padding-left3" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link pointer" >บทความ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pointer" >อาหารเสริมและอุปกรณ์</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pointer">Platform</a>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link ">ตะกร้าสินค้า</a>
                  </li>
                  <li className="nav-item">
                    <h6 className="nav-link"><img src={user_circle} alt="vector" className="padding-right" />บพิตร์ เตชะวัฒนานันท์</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>  */}

        {/* {
          <div className="box-videoHeadPlatform" style={{
            backgroundImage: `url(${backgroundImag})`,
            width: '100%'
          }}>

            {(this.state.pleaseVerifyNumberPhone === true) ?
              <>
                <h3 className="center-videoText bold color1">
                  Bebe Stayfit Program
                </h3>
                <div className="play_circle">
                  <img src={play_circle_filled} onClick={() => document.getElementById(`videoPlayerIntro`).play()} className="pointer" data-bs-toggle="modal" data-bs-target="#exampleModalViderHead" /> <span className="play_circle_span">WATCH INTRODUCTION</span>

                </div>
              </>
              :
              <div className="pleaseVerify">
                <h3 className="bold">
                  กรุณายืนยันหมายเลขโทรศัพท์ของคุณ
                </h3>
                <p>การยืนยันจะทำให้ช่วยบัญชีของคุณปลอดภัยยิ่งขึ้น</p>
                <div className="col-12 col-sm-12  col-md-12 col-lg-12 center">
                  <button type="button" className="btn bottom-pink-Whit" >ไว้ทีหลัง</button>&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn bottom-pink-video">ยืนยันหมายเลขโทรศัพท์</button>
                </div>
              </div>

            }

          </div>
        } */}
        <div className="box-videoCenter">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="video-wh">
              <ul className="video-maun">
                <li className="video-li  video-liPadding-left marginLeftRoutine">
                  <a id="workout_label" className={this.state.borderBottom1} name="borderBottom1" onClick={e => this.clickBottom(e)}>{messages['videoList.workout']}</a>
                </li>
                <li className="video-li  video-liPadding-left   video-liPadding-left2">
                  <a id="challenge_label" className={this.state.borderBottom2} name="borderBottom2" onClick={e =>  this.props.history.push('/challenge')}>{messages['videoList.challenge']}</a>
                </li>
                <li className="video-li  video-liPadding-left   video-liPadding-left2">
                  <a id="howto_label" className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.props.history.push('/exercise_method')}>{messages['videoList.exerciseaccording']}</a>
                </li>
              </ul>
            </div>
          </div>

          {
            /* (this.state.clickManu === "manu1") ? */
              (this.state.editVDO_click === "show") ?
                this.renderEditVDO()
                :
                (this.props.statusVideoList === "no_video") ?
                  this.renderOtherAttribute()
                  :
                  this.routineWorkout()
              /* : */
             /*  this.state.clickManu === "manu2" ?
                <Challenge />
                : */
               /*  this.exerciseMethod() */
            /*  this.videoClipAll() */
          }
        </div>


      </>
    );
  }

  routineWorkout() {
    const { focusDay, selectedVDO } = this.state;
    const todayExercise = this.exerciseDaySelection(focusDay);
    const videoUrl = selectedVDO ? `${selectedVDO.url}` : "";

    let allMinute = [];
    let allSecond = [];
    if (this.props.exerciseVideo) {
      todayExercise.map((item) => (allMinute.push(Number(item.duration && (item.duration.toFixed(2)).split(".")[0]))));
      todayExercise.map((item) => (allSecond.push(Number(item.duration && (item.duration.toFixed(2)).split(".")[1]))));
    }
    let sumMinute = allMinute.reduce((acc, curr) => acc += curr, 0).toFixed(0);
    let sumSecond = allSecond.reduce((acc, curr) => acc += curr, 0).toFixed(0);
    let minute2 = Math.floor(sumSecond / 60);
    let totalMinute = Number(sumMinute) + Number(minute2);
    let totalSecond = sumSecond % 60;
    let timesExercise;
    if (totalMinute > 100) { // เช็คเพราะมีการปรับ database ให้เก็บVDOเป็นหน่วยวินาที
      totalMinute = Math.floor(sumMinute / 60);
      totalSecond = (sumMinute % 60);
    }
    if (totalSecond < 10) {
      timesExercise = `${totalMinute}:0${totalSecond}`;
    } else {
      timesExercise = `${totalMinute}:${totalSecond}`;
    }
    return (
      <>
        <div>
          <div className="video-ul2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
              <nav className="navbar marginLeftRoutine">
                <div className="container-fluid">
                  <ul>
                    <li className="video-li2 ">
                      <a
                        id="day1_btn"
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 0 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(0)}
                      >
                        DAY 1
                      </a>
                    </li>
                    <li className="video-li2 video-liPadding-left2">
                      <a
                        id="day2_btn"
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 1 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(1)}
                      >
                        DAY 2
                      </a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a
                        id="day3_btn"
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 2 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(2)}
                      >
                        DAY 3
                      </a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a
                        id="day4_btn"
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 3 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(3)}
                      >
                        DAY 4
                      </a>
                    </li>
                  </ul>
                  {/* <ul>
                    <li className="video-li2  d-flex">
                      <a className="decoration color1">ดูวีดีโอออกกำลังกายอาทิย์ที่ผ่านมา</a>
                    </li>
                  </ul> */}
                  <button style={{ display: 'none' }} id="modalDailyWeighChallengeClick" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalWeight">
                    Launch demo modal
                  </button>
                  {
                    <button style={{ display: 'none' }} id="modalSubscription-shareClick" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalSubscription-share">
                      modalSubscription
                  </button>
                  }
                  {
                    <button style={{ display: 'none' }} id="modalAchievement2Btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement2">
                      modalAchievement2
                    </button>
                  }
                </div>
              </nav>
              <div className="rectangle14"></div>
            </div>
          </div>
          <div className="containerli">
            <div className="row">
              <div className="col">
                <IntlMessages id="videoList.total" /> {timesExercise} <IntlMessages id="videoList.mins" />
              </div>
              {/*  <div className="col-md-auto" onClick={() => this.editVDO()} aria-hidden="true" style={{ cursor: "pointer" }}>
                <img src={edit} className="icon-edit" />
                แก้ไขคลิปออกกำลังกาย
              </div> */}
              <div className="col-4">
                <div className="form-check form-switch form-check-reverse">
                  <input className="form-check-input" type="checkbox" id="autoPlayCheck" onClick={() => this.autoPlayCheck()} />
                  <label className="form-check-label" ><IntlMessages id="videoList.autoPlay" /></label>
                </div>
              </div>
            </div>
          </div>
          <div className="containerli2">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2 ">
                <div className="iconCenter ">
                  <div className="start-e">
                    <p className="bold"><IntlMessages id="videoList.letsStart" /></p>
                  </div>
                  {
                    (this.props.exerciseVideo) &&
                    (todayExercise.map((item, index) => {
                      return (
                        <div>
                          {
                            (item.play_time && item.duration && item.play_time / item.duration >= completeVideoPlayPercentage) ?
                              <span
                                className="ellipse-2"
                                style={{
                                  top: "50%",
                                  height: "40px",
                                  width: "40px",
                                  zIndex: 1,
                                  backgroundColor: "#F45197",
                                  color: "white",
                                  borderStyle: "solid",
                                  borderWidth: "0.1px",
                                  borderColor: "#F45197",
                                  borderRadius: "50%",
                                  display: "inline-block"
                                }}
                              >
                                {/* <h3 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>{index + 1}</h3> */}
                                <img src={eCheck} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                              </span>
                              :
                              <span
                                className="ellipse-2"
                                style={{
                                  top: "50%",
                                  height: "40px",
                                  width: "40px",
                                  zIndex: 1,
                                  backgroundColor: "white",
                                  color: "#F45197",
                                  borderStyle: "solid",
                                  borderWidth: "0.1px",
                                  borderColor: "#F45197",
                                  borderRadius: "50%",
                                  display: "inline-block"
                                }}
                              >
                                <h3 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>{index + 1}</h3>
                              </span>
                          }

                          {
                            (index === todayExercise.length - 1) ?
                              <div
                                className="line1"
                              ></div>
                              :
                              <div
                                className="line2"
                              ></div>
                          }
                        </div>
                      )
                    }))
                  }
                  <div className="end-e">
                    <p className="bold color1"><IntlMessages id="videoList.succeed" /></p>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ">
                {
                  (this.props.exerciseVideo) &&
                  (todayExercise.map((item, index) => {
                    const minuteLabel = (item.duration < 20) ? convertFormatTime(item.duration) : convertSecondsToMinutes(item.duration);
                    return (
                      <div id={`video${index + 1}_day${focusDay + 1}_root`} className=" box-playVdieo">
                        <div className="row">
                          <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly1" style={{ background: `url('./assets/img/thumb/${item.category.toLowerCase().split(" ").join("")}_g3.jpg') no-repeat`, backgroundSize: "100%" }}>
                              {
                                this.state.autoPlayCheck ?
                                  <div className=" background-icon-play">
                                    <div className="icon-play-video">
                                      <img
                                        id={`video${index + 1}_day${focusDay + 1}-video`}
                                        src={play_circle_filled}
                                        name={item.url}
                                        className={`${item.name.split(" ").join("")}_day${focusDay + 1}`}
                                        onClick={() => this.toggleList(index)}
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                  :
                                  <div className=" background-icon-play">
                                    <div className="icon-play-video">
                                      <img
                                        id={`video${index + 1}_day${focusDay + 1}-video`}
                                        src={play_circle_filled}
                                        name={item.url}
                                        className={`${item.name.split(" ").join("")}_day${focusDay + 1}`}
                                        onClick={() => this.toggle(item)}
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                              }
                            </div>
                          </div>
                          <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly2">
                              <div className="text-video">
                                <p className="alarm"> <img src={alarm} className="col-2" /> {minuteLabel}  <IntlMessages id="videoList.mins" /></p>
                              </div>
                              <div className="rectangle15"></div>
                              <p className="warmup">{item.category} {">"}</p>
                              <p className="warmup2 bold">{item.name}</p>
                              { //เช็ค ถ้าหากเป็น category ที่มี type ย่อย จะไม่สามารถนำชื่อ category มาตั้งเป็นชื่อรูปได้ ต้องแยกเป็นเคสๆไป
                                (item.category !== "Main Circuit Combo" && item.category !== "Main Circuit") &&
                                <img className="body_part" src={`./assets/img/body_part/${item.category.toLowerCase().split(" ").join("")}.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "chestfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/chest.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "backfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/back.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "backfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/core.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "legfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/leg.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "armfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/arm.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "armfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/shoulder.png`}></img>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }))
                }
              </div>
            </div>
          </div>

          {/* <div className="vidio-all">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <p className="clip-all between bold">คลิปแบบซื้อ <span className="family-normal pointer" data-bs-toggle="modal" data-bs-target="#exampleModal2"> ดูทั้งหมด {">"}</span> </p>
              </div>
              <div className="">
                <div className="scrolloverflow">
                  <ul>
                    <li>
                      <div className="boxvideo-1" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold" > โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* modal  */}

        {/** *!   ส่วนของหัว   */}
        <div className="modal fade" id="exampleModalViderHead" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content2">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.closeToggleIntro()}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">

                <video className="video" id="videoPlayerIntro" controls controlslist="nodownload" disablepictureinpicture
                  src="https://player.vimeo.com/progressive_redirect/playback/725197026/rendition/720p/file.mp4?loc=external&signature=c18896ade99450a04bf11991805e52ef3f38d749e94c9f488a571567d7fefad0">
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content2">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.closeToggle()}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">
                <video className="video" id="videoPlayer" controls controlslist="nodownload" disablepictureinpicture src={videoUrl} ></video>
              </div>
            </div>
          </div>
        </div>
        {/* video ทั้งหมด */}
        <div className="modal fade" id="exampleModal2" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">
                {(this.state.clicApp === "1") ? this.clicApp() : this.nullClipAll()}
              </div>
            </div>
          </div>
        </div>

        {/* กรอกน้ำหนัก*/}
        {
          <div className="modal fade" id="modalWeight" aria-labelledby="modalWeight" >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div className="modal-bodyWeight">

                  <p className="kg-weightText"><IntlMessages id="videoList.currentweight" /></p>
                  <div className="col-10 col-sm-10 col-md-8 col-lg-8 center2">
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        className="form-control"
                        style={{ textAlign: "right" }}
                        id="weightInDailyWeighChallenge"
                        value={this.state.weightInDailyWeighChallenge}
                        onChange={(event) => this.handleChange(event)}
                      />
                      <span class="input-group-text kg-weight" id="basic-addon2">KG</span>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top">
                    {
                      (this.props.statusPostDailyWeighChallenge !== "loading") &&
                      <div className="bottom-Weight">
                        <button type="button" className="btn bottom-outlinePinkLeft " data-bs-dismiss="modal" aria-label="Close"><IntlMessages id="videoList.off" /></button>
                        <button type="button" className="btn bottom-outlinePinkRight bottomEditProfileLeft " onClick={() => this.submitDailyWeighChallenge(this.state.weightInDailyWeighChallenge)}><IntlMessages id="shipping_address.confirm" /></button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* <!-- Modal  modalSubscription --> */}
        <div class="modal fade" id="modalSubscription-share" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  //this.nieyeah()
                  //this.staycool()
                  //this.super()
                  //this.wow()
                  //this.thankYou()
                  this.goodJob()
                  //this.pop()
                  //this.bang()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement2 --> */}
        <div class="modal fade" id="modalAchievement2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.nieyeah()
                }
              </div>
            </div>
          </div>
        </div>




      </>
    )
  }
  /* เเชร์  */
  nieyeah() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement2.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame41} className="frame41" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">วันนี้คุณออกกำลังกายครบแล้ว</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/*    <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton>
                {/* <img src={tiktok} className="icon-share" /> */}
                <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton>
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  staycool() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement6.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame40} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">คุณมีเพื่อนในรายชื่อ 10 คนแล้ว!</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                {/*       <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton> */}
                {/* <img src={tiktok} className="icon-share" /> */}
                {/*    <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton> */}
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  super() {
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame42} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">คุณมีเพื่อนในรายชื่อ 10 คน</p>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />xxxxxxxxxxxxxxxx</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <img src={facebook} className="icon-share" />
                <img src={twitter} className="icon-share" />
                <img src={message} className="icon-share" />
                <img src={line} className="icon-share" />
                <img src={tiktok} className="icon-share" />
                <img src={whatsApp} className="icon-share" />
                <img src={instagram} className="icon-share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  wow() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement4.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame43} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทีมอันดับที่ 2 ประจำสัปดาห์</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  */}<br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                {/*       <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton> */}
                {/* <img src={tiktok} className="icon-share" /> */}
                {/*    <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton> */}
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  thankYou() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement5.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame44} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทีมอันดับ Top 10 ประจำสัปดาห์</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                {/*       <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton> */}
                {/* <img src={tiktok} className="icon-share" /> */}
                {/*    <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton> */}
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  goodJob() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement8.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame45} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทำภารกิจครบทุกสัปดาห์จนจบฤดูกาล</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton>
                {/* <img src={tiktok} className="icon-share" /> */}
                <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton>
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  pop() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement7.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame46} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">คุณมีเพื่อนในรายชื่อครบ 15 คนแล้ว!</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                {/*       <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton> */}
                {/* <img src={tiktok} className="icon-share" /> */}
                {/*    <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton> */}
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  bang() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement1.html';
    return (
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame47} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทำคะแนนได้สูงสุดประจำสัปดาห์</p>
              <p>{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */} <br />{/* xxxxxxxxxxxxxxxx */}</p>

              <p className="share-success">แชร์ความสำเร็จ</p>
              <div className="box-share">
                <FacebookShareButton url={urlShare}>
                  <img src={facebook} className="icon-share" />
                </FacebookShareButton>
                {/* <TwitterShareButton url={urlShare}>
                  <img src={twitter} className="icon-share" />
                </TwitterShareButton> */}
                {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                {/* <FacebookMessengerShareButton url={urlShare} >
                  <img src={message} className="icon-share" />
                </FacebookMessengerShareButton> */}
                {/*       <LineShareButton url={urlShare}>
                  <img src={line} className="icon-share" />
                </LineShareButton> */}
                {/* <img src={tiktok} className="icon-share" /> */}
                {/*    <WhatsappShareButton url={urlShare}>
                  <img src={whatsApp} className="icon-share" />
                </WhatsappShareButton> */}
                {/*  <img src={instagram} className="icon-share" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  renderEditVDO() {
    const { focusDay, selectedVDO, tempPlaylist, selectChangeVideoList } = this.state;
    const videoUrl = selectedVDO ? `${selectedVDO.url}` : "";
    return (
      <>
        <div className="box-videoCenter">
          <div className="popup" id="popupSelectEditVideo">
            <div className="overlay" onClick={() => this.closeTogglePopupSelectEditVideo()}>
            </div>
            <div className="content">
              <div className="close-btn" onClick={() => this.closeTogglePopupSelectEditVideo()}>&times;</div>
              {this.props.videos &&
                <div className="row mt-4 body_part_header" >
                  { //เช็ค ถ้าหากเป็น category ที่มี type ย่อย จะไม่สามารถนำชื่อ category มาตั้งเป็นชื่อรูปได้ ต้องแยกเป็นเคสๆไป
                    ((this.props.videos[0]) && this.props.videos[0].category !== "Main Circuit Combo" && this.props.videos[0].category !== "Main Circuit") &&
                    <img className="body_partHead" src={`../assets/img/body_part/${this.props.videos[0].category.toLowerCase().split(" ").join("")}.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "chestfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "chest_back")
                    && <img className="body_partHead ml-2" src={`../assets/img/body_part/chest.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "backfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "chest_back")
                    && <img className="body_partHead   ml-2" src={`../assets/img/body_part/back.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "backfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "chest_back")
                    && <img className="body_partHead ml-2" src={`../assets/img/body_part/core.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "legfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "leg_arm")
                    && <img className="body_partHead ml-2" src={`../assets/img/body_part/leg.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "armfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "leg_arm")
                    && <img className="body_partHead ml-2" src={`../assets/img/body_part/arm.png`}></img>
                  }
                  {
                    ((this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "armfocus" || (this.props.videos[0]) && this.props.videos[0].type.toLowerCase().split(" ").join("") === "leg_arm")
                    && <img className="body_partHead ml-2" src={`../assets/img/body_part/shoulder.png`}></img>
                  }

                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "warmup") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Warm Up</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "chestfocus") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Chest</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "backfocus") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Back and Core</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "chest_back") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Chest and Back</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "legfocus") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Leg</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "armfocus") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b>Arm and Shoulder</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "leg_arm") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Leg and Arm</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "subcircuit") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Full Body</b></h2>
                  }
                  {
                    (this.props.videos[0]) &&
                    (this.props.videos[0].type.toLowerCase().split(" ").join("") === "cardio") &&
                    <h2 className="ml-2 mt-1" style={{ color: "#F45197" }}><b className="b-left">Cardio</b></h2>
                  }
                </div>
              }
              <div className="selectEditPlaylist">
                {
                  selectChangeVideoList.map((item, index) => (



                    /*  */
                    <div className="playlistWrapperBack" >
                      <div className="boxvideo2" >
                        <div className="box-video">
                          <video poster={`../assets/img/thumb/${item.category.toLowerCase().split(" ").join("")}_g3.jpg`} className="" width="100%" height="100%" controls controlslist="nodownload" disablepictureinpicture style={{ borderRadius: "10px 10px 0px 0px", overflow: "hidden" }}>
                            <source src={item.url ? `${item.url}` : `https://media.planforfit.com/bebe/video/${item.video_id}_720.mp4`} type="video/mp4"></source>
                          </video>
                        </div>
                        <div className="box-video2">
                          <div className="text-videobox">
                            <h6 style={{ color: "#F45197" }}><b> {item.name} </b></h6>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" style={{ fontSize: "15px", cursor: "pointer", padding: "10px 24px", marginLeft: "auto", marginRight: "auto", display: "block", width: "85%", backgroundColor: "#F45197", borderRadius: "20px" }}
                            onClick={() => this.selectEditVideo(item)} >
                            เลือกวีดีโอนี้
                          </button>
                        </div>
                      </div>
                      {/* 
                      <div className="">
                        <video poster={`../assets/img/thumb/${item.category.toLowerCase().split(" ").join("")}_g3.jpg`} className="" width="100%" height="50%" controls controlslist="nodownload" muted style={{ borderRadius: "20px 20px 0px 0px", overflow: "hidden" }}>
                          <source src={item.url ? `${item.url}` : `https://media.planforfit.com/bebe/video/${item.video_id}_720.mp4`} type="video/mp4"></source>
                        </video>
                      </div>
                      <div className="mt-1 ml-3 mb-4">
                        <h6 style={{ color: "#F45197" }}><b> {item.name} </b></h6>
                      </div>
                      <button
                        className="btn btn-danger mb-3 mt-5"
                        type="button"
                        style={{ fontSize: "15px", cursor: "pointer", padding: "10px 24px", marginLeft: "auto", marginRight: "auto", display: "block", width: "85%", backgroundColor: "#F45197", borderRadius: "20px" }}
                        onClick={() => this.selectEditVideo(item)}
                      >
                        <b>เลือกวีดีโอนี้</b>
                      </button> */}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="video-ul2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
              <nav className="navbar">
                <div className="container-fluid">
                  <ul>
                    <li className="video-li2 ">
                      <a
                        className="video-link2"
                        style={{ color: "#E25E96" }}
                      >
                        DAY {focusDay + 1}
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="video-li2  d-flex" onClick={() => this.closeEditVDO()} style={{ cursor: "pointer" }}>
                      <button className=" cancel">ยกเลิก</button>
                    </li>
                    <li className="video-li2 " onClick={() => this.onVideoListUpdate()} style={{ marginLeft: 10, cursor: "pointer" }}>
                      <button className="  confirm ">ยืนยันการแก้ไข</button>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="rectangle14"></div>
            </div>
          </div>
          <div className="containerli">
            <div className="row">
              <div className="col">
                รวมเวลาฝึกทั้งหมด 55 นาที
              </div>
            </div>
          </div>
          <div className="containerli2">
            <div className="row">
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ">
                {
                  (tempPlaylist.map((item, index) => {
                    const minuteLabel = (item.duration < 20) ? convertFormatTime(item.duration) : convertSecondsToMinutes(item.duration);
                    return (
                      <div className=" box-playVdieo">
                        <div className="row">
                          <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly1" style={{ background: `url('./assets/img/thumb/${item.category.toLowerCase().split(" ").join("")}_g3.jpg') no-repeat`, backgroundSize: "100%" }}>
                              {
                                this.state.autoPlayCheck ?
                                  <div className=" background-icon-play">
                                    <div className="icon-play-video">
                                      <img src={play_circle_filled} name={item.url} className="pointer" onClick={() => this.toggleList(index)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    </div>
                                  </div>
                                  :
                                  <div className=" background-icon-play">
                                    <div className="icon-play-video">
                                      <img src={play_circle_filled} name={item.url} className="pointer" onClick={() => this.toggle(item)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    </div>
                                  </div>
                              }
                            </div>
                          </div>
                          <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly2">
                              <div className="text-video">
                                <p className="alarm"> <img src={alarm} className="col-2" /> {minuteLabel}  นาที</p>
                              </div>
                              <div className="rectangle15"></div>
                              <p className="warmup">{item.category} {">"}</p>
                              <p className="warmup2 bold">{item.name}</p>
                              { //เช็ค ถ้าหากเป็น category ที่มี type ย่อย จะไม่สามารถนำชื่อ category มาตั้งเป็นชื่อรูปได้ ต้องแยกเป็นเคสๆไป
                                (item.category !== "Main Circuit Combo" && item.category !== "Main Circuit") &&
                                <img className="body_part" src={`./assets/img/body_part/${item.category.toLowerCase().split(" ").join("")}.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "chestfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/chest.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "backfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/back.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "backfocus" || item.type.toLowerCase().split(" ").join("") === "chest_back")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/core.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "legfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/leg.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "armfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/arm.png`}></img>
                              }
                              {
                                (item.type.toLowerCase().split(" ").join("") === "armfocus" || item.type.toLowerCase().split(" ").join("") === "leg_arm")
                                && <img className="body_part ml-2" src={`./assets/img/body_part/shoulder.png`}></img>
                              }
                            </div>
                          </div>
                        </div>
                        {
                          (item.play_time / item.duration < completeVideoPlayPercentage) && (item.category !== "Challenge") &&
                          <div className="col-lg-2 col-md-12 col-8" style={{ top: "50%" }}>
                            <div className="changeVideoBtn mb-2 btn col-lg-12 col-md-4 col-12" onClick={() => this.togglePopupSelectEditVideo(item.video_id, item.category, item.type, index)} >
                              เลือกวีดีโอใหม่
                            </div>
                            <div className="randomVideoBtn  btn col-lg-12 col-md-4 col-12" onClick={() => this.randomVideo(item.video_id, item.category, item.type, index)} >
                              สุ่มวีดีโอ
                            </div>
                          </div>
                        }
                      </div>
                    )
                  }))
                }
              </div>
            </div>
          </div>
        </div>
        {/* modal  */}
        {/** *!   ส่วนของหัว   */}
        <div className="modal fade" id="exampleModalViderHead" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.closeToggle()}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">
                <video className="video" id="videoPlayer" controls src="https://vod-progressive.akamaized.net/exp=1656029123~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2928%2F16%2F414644989%2F1784130174.mp4~hmac=7e90273ab0620ac5aca7fcac64cc12598440cd457c7b06791844a4a61b709f9d/vimeo-prod-skyfire-std-us/01/2928/16/414644989/1784130174.mp4?filename=Warm+up.mp4" ></video>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content2">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.closeToggle()}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">
                <video className="video" id="videoPlayer" controls src={videoUrl} ></video>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content2">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.closeToggle()}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">
                <video className="video" id="videoPlayer" controls src={videoUrl} ></video>
              </div>
            </div>
          </div>
        </div>
        {/* video ทั้งหมด */}
        <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">

                {(this.state.clicApp === "11") ? this.clicApp() : this.nullClipAll()}


              </div>
            </div>
          </div>
        </div>


      </>
    )
  }

  clicApp() {
    return (
      <>
        <div className="modal-boxvideo">
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1  </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  nullClipAll() {
    return (
      <>
        <div className="modal-boxvideo">
          <div className="vector4-box">
            <img src={vector4} className="vector4" />
          </div>
          <div className="vector4-box2">
            <p className="vector4-text bold">คุณยังไม่มีคลิปออกกำลังกายเพิ่มเติม</p>
            <p className="vector4-text2">คลิปจะได้เพิ่มก็ต่อเมื่อมีการต่ออายุของ Bebe stay fit</p>
            <button className="btn bottom-pink-video vector4-button" type="button" >
              ปิด
            </button>
          </div>
        </div>
      </>
    )
  }



  videoClipAll() {
    return (
      <>
        <div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="bought">
              <div>
                <p className="bold color1 ">ซื้อแล้ว</p>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video2">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน  </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
            </div>
            <div className="bought bought-head">
              <div>
                <p className="bold color1 ">ยังไม่ได้ซื้อ</p>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  renderBasicInfo() {
    const { statusOtherAttributes } = this.state;
    return (
      <div className="center">
        <div className="card shadow mb-4 col-lg-6 offset-lg-3 col-md-12 col-12 padding-leftRight margin-left" style={{ borderRadius: "20px" }}>
          <div className="mb-4 col-lg-12  col-md-12 col-12">
            <center>
              <h5 className="mt-5"><IntlMessages id="videoList.enterweekly" /></h5>
              <h5><IntlMessages id="videoList.programjust" /></h5>
            </center>
          </div>
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <p style={{ color: "#F45197" }}><IntlMessages id="basic_information.gender" /></p>
            <div className="form-check" >
              <label className="form-check-label mb-3 mr-4">
                <input
                  disabled
                  className="form-check-input"
                  type="radio"
                  value="male"
                  name="sex"
                  checked={this.state.sex === "male"}
                  onChange={this.onChange}
                /> <IntlMessages id="basic_information.male" />
              </label>
              <label className="form-check-label" style={{ marginLeft: "60px" }}>
                <input
                  disabled
                  className="form-check-input"
                  type="radio"
                  value="female"
                  name="sex"
                  checked={this.state.sex === "female"}
                  onChange={this.onChange}
                /> <IntlMessages id="basic_information.female" />
              </label>
            </div>
          </div>

          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <div className="form-group">
              <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="basic_information.age" /></label>
              <input
                disabled
                type="number"
                className="form-control"
                id="age"
                name="age"
                step="1"
                value={this.state.age}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            {
              (statusOtherAttributes === "ageNotUseDecimals") &&
              <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.mustnot" /></h6></small>
            }
            {
              (statusOtherAttributes === "fail" && this.state.age === "") &&
              <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
            }
          </div>
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <div className="form-group">
              <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="videoList.weight" /></label>
              <input
                type="number"
                className="form-control"
                id="weight"
                name="weight"
                step=".01"
                value={this.state.weight}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            {
              (statusOtherAttributes === "fail" && this.state.weight === "") &&
              <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
            }
          </div>
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <div className="form-group">
              <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="videoList.height" /></label>
              <input
                type="number"
                className="form-control"
                id="height"
                name="height"
                step=".01"
                value={this.state.height}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            {
              (statusOtherAttributes === "fail" && this.state.height === "") &&
              <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
            }
          </div>
          <div className="mb-5 mt-4 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <div className="text-center">
              <button
                className="btn bottom-pink-video"
                type="button"
                onClick={() => this.onUpdateBasicInfo()}
                style={{ backgroundColor: "#F45197" }}
              >
                <IntlMessages id="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderBodyInfo() {
    const { statusOtherAttributes } = this.state;
    return (
      <div className="center">
        <div className="card shadow mb-4 col-lg-6 offset-lg-3 col-md-12 col-12 padding-leftRight margin-left" style={{ borderRadius: "20px" }}>
          <div className="mt-5 mb-5 col-lg-12  col-md-12 col-12">
            <center>
              <h5><IntlMessages id="videoList.measureyour" /></h5>
              <h5><IntlMessages id="videoList.usingsample" /></h5>
            </center>
          </div>
          <div className="row">
            <div className="col-md-7 offset-md-1">
              <div className="d-flex ">
                {
                  (this.state.sex === "male") && <img src="./assets/img/male.png" width="100%" alt="" />
                }
                {
                  (this.state.sex === "female") && <img src="./assets/img/female.png" width="100%" alt="" />
                }
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="videoList.chest" /></label>
                <input
                  type="number"
                  className="form-control"
                  id="chest"
                  name="chest"
                  step=".01"
                  value={this.state.chest}
                  onChange={(event) => this.handleChange(event)} />
              </div>
              {
                (statusOtherAttributes === "fail" && this.state.chest === "") &&
                <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
              }
              <div className="form-group">
                <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="videoList.waistline" /></label>
                <input
                  type="number"
                  className="form-control"
                  id="waist"
                  name="waist"
                  step=".01"
                  value={this.state.waist}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              {
                (statusOtherAttributes === "fail" && this.state.waist === "") &&
                <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
              }
              <div className="form-group">
                <label className="bmd-label-floating" style={{ color: "#F45197" }}><IntlMessages id="videoList.hip" /></label>
                <input
                  type="number"
                  className="form-control"
                  id="hip"
                  name="hip"
                  step=".01"
                  value={this.state.hip} onChange={(event) => this.handleChange(event)}
                />
              </div>
              {
                (statusOtherAttributes === "fail" && this.state.hip === "") &&
                <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="videoList.pleasefill" /></h6></small>
              }
            </div>
          </div>

          <div className="space-70 mb-5"></div>
          <div className="form-group mb-5">
            <div className="text-center">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <button
                    className="btn bottom-pink-video"
                    onClick={() => this.setState({ otherAttributesPage: "basicInfo" })}
                    style={{ backgroundColor: "white", color: "#F45197", borderColor: "#F45197" }}
                    type="button"
                  ><IntlMessages id="videoList.goback" /></button>
                </div>
                <div className="col-md-5 marginTopMd5">
                  <button
                    className="btn bottom-pink-video"
                    onClick={() => this.onUpdateBodyInfo()}
                    style={{ backgroundColor: "#F45197" }}
                    type="button"
                  ><IntlMessages id="shipping_address.confirm" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderBasicBodyInfo() {
    const sexInfo = this.state.sex;
    const sexInfoTH = sexInfo === "male" ? "ชาย" : "หญิง";
    const sexInfoTHBack = sexInfo === "male" ? "หญิง" : "ชาย";
    const sexInfoEngฺBack = sexInfo === "male" ? "female" : "male";
    return (
      <div className="center">
        <div className="card shadow mb-4 col-lg-8 offset-lg-2 col-md-12 col-12 padding-leftRight margin-left" style={{ borderRadius: "20px" }}>
          <div className="mb-3 col-lg-12  col-md-12 col-12">
            <center>
              <h2 className="mt-5 mb-4" style={{ color: "#F45197" }}><b><IntlMessages id="videoList.particulars" /></b></h2>
              <h5><IntlMessages id="videoList.checkinformation" /></h5>
              <h5><IntlMessages id="videoList.programjust" /></h5>
            </center>
          </div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="basic_information.gender" /></label>
              <div className="col-sm-4">
                <select disabled onClick={(event) => this.renderHr(event)} onChange={(event) => this.handleChange(event)} className="form-control" id="sex" aria-label="Default select example">
                  {
                    sexInfo === "male" ? <option value={sexInfo} selected>{sexInfoTH}</option> :
                      <option value="female"><IntlMessages id="basic_information.female" /></option>
                  }
                  <option value={sexInfoEngฺBack}>{sexInfoTHBack}</option>



                </select>
              </div>
            </div>
          </div>
          <div className={this.state.staticSex}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="basic_information.age" /></label>
              <div className="col-sm-4">
                <input disabled type="number" id="age" name="age" min="0" value={this.state.age} onClick={(event) => this.renderHr(event)} onChange={(event) => this.handleChange(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticAge}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="videoList.weight" /></label>
              <div className="col-sm-4">
                <input type="number" id="weight" name="weight" step=".01" value={this.state.weight} min="0" onChange={(event) => this.handleChange(event)} onClick={(event) => this.renderHr(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticWeight}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="videoList.height" /></label>
              <div className="col-sm-4">

                <input type="number" id="height" name="height" step=".01" min="0" value={this.state.height} onChange={(event) => this.handleChange(event)} onClick={(event) => this.renderHr(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticHeight}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="videoList.chest" /></label>
              <div className="col-sm-4">
                <input type="number" step=".01" min="0" name="chest" id="chest" value={this.state.chest} onClick={(event) => this.renderHr(event)} onChange={(event) => this.handleChange(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticChest}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="videoList.waistline" /></label>
              <div className="col-sm-4">
                <input type="number" step=".01" min="0" id="waist" name="waist" value={this.state.waist} onClick={(event) => this.renderHr(event)} onChange={(event) => this.handleChange(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticWaist}></div>
          <div className="centerForm">
            <div className="mb-3 row">
              <label className="col-sm-6 col-form-label"><IntlMessages id="videoList.hip" /></label>
              <div className="col-sm-4">
                <input type="number" step=".01" min="0" id="hip" name="hip" value={this.state.hip} onClick={(event) => this.renderHr(event)} onChange={(event) => this.handleChange(event)} className="form-control" />
              </div>
            </div>
          </div>
          <div className={this.state.staticHip}></div>
          <div className="centerForm">
            <div className="mb-6 col-lg-6 offset-lg-3 col-md-12 col-12">
              <button
                className="btn bottom-pink-video"
                onClick={() => this.onUpdateProfile()}
                style={{ backgroundColor: "#F45197" }}
                type="button"
              ><IntlMessages id="shipping_address.confirm" /></button>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }

  renderOtherAttribute() {
    const { otherAttributesPage } = this.state;
    return (
      <div className="card-body">
        <form>
          {(otherAttributesPage === "basicInfo") && this.renderBasicInfo()}
          {(otherAttributesPage === "bodyInfo") && this.renderBodyInfo()}
          {(otherAttributesPage === "renderBasicBodyInfo") && this.renderBasicBodyInfo()}
        </form>
      </div>
    )
  }


  render() {
    const { clickManu, editVDO_click } = this.state;
    return (
      this.boxFrom()
    );
  }
}

const mapStateToProps = ({ authUser, get, exerciseVideos, challenges }) => {
  const { register_log } = get;
  const { user } = authUser;
  const { dailyWeighChallenge, statusPostDailyWeighChallenge, statusGetDailyWeighChallenge } = challenges;
  const { exerciseVideo, statusVideoList, video, videos, status } = exerciseVideos;
  return { register_log, user, exerciseVideo, statusVideoList, video, videos, status, dailyWeighChallenge, statusPostDailyWeighChallenge, statusGetDailyWeighChallenge };
};

const mapActionsToProps = { videoListForUser, createWeeklyStayfitProgram, updatePlaytime, randomVideo, selectChangeVideo, updatePlaylist, updateBodyInfo, getExpireDate, getDailyWeighChallenge, postDailyWeighChallenge, checkUpdateMaxFriends, getRegister_log };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(videoList));