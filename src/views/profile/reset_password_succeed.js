import React, { Component } from 'react';
import IntlMessages from "../../helpers/IntlMessages";

class Reset_password_succeed extends Component {
    render() {
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein"><IntlMessages id="reset_password.forgetPassword"/></p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5  center2 ">
                        <div className="box-protein margin-bottom1 padding-top">
                            <div className="padding-leftRight">
                                <p className="section-size2 margin-top-1"><IntlMessages id="reset_password_succeed.newpassword" /></p>
                                <p className="section-size2 margin-top-1"><IntlMessages id="reset_password_succeed.orcontact"/></p>
                                <p className="section-size2 margin-top-1"><IntlMessages id="reset_password_succeed.from"/></p>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 center2 padding-bottom padding-top2 ">
                                    <button type="button" className="btn bottom-pink-video" onClick={() => this.props.history.push('/home')}><IntlMessages id="reset_password_succeed.backtomain"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Reset_password_succeed;

