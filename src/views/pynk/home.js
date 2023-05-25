import React, { Component } from "react";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import slide4 from "../../assets/img/home/slide4.png";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    componentDidUpdate(prevState) {
        const {counter} = this.state
        if (prevState.counter !== counter) {
            if(document.getElementById('radio' + counter)){
                document.getElementById('radio' + counter).checked = true;
            }
        }
    }

    autoSlide(){
        const {counter} = this.state
        
        if(counter == 4){
            setTimeout(() => {
                this.setState({
                    counter: 1
                })

            }, 5000);
            
        }else if(counter < 5){
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
                </div>
                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>

            </div>
        )
    }

}

export default Home;