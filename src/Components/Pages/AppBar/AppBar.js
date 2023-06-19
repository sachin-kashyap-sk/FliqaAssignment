import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../../../Assets/AppBar/Logo.png";
import Banner from "../../../Assets/AppBar/Banner.png";
import classes from "../../../StylesContainer/AppBar/AppBar.module.css";
import SecSection from "../SecSection/SecSection";
const AppBarHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={classes.appBar}
        sx={{
          backgroundColor: "#131514",
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <img width="190px" height="94px" src={Logo} alt="Logo" />
        </Box>
        <Box className={classes.mainContainer}>
          <ul className={classes.unorderedList}>
            <li>Home</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>

          <Box className={classes.btnContainer}>
            <Button sx={{ color: "#ffffff" }} className={classes.btn}>
              Sign Up
            </Button>
            <Button className={classes.btn} variant="contained">
              Sign In
            </Button>
          </Box>
        </Box>
      </AppBar>
      <Box>
        <img width="100%" height="auto" src={Banner} alt="Banner" />
      </Box>
      <SecSection />
    </Box>
  );
};

export default AppBarHeader;
