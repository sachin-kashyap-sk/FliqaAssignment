import React from "react";
import { Box } from "@mui/material";
import iconFirst from "../../../Assets/AppBar/iconFirst.png";
import iconSec from "../../../Assets/AppBar/iconSec.png";
import iconThree from "../../../Assets/AppBar/iconThree.png";
import iconFour from "../../../Assets/AppBar/iconFour.png";
import classes from "../../../StylesContainer/SecSection/SecReview.module.css";
import Associate from "./Associate";

const Data = [
  {
    id: 1,
    icon: iconFirst,
    title: "Verified Reviewers",
    subTitle: "For verified reviewers",
  },
  {
    id: 2,
    icon: iconSec,
    title: "Top Articles",
    subTitle: "Helps you decide",
  },
  {
    id: 3,
    icon: iconThree,
    title: "Write Share Win Contest",
    subTitle: "Earn cash for reviews",
  },
  {
    id: 4,
    icon: iconFour,
    title: "MouthShut for Brands",
    subTitle: "Request a Demo",
  },
];

const SecReview = () => {
  return (
    <>
      <Box className={classes.mainContainer}>
        {Data.map((item) => (
          <Box key={item.id}>
            <Box className={classes.container}>
              <img
                style={{ paddingRight: "2%" }}
                width="132px"
                height="117px"
                src={item.icon}
                alt="icon"
              />
              <Box className={classes.textContainer}>
                <p className={classes.titleText}>{item.title}</p>
                <p className={classes.subText}>{item.subTitle}</p>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Associate />
    </>
  );
};

export default SecReview;
