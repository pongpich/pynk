import React, { Component, } from "react";
import group19 from "../../assets/img/group19.png";
import ellipse_077 from "../../assets/img/ellipse_077.png";
import ellipse_078 from "../../assets/img/ellipse_078.png";
import IntlMessages from "../../helpers/IntlMessages";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
/* import { selectProducts, clearSelectProducts } from "../../redux/shippingAddress" */
import { updateFittoPlant } from "../../redux/update";


class Fitto_Plant_Protein extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      box1: "box1",
      valuebox1: "คลาสสิค มอลต์",
      box2: "box2",
      valuebox2: "คลาสสิค มอลต์",
      box3: "box3",
      valuebox3: "สตรอว์เบอร์รี่ ครัช",
      box4: "box4",
      fitto: [
        "คลาสสิค มอลต์",
        "มิลค์ ที",
        "ดับเบิ้ล ช็อคโก้ ฟัดจ์",
        "สตรอว์เบอร์รี่ ครัช"
      ],
      fittoPlant: "default",
      discount: false,
    };
  }
  th_EnProtein() {
    const { locale } = this.props;
    if (locale === "th") {
      this.setState({
        box1: "box1",
        valuebox1: null,
        box2: "box2",
        valuebox2: null,
        box3: "box3",
        valuebox3: null,
        fitto: [
          "คลาสสิค มอลต์",
          "มิลค์ ที",
          "ดับเบิ้ล ช็อคโก้ ฟัดจ์",
          "สตรอว์เบอร์รี่ ครัช"
        ]
      })
    } else {
      this.setState({
        box1: "box1",
        valuebox1: "Classic Malt",
        box2: "box2",
        valuebox2: "Classic Malt",
        box3: "box3",
        valuebox3: "Classic Maltต์",
        fitto: [
          "Classic Malt",
          "Milk Tea",
          "Double Choco fudge",
          "Strawberry crush"
        ]
      })
    }
  }
  componentDidMount() {
    const { user_program_id, create_user_email, locale, products_list } = this.props;

    this.props.getUserProgram(create_user_email);
    /*  this.props.clearSelectProducts() */
    const products = JSON.parse(products_list);

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }
    if (locale === "th") {
      this.th_EnProtein()
    } else {
      this.th_EnProtein()
    }
    this.setState({
      box1: "box1",
      valuebox1: products.product1,
      box2: "box2",
      valuebox2: products.product2,
      box3: "box3",
      valuebox3: products.product3,
    })
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, products_list, locale, fittoPlant } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
    if (!prevProps.products_list && products_list) {
      this.props.history.push('/shipping_address');
    }
    if (prevProps.locale !== locale) {
      this.th_EnProtein()
    }
  }

  onNextPage() {
    const { user } = this.props
    const { valuebox1, valuebox2, valuebox3 } = this.state;
    const products_list = { "product1": valuebox1, "product2": valuebox2, "product3": valuebox3 }
    console.log("products_list :", products_list)
    this.props.updateFittoPlant(user.user_id, products_list);
    var delayInMilliseconds = 2000; //1.3 second

    if (this.props.fittoPlant === "success") {
      this.setState({
        fittoPlant: "success",
      })
      const discount = localStorage.getItem('discount');
      if (discount === 'true') {
        this.props.history.push('/subscription_discount');
      } else {
        this.props.history.push('/subscription_payment');
      }
      setTimeout(() => { // หน่วงเวลา แล้วค่อย setState 
        this.setState({
          fittoPlant: "default",

        })
      }, delayInMilliseconds);
    }

  }



  boxFitto = (event) => {
    let box = event.target.name;
    let value = event.target.value;
    let valuebox = `value${box}`;
    this.setState({
      [box]: box,
      [valuebox]: value
    })

  }


  render() {
    const { fitto, valuebox1, valuebox2, valuebox3 } = this.state;
    console.log("user", this.props.fittoPlant);
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 center2">
            {/*  <img src={group19} alt="vector" className="group19" /> */}
            <div className="current-position2">
              <p className="border-line2  col-8 col-sm-6 col-md-6 col-lg-6 "></p>
              <div className="ellipse-text  col-3 col-sm-2 col-md-2 col-lg-2">
                {/* <img src={ellipse_077} alt="vector" /> */}
                <div className="border-circle"></div>
                <p className="img-p"> <IntlMessages id="register.chooseYouflavor" /></p>
              </div>
              <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                {/*  <img src={ellipse_078} alt="vector" /> */}
                <div className="border-circleWhite"></div>
                <p className="img-p"> <IntlMessages id="register.deliveryAddress" /></p>
              </div>
              <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                {/* <img src={ellipse_078} alt="vector" /> */}
                <div className="border-circleWhite"></div>
                <p className="img-p"> <IntlMessages id="register.payment" /></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="box-protein">
              <div className="padding-top">
                <p className="font-size6 bold color-protein"> <IntlMessages id="fitto_plant_protein.chooseProtein" /> </p>
                <p className="font-size4"><IntlMessages id="fitto_plant_protein.youAreApplying" /><span className="bold">  <IntlMessages id="fitto_plant_protein.theDuration" /></span>< br /><IntlMessages id="fitto_plant_protein.willBe" /></p>
                <div className="box-proteinIn padding-top">
                  <div className="center">
                    <p className="font-size5 bold text-center"> <IntlMessages id="fitto_plant_protein.chooseProtein" /></p>
                  </div>
                  <div>
                    <label className="form-label bold font-size4"><IntlMessages id="fitto_plant_protein.box1" /></label>
                    <select className="form-select" onChange={this.boxFitto} name="box1" aria-label="Default select example">
                      <option value={valuebox1}>{valuebox1}</option>
                      {fitto.map((fitto, i) => (
                        valuebox1 !== fitto ?
                          <option key={i} value={fitto}>{fitto}</option>
                          : null
                      )
                      )}
                    </select>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="fitto_plant_protein.box2" /></label>
                    <select className="form-select" onFocus={this.boxFitto} onChange={this.boxFitto} name="box2" aria-label="Default select example">
                      <option value={valuebox2}>{valuebox2}</option>
                      {fitto.map((fitto, i) => (
                        valuebox2 !== fitto ?
                          <option key={i} value={fitto}>{fitto}</option>
                          : null
                      )
                      )}
                    </select>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="fitto_plant_protein.box3" /></label>
                    <select className="form-select" onChange={this.boxFitto} name="box3" aria-label="Default select example">
                      <option value={valuebox3}>{valuebox3}</option>
                      {fitto.map((fitto, i) => (
                        valuebox3 !== fitto ?
                          <option key={i} value={fitto}>{fitto}</option>
                          : null
                      )
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="padding-top2">
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                  <button className="btn bottom-pink" type="button" onClick={() => this.onNextPage()}>
                    <IntlMessages id="next" />
                  </button>
                  {/* <Link to="/shipping_address" className="btn bottom-pink" type="button">ถัดไป</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, exerciseProgram, shippingAddress, settings, get, authUser, update }) => {
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  /*   const { products_list } = shippingAddress; */
  const { fittoPlant } = update;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  const { user } = authUser;
  const { delivery_address, products_list } = get;
  return { create_user_email, user_program_id, products_list, locale, user, fittoPlant };
};

const mapActionsToProps = { getUserProgram, updateFittoPlant };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Fitto_Plant_Protein);