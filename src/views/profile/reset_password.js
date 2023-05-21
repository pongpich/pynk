import React, { Component } from 'react'
import { connect } from "react-redux";
import { forgotPassword, resetStatusSetPassword } from "../../redux/auth";
import { getSubscriptionProducts } from "../../redux/get";
import IntlMessages from "../../helpers/IntlMessages";


class Reset_password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      validationEmail: "default"
    };
  }
  resetPasswordSucceed(email) {
    this.setState({
      validationEmail: "default"
    })
    if (this.props.statusForgotPassword === "fail") {
      this.setState({
        validationEmail: "fail"
      })
    }

    this.props.forgotPassword(email);


  }

  componentDidMount() {
    if (this.props.user !== null) {
      this.setState({
        email: this.props.user.email
      });
    }
    this.props.resetStatusSetPassword();
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.statusForgotPassword !== this.props.statusForgotPassword) && this.props.statusForgotPassword === "success") {
      this.props.history.push('/reset_password_succeed');
    }
    if ((prevProps.statusForgotPassword !== this.props.statusForgotPassword) && this.props.statusForgotPassword === "fail") {
      this.setState({
        validationEmail: this.props.statusForgotPassword
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  render() {
    const { email, validationEmail } = this.state;
    console.log("AA",this.props.statusForgotPassword);
    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size8 bold color-protein"> <IntlMessages id="reset_password.forgetPassword"/> </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5  center2 ">
            <div className="box-protein margin-bottom1 padding-top">
              <div className="padding-leftRight">
                <p className="section-size2 margin-top-1 "><IntlMessages id="reset_password.yourEmail"/></p>
              </div>
              <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                <label for="exampleFormControlInput1" className="form-label text-left2  size-login"><IntlMessages id="navbarHome.email"/></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => this.handleChange(event)}
                />
                {validationEmail === "fail" ? <h6 style={{ color: "red" }}><IntlMessages id="reset_password.pleasecheck"/> {email}  <IntlMessages id="reset_password.afresh"/></h6> : null}
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 center2 padding-bottom padding-top2 ">
                <button type="button" className="btn bottom-pink-video" onClick={() => this.resetPasswordSucceed(email)}><IntlMessages id="shipping_address.confirm"/></button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ authUser }) => {
  const { statusForgotPassword } = authUser;
  const { user } = authUser;
  return { statusForgotPassword ,user};
};

const mapActionsToProps = {getSubscriptionProducts, forgotPassword, resetStatusSetPassword };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Reset_password);

/* 

const mapStateToProps = ({ get, authUser,editAddress }) => {
  const { delivery_address } = get;
  const { user } = authUser;
  return { delivery_address, user };
};

const mapActionsToProps = { getSubscriptionProducts,putSubscriptionAddress };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EditProfile); */