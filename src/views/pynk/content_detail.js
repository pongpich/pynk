import React, { useState, useEffect, useRef, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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
import "./css/content_detail.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Content_detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { getContents, dataPage } = useSelector(({ contents }) =>
    contents ? contents : null
  );
  const [products, setProducts] = useState([]);
  const [contents, setContents] = useState(dataPage ?? []);
  const [xxxxx, setXxxxx] = useState([]);
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

  // useEffect(() => {
  //     if (status_data_page == "success") {
  //       history.push(`/content_detail/${contents.id}`);
  //     }
  //   }, [status_data_page]);
  useEffect(() => {
    (async () => {
      // const requrl = (contents.acf.page_link).replace('https://content.pynk.co/','');;
      // const requrl2 = 'https://content.pynk.co/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug='+requrl;
      // const req = await fetch(contents.acf.page_link);
      if (contents.acf.page_link) {
        const requrl = contents.acf.page_link.replace(
          "https://content.pynk.co/",
          "https://content.pynk.co/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug="
        );
        const req = await fetch(requrl);
        const page = await req.json();
        setXxxxx(page);
      }
    })();
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <Box>
              {xxxxx.length == 0 ? (
                <Stack mt={5} width={500}>
                  <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Stack>
              ) : (
                xxxxx.map((page, index) => (
                  <div key={index}>
                    <h1 className="title">{page.title.rendered}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: page.content.rendered,
                      }}
                    />
                  </div>
                ))
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mt={{ xs: 0, lg: 5 }} mb={{ xs: 5 }}>
            <Box
              sx={{
                background: "#EF60A3",
                p: 1,
                width: 150,
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              <Typography align="center" variant="subtitle1" color={"#FFFFFF"}>
                บทความแนะนำ
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: "1px solid #4A4A4A",
                borderTopRightRadius: "1rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
            >
              <Stack
                flexDirection={{ xs: "column", sm: "row", lg: "row" }}
                gap={2}
              >
                <img
                  src={slide1}
                  style={{
                    width: { xs: "100%", sm: 180 },
                    height: 100,
                  }}
                  alt="demo"
                />
                <Box>
                  <Typography>
                    This is an example page. It’s different from a blog post
                    because it will stay in one place and will show up in your
                    site
                  </Typography>
                </Box>
              </Stack>
              <Divider sx={{ mt: 2, borderBottomWidth: 3 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Content_detail;
