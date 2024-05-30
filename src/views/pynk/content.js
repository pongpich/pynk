import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { getPage } from "../../redux/pynk/contents";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./css/content.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
    "https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf&per_page=100";

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      const { products } = data;
      setProducts(products);
      setTotalpage(data.total / 10);
    })();
    window.scrollTo(0, 0);
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
      console.log('contentsData', contentsData)
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
    <div style={{ marginBottom: 30 }}>
      <div className="page_title">
        <div className="page_title_text">บทความและสาระดีๆ</div>
        {/* <img src={title} alt="page_title" /> */}
      </div>

      <Box sx={{ "& button": { m: 1 }, mt: 4 }}>
        <Container maxWidth="lg">
          <Box
            className="button"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            {cateButton.map((item) => (
              <button
                style={{
                  height: 35,
                  width: 130,
                  borderRadius: "1.5rem",
                  color: activeColor === item.category ? "#FFFFFF" : "#EF60A3",
                  border: "1px solid #EF60A3",
                  background:
                    activeColor === item.category ? "#EF60A3" : "#FFFFFF",
                  fontWeight: 700,
                }}
                onClick={() => handleFilterCategory(item.category)}
                key={item.title}
              >
                {item.title}
              </button>
            ))}
          </Box>
          <Grid container>
            {contents
              .map((content, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  {/* <Link to={`/content_detail/${content.id}`} state={{ videoTitle: 'xxxxxxxxx'}}> */}
                  <Link to={`/content_detail/${content.id}`}>
                    <Card
                      sx={{
                        height: 400,
                        p: 2,
                        border: "none",
                        boxShadow: "none",
                        width: 350,
                      }}
                      onClick={() => {
                        nextPage(content);
                        window.scrollTo(0, 0);
                      }}
                      key={content.id}
                    >
                      <Box
                        component={"img"}
                        sx={{
                          height: "100%",
                          maxHeight: 200,
                          width: "100%",
                          maxWidth: 350,
                          backgroundSize: "cover",
                          borderRadius: "1.5rem",
                        }}
                        src={content.acf.thumbnail}
                        alt={content.acf.thumbnail}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color={"#4F4F4F"}
                          fontWeight={600}
                        >
                          {content.title.rendered.slice(0, 50) + "..."}
                        </Typography>
                        <Typography variant="body2" color="#4F4F4F">
                          {content.acf.summary.slice(0, 120) + "..."}
                        </Typography>
                      </CardContent>
                    </Card>
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
  );
};

export default Content;
