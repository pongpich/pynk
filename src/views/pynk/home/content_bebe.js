import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Grid, Container } from "@mui/material";

import { getPage } from "../../../redux/pynk/contents";

function ContentBebe() {
  const history = useHistory();

  const [contents, setContents] = useState([]);

  const reqURL =
    "https://content.pynk.co/wp-json/wp/v2/contents?acf_format=standard&_fields=id,title,acf";
  const dispatch = useDispatch();

  const nextPage = (contents) => {
    dispatch(getPage(contents));
  };

  useEffect(() => {
    (async () => {
      const req = await fetch(reqURL);
      const contentsData = await req.json();
      setContents(contentsData);
    })();
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <div className="d-block d-md-flex justify-content-between mb-5">
          <p className="text48 SemiBoldPynk mb-0px">
            เคล็ด (ไม่) ลับ ฉบับอยากแชร์
          </p>
          <button
            className="text18 SemiBoldPynk ef60a3"
            style={{ alignSelf: "center", backgroundColor: "#fff" }}
            onClick={() => {
              history.push("/content");
              window.scrollTo(0, 0);
            }}
          >
            ดูเพิ่มเติม
          </button>
        </div>

        <Grid container spacing={3}>
          {contents
            .filter((item) => item.acf.category.name === "Home")
            .map((content, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <div
                  className="card-content-home5"
                  onClick={() => {
                    history.push(`/content_detail/${content.id}`);
                    nextPage(content);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    className="content_img"
                    src={content.acf.thumbnail}
                    alt={content.title.rendered}
                  />
                  <p className="text24 SemiBoldPynk">
                    {content.title.rendered}
                  </p>
                  <p className="text20 RegularPynk">
                    {content.acf.summary.slice(0, 105) + "..."}
                  </p>
                </div>
              </Grid>
            ))
            .slice(0, 3)}
        </Grid>
      </Container>
    </>
  );
}

export default ContentBebe;
