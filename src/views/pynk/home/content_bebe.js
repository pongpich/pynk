import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
      <Container maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
        <div
          className="d-block d-md-flex justify-content-between"
          style={{ marginBottom: 10 }}
        >
          <p className="text32 SemiBoldPynk mb-0px">
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

        <Grid container spacing={1}>
          {contents
            .filter((item) => item.acf.category.name === "Home")
            .map((content, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={`/content_detail/${content.id}`}>
                  <Card
                    sx={{
                      height: 400,
                      p: 2,
                      border: "none",
                      boxShadow: "none",
                      width: 377,
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
                        maxWidth: 377,
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
              </Grid>
            ))
            .slice(0, 3)}
        </Grid>
      </Container>
    </>
  );
}

export default ContentBebe;
