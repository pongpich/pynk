import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectMemberInfo } from "../../redux/exerciseVideos";
import { changeEmail ,addOrderInZort} from "../../redux/auth";
import { selectMemberEventLog } from "../../redux/challenges";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickManu: "addOrderZort",
            borderBottom1: "video-link rectangle13 color1",
            borderBottom2: "video-link",
            borderBottom3: "video-link",
            borderBottom4: "video-link",
            email: " ",
            new_email: " ",
            statusAddZortOrder: "default"
        }
    }

    componentDidMount() {
        const { authorization } = this.props.user
        if (authorization !== "admin") {
            this.props.history.push('/videoList');
        }
    }
/*     componentDidUpdate(prevProps, prevState) {
        const {statusAddZortOrder}  = this.props;

    
        setTimeout(() => {
            if (statusAddZortOrder === "success" && this.state.statusAddZortOrder !== "success") {
                this.setState({
                    statusAddZortOrder: statusAddZortOrder
                })
             
            console.log("9999");
            }
            this.setState({
                statusAddZortOrder: "default"
            })
       }, 3000);
         
     } */

    clickBottom = (e) => {

        let name = e.target.name;
        if (name === 'addOrderZort') {
            var bottom1 = "video-link rectangle13 color1"
            var bottom2 = "video-link"
            var bottom3 = "video-link"
            var bottom4 = "video-link"

        } else if (name === 'MemberEventLog') {
            var bottom1 = "video-link "
            var bottom2 = "video-link rectangle13 color1"
            var bottom3 = "video-link"
            var bottom4 = "video-link"

        } else if (name === 'renderChangeEmail') {
            var bottom1 = "video-link"
            var bottom2 = "video-link"
            var bottom3 = "video-link rectangle13 color1"
            var bottom4 = "video-link"
        } else if (name === 'renderMemberInfo') {
            var bottom1 = "video-link"
            var bottom2 = "video-link"
            var bottom3 = "video-link"
            var bottom4 = "video-link rectangle13 color1"
        }
        this.setState({
            clickManu: name,
            borderBottom1: bottom1,
            borderBottom2: bottom2,
            borderBottom3: bottom3,
            borderBottom4: bottom4,
            email: "",
            new_email: "",
            statusChangeEmail: "default",
        });

    }

    manu() {
        return (
            <>
                <div className="box-videoCenter">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                        <ul className="video-maun">
                            <li className="video-li  video-liPadding-left marginLeftRoutine">
                                <a className={this.state.borderBottom1} name="addOrderZort" onClick={e => this.clickBottom(e)}>addOrderZort</a>
                            </li>

                            <li className="video-li  video-liPadding-left   video-liPadding-left2">
                                <a className={this.state.borderBottom2} name="MemberEventLog" onClick={e => this.clickBottom(e)}>MemberEventLog</a>
                            </li>
                            <li className="video-li  video-liPadding-left   video-liPadding-left2">
                                <a className={this.state.borderBottom3} name="renderChangeEmail" onClick={e => this.clickBottom(e)}>เปลี่ยนอีเมล</a>
                            </li>
                            <li className="video-li  video-liPadding-left   video-liPadding-left2">
                                <a className={this.state.borderBottom4} name="renderMemberInfo" onClick={e => this.clickBottom(e)}>ข้อมูลผู้ใช้</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    handleChange(event) {
        console.log("event.target.id", event.target.id);
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    renderMemberEventLog() {
        return (
            <>
                <div className="boxAdmin">
                    <h1 className="mb-4">Member Event Log</h1>

                    <div className="row g-3 center mb-5">
                        <div className="col-auto col-lg-5 ">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" name="email" readonly className="form-control" id="email" onChange={(event) => this.handleChange(event)} placeholder="name@example.com" />
                        </div>
                        <div className="col-auto mt-5">
                            <button type="submit" className="btn btn-primary " onClick={() => this.props.selectMemberEventLog(this.state.email)}>ค้นหา</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table style={{ border: '2px solid black' }}>
                            <tr style={{ border: '4px solid black', backgroundColor: '#CFE2F3', textAlign: 'center' }}>
                                <td style={{ border: '1px solid black', width: 220 }}><h5><b>{"Log"}</b></h5></td>
                                <td style={{ border: '1px solid black', width: 280 }}><h5><b>{"ความหมาย"}</b></h5></td>
                                <td style={{ border: '1px solid black', width: 380 }}><h5><b>{"หมายเหตุ"}</b></h5></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"weight"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ชั่งน้ำหนัก"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 10 คะแนน ทันที (เมื่อครบ 2 ครั้ง)"}</h6></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"weight bonus"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ในวันนั้นมีสมาชิกในทีมชั่งน้ำหนัก"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 10 คะแนน ทันที (สูงสุด 70 คะแนน ต่อ สัปดาห์)"}</h6></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"reduced weight"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"น้ำหนักลดลงจากสัปดาห์ก่อน"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 10 คะแนน วัน อา. เวลา 23:30:XX"}</h6></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"exercise complete"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ออกกำลังกายครบ 4 วัน ต่อสัปดาห์"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 10 คะแนน วัน อา. เวลา 23:30:XX"}</h6></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"weight team complete"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"สมาชิกในทีมทุกคน แต่ละคนชั่งน้ำหนักครบ 2 ครั้ง ในสัปดาห์"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 10 คะแนน วัน อา. เวลา 23:30:XX"}</h6></td>
                            </tr>
                            <tr style={{ border: '4px solid black', backgroundColor: '#ECF0F1' }}>
                                <td style={{ border: '1px solid black' }}><h6>{"rank bonus"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"โบนัสคะแนนของแต่ละ rank"}</h6></td>
                                <td style={{ border: '1px solid black' }}><h6>{"ได้รับ 5, 10 คะแนน (ขึ้นอยู่กับ Rank) วัน อา. เวลา 23:30:XX"}</h6></td>
                            </tr>
                        </table>
                    </div>
                    <br></br>
                    <div className="table-responsive">
                        <table>
                            <tr style={{ border: '4px solid black', backgroundColor: '#EEB2CB', textAlign: 'center' }}>
                                <td style={{ border: '1px solid black', width: 220 }}><h5><b>{"Log"}</b></h5></td>
                                <td style={{ border: '1px solid black', width: 100 }}><h5><b>{"Log Value"}</b></h5></td>
                                <td style={{ border: '1px solid black', width: 120 }}><h5><b>{"Log Type"}</b></h5></td>
                                <td style={{ border: '1px solid black', width: 80 }}><h5><b>{"Score"}</b></h5></td>
                                <td style={{ border: '0px solid black', width: "auto" }}><h5><b>{"Created at"}</b></h5></td>
                                <td style={{ border: '0px solid black' }}><h5></h5></td>
                            </tr>
                            {
                                (this.props.memberEventLog) && this.props.memberEventLog.map((item, index) => {
                                    return (

                                        <tr style={(index % 2 === 0) ? { border: '1px solid black' } : { border: '1px solid black', backgroundColor: '#ECF0F1' }}>
                                            <td style={{ border: '1px solid black' }}><h6>{item.log}</h6></td>
                                            <td style={{ border: '1px solid black', textAlign: 'left' }}><h6>{item.log_value}</h6></td>
                                            <td style={{ border: '1px solid black', textAlign: 'left' }}><h6>{item.log_type}</h6></td>
                                            <td style={{ border: '1px solid black', textAlign: 'center' }}><h6 style={(item.score > 0) ? { color: 'red' } : {}}>{item.score}</h6></td>
                                            <td style={{ border: '1px solid black', textAlign: 'center' }}><h6>{(item.created_at).split("T")[0]}</h6></td>
                                            <td style={{ border: '1px solid black' }}><h6>{(item.created_at).split("T")[1].split(".000Z")}</h6></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </>
        )
    }
    changeOrderZort(email) {
        this.props.addOrderInZort(email);
        var delayInMilliseconds = 2000; //1.3 second

        if (this.props.statusAddZortOrder === "success") {
            this.setState({
                statusAddZortOrder: "success",
             
            })
            setTimeout(() => { // หน่วงเวลา แล้วค่อย setState 
                this.setState({
                    statusAddZortOrder: "default",
                 
                })
            }, delayInMilliseconds);
        }
      
    }

    addOrderZort() {
        return (
            <>
                <div className="boxAdmin">
                    <div className="row">
                        <div className="card mt-5 mb-3 col-lg-12">
                            <div className="card-body">

                                <h1 className="mb-5">เพิ่ม Order Zort</h1>
                                <div className="row g-3  mb-5">
                                    <div className="col-auto col-lg-5 ">
                                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                                        <input type="text" id="email" className="form-control" name="email" /* value={this.state.email} */ onChange={(event) => this.handleChange(event)} placeholder="name@example.com" />
                                    </div>
                                    <div className="col-auto mt-5">
                                        <button type="submit" className="btn btn-primary " onClick={() => this.changeOrderZort(
                                            this.state.email
                                        )}>เพิ่ม</button>
                                    </div>
                                    {
                                        /* console.log("statusAddZortOrder",this.state.statusAddZortOrder) */
                                        this.state.statusAddZortOrder === "success" ? 
                                        <h5 style={{color: "#008000" }}>เพิ่ม Order ใน zortout สำเร็จ</h5>
                                        :null
                                    }
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {
                    console.log("addOrderZort",this.props.statusAddZortOrder,this.state.statusAddZortOrder)
                }
            </>
        )
    }

    changeEmail(email, new_email) {
        this.props.changeEmail(email, new_email);
        var delayInMilliseconds = 1300; //1.3 second
        setTimeout(() => { // หน่วงเวลา แล้วค่อย setState 
            this.setState({
                statusChangeEmail: this.props.statusChangeEmail,
             
            })
        }, delayInMilliseconds);
    }

    renderChangeEmail() {
        return (
            <>
                <div className="boxAdmin">
                    <div className="row">
                        <div className="card mt-5 mb-3 col-lg-12">
                            <div className="card-body">
                                <h1 className="mb-5">เปลี่ยนอีเมล</h1>
                                <label for="fname">Email: </label>
                                <input type="text" id="email" name="email" className="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)} />
                                <br></br>
                                {
                                    (this.state.statusChangeEmail === "email_incorrect") &&
                                    <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>อีเมลไม่ถูกต้อง</h6></small>
                                }
                                <label for="fname">New Email: </label>
                                <input type="text" id="new_email" name="new_email" className="form-control" value={this.state.new_email} onChange={(event) => this.handleChange(event)} />
                                {
                                    (this.state.statusChangeEmail === "email_exist") &&
                                    <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>อีเมลนี้มีในระบบอยู่แล้ว</h6></small>
                                }
                                {
                                    (this.state.statusChangeEmail === "success") &&
                                    <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "green" }}>เปลี่ยนอีเมล สำเร็จ</h6></small>
                                }
                                <br></br>
                                <button type="button" className="btn btn-primary" onClick={() => this.changeEmail(this.state.email, this.state.new_email)}>ยืนยัน</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    renderMemberInfo() {
        return (
            <>
                <div className="boxAdmin">
                    <div className="row">
                        <div className="card mt-5 mb-3 col-lg-12">
                            <div className="card-body">

                                <h1 className="mb-5">ข้อมูลผู้ใช้</h1>
                                <div className="row g-3  mb-5">
                                    <div className="col-auto col-lg-5 ">
                                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                                        <input type="text" id="email" className="form-control" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} placeholder="name@example.com" />
                                    </div>
                                    <div className="col-auto mt-5">
                                        <button type="submit" className="btn btn-primary " onClick={() => this.props.selectMemberInfo(
                                            this.state.email
                                        )}>ค้นหา</button>
                                    </div>
                                </div>
                                <br></br>
                                {
                                    (this.props.memberInfo && this.props.memberInfo.other_attributes) &&
                                    <div>
                                        <h5>{"Email : " + this.props.memberInfo.email}</h5>
                                        <h5>{"Firstname : " + this.props.memberInfo.first_name}</h5>
                                        <h5>{"Lastname : " + this.props.memberInfo.last_name}</h5>
                                        <h5>{"Phone : " + this.props.memberInfo.phone}</h5>
                                        <h5>{"FB Group : " + this.props.memberInfo.fb_group}</h5>
                                        <h5>{"Facebook : " + this.props.memberInfo.facebook}</h5>
                                        <h5>
                                            {
                                                "Info : "
                                                + " อายุ: " + JSON.parse(this.props.memberInfo.other_attributes).age + ","
                                                + " เพศ: " + JSON.parse(this.props.memberInfo.other_attributes).sex + ","
                                            }
                                        </h5>
                                        <h5>
                                            {
                                                "Body Info : "
                                                + " น้ำหนัก: " + JSON.parse(this.props.memberInfo.other_attributes).weight + ","
                                                + " ส่วนสูง: " + JSON.parse(this.props.memberInfo.other_attributes).height + ","
                                                + " อก: " + JSON.parse(this.props.memberInfo.other_attributes).chest + ","
                                                + " เอว: " + JSON.parse(this.props.memberInfo.other_attributes).waist + ","
                                                + " สะโพก: " + JSON.parse(this.props.memberInfo.other_attributes).hip + ","
                                            }
                                        </h5>
                                        <h5>{"วันเริ่มต้น : " + this.props.memberInfo.start_date}</h5>
                                        <h5>{"วันสิ้นสุด : " + this.props.memberInfo.expire_date}</h5>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }



    render() {
        const { clickManu } = this.state;
        return (
            <>
                {
                    this.manu()
                }
                {
                    clickManu === "addOrderZort" ? this.addOrderZort()
                        :
                        clickManu === "MemberEventLog" ? this.renderMemberEventLog()
                            :
                            clickManu === "renderChangeEmail" ? this.renderChangeEmail()
                                : clickManu === "renderMemberInfo" ? this.renderMemberInfo()
                                    : null
                    /* this.renderMemberEventLog() */

                }
            </>
        )
    }
}


const mapStateToProps = ({ authUser, settings, challenges, exerciseVideos }) => {
    const { user, statusChangeEmail,statusAddZortOrder } = authUser;
    const { memberEventLog } = challenges;
    const { programInWeek, memberInfo, bodyInfo } = exerciseVideos;
    let locale;
    if (settings) {
        locale = settings.locale;
    } else {
        locale = "th";
    }
    return { locale, user, memberEventLog, statusChangeEmail, memberInfo,statusAddZortOrder };
};

const mapActionsToProps = { selectMemberEventLog, changeEmail, selectMemberInfo,addOrderInZort };

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Index);