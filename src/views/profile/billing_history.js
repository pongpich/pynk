import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import group183 from "../../assets/img/group183.png";
import vector_check from "../../assets/img/vector_check.png";
import group_check from "../../assets/img/group_check.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getRegister_log } from "../../redux/get";
import IntlMessages from "../../helpers/IntlMessages";

class Billing_history extends React.Component {
    componentDidMount() {
        const { user } = this.props;
        this.props.getRegister_log(user.user_id);
    }

    render() {

        const program = this.props.register_log;
        /*     const program_id =  this.props.register_log[0].program_id;
            const expire_date =  new Date(this.props.register_log[0].expire_date);
            const date_expire = expire_date.toLocaleString("th-TH",  {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }); */

        return (
            <>

                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein"> <IntlMessages id="profile.billinghistory"/></p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top">
                                <h4 className="color1 bold">BEBEStayFit</h4>
                            </div>
                            <div className="padding-top2">
                                <p className="font-size6 text-left2 bold"><IntlMessages id="payment.yourPackage"/> </p>
                                <div className="left-text">
                                {

                                    program && program.map((index, i) => {
                                        const il = program.length - 1;
                                        if (il === i) {
                                            const expire_date = new Date(index.expire_date);
                                            const date = expire_date.toLocaleString("th-TH", {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            });
                                            const name = (
                                                <>
                                                    {
                                                     index.program_id === "subscription_stay_fit_01" ?
                                                        <p className="font-size0 margin-top-1 bold between"><IntlMessages id="fitto_plant_protein.theDuration"/> <span className="color1 bold font-size0">1,800 <IntlMessages id="programPackage.baht"/> / <IntlMessages id="programPackage.months"/></span></p>
                                                     :
                                                        <p className="font-size0 margin-top-1 bold between"><IntlMessages id="fitto_plant_protein.theDuration"/> <span className="color1 bold font-size0">3,990 <IntlMessages id="programPackage.baht"/></span></p>
                                                    }
                                                       <p className=" font-size4 margin-top-1 right color3"><IntlMessages id="profile.cut-offdate"/> {date}</p>
                                                </>
                                            )

                                            return name;
                                        }
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <div>
                            <p><IntlMessages id="profile.informationwill"/></p>
                            <p><IntlMessages id="profile.maytake"/></p>
                        </div>
                        {
                              program && program.map((index) => {
                                const expire_date = new Date(index.expire_date);
                                const date = expire_date.toLocaleString("th-TH", {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                });
                                const created_at = new Date(index.created_at);
                                const date_created_at = created_at.toLocaleString("th-TH", {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                });
                                const amount = Number(index.amount);
                                const amount_num = amount.toLocaleString();
                                const name_2 = (
                                    <>
                                       <div className="box-protein margin-bottom1 padding-top2">
                                        <div className="padding-top2 margin-leftRight">
                                        {
                                           index.program_id === "subscription_stay_fit_01" ?
                                           <p className="font-size4 margin-top-1  between"><IntlMessages id="profile.paymentdate"/> {date_created_at} <span className="color1 bold font-size9">{amount_num} <IntlMessages id="programPackage.baht"/> </span></p>
                                             :
                                             <p className="font-size4 margin-top-1  between"><IntlMessages id="profile.paymentdate"/> {date_created_at} <span className="color1 bold font-size9">{amount_num} <IntlMessages id="programPackage.baht"/></span></p>
                                        }
                                        </div>
                                        <p className="border-bottom margin-leftRight"></p>
                                        <div className="padding-top2 margin-leftRight">
                                            <p className="font-size0 margin-top-1  between"><IntlMessages id="payment.yourPackage"/> <span className="bold font-size0"><IntlMessages id="fitto_plant_protein.theDuration"/></span></p>
{/*                                             <p className="font-size0 margin-top-1  between">ชำระผ่าน <span className="bold font-size0">QR code</span></p> */}
                                        </div>
                                    </div>
                                    </>
                                ) 
                                return name_2;
                        })
                    }
                     

                        <div className="margin-bottom1">
                            <p>หากมีข้อสงสัยสามารถสอบถามเพิ่มเติม<a href="#">ได้ที่นี่</a></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ get, authUser }) => {
    const { register_log } = get;
    const { user } = authUser;
    return { user, register_log };
};

const mapActionsToProps = { getRegister_log };

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Billing_history);


