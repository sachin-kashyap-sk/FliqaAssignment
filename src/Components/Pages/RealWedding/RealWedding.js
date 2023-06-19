import { Box, Button } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/RealWedding/RealWedding.module.css";
import firstWedd from "../../../Assets/Wedding/firstWedd.png";
import secWedd from "../../../Assets/Wedding/secWedd.png";
import threeWedd from "../../../Assets/Wedding/threeWedd.png";
import forthWedd from "../../../Assets/Wedding/forthWedd.png";

import iconFirst from "../../../Assets/Wedding/iconFirst.png";
import iconSec from "../../../Assets/Wedding/iconSec.png";
import iconThree from "../../../Assets/Wedding/iconThree.png";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BestOffer from "../BestOffer/BestOffer";

const RealWedding = () => {
  return (
    <>
      <Box sx={{ borderBottom: "2px solid #ADA3A3" }}>
        <Box className={classes.firstContainer}>
          <p className={classes.firstText}>RealWedding</p>
          <p className={classes.secText}>
            List your wedding and browse portfolio
          </p>
        </Box>

        <Box sx={{ paddingLeft: "2%", paddingTop: "2%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "2%",
            }}
          >
            <Box sx={{ backgroundColor: "#DDE4FF" }} className={classes.card}>
              <Box>
                <Box>
                  <img width="300px" src={firstWedd} alt="firstWedd" />
                </Box>
                <Box className={classes.iconContainer}>
                  <img width="100px" src={iconFirst} alt="iconFirst" />
                  <img width="100px" src={iconSec} alt="iconSec" />
                  <img width="100px" src={iconThree} alt="iconThree" />
                </Box>

                <Box sx={{ padding: "2%" }}>
                  <p className={classes.dText}>Danielle & Ronnie</p>
                  <p className={classes.sTitle}>38 photos. Kittery,Polland</p>
                </Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#FBDADA" }} className={classes.card}>
              <Box>
                <Box>
                  <img width="300px" src={secWedd} alt="firstWedd" />
                </Box>
                <Box className={classes.iconContainer}>
                  <img width="100px" src={iconFirst} alt="iconFirst" />
                  <img width="100px" src={iconSec} alt="iconSec" />
                  <img width="100px" src={iconThree} alt="iconThree" />
                </Box>

                <Box sx={{ padding: "2%" }}>
                  <p className={classes.dText}>Danielle & Ronnie</p>
                  <p className={classes.sTitle}>38 photos. Kittery,Polland</p>
                </Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#FFF9D9" }} className={classes.card}>
              <Box>
                <Box>
                  <img width="300px" src={threeWedd} alt="firstWedd" />
                </Box>
                <Box className={classes.iconContainer}>
                  <img width="100px" src={iconFirst} alt="iconFirst" />
                  <img width="100px" src={iconSec} alt="iconSec" />
                  <img width="100px" src={iconThree} alt="iconThree" />
                </Box>

                <Box sx={{ padding: "2%" }}>
                  <p className={classes.dText}>Danielle & Ronnie</p>
                  <p className={classes.sTitle}>38 photos. Kittery,Polland</p>
                </Box>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#DDE4FF" }} className={classes.card}>
              <Box>
                <Box>
                  <img width="300px" src={forthWedd} alt="firstWedd" />
                </Box>
                <Box className={classes.iconContainer}>
                  <img width="100px" src={iconFirst} alt="iconFirst" />
                  <img width="100px" src={iconSec} alt="iconSec" />
                  <img width="100px" src={iconThree} alt="iconThree" />
                </Box>

                <Box sx={{ padding: "2%" }}>
                  <p className={classes.dText}>Danielle & Ronnie</p>
                  <p className={classes.sTitle}>38 photos. Kittery,Polland</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <Button
            sx={
              {
                // backgroundColor: "#DDF9FF",
                // color: "#0000",
              }
            }
            size="medium"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
          >
            View More wedding
          </Button>
        </Box>
      </Box>
      <BestOffer />
    </>
  );
};

export default RealWedding;
