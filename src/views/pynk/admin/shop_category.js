import React, { useState, useEffect } from "react";
import "../css/shop_category.css";
import colors from "../colors";
import Footer from "../footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import icon_cart_white from "../../../assets/img/pynk/shop/icon_cart_white.png";
import chevron_left_default from "../../../assets/img/pynk/shop/chevron-left-default.png";
import chevron_left from "../../../assets/img/pynk/shop/chevron-left.png";
import chevron_right_default from "../../../assets/img/pynk/shop/chevron-right-default.png";
import chevron_right from "../../../assets/img/pynk/shop/chevron-right.png";

const Shop_category = ({ match }) => {
  const { name } = match.params; // รับ ID จาก URL
  const { products_pynk, status_products_pynk } = useSelector(
    (state) =>
      state.getPynk || { products_pynk: null, status_products_pynk: null } // ใส่การสร้าง object ว่าง {} ถ้า state.getPynk ไม่มีค่า
  );
  const [product, setProduct] = useState(null);
  const [productSlice, setProductSlice] = useState(null);
  const [category_name, setCategory_name] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // จำนวนรายการต่อหน้า

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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = product && product.slice(startIndex, endIndex);
    setProductSlice(currentItems);
    console.log("currentItems", endIndex);
  }, [product, currentPage]);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(product && product.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

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
        {productSlice &&
          productSlice.map((item, index) => (
            <Link to={`/shop_details/${item.product_id}`}>
              <div className="product-category" key={index}>
                <div className="box-item-hover cursor-pointer">
                  <p className="hot-shop-details">HOT</p>
                  <img src={item.image_url} className="image-slider" />
                  <div className="slider-hr" />
                  <p className="text-center text-head-slider">
                    {item.product_name}
                  </p>
                  <p className="text-center text-slider-hover">
                    ฿{item.price.toLocaleString()}{" "}
                    <span className="slide-span">฿199 </span>
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
                      position: "relative",
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
            </Link>
          ))}
        {pageNumbers && pageNumbers.length > 1 && (
          <div className="box-pagination">
            <div className="pagination">
              <img
                src={currentPage == 1 ? chevron_left_default : chevron_left}
                className={
                  currentPage != 1
                    ? "chevron-left cursor-pointer"
                    : "chevron-left"
                }
                onClick={() =>
                  handlePageChange(
                    currentPage == 1 ? currentPage : currentPage - 1
                  )
                }
              />
              {pageNumbers.map((number, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handlePageChange(number)}
                    className={
                      currentPage === number ? "active-pagination" : ""
                    }
                  >
                    {number}
                  </button>
                  {index === pageNumbers.length - 2 &&
                    currentPage < pageNumbers.length - 1 && (
                      <div
                        className="page-item disabled"
                        key={`ellipsis-${index}`}
                      >
                        <span className="page-item-span">...</span>
                      </div>
                    )}
                </React.Fragment>
              ))}
              <img
                src={
                  currentPage == pageNumbers.length
                    ? chevron_right_default
                    : chevron_right
                }
                className={
                  currentPage != pageNumbers.length
                    ? "chevron-right cursor-pointer"
                    : "chevron-right"
                }
                onClick={() =>
                  handlePageChange(
                    currentPage == pageNumbers.length
                      ? currentPage
                      : currentPage + 1
                  )
                }
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop_category;
