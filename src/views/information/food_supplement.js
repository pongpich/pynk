
import React, { useRef, useState, useEffect } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

/* สำหรับทานอาหารทั่วไป */
import generalFood from '../eatFood_and_supplements/general_food';
import general_food_simpleHealth from '../eatFood_and_supplements/general_food_simpleHealth';
import general_food_recommendedHealth from '../eatFood_and_supplements/general_food_recommendedHealth';
import general_food_eat_foodPprogram from '../eatFood_and_supplements/general_food_eat_foodPprogram';
import general_food_recommendedApproach from '../eatFood_and_supplements/general_food_recommendedApproach';
import general_food_AdditionalAdvice from '../eatFood_and_supplements//general_food_AdditionalAdvice';
/* สำหรับทานอาหารมังสวิรัติ */
import vegetarianFood from '../eatFood_and_supplements/vegetarian_food';
import vegetarian_food_plantBased from '../eatFood_and_supplements/vegetarian_food_plantBased';
import vegetarian_food_recommendedHealth from '../eatFood_and_supplements/vegetarian_food_recommendedHealth';
import vegetarian_food_eat_foodPprogram from '../eatFood_and_supplements/vegetarian_food_eat_foodPprogram';
import vegetarian_food_recommendedApproach from '../eatFood_and_supplements/vegetarian_food_recommendedApproach';
import vegetarian_food_AdditionalAdvice from '../eatFood_and_supplements/vegetarian_food_AdditionalAdvice';

const onChangeManu = (event) => {
  console.log(`${event.target.value}`);

  document.getElementById(`${event.target.value}`).click();

}


