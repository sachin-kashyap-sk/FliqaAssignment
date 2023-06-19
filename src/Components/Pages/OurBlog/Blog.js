import { Box } from "@mui/material";
import React from "react";
import firstImage from "../../../Assets/Blog/firstImage.png";
import secImage from "../../../Assets/Blog/secImage.png";
import classes from "../../../StylesContainer/Blog/Blog.module.css";
import trendFirst from "../../../Assets/Blog/trendFirst.png";
import trendSec from "../../../Assets/Blog/trendSec.png";
import trendThree from "../../../Assets/Blog/trendThird.png";
import RealWedding from "../RealWedding/RealWedding";

const data = [
  {
    id: 1,
    images: trendFirst,
    title: "Creative Industries are on the verge of depletion due to COVID-19",
    subTitle:
      "In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact",
  },
  {
    id: 2,
    images: trendSec,
    title: "Photography: Expectations vs. Reality ",
    subTitle:
      "Most of the time without any hands-on experience in photography, professional and advanced photography actually",
  },

  {
    id: 3,
    images: trendThree,
    title: "Wedding Photography at Goa",
    subTitle:
      "Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot",
  },
];

const Blog = () => {
  return (
    <>
      <Box sx={{ paddingTop: "3%" }}>
        <Box sx={{ backgroundColor: "#DDF8F3" }}>
          <Box sx={{ paddingLeft: "2%", paddingTop: "2%" }}>
            <p className={classes.blogText}>Our Blogs</p>
            <p className={classes.secBlogText}>Check out our Latest Blog</p>
          </Box>

          <Box className={classes.mainContainer}>
            <Box>
              <Box>
                <img
                  width="500px"
                  height="auto"
                  style={{ position: "absolute" }}
                  src={firstImage}
                  alt="firstImage"
                />
              </Box>
              <Box className={classes.imageText}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "5%",
                    paddingLeft: "5%",
                  }}
                >
                  <p
                    style={{
                      position: "relative",
                      color: "#ffffff",
                      // backgroundColor: "red",
                      fontFamily: "K2D",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Featured on: Sep 15, 2021
                  </p>
                  <p
                    style={{
                      position: "relative",
                      color: "#ffffff",
                      fontFamily: "K2D",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      width: "20%",
                    }}
                  >
                    Wedding Photography at Goa
                  </p>
                </Box>
              </Box>
            </Box>

            <Box sx={{ paddingLeft: "15%" }}>
              <Box>
                <img
                  width="500px"
                  height="auto"
                  style={{ position: "absolute" }}
                  src={secImage}
                  alt="firstImage"
                />
              </Box>
              <Box className={classes.imageText}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "5%",
                    paddingLeft: "5%",
                  }}
                >
                  <p
                    style={{
                      position: "relative",
                      color: "#ffffff",
                      fontFamily: "K2D",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Featured on: Sep 15, 2021
                  </p>
                  <p
                    style={{
                      position: "relative",
                      color: "#ffffff",
                      fontFamily: "K2D",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      width: "55%",
                      // backgroundColor: "pink",
                    }}
                  >
                    Wedding Photography at Goa
                  </p>
                </Box>
              </Box>
            </Box>

            <Box sx={{ paddingLeft: "15%", width: "50%" }}>
              <Box className={classes.trending}>
                <p className={classes.trendingText}>Trending Now</p>
                <Box>
                  <p className={classes.trendingText}>View All</p>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box className={classes.trendContainer}>
                    {data.map((item) => (
                      <Box
                        key={item.id}
                        x
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        <img
                          width="100px"
                          height="auto"
                          src={item.images}
                          alt="trendFirst"
                        />
                        <Box sx={{ width: "50%" }}>
                          <p className={classes.covidText}>{item.title}</p>
                          <p className={classes.covidText}>{item.subTitle}</p>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <RealWedding />
    </>
  );
};

export default Blog;
