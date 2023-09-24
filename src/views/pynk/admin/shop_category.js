import React, { useState, useEffect } from "react";
import "../css/shop_category.css";
import colors from "../colors";
import Footer from "../footer";
import { useSelector, useDispatch } from "react-redux";

import icon_cart_white from "../../../assets/img/pynk/shop/icon_cart_white.png";
import image_product from "../../../assets/img/pynk/shop/image-product.png";

const Shop_category = ({ match }) => {
  const { name } = match.params; // รับ ID จาก URL
  const { products_pynk, status_products_pynk } = useSelector(
    (state) =>
      state.getPynk || { products_pynk: null, status_products_pynk: null } // ใส่การสร้าง object ว่าง {} ถ้า state.getPynk ไม่มีค่า
  );
  const [product, setProduct] = useState(null);
  const [category_name, setCategory_name] = useState(null);
  const dataSelect = [
    { category: "exercise_equipment", name: "อุปกรณ์ ออกกำลังกาย" },
    { category: "fitto_plant_protein", name: "Fitto Plant Protein" },
    {
      category: "fitto_pre_workout_fat_burner",
      name: "Fitto Pre-Work Out & Fat Burner",
    },
    { category: "fitto_drink", name: "Fitto drink" },
    { category: "food_supplement", name: "อาหารเสริม" },
    { category: "another", name: "อื่นๆ" },
  ];
  useEffect(() => {
    setProduct(
      products_pynk && products_pynk.filter((status) => status.category == name)
    );

    if (name == "exercise_equipment") {
      setCategory_name("อุปกรณ์ ออกกำลังกาย");
    } else if (name == "fitto_plant_protein") {
      setCategory_name("Fitto Plant Protein");
    } else if (name == "fitto_pre_workout_fat_burner") {
      setCategory_name("Fitto Pre-Work Out & Fat Burner");
    } else if (name == "fitto_drink") {
      setCategory_name("Fitto drink");
    } else if (name == "food_supplement") {
      setCategory_name("อาหารเสริม");
    } else if (name == "another") {
      setCategory_name("อื่นๆ");
    }
  }, []);

  const selectCategory = (event) => {
    const { value } = event.target;
    setProduct(
      products_pynk &&
        products_pynk.filter((status) => status.category == value)
    );
  };

  return (
    <div className="shop-category">
      <div className="image-background-head">
        <div className="category-name">{category_name && category_name}</div>
      </div>
      <div className="box-category">
        <div className="box-nav-category row">
          <p className="col-12  col-md-9 text-category-select">
            จำนวนทั้งหมด {product ? product.length.toLocaleString() : "0"}{" "}
            รายการ
          </p>
          <div className="col-12 col-md-3">
            <select
              class="form-select text-category-select"
              aria-label="Default select example"
              onChange={selectCategory}
            >
              <option selected disabled>
                Open this select menu
              </option>
              {dataSelect &&
                dataSelect.map((item, index) => (
                  <option
                    value={item.category}
                    key={index}
                    selected={name === item.category}
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {product &&
          product.map((item, index) => (
            <div className="product-category" key={index}>
              <div className="box-item-hover cursor-pointer">
                <p className="hot-shop-details">HOT</p>
                <img src={image_product} className="image-slider" />
                <div className="slider-hr" />
                <p className="text-center text-head-slider">5555</p>
                <p className="text-center text-slider-hover">
                  ฿990 <span className="slide-span">฿199 </span>
                </p>

                <button
                  type="button"
                  className="btn  add-shopping-bag "
                  style={{
                    backgroundColor: colors.primary4,
                    width: "100%",
                    borderRadius: 46,
                    marginTop: 0,
                    marginBottom: 32,
                    border: 0,
                  }}
                >
                  <span className="add_shop-test_span ">
                    <img
                      width={18}
                      height={18}
                      src={icon_cart_white}
                      className="span-img-category"
                    />
                    เพิ่มลงถุงช้อปปิ้ง
                  </span>
                </button>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop_category;
