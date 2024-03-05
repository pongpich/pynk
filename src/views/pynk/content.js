import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { clearGetPage, getPage } from "../../redux/pynk/contents";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import title from "../../assets/img/content/Title.png";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import bebe_bubble from "../../assets/img/home/bebe_bubble.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import fit_item from "../../assets/img/home/fit_item.png";
import fitto_item from "../../assets/img/home/fitto_item.png";
import star from "../../assets/img/home/star.png";
import comment1 from "../../assets/img/home/comment1.png";
import comment2 from "../../assets/img/home/comment2.png";
import comment3 from "../../assets/img/home/comment3.png";
import comment4 from "../../assets/img/home/comment4.png";
import comment5 from "../../assets/img/home/comment5.png";
import comment6 from "../../assets/img/home/comment6.png";
import content1 from "../../assets/img/home/content1.png";
import content2 from "../../assets/img/home/content2.png";
import content3 from "../../assets/img/home/content3.png";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import "./css/content.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const cateButton = [
  { title: "ทั้งหมด", category: "All" },
  { title: "อาหาร", category: "Food" },
  { title: "ไลฟ์สไตล์", category: "Lifestyle" },
  { title: "ออกกำลังกาย", category: "Exercise" },
];

const Content = () => {
  const status_data_page = useSelector(({ contents }) =>
    contents ? contents.status_data_page : ""
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [contents, setContents] = useState([]);

  const [page, setPage] = useState(9);
  const [totalPage, setTotalpage] = useState(1);
  const [activeColor, setActiveColor] = useState("All");

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  const reqURL =
    "https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf";

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      const { products } = data;
      setProducts(products);
      setTotalpage(data.total / 10);
    })();
  }, [page]);

  // useEffect(() => {
  //     (async () => {
  //         const { data } = await axios.get(reqURL).json();
  //         const { contents } = data;
  //         setContents(contents);
  //         console.log(data, 'xxx');
  //         // setTotalpage(data.total / 10);
  //     })();
  // });
  useEffect(() => {
    (async () => {
      const req = await fetch(reqURL);
      const contentsData = await req.json();
      setContents(contentsData);
    })();
  }, []);

  const nextPage = (contents) => {
    dispatch(getPage(contents));
  };

  const fetchDataAndFilter = async (cate) => {
    const req = await fetch(reqURL);
    const contentsData = await req.json();
    let filteredData = contentsData;

    if (cate !== "All") {
      filteredData = contentsData.filter(
        (item) => item.acf.category.name === cate
      );
    }
    setContents(filteredData);
  };

  const handleFilterCategory = async (cate) => {
    await fetchDataAndFilter(cate);
    setActiveColor(cate);
  };

  // useEffect(() => {
  //   if (status_data_page == "success") {
  //     history.push(`/content_detail/${contents.id}`);
  //   }
  // }, [status_data_page]);
  return (
    <div>
      <div className="page_title">
        <div className="page_title_text">บทความและสาระดีๆ</div>
        {/* <img src={title} alt="page_title" /> */}
      </div>

      <div className="page">
        <Box sx={{ "& button": { m: 1 } }}>
          <div className="button">
            {cateButton.map((item) => (
              <Button
                sx={{
                  p: "0.3rem !important",
                  width: 120,
                  borderRadius: "1.5rem",
                  color: activeColor == item.category ? "#FFFFFF" : "#EF60A3",
                  border: "1px solid #EF60A3",
                  background:
                    activeColor == item.category ? "#EF60A3" : "#FFFFFF",
                  ":hover": {
                    background: "#FFFFFF",
                    color: "#EF60A3",
                  },
                }}
                variant="contained"
                size="large"
                onClick={() => handleFilterCategory(item.category)}
                key={item.title}
              >
                {item.title}
              </Button>
            ))}
          </div>
          <Container maxWidth="xl">
            <Grid container spacing={1}>
              {contents
                .filter((item) => item.acf.category.name != "Home")
                .map((content, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    {/* <Link to={`/content_detail/${content.id}`} state={{ videoTitle: 'xxxxxxxxx'}}> */}
                    <Link to={`/content_detail/${content.id}`}>
                      <div
                        key={content.id}
                        className="product_single"
                        onClick={() => {
                          nextPage(content);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img
                          className="content_img"
                          src={content.acf.thumbnail}
                          alt={content.title.rendered}
                        />
                        <div
                          className="content_title"
                          style={{ color: "#4F4F4F" }}
                        >
                          {content.title.rendered}
                        </div>
                        <div
                          className="content_summary"
                          style={{ color: "#4F4F4F" }}
                        >
                          {content.acf.summary.slice(0, 120) + "..."}
                        </div>
                      </div>
                    </Link>
                    {/* </Link>  */}
                  </Grid>
                ))}
            </Grid>
          </Container>

          {/* {products.length > 0 && (
                        <div className="products">
                            {products.map((ele) => (
                                <div key={ele.id} className="product_single">
                                    <img src={ele.thumbnail} alt={ele.title} />
                                    <div>{ele.title}</div>
                                </div>
                            ))}
                        </div>
                    )} */}
          {/* {products.length > 0 && (
                        <div className="pagination">
                            {page > 1 && (
                                <span onClick={() => handlePageChange(page - 1)}>Back</span>
                            )}
                            {[...Array(totalPage)].map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={page === i + 1 ? "pagination__selected" : ""}
                                >
                                    {i + 1}
                                </span>
                            ))}
                            {page < totalPage && (
                                <span onClick={() => handlePageChange(page + 1)}>Next</span>
                            )}
                        </div>
                    )}*/}
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
