import { Box, Button } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/FeatureServices/FeatureServices.module.css";
import leftArrow from "../../../Assets/FeatureServices/leftArrow.png";
import rightArrow from "../../../Assets/FeatureServices/rightArrow.png";
import firstImage from "../../../Assets/FeatureServices/firstImage.png";
import secImage from "../../../Assets/FeatureServices/secImage.png";
import thirdImage from "../../../Assets/FeatureServices/thirdImage.png";
import forthImage from "../../../Assets/FeatureServices/forthImage.png";
import banner from "../../../Assets/FeatureServices/banner.png";
import Blog from "../OurBlog/Blog";

const data = [
  {
    id: 1,
    image: firstImage,
    title: "Pre Wedding Photoshoot",
    subTitle: "Starting at 25,000 (One Day)",
  },
  {
    id: 2,
    image: secImage,
    title: "Pre Wedding Photoshoot",
    subTitle: "Starting at 25,000 (One Day)",
  },
  {
    id: 3,
    image: thirdImage,
    title: "Pre Wedding Photoshoot",
    subTitle: "Starting at 25,000 (One Day)",
  },
  {
    id: 4,
    image: forthImage,
    title: "Pre Wedding Photoshoot",
    subTitle: "Starting at 25,000 (One Day)",
  },
];

const FeaturedServices = () => {
  return (
    <Box>
      <Box sx={{ paddingTop: "2%" }}>
        <Box className={classes.firstContainer}>
          <p className={classes.firstText}>Our Featured Services</p>
          <p className={classes.secText}>
            Discover the range of services provided by FliqaIndia
          </p>
        </Box>
        <Box className={classes.container}>
          <img src={leftArrow} alt="leftArrow" />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {data.map((item) => (
              <Box className={classes.card} key={item.id}>
                <img src={item.image} alt="firstImage" />
                <p className={classes.title}>{item.title}</p>
                <p className={classes.secTitle}>{item.subTitle}</p>
                <Box sx={{ paddingTop: "2%", paddingBottom: "3%" }}>
                  <Button
                    sx={{
                      background: "#4E99A4",
                      borderRadius: "10px",
                    }}
                    variant="contained"
                  >
                    Know more
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <img src={rightArrow} alt="rightArrow" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "4%" }}>
        <img width="100%" src={banner} alt="banner" />
      </Box>

      <Box className={classes.popularContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
            alignItems: "center",
            borderBottom: "2px solid #ADA3A3",
            paddingBottom: "2%",
          }}
        >
          <p className={classes.popularText}>Popular : </p>
          <p className={classes.text}>Website Design</p>
          <p className={classes.text}>Logo Design</p>
          <p className={classes.text}>Brochure</p>
          <p className={classes.text}>Label Design</p>
        </Box>
      </Box>
      <Blog />
    </Box>
  );
};

export default FeaturedServices;
