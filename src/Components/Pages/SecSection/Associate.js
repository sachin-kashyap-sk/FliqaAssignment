import { Box } from "@mui/material";
import React from "react";
import profile from "../../../Assets/Associate/Profilefirst.png";
import profileSec from "../../../Assets/Associate/profileSec.png";
import profileThree from "../../../Assets/Associate/profileThree.png";
import profileFour from "../../../Assets/Associate/profileFour.png";
import profileFive from "../../../Assets/Associate/profileFive.png";
import iconFirst from "../../../Assets/Associate/iconFirst.png";
import classes from "../../../StylesContainer/SecSection/SecReview.module.css";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import star from "../../../Assets/Associate/Star.png";
const data = [
  {
    id: 1,
    profile: profile,
    title: "Name Title",
    subTitle: "Location",
    icon: iconFirst,
  },
  {
    id: 2,
    profile: profileSec,
    title: "Name Title",
    subTitle: "Location",
    icon: iconFirst,
  },
  {
    id: 3,
    profile: profileThree,
    title: "Name Title",
    subTitle: "Location",
    point: 5.0,
    icon: star,
  },
  {
    id: 4,
    profile: profileFour,
    title: "Name Title",
    subTitle: "Location",
    icon: iconFirst,
  },
  {
    id: 5,
    profile: profileFive,
    title: "Name Title",
    subTitle: "Location",
    point: 5.0,
    icon: star,
  },
];

const Associate = () => {
  return (
    <Box sx={{ paddingTop: "3%" }}>
      <Box
        sx={{
          backgroundColor: "#A1E3D8",
          paddingLeft: "1%",
          paddingRight: "1%",
          paddingBottom: "5%",
        }}
      >
        <Box className={classes.topContainer}>
          <Box>
            <p className={classes.findText}>Find Trusted Associate</p>
            <p className={classes.findTheBest}>
              Find the best Fliqa Associate for your special day.
            </p>
          </Box>

          <Box>
            <p className={classes.seeMore}>See More</p>
          </Box>
        </Box>

        <Box
          sx={{
            paddingTop: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {data.map((item) => (
            <Box key={item.id} className={classes.card}>
              <img src={item.profile} alt="profile" />
              <Box className={classes.cardContainer}>
                <Box>
                  <p className={classes.profileFirstText}>{item.title}</p>
                  <p className={classes.profileFirstText}>{item.subTitle}</p>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ color: "#ffff" }}>{item.point}</p>
                  <Box>
                    <img src={item.icon} alt="iconFirst" />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <FeaturedServices />
    </Box>
  );
};

export default Associate;
