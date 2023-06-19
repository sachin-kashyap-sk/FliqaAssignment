import { Box } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/Success/Success.module.css";
import comFirst from "../../../Assets/testimonial/comOne.png";
import comSec from "../../../Assets/testimonial/comSec.png";
import comThree from "../../../Assets/testimonial/comThree.png";
import comFour from "../../../Assets/testimonial/comFour.png";
import comFive from "../../../Assets/testimonial/comFive.png";
import bannerNew from "../../../Assets/testimonial/bannerNew.png";
import bannerSec from "../../../Assets/testimonial/bannerSec.png";
const data = [
  {
    id: 1,
    image: comFirst,
  },
  {
    id: 2,
    image: comSec,
  },
  {
    id: 3,
    image: comThree,
  },
  {
    id: 4,
    image: comFour,
  },
  {
    id: 5,
    image: comFive,
  },
];

const Success = () => {
  return (
    <>
      <Box sx={{ paddingLeft: "1%", paddingRight: "1%", paddingTop: "2%" }}>
        <Box className={classes.firstContainer}>
          <p className={classes.successText}>Our Success</p>
          <p className={classes.secText}>Journey of our success.</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              // backgroundColor: "red",
              width: "90%",
            }}
          >
            {data.map((item) => (
              <Box className={classes.card}>
                <img src={item.image} alt="ComFirst" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", paddingTop: "2%" }}>
        <img width="100%" src={bannerNew} alt="bannerNew" />
      </Box>

      <Box
        sx={{
          width: "100%",
          paddingTop: "2%",
          paddingLeft: "1%",
          paddingRight: "1%",
          paddingBottom: "3%",
        }}
      >
        <img width="100%" src={bannerSec} alt="bannerSec" />
      </Box>
    </>
  );
};

export default Success;
