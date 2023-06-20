import { Box, Button } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/Footer/LeftSection.module.css";
const LeftSection = () => {
  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.firstInner}>
          <p className={classes.neverText}>Never miss a thing.</p>
          <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "2%" }}>
            <input
              style={{
                textAlign: "center",
                width: "100%",
                borderRadius: "10px",
              }}
              placeholder="Enter Email"
            />
            <Button
              sx={{ backgroundColor: "#E0E0E0", color: "#000" }}
              size="small"
              variant="contained"
            >
              Subscribe
            </Button>
          </Box>
          <p className={classes.inTouch}>Be in touch</p>
        </Box>

        <Box className={classes.secInner}>
          <p className={classes.neverMiss}>Never miss a thing.</p>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <p className={classes.texts}>Services</p>
                <p className={classes.texts}>Blog</p>
              </Box>
              <Box>
                <p className={classes.texts}>Tutorial</p>
                <p className={classes.texts}>Careers</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p className={classes.texts}>Portfolio</p>
              <p className={classes.texts}>Film</p>
            </Box>
          </Box>
        </Box>

        <Box className={classes.thirdInner}>
          <Box>
            <ul className={classes.unorderedList}>
              <li>Never miss a thing</li>
              <li>Contact us</li>
              <li>Feedback</li>
              <li> FAQ </li>
              <li>Terms and conditions </li>
              <li>Privacy Policy</li>
              <li>Data Deletion Protocol</li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#131514",
        }}
      >
        <Box>
          <p className={classes.footerText}>
            2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED
          </p>
          <p className={classes.footerText}>POWERED BY FLIQAINDIA PVT. LTD.</p>
          <p className={classes.footerText}>VERSION 5.1.5</p>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSection;
