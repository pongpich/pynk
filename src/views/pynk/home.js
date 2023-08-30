import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import slide4 from "../../assets/img/home/slide4.png";
import home2 from "../../assets/img/home/home_2.png";
import home2_1 from "../../assets/img/home/home2_1.png";
import home2_2 from "../../assets/img/home/home2_2.png";
import frame37407 from "../../assets/img/home/frame37407.png";
import frame37408 from "../../assets/img/home/frame37408.png";
import frame37409 from "../../assets/img/home/frame37409.png";
import frame37410 from "../../assets/img/home/frame37410.png";
import frame37545 from "../../assets/img/home/frame37545.png";
import frame37399 from "../../assets/img/home/frame37399.png";
import frame37547 from "../../assets/img/home/frame37547.png";
import frame37549 from "../../assets/img/home/frame37549.png";
import footer from "../../assets/img/home/footer.png";
import pinklogo from "../../assets/img/home/pinklogo.png";
import phonelogo from "../../assets/img/home/phonelogo.png";
import emaillogo from "../../assets/img/home/emaillogo.png";
import social from "../../assets/img/home/social.png";
import footer51 from "../../assets/img/home/footer51.png";
import "./css/home.css";
import Footer from "./footer";
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(3);

    // const increase = () => {
    //     setCount(count + 1);
    // }

    // componentDidUpdate(prevState) {
    //     const { counter } = this.state
    //     if (prevState.counter !== counter) {
    //         if (document.getElementById('radio' + counter)) {
    //             document.getElementById('radio' + counter).checked = true;
    //         }
    //     }
    // }
    const componentDidUpdate = () => {
        // if (.counter !== counter) {
        if (document.getElementById('radio' + counter)) {
            document.getElementById('radio' + counter).checked = true;
        }
        // }
    }
    const autoSlide = () => {

        if (counter == 4) {
            console.log('bbbbb');
            setTimeout(() => {
                setCounter(1);
            }, 5000);

        } else if (counter < 5) {
            // console.log('xxx');
            // document.getElementById('radio' + counter);
            setTimeout(() => {
                setCounter(counter + 1);

            }, 5000);
        }

    }
    useEffect(() => {
        componentDidUpdate();
        autoSlide();
        // onChange();
    }, []);

    const onChange = ({ target }) => setCounter(target.counter);
    return (
        <div>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />
                    {/* <input type="radio" name="radio-btn" id={counter} /> */}

                    <div className="slide first">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide4} alt="" />
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                    <div className="box_text_home1">
                        <p className="text-home1-48px">เริ่มต้นฟิต</p>
                        <p className="text-home1-48px">พิชิตหุ่นในฝัน</p>
                        <p className="text-home1-24px">Daily Fit For a Better Life</p>
                        <a
                            // href="https://fittowhey.com/8week/complete"
                            onClick={() => history.push("/questionare")}
                            className="btn  bold button-home1 col-10 col-sm-10"
                            type="button"
                        >
                            <p style={{ width: "100%", top: "30%", left: "0%", position: "absolute" }}>เริ่มฟิตไปด้วยกัน</p>
                        </a>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>

            </div>

            {/* <div className="home2"> */}
            <img src={frame37407} alt="" className="frame37407" />
            {/* <p className="text48">บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน</p> */}
            <img src={frame37408} alt="" className="frame37408" />

            <div class="stayfit_item_grid">
                <div class="grid-item"> <img src={frame37409} className="frame37409" alt="" /></div>
                <div class="grid-item"><img src={frame37410} className="frame37410" alt="" /></div>
            </div>
            {/* <div class="stayfit_item">
                <div class="column" >
                    <img src={frame37409} alt="" className="frame37409" />
                </div>
                <div class="column" >
                    <img src={frame37410} alt="" className="frame37410" />
                </div>
            </div> */}
            {/* </div> */}

            <div className="bubble" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */>
                <img src={frame37545} alt="" className="frame37545" />
            </div>
            <div className="background37399" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */>
                <img src={frame37547} alt="" className="frame37547" />
            </div>

            <img src={frame37549} alt="" className="frame37549" />
            

            <Footer />
        </div>
        
    )
}

export default Home;