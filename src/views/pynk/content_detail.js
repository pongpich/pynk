import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

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
import { clearGetPage } from "../../redux/pynk/contents";
import { useHistory, useLocation } from "react-router-dom";
import "./css/content.css";

const Content_detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { getContents, dataPage } = useSelector(({ contents }) =>
    contents ? contents : null
  );
  const [products, setProducts] = useState([]);
  const [contents, setContents] = useState(dataPage ?? []);

  const [page, setPage] = useState(9);
  const [totalPage, setTotalpage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  const reqURL =
    "https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf";
  // const page_link = 'https://content.pynk.co/sample-page/';

  // useEffect(() => {
  //     (async () => {
  //         const { data } = await axios.get(
  //             `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
  //         );
  //         const { products } = data;
  //         setProducts(products);
  //         console.log(data, 'product');
  //         setTotalpage(data.total / 10);
  //     })();
  // }, [page]);

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
    dispatch(clearGetPage());
  }, []);

  useEffect(() => {
    setContents(dataPage);
  }, [dataPage]);

  console.log("contents", contents);

  return (
    <div>
      <div className="page">
        <Box sx={{ "& button": { m: 1 } }}>
          <div className="App">xxxxxx</div>
        </Box>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Content_detail;