const Food_supplement = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),

  ];

  const [articleMain, setArticleMain] = useState();
  const [article, setArticle] = useState();
  const [articleHead, setArticleHead] = useState();
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });
  useEffect(() => {
    if (activeSection <= 6) {
      setArticleMain(0);
      if (activeSection <= 1) {
        setArticle(1);
      } else {
        setArticle(activeSection);

      }

    } else {
      if (activeSection >= 7) {
        setArticleMain(7);
        if (activeSection === 7) {
          setArticle(7);

        } else {
          setArticle(activeSection);

        }
      }
    }
  })
  
  return (
    <>
      <BrowserRouter>
        <div className="box-videoHead">
          <div className="food_supplementHead">
            <p>วิธีการกินอาหารและอาหารเสริม</p>
          </div>
        </div>
        <div className="food_supplement">
          <div className="row row-cols-auto">
            <div className="col-lg-3">
              <div className="navbarLeft">
                <div className="mavbarfood">
                  <div className="manu-scroll">
                    <HashLink smooth to='#generalFood' id="#generalFood" className={articleMain === 0 ? "manuFood-Active" : "manuFood"}>
                      สำหรับทานอาหารทั่วไป
                    </HashLink>
                    <div className="small-box">
                      <div>
                        <HashLink smooth to='#generalFood' id="#generalFood" className={article === 1 ? "maun-small-Active" : "maun-small"}>
                          โปรแกรมอาหาร{"(Nutrition Program)"}
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#general_food_simpleHealth' className={article === 2 ? "maun-small-Active" : "maun-small"}>
                          แนวทางการกินเพื่อสุขภาพแบบง่าย
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#general_food_recommendedHealth' className={article === 3 ? "maun-small-Active" : "maun-small"}>
                          รูปแบบการกินเพื่อสุขภาพที่แนะนำ
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#general_food_eat_foodPprogram' className={article === 4 ? "maun-small-Active" : "maun-small"}>
                          แนวทางการเลือกกินอาหาร
                          ระหว่างอยู่ในโปรแกรม
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#general_food_recommendedApproach' className={article === 5 ? "maun-small-Active" : "maun-small"}>
                          แนวทางที่แนะนำ
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#general_food_AdditionalAdvice' className={article === 6 ? "maun-small-Active" : "maun-small"}>
                          คำแนะนำเพิ่มเติม
                        </HashLink>
                      </div>
                    </div>
                    <div className="vegetarianFood">
                    <HashLink smooth to='#vegetarianFood' id="#vegetarianFood" className={articleMain === 7 ? "manuFood-Active" : "manuFood"}>
                      สำหรับทานอาหารมังสวิรัติ
                    </HashLink>
                    </div>
                    <div className="small-box">
                      <div>
                        <HashLink to='#vegetarianFood'  className={article === 7 ? "maun-small-Active" : "maun-small"}>
                          โปรแกรมอาหารสำหรับผู้ที่เลือกกินอาหาร
                          แบบเน้นพืช และแบบมังสวิรัติเคร่งครัด
                          (Plant-Based Diet and Strict Vegan
                          Nutrition Program)
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#vegetarian_food_plantBased' className={article === 8 ? "maun-small-Active" : "maun-small"}>
                          แนวทางการเลือกกินอาหารแบบเน้นพืช (Plant-Based Diet) และแบบมังสวิรัติเคร่งครัด (Strict Diet) เพื่อสุขภาพ
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#vegetarian_food_recommendedHealth' className={article === 9 ? "maun-small-Active" : "maun-small"}>
                          รูปแบบการกินเพื่อสุขภาพที่แนะนำ
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#vegetarian_food_eat_foodPprogram' className={article === 10 ? "maun-small-Active" : "maun-small"}>
                          แนวทางการเลือกกินอาหาร
                          ระหว่างอยู่ในโปรแกรม
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#vegetarian_food_recommendedApproach' id="#" className={article === 11 ? "maun-small-Active" : "maun-small"}>
                          แนวทางที่แนะนำ
                        </HashLink>
                      </div>
                      <div className="my_space">
                        <HashLink smooth to='#vegetarian_food_AdditionalAdvice' id="#" className={article === 12 ? "maun-small-Active" : "maun-small"}>
                          คำแนะนำเพิ่มเติม
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-12 col-lg-9 ">
              <div className="select-BoxHead">
                <div className="navbarHead  margin-leftRight">
                  <select className="form-select" aria-label="Default select example" name="selectName" onChange={(e) => onChangeManu(e)}>
                    <option value="#generalFood">สำหรับทานอาหารทั่วไป</option>
                    <option value="#vegetarianFood">สำหรับทานอาหารมังสวิรัติ</option>
                  </select>
                  <p className="border-bottom2"></p>
                </div>
              </div>
              <div className="padding-leftRight">
                <div id='generalFood'>
                  <section className="App-section" ref={sectionRefs[1]}>
                    {generalFood()}
                  </section>
                </div>
                <div id='general_food_simpleHealth'>
                  <section className="App-section" ref={sectionRefs[2]}>
                    {general_food_simpleHealth()}
                  </section>
                </div>
                <div id='general_food_recommendedHealth'>
                  <section className="App-section" ref={sectionRefs[3]}>
                    {general_food_recommendedHealth()}
                  </section>
                </div>
                <div id='general_food_eat_foodPprogram'>
                  <section className="App-section" ref={sectionRefs[4]}>
                    {general_food_eat_foodPprogram()}
                  </section>
                </div>
                <div id='general_food_recommendedApproach'>
                  <section className="App-section" ref={sectionRefs[5]}>
                    {general_food_recommendedApproach()}
                  </section>
                </div>
                <div id='general_food_AdditionalAdvice'>
                  <section className="App-section" ref={sectionRefs[6]}>
                    {general_food_AdditionalAdvice()}
                  </section>
                </div>
                <div id='vegetarianFood'>
                  <section className="App-section" ref={sectionRefs[7]}>
                    {vegetarianFood()}
                  </section>
                </div>
                <div id='vegetarian_food_plantBased'> {/* แนวทางการเลือกกินอาหารแบบเน้นพืช (Plant-Based Diet) และแบบมังสวิรัติเคร่งครัด (Strict Diet) เพื่อสุขภาพ */}
                  <section className="App-section" ref={sectionRefs[8]}>
                    {vegetarian_food_plantBased()}
                  </section>
                </div>
                <div id='vegetarian_food_recommendedHealth'>
                  <section className="App-section" ref={sectionRefs[9]}>
                    {vegetarian_food_recommendedHealth()}
                  </section>
                </div>
                <div id='vegetarian_food_eat_foodPprogram'>
                  <section className="App-section" ref={sectionRefs[10]}>
                    {vegetarian_food_eat_foodPprogram()}
                  </section>
                </div>
                <div id='vegetarian_food_recommendedApproach'>
                  <section className="App-section" ref={sectionRefs[11]}>
                    {vegetarian_food_recommendedApproach()}
                  </section>
                </div>
                <div id='vegetarian_food_AdditionalAdvice'>
                  <section className="App-section" ref={sectionRefs[12]}>
                    {vegetarian_food_AdditionalAdvice()}
                  </section>
                </div>

              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
export default Food_supplement;