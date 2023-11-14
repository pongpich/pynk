import React, { useState, useEffect } from "react";
import "../css/shop_category.css";
import colors from "../colors";
import Footer from "../footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

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
  const [itemOffset, setItemOffset] = useState(0);
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

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product && product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product && product.length / itemsPerPage);
  const maxItemOffset = (pageCount - 1) * itemsPerPage;
  // Invoke when user click to request another page.

  useEffect(() => {
    setProductSlice(currentItems);
  }, [product, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;

    setItemOffset(newOffset);
  };

  const pagination_category = () => {
    return (
      <ReactPaginate
        previousLabel={
          <img
            src={itemOffset === 0 ? chevron_left_default : chevron_left}
            alt="Previous"
            style={{ width: "24px", height: "24px" }}
          />
        }
        nextLabel={
          <img
            src={
              itemOffset === maxItemOffset
                ? chevron_right_default
                : chevron_right
            }
            alt="Previous"
            style={{ width: "24px", height: "24px" }}
          />
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"} // Replace with your CSS class name
        activeClassName={"active-pagination"} // Replace with your CSS class name
      />
    );
  };

  const text = "Bebe Fit Routine Dumbbell Set Mickey And Friend Collection แถม";
  console.log("text", text.length);

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
              className="form-select text-category-select"
              aria-label="Default select example"
              onChange={selectCategory}
            >
              {/* <option selected disabled>
                Open this select menu
              </option> */}
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
        <div className="product-center">
          {productSlice &&
            productSlice.map((item, index) => (
              <div className="product-left">
                <Link to={`/shop_details/${item.product_id}`}>
                  <div className="product-category " key={index}>
                    <div className="box-item-hover cursor-pointer">
                      <p className="hot-shop-details">HOT</p>
                      <img src={item.image_url} className="image-slider" />
                      <div className="slider-hr" />
                      <p className="text-center text-head-slider white-space-ellipsis">
                        {item.product_name}
                      </p>
                      {
                        item.after_discount ?
                          <p className="text-center text-slider-hover">
                            ฿{item.after_discount.toLocaleString()}{" "}
                            <span className="slide-span">฿{item.price.toLocaleString()} </span>
                          </p>
                          :
                          <p className="text-center text-slider-hover">
                            ฿{item.price.toLocaleString()}{" "}
                          </p>
                      }

                      <button
                        type="button"
                        className="btn  add-shopping-bag"
                        style={{
                          backgroundColor: colors.primary4,
                          width: "100%",
                          borderRadius: 46,
                          marginTop: 0,

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
              </div>
            ))}
        </div>

        {pageCount > 1 && (
          <div className="box-pagination">{pagination_category()}</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop_category;
