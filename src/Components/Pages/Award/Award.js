import { Box } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/Award/Award.module.css";
import firstImage from "../../../Assets/testimonial/firstImage.png";
import secImage from "../../../Assets/testimonial/secImage.png";
import iFirst from "../../../Assets/testimonial/ifirst.png";
import iSec from "../../../Assets/testimonial/iSec.png";
import iThree from "../../../Assets/testimonial/iThree.png";
import sFirst from "../../../Assets/testimonial/sFirst.png";
import sSec from "../../../Assets/testimonial/sSec.png";
import sThree from "../../../Assets/testimonial/sThree.png";
import Success from "../OurSuccess/Success";

const firstData = [
  {
    id: 1,
    image: iFirst,
    text: "4.9/5",
  },
  {
    id: 2,
    image: iSec,
    text: "4.9/5",
  },
  {
    id: 3,
    image: iThree,
    text: "5.0/5",
  },
];

const secData = [
  {
    id: 11,
    image: sFirst,
    text: "4.9/5",
  },
  {
    id: 12,
    image: sSec,
    text: "4.8/5",
  },
  {
    id: 13,
    image: sThree,
    text: "5.0/5",
  },
];
const Award = () => {
  return (
    <>
      <Box sx={{ paddingTop: "4%", paddingLeft: "1%", paddingRight: "1%" }}>
        <Box className={classes.mainContainer}>
          <Box sx={{ width: "50%" }}>
            <Box className={classes.leftSec}>
              <img width="300" src={firstImage} alt="firstImage" />
              <img width="300" src={secImage} alt="secImage" />
            </Box>
          </Box>

          <Box
            sx={{
              width: "20%",
              paddingLeft: "3%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {firstData.map((item) => (
              <Box className={classes.card} key={item.id}>
                <Box>
                  <img width="130px" src={item.image} alt="iFirst" />
                </Box>
                <Box>
                  <p>{item.text}</p>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              width: "20%",
              paddingLeft: "3%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {secData.map((item) => (
              <Box className={classes.card} key={item.id}>
                <Box>
                  <img width="100px" src={item.image} alt="iFirst" />
                </Box>
                <Box>
                  <p>{item.text}</p>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Success />
    </>
  );
};

export default Award;
