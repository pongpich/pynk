import React, { Component } from 'react';
import "./video_List.css";
import vectorinvite from '../../assets/img/vectorinvite.png';
import mvp_gold from '../../assets/img/mvp_gold.png';
import mvp_copper from '../../assets/img/mvp_copper.png';
import mvp_money from '../../assets/img/mvp_money.png';
import newbie from '../../assets/img/newbie.png';
import ellipse24 from '../../assets/img/ellipse24.png';
import group23 from '../../assets/img/group23.png';
import group22 from '../../assets/img/group22.png';
import group25 from '../../assets/img/group25.png';
import icon_x from '../../assets/img/icon_x.png';
import group425 from '../../assets/img/group425.png';
import frame40 from "../../assets/img/frame40.png";
import frame42 from "../../assets/img/frame42.png";
import frame43 from "../../assets/img/frame43.png";
import frame44 from "../../assets/img/frame44.png";
import frame45 from "../../assets/img/frame45.png";
import frame46 from "../../assets/img/frame46.png";
import frame47 from "../../assets/img/frame47.png";
import icon_web from "../../assets/img/icon-web.png";
import facebook from "../../assets/img/icon-facebook.png";
import twitter from "../../assets/img/icon-Twitter.png";
import message from "../../assets/img/icon-message-fa.png";
import line from "../../assets/img/icon-line.png";
import tiktok from "../../assets/img/icon-tiktok.png";
import whatsApp from "../../assets/img/icon-WhatsApp.png";
import instagram from "../../assets/img/icon-instagram.png";
import copyLink from "../../assets/img/copy-link.png";
import cancel from "../../assets/img/cancel.png";
import { getFriendList, getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod, sendFriendRequest, getFriendRequest, acceptFriend, rejectFriend, getMaxFriends, deleteFriend, sendTeamInvite, getTeamInvite, rejectTeamInvite, acceptTeamInvite, getFriendsRank, getAchievementLog, updateAchievementLog, checkAllMissionComplete, getFriendRequestSent, cancelFriendRequest } from "../../redux/challenges";
import { getGroupID, checkUpdateMaxFriends } from "../../redux/auth";
import { getAllMemberStayFit } from "../../redux/get";
import { connect } from "react-redux";
import moment from "moment";
import { FacebookShareButton, TwitterShareButton, FacebookMessengerShareButton, LineShareButton, WhatsappShareButton } from "react-share";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: "challenge1",
      allMissions: "challenge-link1 color1",
      teamList: "challenge-link",
      scoreboard: "challenge-link",
      friendList: "challenge-link chalLeft",
      achievement: "challenge-link",
      all_users: "challenge-link",
      team: null,
      addteam: null,
      outteam: false, // ออกจากทีม
      friend: 1,
      addfriend: false,
      scoreInWeek: 0,
      teamName: "",
      selectedNavLink: "mission",
      selectedScoreBoard: "team",
      statusRandomTeam: "default",
      emailAddFriend: "",
      emailDeleteFriend: "",
      emailTeamInvite: "",
      myTeamRank: 0,
      myIndividualRank: 0,
      numbOfFriends: 0,
      borderBottom1: "video-link",
      borderBottom2: "video-link rectangle13 color1",
      borderBottom3: "video-link",
      emailOrDisplayName: "",
      acceptFriendStatus: "default",
      rejectFriendStatus: "default"
    }
  }

  componentDidMount() {
    const { user } = this.props;

    this.props.getGroupID(user.user_id);

    this.props.checkUpdateMaxFriends(user.user_id);

    this.props.getChallengePeriod();

    this.props.getRank(this.props.user.user_id, this.props.user.start_date);
    this.props.getLogWeight(this.props.user.user_id);
    this.props.getLogWeightTeam(this.props.user.group_id);
    this.props.getIsReducedWeight(this.props.user.user_id);
    this.props.getDailyTeamWeightBonus(this.props.user.user_id);
    this.props.getMembersAndRank(this.props.user.group_id, this.props.user.start_date);
    this.props.getGroupName(this.props.user.group_id);
    this.props.getScoreOfTeam(this.props.user.group_id);
    this.props.getLeaderboard();
    this.props.getFriendList(this.props.user.user_id);
    this.props.getFriendRequest(this.props.user.user_id);
    this.props.getMaxFriends(this.props.user.user_id);
    this.props.getAchievementLog(this.props.user.user_id);
    this.props.checkAllMissionComplete(this.props.user.user_id);
    this.props.getTeamInvite(this.props.user.user_id)
    this.props.getFriendsRank(this.props.user.user_id)
  }

  componentDidUpdate(prevProps, prevState) {
    const { user, statusCreateTeam, statusGetNumberOfTeamNotFull, numberOfTeamNotFull, statusLeaveTeam, statusSendFriendRequest, statusGetFriendRequest, friend_request, statusAcceptFriend, statusRejectFriend, statusDeleteFriend, statusSendTeamInvite, statusGetTeamInvite, team_invite, statusRejectTeamInvite, statusAcceptTeamInvite, statusGetLeaderBoard, teamRank, individualRank, statusGetFriendList, friend_list, statusCheckAllMissionComplete, achievementLog, statusUpdateAchievement, statusCancelFriendRequest } = this.props;
    const achievementFinisher = (achievementLog && (achievementLog.filter(item => item.achievement === 'Finisher')).length > 0) ? true : false;
    const achievementAce = (achievementLog && (achievementLog.filter(item => item.achievement === 'Ace')).length > 0) ? true : false;
    const achievement1st = (achievementLog && (achievementLog.filter(item => item.achievement === '1st')).length > 0) ? true : false;
    const achievement2nd = (achievementLog && (achievementLog.filter(item => item.achievement === '2nd')).length > 0) ? true : false;
    const achievementTop10 = (achievementLog && (achievementLog.filter(item => item.achievement === 'Top 10')).length > 0) ? true : false;
    const achievementSocialStar = (achievementLog && (achievementLog.filter(item => item.achievement === 'Social star')).length > 0) ? true : false;
    const achievementSocialStarPlus = (achievementLog && (achievementLog.filter(item => item.achievement === 'Social star+')).length > 0) ? true : false;

    if ((prevProps.statusCancelFriendRequest !== statusCancelFriendRequest) && statusCancelFriendRequest === "success") {
      this.props.getFriendRequestSent(this.props.user && this.props.user.user_id);
    }

    if ((prevProps.statusUpdateAchievement !== statusUpdateAchievement) && statusUpdateAchievement === "success") {
      this.props.getAchievementLog(user.user_id);
    }

    if ((prevProps.statusCheckAllMissionComplete !== statusCheckAllMissionComplete) && statusCheckAllMissionComplete === "success") {
      //สั่งให้โชว์ popup 
      document.getElementById("modalAchievement8Btn") && document.getElementById("modalAchievement8Btn").click();
      this.props.getAchievementLog(user.user_id);
    }

    if ((prevProps.statusGetFriendList !== statusGetFriendList) && statusGetFriendList === "success") {
      console.log("friend_list.length :", friend_list.length);
      this.setState({
        numbOfFriends: friend_list.length
      })

      if (friend_list.length >= 10 && !achievementSocialStar) {
        //มีเพื่อนในรายชื่อ 10 คนแล้ว
        document.getElementById("modalAchievement6Btn") && document.getElementById("modalAchievement6Btn").click();
        this.props.updateAchievementLog(user.user_id, 'Social star');
      }
      if (friend_list.length >= 15 && !achievementSocialStarPlus) {
        //มีเพื่อนในรายชื่อ 15 คนแล้ว
        document.getElementById("modalAchievement7Btn") && document.getElementById("modalAchievement7Btn").click();
        this.props.updateAchievementLog(user.user_id, 'Social star+');
      }
    }

    if ((prevProps.statusGetLeaderBoard !== statusGetLeaderBoard) && statusGetLeaderBoard === "success") {
      const myTeamRankIndex = teamRank.findIndex(item => item.group_id === parseInt(this.props.user.group_id));
      const myIndividualRankIndex = individualRank.findIndex(item => item.user_id === this.props.user.user_id);
      this.setState({
        myTeamRank: myTeamRankIndex + 1,
        myIndividualRank: myIndividualRankIndex + 1
      });

      if ((myIndividualRankIndex + 1 === 1) && !achievementAce) {
        document.getElementById("modalAchievement1Btn") && document.getElementById("modalAchievement1Btn").click();
        this.props.updateAchievementLog(user.user_id, 'Ace');
      }
      if ((myTeamRankIndex + 1 === 1) && !achievement1st) {
        document.getElementById("modalAchievement3Btn") && document.getElementById("modalAchievement3Btn").click();
        this.props.updateAchievementLog(user.user_id, '1st');
      }
      if ((myTeamRankIndex + 1 === 2) && !achievement2nd) {
        document.getElementById("modalAchievement4Btn") && document.getElementById("modalAchievement4Btn").click();
        this.props.updateAchievementLog(user.user_id, '2nd');
      }
      if ((myTeamRankIndex + 1 >= 3) && (myTeamRankIndex + 1 <= 10) && !achievementTop10) {
        document.getElementById("modalAchievement5Btn") && document.getElementById("modalAchievement5Btn").click();
        this.props.updateAchievementLog(user.user_id, 'Top 10');
      }
    }

    if ((prevProps.statusRejectTeamInvite !== statusRejectTeamInvite) && (statusRejectTeamInvite === "success")) {
      document.getElementById("buttonModalTeamInvite") && document.getElementById("buttonModalTeamInvite").click();
      this.props.getTeamInvite(this.props.user.user_id)
    }

    if ((prevProps.statusAcceptTeamInvite !== statusAcceptTeamInvite) && (statusAcceptTeamInvite === "success")) {
      document.getElementById("buttonModalTeamInvite") && document.getElementById("buttonModalTeamInvite").click();
      this.props.getGroupID(user.user_id);
      this.props.getTeamInvite(this.props.user.user_id)
    }

    if ((prevProps.statusGetTeamInvite !== statusGetTeamInvite) && (statusGetTeamInvite === "success")) {
      if (team_invite && team_invite[0]) { //team_invite[0] คือ คำชวนเข้าทีมที่เก่าที่สุดที่ยังไม่ตอบรับ
        document.getElementById("buttonModalTeamInvite") && document.getElementById("buttonModalTeamInvite").click();
      }
    }

    if ((prevProps.statusSendTeamInvite !== statusSendTeamInvite) && (statusSendTeamInvite === "success")) {
      this.setState({
        addteam: null
      })
    }

    if ((prevProps.statusDeleteFriend !== statusDeleteFriend) && (statusDeleteFriend === "success")) {
      document.getElementById("buttonModalDeleteFriend") && document.getElementById("buttonModalDeleteFriend").click();
      this.props.getFriendList(this.props.user.user_id);
    }

    if ((prevProps.statusRejectFriend !== statusRejectFriend) && (statusRejectFriend === "success")) {

      // เเก้ตอน ยอมรับละเด่ง
      if (this.state.rejectFriendStatus !== "loading") {
        document.getElementById("buttonModalFriendRequest") && document.getElementById("buttonModalFriendRequest").click();
      }
      this.props.getFriendRequest(this.props.user.user_id);
      this.setState({
        rejectFriendStatus: "default"
      })
    }

    if ((prevProps.statusAcceptFriend !== statusAcceptFriend) && (statusAcceptFriend === "success" || statusAcceptFriend === "fail")) {
      // เเก้ตอน ยกเลิกละเด่ง
      if (this.state.acceptFriendStatus !== "loading") {
        document.getElementById("buttonModalFriendRequest") && document.getElementById("buttonModalFriendRequest").click();
      }

      this.props.getFriendList(this.props.user.user_id);
      this.props.getFriendRequest(this.props.user.user_id);
      this.setState({
        acceptFriendStatus: "default"
      })
    }

    if ((prevProps.statusGetFriendRequest !== statusGetFriendRequest) && statusGetFriendRequest === "success") {
      if (friend_request && friend_request[0]) { //friend_request[0] คือ คำขอเป็นเพื่อนที่เก่าที่สุดที่ยังไม่ตอบรับ
        document.getElementById("buttonModalFriendRequest") && document.getElementById("buttonModalFriendRequest").click();
      }
    }

    if ((prevProps.statusSendFriendRequest !== statusSendFriendRequest) && (statusSendFriendRequest === "success")) {
      this.clickaddfriend(false);
      this.props.getFriendRequestSent(this.props.user && this.props.user.user_id);
    }

    if ((prevProps.statusCreateTeam !== statusCreateTeam) && (statusCreateTeam === "success")) {
      this.props.getGroupID(user.user_id);
      this.setState({
        addteam: null, //กำหนด addteam เป็น null เพื่อซ่อนหน้าการยืนยันการตั้งชื่อทีม
      })
    }

    //เช็คว่าถ้ามีทีมว่างให้ผู้ใช้อยู่ทีมที่ว่างและสมาชิกน้อยสุด
    if (prevProps.statusGetNumberOfTeamNotFull !== statusGetNumberOfTeamNotFull && statusGetNumberOfTeamNotFull === "success") {
      if (numberOfTeamNotFull > 0) {
        this.props.assignGroupToMember(this.props.user.user_id, this.props.user.start_date);
      } else {
        this.setState({
          statusRandomTeam: "fail"
        })
      }
    }

    //หลังจาก assignGroupToMember จะมีการ กำหนด statusGetNumberOfTeamNotFull = default ให้ทำการ getGroupID
    if (prevProps.statusGetNumberOfTeamNotFull !== statusGetNumberOfTeamNotFull && statusGetNumberOfTeamNotFull === "default") {
      this.props.getGroupID(this.props.user.user_id);
    }

    //หลังจาก leaveTeam ให้ getGroupID (group_id ที่ได้ จะเป็น null)
    if ((prevProps.statusLeaveTeam !== statusLeaveTeam) && (statusLeaveTeam === "success")) {
      this.props.getGroupID(this.props.user.user_id);
      this.setState({
        outteam: false  //กำหนด outteam: false เพื่อซ่อนหน้ายืนยันการออกทีม
      })
    }

    //หลังจาก getGroupID จะมีการแก้ไขค่า user.group_id ที่ Reducer authUser
    if (user && user.group_id !== prevProps.user.group_id) {
      this.props.getRank(this.props.user.user_id, this.props.user.start_date);
      this.props.getLogWeight(this.props.user.user_id);
      this.props.getLogWeightTeam(this.props.user.group_id);
      this.props.getIsReducedWeight(this.props.user.user_id);
      this.props.getDailyTeamWeightBonus(this.props.user.user_id);
      this.props.getMembersAndRank(this.props.user.group_id, this.props.user.start_date);
      this.props.getGroupName(this.props.user.group_id);
      this.props.getScoreOfTeam(this.props.user.group_id);
      this.props.getLeaderboard();
    }

  }

  autoClick(e) {
    document.getElementById(e).click()
  }
  copyLink() {
    // Get the text field
    var copyText = document.getElementById("copyLink");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onDeleteFriendModal(friend_email) {
    this.setState({
      emailDeleteFriend: friend_email
    })
    document.getElementById("buttonModalDeleteFriend") && document.getElementById("buttonModalDeleteFriend").click()
  }

  createTeam(teamName) {
    const { user } = this.props;
    //ตัด ' และ ช่องว่างหน้าหลัง string ออก เพื่อป้องกันบัค SQL syntax
    const teamNameSplit = teamName.trim().split("'").join(' ')
    if (teamName.length > 6) {
      this.props.createChallengeGroup(user.user_id, teamNameSplit, user.start_date)
    } else {
      this.setState({
        teamName: ""
      })
    }
  }

  isExerciseCompleted(activites) {
    //let isCompleted = true;
    let count = 4;

    //if (activites.length <= 0) isCompleted = false;

    for (let dayIndex = 0; dayIndex < activites.length; dayIndex++) {
      const dailyExercises = activites[dayIndex];
      for (let exIndex = 0; exIndex < dailyExercises.length; exIndex++) {
        const exercise = dailyExercises[exIndex];
        if (parseFloat(exercise.play_time) / parseFloat(exercise.duration) < 0.9) {
          //isCompleted = false;
          count = count - 1;
          break;
        }
      }
    }
    return count;
  }


  challengeBottom = (e) => {

    let name = e.target.name;

    if (name === 'allMissions') {
      console.log("1");
      var challenge = "challenge1"
      var allMissions = "challenge-link1  color1"
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft"
      var achievement = "challenge-link"
      var all_users = "challenge-link"
    } else if (name === 'teamList') {
      console.log("2");
      var challenge = "challenge2"
      var allMissions = "challenge-link1 "
      var teamList = "challenge-link color1"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft"
      var achievement = "challenge-link"
      var all_users = "challenge-link"
    } else if (name === 'scoreboard') {
      var challenge = "challenge3"
      var allMissions = "challenge-link1"
      var teamList = "challenge-link"
      var scoreboard = "challenge-link color1"
      var friendList = "challenge-link chalLeft"
      var achievement = "challenge-link"
      var all_users = "challenge-link"
    } else if (name === 'friendList') {
      var challenge = "challenge4"
      var allMissions = "challenge-link1  "
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft color1"
      var achievement = "challenge-link"
      var all_users = "challenge-link"
      this.clickaddfriend(false)
    } else if (name === 'achievement') {
      var challenge = "challenge5"
      var allMissions = "challenge-link1  "
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft"
      var achievement = "challenge-link color1"
      var all_users = "challenge-link"
    } else if (name === 'all_users') {
      var challenge = "challenge6"
      var allMissions = "challenge-link1  "
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link"
      var achievement = "challenge-link"
      var all_users = "challenge-link chalLeft color1"
      this.props.getAllMemberStayFit();
      this.props.getFriendRequestSent(this.props.user && this.props.user.user_id);
    }
    this.setState({
      challenge: challenge,
      allMissions: allMissions,
      teamList: teamList,
      scoreboard: scoreboard,
      friendList: friendList,
      achievement: achievement,
      all_users: all_users,
      addteam: null,
    });

  }

  clickTeam(e) {
    let name = e;
    console.log(name);
    this.setState({
      addteam: name,
      team: null,
    });
    if (this.state.team === null) {
      this.setState({
        team: 1,

      });
    } else {
      this.setState({
        team: null,

      });
    }
  }
  clickAddTeam(e) {
    let name = e;
    console.log(name);
    this.setState({
      addteam: name,
    });

  }
  clickaddfriend(e) {
    let name = e;
    this.setState({
      addfriend: name,
    });
  }

  clickOutTeamList(e) {
    this.setState({
      outteam: e,
    });
  }

  allMissions() {
    const { logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, challengePeriod } = this.props;
    const isExerciseCompleted = this.isExerciseCompleted(this.props.exerciseVideo);
    const { messages } = this.props.intl;
    return (
      <>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="box-challengeIn">
            {
              challengePeriod ?
                <>

                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button className="nav-link active col-6" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><IntlMessages id="challenge.teamChallenge" /></button>
                      <button className="nav-link col-6" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><IntlMessages id="challenge.singleChallenge" /></button>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                      <div className="behavior">
                        <p className="text-challenge"><IntlMessages id="challenge.completeweighing" /> <span>{numberOfMembers * 2} &nbsp;<IntlMessages id="challenge.time" /></span> </p>
                        <p className="text-challenge"><IntlMessages id="challenge.completeweighing7" /> <span className="span-challenge">{dailyTeamWeightBonusCount}/7&nbsp;</span></p>
                        <p className="text-comment"><IntlMessages id="challenge.resetSunday" /></p>
                        <p className="text-comment"><IntlMessages id="challenge.scoresSunday" /></p>
                        <p className="border-bottom"></p>
                        <ul className="rules-bottom">
                          <li className="li">
                            <a className="rules" data-bs-toggle="modal" data-bs-target="#exampleModalScore"><IntlMessages id="challenge.pointsdetails" /></a>
                          </li>
                          <li className="li">
                            <a className="rules" data-bs-toggle="modal" data-bs-target="#exampleModal"><IntlMessages id="challenge.rules" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                      <div className="behavior">
                        <p className="text-challenge"> <IntlMessages id="challenge.weigh2" /> <span className="span-challenge"> &nbsp; {logWeightCount}/2</span></p>
                        <p className="text-challenge"> <IntlMessages id="challenge.weightloss" /> <span className="span-challenge"> &nbsp; {isReducedWeight ? 1 : 0}/1</span></p>
                        <p className="text-challenge"><IntlMessages id="challenge.4days" />&nbsp; {(this.props.statusVideoList !== 'no_video') ? isExerciseCompleted : 0}/4</p>
                        <p className="text-comment"><IntlMessages id="challenge.resetSunday" /></p>
                        <p className="text-comment"><IntlMessages id="challenge.scoresSunday" /></p>
                        <p className="border-bottom"></p>
                        <ul className="rules-bottom">
                          <li className="li">
                            <a className="rules" data-bs-toggle="modal" data-bs-target="#exampleModalScore"><IntlMessages id="challenge.pointsdetails" /></a>
                          </li>
                          <li className="li">
                            <a className="rules" data-bs-toggle="modal" data-bs-target="#exampleModal"><IntlMessages id="challenge.rules" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </>
                :
                <div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
                    <img src={group425} />
                  </div>
                  <p className="text-teamHead"><IntlMessages id="challenge.friendRequest" /></p>

                </div>


            }

          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
          {this.pointYou()}
        </div>
      </>
    )
  }

  pointYou() {
    const { rank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, user, totalScoreOfTeam } = this.props;
    const isExerciseCompleted = this.isExerciseCompleted(this.props.exerciseVideo);
    var { scoreInWeek } = this.state;
    if (logWeightCount >= 2) { scoreInWeek += 10 }; //ชั่งน้ำหนักครบ 2 ครั้ง
    if (isReducedWeight) { scoreInWeek += 10 }; //น้ำหนักลดลงจากสัปดาห์ก่อน
    if (isExerciseCompleted === 4) { scoreInWeek += 10 }; //ออกกำลังกายครบทั้งสัปดาห์
    if ((logWeightTeamCount > 0) && logWeightTeamCount >= numberOfMembers * 2) { scoreInWeek += 10 }; //ทีมชั่งน้ำหนักครบ คนละ2ครั้ง
    if (dailyTeamWeightBonusCount > 0) { scoreInWeek += dailyTeamWeightBonusCount * 10 }; //ในแต่ละวันมีสมาชิกชั่งน้ำหนัก
    if (scoreInWeek > 41) { scoreInWeek = 41 }; //เพื่อไม่ให้เกินหลอด

    return (
      <>

        <div className="emblem-box">
          <img src={`./assets/img/rank/${rank}.png`} width="200" height="200" />
          <p className="circleTextHead color1">
            {
              rank ?
                rank.charAt(0).toUpperCase() + rank.substr(1).toLowerCase()
                :
                ""
            }
          </p>
          {/* <div className="circle-progress"></div> */}
          <div className="progress-barChallenge">
            <div className="progressChallenge">
              <div className="progress-doneChallenge" id="progress-doneChallenge" style={{ width: `${(scoreInWeek / 41) * 100}%` }}></div>
            </div>
          </div>

          <p className="circleTextHead">{scoreInWeek}/41 Point</p>
        </div>
      </>
    )
  }
  teamScore() {
    const { user, totalScoreOfTeam } = this.props;
    return (
      <>
        {
          user.group_id &&
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div className="emblem-box2">
              <p className="point-user"> <IntlMessages id="challenge.teampoint" /> </p>
              <h3 className=""> {totalScoreOfTeam} Point </h3>
            </div>
          </div>
        }
      </>
    )
  }

  teamList() {
    const { user } = this.props;
    return (
      <>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="box-challengeIn">
            {
              (!user.group_id) ?
                this.state.addteam === "add" ?
                  this.addTeamList()
                  :
                  this.indexTeamList()
                :
                this.state.outteam === true ?
                  this.outTeamList()
                  :
                  this.state.addteam === "invite" ?
                    this.inviteTeamList()
                    :
                    this.teamYou()
            }
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          {
            this.pointYou()
          }
        </div>
        {

          this.teamScore()
        }
      </>
    )
  }

  indexTeamList() {
    const { statusGetNumberOfTeamNotFull, challengePeriod } = this.props;
    const { statusRandomTeam } = this.state;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
          <img src={group23} />
        </div>
        <p className="text-teamHead"><IntlMessages id="challenge.notNameyourteam" /></p>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottom-teamList">
            {
              ((statusRandomTeam === "fail") && (statusGetNumberOfTeamNotFull === "success")) &&
              <h6 style={{ color: "red" }}><IntlMessages id="challenge.allteamsfull" /></h6>
            }
            {
              ((statusGetNumberOfTeamNotFull !== "loading") && (challengePeriod)) &&
              <>
                <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickAddTeam("add")}><IntlMessages id="challenge.createyourteam" /></button>
                <button type="button" className="btn bottom-outlineaddTeam bottomEditProfileLeft" onClick={() => this.props.getNumberOfTeamNotFull()}><IntlMessages id="challenge.randomteam" /></button>
              </>
            }
          </div>
        </div>
      </>
    )
  }
  addTeamList() {
    const { teamName } = this.state;
    const { messages } = this.props.intl;
    return (
      <>
        <p className="text-addteam"><IntlMessages id="challenge.nameyourteam" /></p>
        <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
          <input
            type=""
            className="form-control"
            placeholder={messages['challenge.6alphabet']}
            id="teamName"
            value={this.state.teamName}
            onChange={(event) => this.handleChange(event)}
          />
          {
            (this.props.statusCreateTeam === "fail") &&
            <h6 style={{ color: "red" }}><IntlMessages id="challenge.teamsystem" /></h6>
          }
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          {
            (this.props.statusCreateTeam !== "loading") &&
            <div className="bottom-teamList">
              <button type="button" className="btn bottom-outlineaddTeam " onClick={() => this.createTeam(this.state.teamName)}><IntlMessages id="challenge.confirmationname" /></button>
            </div>
          }
        </div>
      </>
    )
  }
  inviteTeamList() {
    const { emailTeamInvite } = this.state;
    const { messages } = this.props.intl;
    const { user, statusSendTeamInvite } = this.props;
    return (
      <>
        <p className="text-addteam"> <img src={vectorinvite} />&nbsp; {messages['challenge.inviteteam']}</p>
        <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
          <input
            type=""
            className="form-control"
            placeholder={messages['challenge.emilfriend']}
            id="emailTeamInvite"
            value={emailTeamInvite}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          {
            statusSendTeamInvite !== "loading" &&
            <div className="bottom-teamList">
              <button type="button" className="btn bottom-outlineaddTeam " onClick={() => this.props.sendTeamInvite((user && user.user_id), emailTeamInvite)}> {messages['challenge.sendinvitation']}</button>
            </div>
          }
        </div>
      </>
    )
  }
  outTeamList() {
    const { user } = this.props;
    return (
      <>
        <p className="text-teamHeadout"><IntlMessages id="challenge.eavingteam" /></p>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottom-teamList">
            <button type="button" className="btn bottom-outlinebackTeam " onClick={(e) => this.clickOutTeamList(false)}><IntlMessages id="videoList.goback" /></button>
            <button type="button" className="btn bottom-outlineoutTeam bottomEditProfileLeft" onClick={() => this.props.leaveTeam(user.user_id)}><IntlMessages id="challenge.Leaveteam" /></button>
          </div>
        </div>
      </>
    )
  }
  teamYou() {
    const { numberOfMembers, membersOfTeam, group_name, totalScoreOfTeam } = this.props;
    const { messages } = this.props.intl;
    return (
      <>
        <p className="headTeam bold">{messages['challenge.team']} : {group_name} <span className="span-challenge headTeamSpan"><IntlMessages id="challenge.number" /> {numberOfMembers}/10 <IntlMessages id="challenge.person" /></span></p>
        {



          (membersOfTeam) &&
          membersOfTeam.map((item, index) =>
            <p className="text-challenge">
              <div class="container text-center">
                <div class="row justify-content-md-center">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p className="text-leftmvp">
                      <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}>{index + 1}.
                        {
                          <span className="color2">
                            {
                              item.display_name ?
                                item.display_name
                                :
                                item.email
                            }
                          </span>

                        }
                        {
                          (index + 1 === 1) &&
                          <img src={mvp_gold} className="image-mvp" />
                        }
                        {
                          (index + 1 === 2) &&
                          <img src={mvp_money} className="image-mvp" />
                        }
                        {
                          (index + 1 === 3) &&
                          <img src={mvp_copper} className="image-mvp" />
                        }
                        &nbsp;
                      </span>
                    </p>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 text-rightmvp">
                    <span>
                      {

                        item.end_rank ?
                          <img src={`./assets/img/icon_rank/${item.end_rank}.png`} width="100%" className="icon_rank" />
                          :
                          <img src={`./assets/img/icon_rank/${item.start_rank}.png`} width="100%" className="icon_rank" />

                      }
                    </span>
                    <span className="span-challenge"> {item.total_score} <IntlMessages id="challenge.points" /></span>
                  </div>
                </div>
              </div>

            </p>
          )
        }
        {
          (membersOfTeam) && (membersOfTeam.length < 4) &&
          <div className="mt-5" style={{ textAlign: "center" }}>
            <h6><b>คุณจำเป็นต้องมีเพื่อนร่วมทีมครบ 4 คน</b></h6>
            <h6><b>ถึงจะสามารถเข้าร่วมภารกิจได้</b></h6>
            < div >
              <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickTeam("invite")} > <IntlMessages id="challenge.inviteteam" /> </button>
            </div>
          </div>
        }
        <p className="border-bottom"></p>
        <p className="rules-out">
          <p onClick={(e) => this.clickOutTeamList(true)}><IntlMessages id="challenge.Leaveteam" /></p>
          {
            (membersOfTeam) && (membersOfTeam.length < 10) &&
            <span className="rules-invite" onClick={(e) => this.clickTeam("invite")}>+ <IntlMessages id="challenge.inviteteam" /></span>
          }
        </p>
      </>
    )

  }

  scoreboard() {
    const { selectedScoreBoard } = this.state;
    const { user, teamRank, individualRank, friendsRank } = this.props;
    //const teamRankFilter = teamRank.filter(item => user.fb_group === item.fb_group);
    const individualRankFilter = individualRank;

    var myRank = individualRank.filter(item => item.user_id === this.props.user.user_id);
    // myRank[0] === undefined คือกรณีผู้ใช้ไม่มีข้อมูลอยู่เลยใน member_event_log  (ทำให้เกิดบัค จึงต้องกำหนดค่าให้)
    if (myRank[0] === undefined) {
      myRank[0] = { "rank": 0, "facebook": user.facebook ? user.facebook : user.first_name ? `${user.first_name} ${user.last_name}` : user.email, "total_score": 0 };
    }

    var myRankIndex = individualRankFilter.findIndex(item => item.user_id === this.props.user.user_id);
    var myRankIndexOfFriendList = friendsRank.findIndex(item => item.user_id === this.props.user.user_id);
    return (
      <>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="box-challengeInScore">
            <div className="video-wh3">
              <ul className="">
                <li
                  className="leader-board-li bold"
                  style={{ color: `${selectedScoreBoard === "team" ? "#F45197" : "grey"}`, cursor: "pointer", marginRight: 15 }}
                  onClick={() => this.setState({ selectedScoreBoard: "team" })}
                ><IntlMessages id="challenge.teampoint" /></li>
                <li
                  className="leader-board-li bold"
                  style={{ color: `${selectedScoreBoard === "individual" ? "#F45197" : "grey"}`, cursor: "pointer", marginRight: 15 }}
                  onClick={() => this.setState({ selectedScoreBoard: "individual" })}
                ><IntlMessages id="challenge.teamsingle" /></li>
                {
                  (friendsRank && (friendsRank.length > 0)) &&
                  < li
                    className="leader-board-li bold"
                    style={{ color: `${selectedScoreBoard === "friendsRank" ? "#F45197" : "grey"}`, cursor: "pointer" }}
                    onClick={() => this.setState({ selectedScoreBoard: "friendsRank" })}
                  ><IntlMessages id="challenge.pointfriend" /></li>
                }
              </ul>
            </div>
            <hr className="w-100"></hr>
            <div className="box-challengeScore">

              {
                (teamRank && (selectedScoreBoard === "team")) &&
                teamRank.map((item, index) =>

                  <p className="text-challenge">
                    <div class="container text-center">
                      {

                        item.group_id != user.group_id ?
                          <>
                            <div class="row justify-content-md-center">
                              <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                <p className="text-leftmvp">
                                  <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}>{index + 1}. </span>
                                  {
                                    item.group_name ?
                                      `${item.group_name} `
                                      :
                                      ""
                                  }
                                  {
                                    (index + 1 === 1) &&
                                    <img src={mvp_gold} className="image-mvp2" />
                                  }
                                  {
                                    (index + 1 === 2) &&
                                    <img src={mvp_money} className="image-mvp2" />
                                  }
                                  {
                                    (index + 1 === 3) &&
                                    <img src={mvp_copper} className="image-mvp2" />
                                  }
                                </p>
                              </div>
                              <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                <span className="span-mvp2"> {item.totalScoreOfTeam ? item.totalScoreOfTeam : 0} <IntlMessages id="challenge.points" /></span>
                              </div>
                            </div>
                          </>
                          :
                          <>
                            <div class="row justify-content-md-center backg-you">
                              <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                <p className="text-leftmvp">
                                  <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}>{index + 1}. </span>
                                  {
                                    item.group_name ?
                                      `${item.group_name} `
                                      :
                                      ""
                                  }
                                  {
                                    (index + 1 === 1) &&
                                    <img src={mvp_gold} className="image-mvp2" />
                                  }
                                  {
                                    (index + 1 === 2) &&
                                    <img src={mvp_money} className="image-mvp2" />
                                  }
                                  {
                                    (index + 1 === 3) &&
                                    <img src={mvp_copper} className="image-mvp2" />
                                  }
                                </p>
                              </div>
                              <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                <span className="span-mvp2"> {item.totalScoreOfTeam ? item.totalScoreOfTeam : 0} <IntlMessages id="challenge.points" /></span>
                              </div>
                            </div>
                          </>
                      }


                    </div>
                  </p>
                )
              }
              {
                (selectedScoreBoard === "individual") &&
                <div>
                  {
                    (individualRankFilter) &&
                    individualRankFilter.map((item, index) => {
                      const fullName = `${item.first_name} ${item.last_name}`;
                      const rankDetail = `${item.display_name ?
                        item.display_name
                        :
                        item.email
                        }`;
                      return (
                        <div className="card-text line-height">
                          <div class="container text-center">
                            {
                              rankDetail !== user.email ?
                                <>
                                  <div class="row justify-content-md-center">
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                                      <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}
                                      >{index + 1}. </span>
                                      {rankDetail}
                                      {
                                        (index + 1 === 1) &&
                                        <img src={mvp_gold} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 2) &&
                                        <img src={mvp_money} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 3) &&
                                        <img src={mvp_copper} className="image-mvp" />
                                      }
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                      <span style={{ float: "right" }}>
                                        {item.total_score ? item.total_score : 0} <IntlMessages id="challenge.points" />
                                      </span>
                                    </div>
                                  </div>
                                </>
                                :
                                <>
                                  <div class="row justify-content-md-center backg-you">
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                                      <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}
                                      >{index + 1}. </span>
                                      {rankDetail}
                                      {
                                        (index + 1 === 1) &&
                                        <img src={mvp_gold} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 2) &&
                                        <img src={mvp_money} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 3) &&
                                        <img src={mvp_copper} className="image-mvp" />
                                      }
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                      <span style={{ float: "right" }}>
                                        {item.total_score ? item.total_score : 0} <IntlMessages id="challenge.points" />
                                      </span>
                                    </div>
                                  </div>
                                </>
                            }


                          </div>
                        </div>

                      )
                    })
                  }
                </div>
              }
              {
                (selectedScoreBoard === "friendsRank") &&
                <div>
                  {
                    (friendsRank && (friendsRank.length > 0)) &&
                    friendsRank.map((item, index) => {
                      const fullName = `${item.first_name} ${item.last_name}`;
                      const rankDetail = `${item.display_name ?
                        item.display_name
                        :
                        item.email
                        }`;
                      return (
                        <div className="card-text line-height">
                          <div class="container text-center">
                            {
                              rankDetail !== user.email ?
                                <>
                                  <div class="row justify-content-md-center">
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                                      <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}
                                      >{index + 1}. </span>
                                      {rankDetail}
                                      {
                                        (index + 1 === 1) &&
                                        <img src={mvp_gold} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 2) &&
                                        <img src={mvp_money} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 3) &&
                                        <img src={mvp_copper} className="image-mvp" />
                                      }
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                      <span style={{ float: "right" }}>
                                        {item.total_score ? item.total_score : 0} <IntlMessages id="challenge.points" />
                                      </span>
                                    </div>
                                  </div>
                                </>
                                :
                                <>
                                  <div class="row justify-content-md-center backg-you">
                                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                                      <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}
                                      >{index + 1}. </span>
                                      {rankDetail}
                                      {
                                        (index + 1 === 1) &&
                                        <img src={mvp_gold} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 2) &&
                                        <img src={mvp_money} className="image-mvp" />
                                      }
                                      {
                                        (index + 1 === 3) &&
                                        <img src={mvp_copper} className="image-mvp" />
                                      }
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                                      <span style={{ float: "right" }}>
                                        {item.total_score ? item.total_score : 0} <IntlMessages id="challenge.points" />
                                      </span>
                                    </div>
                                  </div>
                                </>
                            }


                          </div>
                        </div>

                      )
                    })
                  }
                </div>
              }
            </div>
            <hr className="w-100"></hr>
            {
              (teamRank && (selectedScoreBoard === "team")) &&
              teamRank.map((item, index) =>

                <p className="text-challenge">
                  <div class="container text-center">
                    {

                      item.group_id == user.group_id ?
                        <>
                          <div class="row justify-content-md-center">
                            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                              <p className="text-leftmvp">
                                <span className={(index + 1 === 1) ? "color-mvp1" : (index + 1 === 2) ? "color-mvp2" : (index + 1 === 3) ? "color-mvp3" : ""}>{index + 1}. </span>
                                {
                                  item.group_name ?
                                    `${item.group_name} `
                                    :
                                    ""
                                }
                                {
                                  (index + 1 === 1) &&
                                  <img src={mvp_gold} className="image-mvp2" />
                                }
                                {
                                  (index + 1 === 2) &&
                                  <img src={mvp_money} className="image-mvp2" />
                                }
                                {
                                  (index + 1 === 3) &&
                                  <img src={mvp_copper} className="image-mvp2" />
                                }
                              </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                              <span className="span-mvp2"> {item.totalScoreOfTeam ? item.totalScoreOfTeam : 0} <IntlMessages id="challenge.points" /></span>
                            </div>
                          </div>
                        </>
                        :
                        null
                    }
                  </div>
                </p>
              )
            }
            {
              (selectedScoreBoard === "individual") &&
              <div>
                {
                  <b className="row mb-4">
                    <p className="card-text col-12 line-height">
                      <div class="container text-center">
                        <div class="row justify-content-md-center">
                          <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                            <span className={(myRankIndex + 1 === 1) ? "color-mvp1" : (myRankIndex + 1 === 2) ? "color-mvp2" : (myRankIndex + 1 === 3) ? "color-mvp3" : ""}>
                              {myRankIndex + 1}. </span>
                            {
                              myRank[0].display_name ?
                                myRank[0].display_name
                                :
                                myRank[0].email
                            }
                            {
                              (myRankIndex + 1 === 1) &&
                              <img src={mvp_gold} className="image-mvp" />
                            }
                            {
                              (myRankIndex + 1 === 2) &&
                              <img src={mvp_money} className="image-mvp" />
                            }
                            {
                              (myRankIndex + 1 === 3) &&
                              <img src={mvp_copper} className="image-mvp" />
                            }
                          </div>
                          <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                            <span style={{ float: "right" }}>
                              {myRank[0].total_score ? myRank[0].total_score : 0} <IntlMessages id="challenge.points" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </p>
                  </b>
                }

              </div>
            }
            {
              (selectedScoreBoard === "friendsRank") &&
              <div>
                {
                  <b className="row mb-4">
                    <p className="card-text col-12 line-height">
                      <div class="container text-center">
                        <div class="row justify-content-md-center">
                          <div class="col-12 col-sm-12 col-md-8 col-lg-8 text-leftmvp">
                            <span className={(myRankIndexOfFriendList + 1 === 1) ? "color-mvp1" : (myRankIndexOfFriendList + 1 === 2) ? "color-mvp2" : (myRankIndexOfFriendList + 1 === 3) ? "color-mvp3" : ""}>
                              {myRankIndexOfFriendList + 1}. </span>
                            {
                              myRank[0].display_name ?
                                myRank[0].display_name
                                :
                                myRank[0].email
                            }
                            {
                              (myRankIndexOfFriendList + 1 === 1) &&
                              <img src={mvp_gold} className="image-mvp" />
                            }
                            {
                              (myRankIndexOfFriendList + 1 === 2) &&
                              <img src={mvp_money} className="image-mvp" />
                            }
                            {
                              (myRankIndexOfFriendList + 1 === 3) &&
                              <img src={mvp_copper} className="image-mvp" />
                            }
                          </div>
                          <div class="col-12 col-sm-12 col-md-4 col-lg-4" >
                            <span style={{ float: "right" }}>
                              {myRank[0].total_score ? myRank[0].total_score : 0} <IntlMessages id="challenge.points" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </p>
                  </b>
                }

              </div>
            }
            {/* ฟหกฟหก */}
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
          {
            this.pointYou()
          }
        </div>
      </>
    )
  }

  addfriendList() {
    const { emailAddFriend } = this.state;
    const { user, statusSendFriendRequest } = this.props;
    const { messages } = this.props.intl;
    return (
      <>
        <div className="box-challengeIn">
          <p className="text-addteam"> <img src={vectorinvite} />&nbsp; <IntlMessages id="challenge.invitefriends" /></p>
          <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
            <input
              type=""
              className="form-control"
              placeholder={messages['navbarHome.email']}
              id="emailAddFriend"
              value={emailAddFriend}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
            <div className="bottom-teamList">
              {
                (statusSendFriendRequest === "fail") &&
                <h6 style={{ color: "red" }}><IntlMessages id="challenge.notfriendssystem" /></h6>
              }
              <button type="button" className="btn bottom-outlineaddTeam " onClick={() => this.props.sendFriendRequest(user.user_id, emailAddFriend)} ><IntlMessages id="challenge.sendrequest" /></button>
            </div>
          </div>
        </div>

      </>
    )
  }

  onAcceptFriend(receiver_id, sender_id, log_id) {
    this.props.acceptFriend(receiver_id, sender_id, log_id)
    this.setState({
      acceptFriendStatus: "loading"
    })
  }
  onRejectFriend(log_id) {
    this.props.rejectFriend(log_id)
    this.setState({
      rejectFriendStatus: "loading"
    })
  }

  request_friend() {
    const { friend_list, max_friends, friend_request } = this.props;
    return (
      <>


        {
          (friend_request && friend_request) &&
          friend_request.map((item, index) =>
            <div className="friend-request">
              <p className="headTeam bold">คำขอเป็นเพื่อน</p>
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="row  justify-content-md-center">
                    <div class="col-auto col-sm-10 col-md-10 col-lg-10">
                      <p>{item.email}</p>
                    </div>
                    <div class="col-auto col-sm-2 col-md-2 col-lg-2">
                      <p>{item.rank}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 text-center">
                  {
                    ((this.props.statusAcceptFriend !== "loading" && this.props.statusRejectFriend !== "loading")) &&
                    <>
                      <button
                        type="button"
                        className="btn bottom-outlineoutTeam2"
                        onClick={() => this.onAcceptFriend(item.receiver_id, item.sender_id, item.log_id)}>
                        <IntlMessages id="challenge.accept" />
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn bottom-outlinebackTeam2"
                        onClick={() => this.onRejectFriend(item.log_id)}
                      >
                        <IntlMessages id="challenge.refuse" />
                      </button>
                    </>
                  }

                </div>
              </div>
            </div>
          )

        }


      </>
    )
  }

  friendList() {
    const { friend, addfriend } = this.state;
    const { friend_list, max_friends, friend_request } = this.props;
    console.log("this.props.friend_request", this.props.friend_request);
    return (
      <>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          {addfriend === false ?
            (friend_list && friend_list.length > 0) ?
              <>
                <div className="box-challengeIn">
                  {
                    this.request_friend()
                  }

                  <p className="headTeam bold"><IntlMessages id="challenge.friendlist" /> <span className="span-challenge headTeamSpan"><IntlMessages id="challenge.friend" /> {friend_list.length}/{max_friends} <IntlMessages id="challenge.person" /></span></p>
                  {
                    (friend_list) &&
                    friend_list.map((item, index) =>
                      <p className="text-challenge">
                        <div class="container text-center">
                          <div class="row justify-content-md-center">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                              <p className="text-leftmvp">
                                <span>{index + 1}.
                                  {
                                    <span className="color2">
                                      {
                                        item.facebook ?
                                          item.facebook
                                          :
                                          item.first_name ?
                                            `${item.first_name} ${item.last_name}`
                                            :
                                            item.email
                                      }
                                    </span>

                                  }
                                  &nbsp;
                                </span>
                              </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 text-rightmvp">
                              <span>
                                {
                                  item.end_rank ?
                                    <img src={`./assets/img/icon_rank/${item.end_rank}.png`} width="100%" className="icon_rank" />
                                    :
                                    <img src={`./assets/img/icon_rank/${item.start_rank}.png`} width="100%" className="icon_rank" />
                                }
                              </span>
                              <span className="span-challenge"> {item.total_score} <IntlMessages id="challenge.points" /></span>
                              <span className="" style={{ color: "gray", cursor: "pointer" }} onClick={() => this.onDeleteFriendModal(item.email)}> <img src={icon_x} /></span>
                            </div>
                          </div>
                        </div>

                      </p>
                    )
                  }
                  <p className="border-bottom"></p>
                  <p className="rules-add">
                    <p data-bs-toggle="modal" data-bs-target="#modalAddfriendList" >
                      <IntlMessages id="challenge.howincreasefriends" />
                    </p>
                    {
                      (friend_list.length < max_friends) &&
                      <span className="rules-invite" onClick={(e) => this.clickaddfriend(true)}>
                        + <IntlMessages id="challenge.addedfriends" />
                      </span>
                    }
                  </p>


                </div>
              </>
              :
              <>
                <div className="box-challengeIn">
                  {
                    this.request_friend()
                  }
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
                    <img src={group22} />
                  </div>
                  <p className="text-teamHead"><IntlMessages id="challenge.notfriends" /></p>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                      <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickaddfriend(true)}><IntlMessages id="challenge.invitefriends" /></button>
                    </div>
                  </div>
                </div>
              </>
            :
            this.addfriendList()

          }
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
          {
            this.pointYou()
          }
        </div>
      </>
    )
  }

  filterSearch() {
    const { emailOrDisplayName } = this.state;

    // Declare variables
    var filter, ul, li, a, i, txtValue;
    filter = emailOrDisplayName && emailOrDisplayName.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul && ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    if (li) {
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a && (a.textContent || a.innerText);
        if (txtValue && (txtValue.toUpperCase().indexOf(filter) > -1)) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  }

  checkFriendRequestStatus(receiver_id) {
    const { friend_request_sent } = this.props;
    if (friend_request_sent) {
      const filter_friend_request_sent = friend_request_sent.filter(item => item.receiver_id === receiver_id);
      if (filter_friend_request_sent.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  checkFriendStatus(receiver_id) {
    const { friend_list } = this.props;
    if (friend_list) {
      const filter_friend_list = friend_list.filter(item => item.user_id === receiver_id);
      if (filter_friend_list.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  all_users() {
    const { allMemberStayFit, user, statusSendFriendRequest, statusCancelFriendRequest } = this.props;
    const { emailOrDisplayName } = this.state;

    var allMemberStayFitFilter = allMemberStayFit;
    var filter, ul, li, a, i, txtValue;
    filter = emailOrDisplayName && emailOrDisplayName.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul && ul.getElementsByTagName('li');
    if (li) {
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a && (a.textContent || a.innerText);
        allMemberStayFitFilter = allMemberStayFit.filter(item => (item.email.toUpperCase().indexOf(filter) > -1) || (item.display_name && item.display_name.toUpperCase().indexOf(filter) > -1))
      }
    }
    const { messages } = this.props.intl;
    return (
      <>
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
          <div className="box-challengeIn">
            <div className="display_name">
              <div className="row">
                <p className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 user_all"><IntlMessages id="challenge.activeUsers" /></p>
                <div className="col-12 col-sm-12 col-md-12   col-lg-8 col-xl-8">
                  <div className="row justify-content-md-center">
                    <div className="col-8 col-sm-10 col-md-10 col-lg-9 col-xl-9">
                      <input
                        type="text" className="form-control"
                        id="emailOrDisplayName"
                        value={emailOrDisplayName}
                        onChange={(event) => this.handleChange(event)}
                        onKeyUp={this.filterSearch()}
                        placeholder={messages['challenge.name_email']}
                      />
                    </div>
                    <div className="col-auto col-sm-2 col-md-2   col-lg-3 col-xl-3">
                      <button className="btn bottom-search" type="button"> <IntlMessages id="challenge.find" /></button>
                    </div>
                  </div>
                </div>
              </div>


              <ul id="myUL" className='myUL'>
                <div class="container">

                  {
                    (allMemberStayFitFilter && allMemberStayFitFilter.length > 0) ?
                      allMemberStayFit &&
                      allMemberStayFit.map((item, i) =>
                        <li key={i} className="li">
                          <div class="row">
                            <div class="col-12 col-md-auto col-lg-5 col-xl-5  text-left">
                              <h5>
                                {item.display_name ? item.display_name : item.email}
                                <span style={{ display: "none" }}> {item.email}</span>
                              </h5>
                            </div>
                            <div class="col-12 col-lg-2 col-xl-2 text-center">
                              <span> {item.rank}</span>
                            </div>
                            <div class="col-12 col-lg-auto col-xl-auto  text-center">
                              {
                                (this.checkFriendStatus(item.user_id)) ? //เช็คว่ามีคนนี้เป็นเพื่อนแล้วหรือยัง
                                  <span style={{ color: "#000000", fontSize: "16px" }} >  <IntlMessages id="challenge.addedtoYourFriends" /> </span>
                                  :
                                  (this.checkFriendRequestStatus(item.user_id)) ? //เช็คว่าเคยส่งคำขอเพื่อนไปหาคนนี้หรือยัง
                                    <div>
                                      <span style={{ color: "#D30769", fontSize: "16px" }}>  <IntlMessages id="challenge.pending" /> </span>
                                      {
                                        (statusCancelFriendRequest !== "loading") && //เช็คเพื่อซ่อนปุ่มในจังหวะ loading ป้องกันการกดยกเลิกรัวๆ
                                        <span
                                          style={{ cursor: "pointer" }} className="btn bottom-cancel"
                                          onClick={() => this.props.cancelFriendRequest(user.user_id, item.user_id)}
                                        >
                                          <img src={cancel} className="cancel-H" />
                                          <IntlMessages id="challenge.cancelRequest" />
                                        </span>
                                      }
                                    </div>
                                    :
                                    (statusSendFriendRequest !== "loading" && (item.user_id !== user.user_id)) && //เช็คเพื่อซ่อนปุ่มในจังหวะ loading ป้องกันการกดเพิ่มเพื่อนรัวๆ
                                    <span className="btn bottom-add"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => this.props.sendFriendRequest(user.user_id, item.email)}
                                    >
                                      <IntlMessages id="challenge.addFriend" />
                                    </span>
                              }
                            </div>
                          </div>
                        </li>
                      )
                      :
                      <h5>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
                          <img src={group25} />
                        </div>
                        <p className="text-noSystem"> <IntlMessages id="challenge.noResultsFound" /></p>
                        {/*  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                        <div className="bottom-teamList">
                          <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickaddfriend(true)}><IntlMessages id="challenge.invitefriends" /></button>
                        </div>
                      </div> */}
                      </h5>
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
          {
            this.pointYou()
          }
        </div>
      </>
    )
  }



  renderAchievement() {
    const { achievementLog } = this.props;
    const achievementFinisher = (achievementLog && (achievementLog.filter(item => item.achievement === 'Finisher')).length > 0) ? true : false;
    const achievementAce = (achievementLog && (achievementLog.filter(item => item.achievement === 'Ace')).length > 0) ? true : false;
    const achievement1st = (achievementLog && (achievementLog.filter(item => item.achievement === '1st')).length > 0) ? true : false;
    const achievement2nd = (achievementLog && (achievementLog.filter(item => item.achievement === '2nd')).length > 0) ? true : false;
    const achievementTop10 = (achievementLog && (achievementLog.filter(item => item.achievement === 'Top 10')).length > 0) ? true : false;
    const achievementSocialStar = (achievementLog && (achievementLog.filter(item => item.achievement === 'Social star')).length > 0) ? true : false;
    const achievementSocialStarPlus = (achievementLog && (achievementLog.filter(item => item.achievement === 'Social star+')).length > 0) ? true : false;

    return (
      <>
        {
          <>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="box-challengeIn">
                <p className="text-challenge">
                  <div className="container">

                    {
                      achievementFinisher ?
                        <>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2" >
                              {/* จอมือถือ */}
                              <div className="container line-hr" data-bs-toggle="modal" id="achievement8" data-bs-target="#modalAchievement8">
                                <div className="row">
                                  <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                    <img src={`./assets/img/icon_achievement/finisher.png`} width="70" height="70" className="icon_rank-img" />
                                  </div>
                                  <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-12 col-sm-12  col-md-10">
                                          <p><span className="bold">Finisher</span><br /> ทำภารกิจครบทุกสัปดาห์จนจบฤดูกาล
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* จอคอม */}
                              <div className="container display-btn">
                                <div className="row">
                                  <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                    <img src={`./assets/img/icon_achievement/finisher.png`} width="70" height="70" className="icon_rank-img" />
                                  </div>
                                  <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-12 col-sm-12  col-md-10">
                                          <p><span className="bold">Finisher</span><br /> ทำภารกิจครบทุกสัปดาห์จนจบฤดูกาล
                                          </p>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement8Btn") && document.getElementById("modalAchievement8Btn").click()}>
                                          <button type="button" className="btn btn-achievement ">แชร์</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </>
                        :
                        <>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2" >
                              <div className="container">
                                <div className="row">
                                  <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                    <img src={`./assets/img/icon_achievement/finisher_grey.png`} width="70" height="70" className="icon_rank-img" />
                                  </div>
                                  <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                    <p className="share-text"><span className="bold">Finisher</span><br /> ทำภารกิจครบทุกสัปดาห์จนจบฤดูกาล</p></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                    }
                    <hr className="line-hr" />
                    {
                      achievementAce ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมือถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement1" data-bs-target="#modalAchievement1">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/ace.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Ace</span><br />ได้อันดับคะแนนสูงสุดประจำสัปดาห์</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container display-btn">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/ace.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div class="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Ace</span><br />ได้อันดับคะแนนสูงสุดประจำสัปดาห์</p>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement1Btn") && document.getElementById("modalAchievement1Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/ace_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <p><span className="bold">Ace</span><br />
                                    ได้อันดับคะแนนสูงสุดประจำสัปดาห์
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    }
                    <hr className="line-hr" />
                    {
                      achievement1st ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมือถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement3" data-bs-target="#modalAchievement3">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/1st.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">1st</span><br /> ได้ทีมอันดับที่ 1 ประจำสัปดาห์  </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container  display-btn">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/1st.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">1st</span><br /> ได้ทีมอันดับที่ 1 ประจำสัปดาห์  </p>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement3Btn") && document.getElementById("modalAchievement3Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/1st_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <p><span className="bold">1st</span><br /> ได้ทีมอันดับที่ 1 ประจำสัปดาห์</p></div>
                              </div>
                            </div>
                          </div>
                        </div>

                    }
                    <hr className="line-hr" />
                    {
                      achievement2nd ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมือถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement4" data-bs-target="#modalAchievement4">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/2nd.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">2nd</span><br /> ได้ทีมอันดับที่ 2 ประจำสัปดาห์</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container display-btn">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/2nd.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">2nd</span><br /> ได้ทีมอันดับที่ 2 ประจำสัปดาห์</p>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement4Btn") && document.getElementById("modalAchievement4Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/2nd_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10"><p><span className="bold">2nd</span><br /> ได้ทีมอันดับที่ 2 ประจำสัปดาห์
                                </p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                    }
                    <hr className="line-hr" />
                    {
                      achievementTop10 ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมอืถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement5" data-bs-target="#modalAchievement5">
                              <div class="row">
                                <div class="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/top10.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div class="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Top 10</span><br /> ได้ทีมอันดับที่ 3-10 ประจำสัปดาห์ </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container display-btn">
                              <div class="row">
                                <div class="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/top10.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div class="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Top 10</span><br /> ได้ทีมอันดับที่ 3-10 ประจำสัปดาห์ </p>
                                      </div>
                                      <div class="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement5Btn") && document.getElementById("modalAchievement5Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/top10_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10"><p><span className="bold">Top 10</span><br /> ได้ทีมอันดับที่ 3-10 ประจำสัปดาห์
                                </p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                    }
                    <hr className="line-hr" />
                    {
                      achievementSocialStar ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมือถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement6" data-bs-target="#modalAchievement6">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Social star</span><br /> มีเพื่อนในรายชื่อ 10 คน </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container display-btn">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Social star</span><br /> มีเพื่อนในรายชื่อ 10 คน </p>
                                      </div>
                                      <div class="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement6Btn") && document.getElementById("modalAchievement6Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        :
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10"><p><span className="bold">Social star</span><br /> มีเพื่อนในรายชื่อ 10 คน
                                </p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                    }
                    <hr className="line-hr" />
                    {
                      achievementSocialStarPlus ?
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            {/* จอมือถือ */}
                            <div className="container line-hr" data-bs-toggle="modal" id="achievement7" data-bs-target="#modalAchievement7">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star_plus.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Social star+</span><br />  มีเพื่อนในรายชื่อ 15 คน</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* จอคอม */}
                            <div className="container display-btn">
                              <div className="row">
                                <div className="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star_plus.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div className="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-12 col-sm-12  col-md-10">
                                        <p><span className="bold">Social star+</span><br />  มีเพื่อนในรายชื่อ 15 คน</p>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-2" onClick={() => document.getElementById("modalAchievement7Btn") && document.getElementById("modalAchievement7Btn").click()}>
                                        <button type="button" className="btn btn-achievement ">แชร์</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        :
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                            <div class="container">
                              <div class="row">
                                <div class="col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2">
                                  <img src={`./assets/img/icon_achievement/social_star_plus_grey.png`} width="70" height="70" className="icon_rank-img" />
                                </div>
                                <div class="col-8 col-sm-9 col-md-10 col-lg-9 col-xl-10"><p><span className="bold">Social star+</span><br />  มีเพื่อนในรายชื่อ 15 คน
                                </p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                    }
                  </div>
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              {
                this.pointYou()
              }
            </div>
          </>
        }

      </>
    )
  }


  super() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement3.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame42} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทีมอันดับที่ 1 ประจำสัปดาห์</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share3" onClick={(e) => this.autoClick("closeAchievement3")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom3" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }

  wow() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement4.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame43} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทีมอันดับที่ 2 ประจำสัปดาห์</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share4" onClick={(e) => this.autoClick("closeAchievement4")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom4" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }

  thankYou() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement5.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame44} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทีมอันดับ Top 10 ประจำสัปดาห์</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share5" onClick={(e) => this.autoClick("closeAchievement5")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom5" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }

  bang() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement1.html';
    return (
      <div className="container text-center">
        <div clclassNameass="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame47} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทำคะแนนได้สูงสุดประจำสัปดาห์</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share1" onClick={(e) => this.autoClick("closeAchievement1")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom1" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }
  staycool() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement6.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame40} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">คุณมีเพื่อนในรายชื่อ 10 คนแล้ว!</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share6" onClick={(e) => this.autoClick("closeAchievement6")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom6" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }
  pop() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement7.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame46} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">คุณมีเพื่อนในรายชื่อครบ 15 คนแล้ว!</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share7" onClick={(e) => this.autoClick("closeAchievement7")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom7" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }

  goodJob() {
    const urlShare = 'https://fit.bebefitroutine.com/achievement/achievement8.html';
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={frame45} className="frame40" />
            <img src={icon_web} className="icon_web" />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <div className="canterMode-box">
              <p className="modeText-box">ทำภารกิจครบทุกสัปดาห์จนจบฤดูกาล</p>
              <div className="bottom-shareBox">
                <button type="button" className="btn bottom-share" id="bottom-share8" onClick={(e) => this.autoClick("closeAchievement8")} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom8" aria-controls="offcanvasBottom"> แชร์ความสำเร็จ </button>
              </div>
              <div className="display-btn">
                <hr />
                <p className="share-success">แชร์ความสำเร็จ</p>
                <div className="box-share center2">
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
      </div>
    )
  }

  render() {
    /* const { messages } = this.props.intl; */
    const { challenge, allMissions, teamList, scoreboard, friendList, myTeamRank, achievement, all_users } = this.state;
    const { rank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, user, totalScoreOfTeam } = this.props;
    const isExerciseCompleted = this.isExerciseCompleted(this.props.exerciseVideo);
    var { scoreInWeek } = this.state;
    if (logWeightCount >= 2) { scoreInWeek += 10 }; //ชั่งน้ำหนักครบ 2 ครั้ง
    if (isReducedWeight) { scoreInWeek += 10 }; //น้ำหนักลดลงจากสัปดาห์ก่อน
    if (isExerciseCompleted === 4) { scoreInWeek += 10 }; //ออกกำลังกายครบทั้งสัปดาห์
    if ((logWeightTeamCount > 0) && logWeightTeamCount >= numberOfMembers * 2) { scoreInWeek += 10 }; //ทีมชั่งน้ำหนักครบ คนละ2ครั้ง
    if (dailyTeamWeightBonusCount > 0) { scoreInWeek += dailyTeamWeightBonusCount * 10 }; //ในแต่ละวันมีสมาชิกชั่งน้ำหนัก
    if (scoreInWeek > 41) { scoreInWeek = 41 }; //เพื่อไม่ให้เกินหลอด
    const { messages } = this.props.intl;
    const urlShare1 = 'https://fit.bebefitroutine.com/achievement/achievement1.html';
    const urlShare3 = 'https://fit.bebefitroutine.com/achievement/achievement3.html';
    const urlShare4 = 'https://fit.bebefitroutine.com/achievement/achievement4.html';
    const urlShare5 = 'https://fit.bebefitroutine.com/achievement/achievement5.html';
    const urlShare6 = 'https://fit.bebefitroutine.com/achievement/achievement6.html';
    const urlShare7 = 'https://fit.bebefitroutine.com/achievement/achievement7.html';
    const urlShare8 = 'https://fit.bebefitroutine.com/achievement/achievement8.html';
    return (
      <>
        <div className="box-videoCenter">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="video-wh">
              <ul className="video-maun">
                <li className="video-li  video-liPadding-left marginLeftRoutine">
                  <a id="workout_label" className={this.state.borderBottom1} name="borderBottom1" onClick={e => this.props.history.push('../videoList')}>{messages['videoList.workout']}</a>
                </li>
                <li className="video-li  video-liPadding-left   video-liPadding-left2">
                  <a id="challenge_label" className={this.state.borderBottom2} name="borderBottom2" onClick={e => this.props.history.push('/challenge')}>{messages['videoList.challenge']}</a>
                </li>
                <li className="video-li  video-liPadding-left   video-liPadding-left2">
                  <a id="howto_label" className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.props.history.push('/exercise_method')}>{messages['videoList.exerciseaccording']}</a>
                </li>
              </ul>
            </div>
            <div className="video-wh2 wh-bu">
              <ul className="challenge">
                <li className="video-li">
                  <a id="mission_label" className={allMissions} name="allMissions" onClick={e => this.challengeBottom(e)}> {messages['challenge.allMission']}</a>
                </li>
                <li className="video-li">
                  <a id="memberlist_label" className={teamList} name="teamList" onClick={e => this.challengeBottom(e)}>{messages['challenge.teamlist']}</a>
                </li>
                <li className="video-li">
                  <a id="scoreboard_label" className={scoreboard} name="scoreboard" onClick={e => this.challengeBottom(e)}>{messages['challenge.teamscoreboard']}</a>
                </li>
                <li className="video-li">
                  <a id="friendlist_label" className={friendList} name="friendList" onClick={e => this.challengeBottom(e)}>{messages['challenge.friendlist']}</a>
                </li>
                <li className="video-li">
                  <a id="achivement_label" className={achievement} name="achievement" onClick={e => this.challengeBottom(e)}>ความสำเร็จ</a>
                </li>
                <li className="video-li">
                  <a id="allmember_label" className={all_users} name="all_users" onClick={e => this.challengeBottom(e)}>{messages['challenge.activeUsers']}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-challengeManu">
            <div class="container">
              <div class="row justify-content-md-center">

                {challenge === "challenge1" ?
                  this.allMissions()
                  :
                  challenge === "challenge2" ?
                    this.teamList()
                    :
                    challenge === "challenge3" ?
                      this.scoreboard()
                      :
                      challenge === "challenge4" ?
                        this.friendList()
                        :
                        challenge === "challenge6" ?
                          this.all_users()
                          :
                          this.renderAchievement()
                }



              </div>

              <button
                style={{ display: 'none' }}
                id="buttonModalTeamInvite"
                type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTeamInvite"
              >
                Launch demo modal
              </button>

              <button
                style={{ display: 'none' }}
                id="buttonModalFriendRequest"
                type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalFriendRequest"
              >
                Launch demo modal
              </button>

              <button
                style={{ display: 'none' }}
                id="buttonModalDeleteFriend"
                type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDeleteFriend"
              >
                Launch demo modal
              </button>
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement3Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement3"
                >
                  modalAchievement3
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement4Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement4"
                >
                  modalAchievement4
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement5Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement5"
                >
                  modalAchievement5
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement6Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement6"
                >
                  achievement6
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement7Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement7"
                >
                  achievement7
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement8Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement8"
                >
                  achievement7
                </button>
              }
              {
                <button
                  style={{ display: 'none' }}
                  id="modalAchievement1Btn"
                  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAchievement1"
                >
                  modalAchievement1
                </button>
              }

              {/* <p className="circle-VideoAll">คลิปแบบซื้อ <span className="color1"> ดูทั้งหมด {'>'}</span></p> */}
              {/* <div className="box-VideoChallenge">
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
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Modal  achievement3 --> */}
        <div class="modal fade z-index" id="modalAchievement3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement3" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.super()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement4 --> */}
        <div class="modal fade" id="modalAchievement4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement4" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.wow()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement5 --> */}
        <div class="modal fade" id="modalAchievement5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement5" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.thankYou()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement6 --> */}
        <div class="modal fade" id="modalAchievement6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement6" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.staycool()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement7 --> */}
        <div class="modal fade" id="modalAchievement7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement7" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.pop()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement8 --> */}
        <div class="modal fade" id="modalAchievement8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement8" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.goodJob()
                }
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal  achievement1 --> */}
        <div class="modal fade" id="modalAchievement1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog   modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" id="closeAchievement1" aria-label="Close"></button>
              </div>
              <div class="modal-subscription">
                {
                  this.bang()
                }
              </div>
            </div>
          </div>
        </div>



        {/* <!-- Modal กฎและกติกา --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.rules" /></p>
                <div className="headBox">
                  <p className="headTextBox"><li><IntlMessages id="challenge.teammembers" /></li></p>
                  <p className="textBoxchallenge"><IntlMessages id="challenge.10members" /></p>
                  <br />
                  <p className="headTextBox"><li><IntlMessages id="challenge.upRank" /> </li></p>
                  <p className="textBoxchallenge"><IntlMessages id="challenge.dividedinto" /></p>
                  <br />
                  <p className="headTextBox"><li><IntlMessages id="challenge.collectingpoints" /> </li></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.individualpoints" /></span> <IntlMessages id="challenge.areearned" /></p>
                  <br />
                  <p className="headTextBox"><li><IntlMessages id="challenge.season" /></li></p>
                  <p className="textBoxchallenge"><IntlMessages id="challenge.trackedFacebook" /></p>
                  <button type="button" className="btn bottom-pink-video close" data-bs-dismiss="modal" ><IntlMessages id="videoList.off" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal รายละเอียดคะเเนน --> */}
        <div class="modal fade" id="exampleModalScore" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.pointsdetails" /></p>
                <div className="headBox">
                  <p className="headTextBox color1"><li><IntlMessages id="challenge.singleChallenge" /></li></p>
                  <p className="textBoxchallenge bold"><IntlMessages id="challenge.weighed2times" />  <span className="normal"><IntlMessages id="challenge.10point" />  <IntlMessages id="challenge.points" /></span></p>
                  <p className="textBoxchallenge bold"><IntlMessages id="challenge.weightloss" /> <span className="normal"><IntlMessages id="challenge.10point" />  <IntlMessages id="challenge.points" /></span></p>
                  <p className="textBoxchallenge bold"><IntlMessages id="challenge.exercise4days" />  <span className="normal"><IntlMessages id="challenge.10point" />  <IntlMessages id="challenge.points" /></span></p>
                  <br />
                  <p className="headTextBox color1"><li><IntlMessages id="challenge.teamChallenge" /> </li></p>
                  <p className="textBoxchallenge bold"><IntlMessages id="challenge.allmembers" />  <span className="normal"> <IntlMessages id="challenge.teamreceive" /> 10  <IntlMessages id="challenge.points" /> </span></p>
                  <p className="textBoxchallenge bold"><IntlMessages id="challenge.eachDay" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.7day" /></span>  <IntlMessages id="challenge.teamreceive" /> 70  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.6day" /></span>  <IntlMessages id="challenge.teamreceive" /> 60  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.5day" /></span>  <IntlMessages id="challenge.teamreceive" /> 50  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.4day" /></span>  <IntlMessages id="challenge.teamreceive" /> 40  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.3day" /></span>  <IntlMessages id="challenge.teamreceive" /> 30  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.2day" /></span>  <IntlMessages id="challenge.teamreceive" /> 20  <IntlMessages id="challenge.points2" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.1day" /></span>  <IntlMessages id="challenge.teamreceive" /> 10  <IntlMessages id="challenge.points2" /></p>
                  <br />
                  <p className="headTextBox"><li>Bonus Rank </li></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.thatweek" /> Rank "Gold"</span> <IntlMessages id="challenge.extrapoints" /> 5  <IntlMessages id="challenge.points" /></p>
                  <p className="textBoxchallenge"><span className="bold"><IntlMessages id="challenge.thatweek" /> Rank "Platinum"</span> <IntlMessages id="challenge.extrapoints" /> 10  <IntlMessages id="challenge.points" /></p>
                  <br />
                  <p className="textBoxchallenge color1"><IntlMessages id="challenge.updatepoints" /></p>
                  <button type="button" className="btn bottom-pink-video close" data-bs-dismiss="modal" ><IntlMessages id="videoList.off" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal คำชวนเข้าร่วมทีมชาเลนจ์ --> */}
        <div class="modal fade" id="modalTeamInvite" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.joinChallenge" /></p>
                <p className="textModel-challenge"><span className="bold">{this.props.team_invite && this.props.team_invite[0] && this.props.team_invite[0].email}</span> <IntlMessages id="challenge.wouldlike" /></p>
                <div className="headBox">

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                      <button
                        type="button"
                        className="btn bottom-outlinebackTeam"
                        onClick={() => this.props.rejectTeamInvite(this.props.team_invite && this.props.team_invite[0] && this.props.team_invite[0].log_id)}
                      >
                        <IntlMessages id="challenge.refuse" />
                      </button>
                      <button
                        type="button"
                        className="btn bottom-outlineoutTeam bottomEditProfileLeft"
                        onClick={() => this.props.acceptTeamInvite(
                          (this.props.user && this.props.user.user_id),
                          (this.props.team_invite && this.props.team_invite[0] && this.props.team_invite[0].group_id),
                          (this.props.team_invite && this.props.team_invite[0] && this.props.team_invite[0].log_id),
                        )}
                      >
                        <IntlMessages id="challenge.join" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal ยืนยันการลบเพื่อน --> */}
        <div class="modal fade" id="modalDeleteFriend" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.confirmdeletion" /></p>
                <p className="textModel-challenge"><IntlMessages id="challenge.remove" /> <span className="bold">{this.state.emailDeleteFriend}</span></p>
                <p className="textModel-challenge"><IntlMessages id="challenge.fromfriend" /></p>
                <div className="headBox">

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    {
                      (this.props.statusDeleteFriend !== "loading") &&
                      <div className="bottom-teamList">
                        <button
                          type="button"
                          className="btn bottom-outlinebackTeam"
                          onClick={() => document.getElementById("buttonModalDeleteFriend") && document.getElementById("buttonModalDeleteFriend").click()}
                        >
                          <IntlMessages id="shipping_address.cancel" />
                        </button>
                        <button
                          type="button"
                          className="btn bottom-outlineoutTeam bottomEditProfileLeft"
                          onClick={() => this.props.deleteFriend((this.props.user && this.props.user.user_id), (this.state.emailDeleteFriend))}
                        >
                          <IntlMessages id="challenge.deletion" />
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal คำขอเป็นเพื่อน --> */}
        <div class="modal fade" id="modalFriendRequest" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.friendsRequest" /></p>
                <p className="textModel-challenge"><span className="bold">{this.props.friend_request && this.props.friend_request[0] && this.props.friend_request[0].email}</span> <IntlMessages id="challenge.yourfriend" /></p>
                <div className="headBox">

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    {
                      ((this.props.statusAcceptFriend !== "loading" && this.props.statusRejectFriend !== "loading")) &&
                      <div className="bottom-teamList">
                        <button
                          type="button"
                          className="btn bottom-outlinebackTeam"
                          onClick={() => this.props.rejectFriend(this.props.friend_request && this.props.friend_request[0] && this.props.friend_request[0].log_id)}
                        >
                          <IntlMessages id="challenge.refuse" />
                        </button>
                        <button
                          type="button"
                          className="btn bottom-outlineoutTeam bottomEditProfileLeft"
                          onClick={() => this.props.acceptFriend((this.props.user && this.props.user.user_id), (this.props.friend_request && this.props.friend_request[0] && this.props.friend_request[0].sender_id), (this.props.friend_request && this.props.friend_request[0] && this.props.friend_request[0].log_id))}
                        >
                          <IntlMessages id="challenge.accept" />
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal add เพื่อน --> */}
        <div class="modal fade" id="modalAddfriendList" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal"><IntlMessages id="challenge.increase" /></p>
                <div className="headBox">
                  <p className="textmodel-addfriend"><IntlMessages id="challenge.canstart" /></p>
                  <p className="textmodel-addfriend"><IntlMessages id="challenge.activeweek" /></p>
                  <p className="textmodel-addfriend"><IntlMessages id="challenge.maximum" /></p>
                  <button type="button" className="btn bottom-pink-video close" data-bs-dismiss="modal" ><IntlMessages id="videoList.off" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*    offcanvas */}
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom1" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare1}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare1}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare1}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare1} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom3" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare3}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare3}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare3}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare3} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom4" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare4}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare4}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare4}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare4} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom5" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare5}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare5}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare5}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare5} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom6" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare6}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare6}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare6}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare6} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom7" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare7}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare7}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare7}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare7} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom8" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasBottomLabel"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small offcanvas-index ">
            <div className="row">
              <p class="offcanvas-title share-to" id="offcanvasBottomLabel">แชร์ไปที่</p>
              <div className="center">
                <div className="box-shareMobile">
                  <FacebookShareButton url={urlShare8}>
                    <img src={facebook} className="icon-share" />
                  </FacebookShareButton>
                  {/* <TwitterShareButton url={urlShare}>
                    <img src={twitter} className="icon-share" />
                  </TwitterShareButton> */}
                  {/* appId={} ต้องใช้ appId ถึงจะแชร์ได้  */}
                  {/* <FacebookMessengerShareButton url={urlShare} >
                    <img src={message} className="icon-share" />
                  </FacebookMessengerShareButton> */}
                  <LineShareButton url={urlShare8}>
                    <img src={line} className="icon-share" />
                  </LineShareButton>
                  {/* <img src={tiktok} className="icon-share" /> */}
                  <WhatsappShareButton url={urlShare8}>
                    <img src={whatsApp} className="icon-share" />
                  </WhatsappShareButton>
                  {/*  <img src={instagram} className="icon-share" /> */}
                </div>
              </div>
              <div className="copy-link">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="copyLink" placeholder="Copy" value={urlShare8} disabled />
                  <button className="button-copyLink" id="button-copyLink" onClick={(e) => this.copyLink()}><img src={copyLink} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

