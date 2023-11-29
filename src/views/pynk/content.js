import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from "axios";

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

const Content = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [contents, setContents] = useState([]);

    const [page, setPage] = useState(9);
    const [totalPage, setTotalpage] = useState(1);

    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
    };

    const reqURL = 'https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf';

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

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(reqURL);
            const { contents } = data;
            setContents(contents);
            console.log(data,'xxx');
            // setTotalpage(data.total / 10);
        })();
    });
    return (
        <div className="page">


            <img src={title} alt="" />
            <Box sx={{ '& button': { m: 1 } }}>

                <div>
                    <Button variant="outlined" size="medium">
                        ทั้งหมด
                    </Button>
                    <Button variant="outlined" size="medium">
                        อาหาร
                    </Button>
                    <Button variant="outlined" size="medium">
                        ออกกำลังกาย
                    </Button>
                    <Button variant="outlined" size="medium">
                        ไลฟ์สไตล์
                    </Button>
                </div>
                <div className="App">
                   
                     
                   
                     {products.length > 0 && (
                        <div className="products">
                            {products.map((ele) => (
                                <div key={ele.id} className="product_single">
                                    <img src={ele.thumbnail} alt={ele.title} />
                                    <div>{ele.title}</div>
                                </div>
                            ))}
                        </div>
                    )} 
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
                </div>
            </Box>
            <Footer />
        </div>
    );
};

export default Content;
