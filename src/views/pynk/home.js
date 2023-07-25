import React, { Component } from "react";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import slide4 from "../../assets/img/home/slide4.png";
import home2 from "../../assets/img/home/home_2.png";
import home2_1 from "../../assets/img/home/home2_1.png";
import home2_2 from "../../assets/img/home/home2_2.png";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    componentDidUpdate(prevState) {
        const { counter } = this.state
        if (prevState.counter !== counter) {
            if (document.getElementById('radio' + counter)) {
                document.getElementById('radio' + counter).checked = true;
            }
        }
    }

    autoSlide() {
        const { counter } = this.state

        if (counter == 4) {
            setTimeout(() => {
                this.setState({
                    counter: 1
                })

            }, 5000);

        } else if (counter < 5) {
            setTimeout(() => {
                this.setState({
                    counter: counter + 1
                })
            }, 5000);
        }
    }



    render() {
        this.autoSlide()

        return (
            <>
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />

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
                        <div className="box-text-home1">
                            <p className="text-home1-48px">เริ่มต้นฟิต</p>
                            <p className="text-home1-48px">พิชิตหุ่นในฝัน</p>
                            <p className="text-home1-24px">Daily Fit For a Better Life</p>
                            <a
                                href="https://fittowhey.com/8week/complete"
                                className="btn  bold button-home1 col-10 col-sm-10"
                                type="button"
                            >
                                <p style={{ width: "100%",top: "30%",left: "0%",position: "absolute" }}>เริ่มฟิตไปด้วยกัน</p>
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

                <div className="home2">
                    <div className="box-text-48">
                        <p className="text48">บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน</p>
                    </div>


                </div>
                <div className="bebe_bubble" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */>

                    {/* <div className="background_Image" style={{ backgroundImage: `url(${home2})`, backgroundSize: '1295px 589px' }} >

                        <div className="box-text-bubble">
                            <p className="text-bubble">คอร์สสอนออกกำลังกายสุดปังจากวงการเบเบ้ ที่จะพาคุณมาอัปเกรดความฟิต ด้วยโปรแกรม 8 สัปดาห์ ที่เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ พร้อมการันตีความสนุก และผลลัพธ์ของการเปลี่ยนแปลง มาแล้วมากกว่าสิบรุ่น!</p>
                        </div>
                    </div> */}
                </div>


                <div className="home2_1">
                    <div className="home2_1_img">
                        <img src={home2_1} alt="vector" className="home2-img " />
                        <img src={home2_2} alt="vector" className="home2-img1 " />
                    </div>

                </div>
            </>
        )
    }

}

export default Home;