const mapStateToProps = ({ authUser, challenges, exerciseVideos, settings, get }) => {
  const { user } = authUser;
  const { exerciseVideo, statusVideoList } = exerciseVideos;
  const { allMemberStayFit } = get;
  const { statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam, membersOfTeam, group_name, totalScoreOfTeam, rank, teamRank, individualRank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, friend_list, statusGetFriendList, statusSendFriendRequest, friend_request, statusGetFriendRequest, statusAcceptFriend, statusRejectFriend, statusGetMaxFriends, max_friends, statusDeleteFriend, statusSendTeamInvite, team_invite, statusGetTeamInvite, statusRejectTeamInvite, statusAcceptTeamInvite, friendsRank, statusGetFriendsRank, challengePeriod, statusGetLeaderBoard, statusGetAchievement, achievementLog, statusUpdateAchievement, statusCheckAllMissionComplete, statusGetFriendRequestSent, friend_request_sent, statusCancelFriendRequest } = challenges;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { locale, user, statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam, membersOfTeam, group_name, totalScoreOfTeam, rank, teamRank, individualRank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, exerciseVideo, statusVideoList, friend_list, statusGetFriendList, statusSendFriendRequest, friend_request, statusGetFriendRequest, statusAcceptFriend, statusRejectFriend, statusGetMaxFriends, max_friends, statusDeleteFriend, statusSendTeamInvite, team_invite, statusGetTeamInvite, statusRejectTeamInvite, statusAcceptTeamInvite, friendsRank, statusGetFriendsRank, challengePeriod, statusGetLeaderBoard, statusGetAchievement, achievementLog, statusUpdateAchievement, statusCheckAllMissionComplete, allMemberStayFit, statusGetFriendRequestSent, friend_request_sent, statusCancelFriendRequest };
};

const mapActionsToProps = { getGroupID, getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod, getFriendList, sendFriendRequest, getFriendRequest, acceptFriend, rejectFriend, getMaxFriends, deleteFriend, sendTeamInvite, getTeamInvite, rejectTeamInvite, acceptTeamInvite, checkUpdateMaxFriends, getFriendsRank, getAchievementLog, updateAchievementLog, checkAllMissionComplete, getAllMemberStayFit, getFriendRequestSent, cancelFriendRequest };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Challenge));