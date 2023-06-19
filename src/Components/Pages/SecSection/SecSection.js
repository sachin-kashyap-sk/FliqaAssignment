import { Box, Button } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/SecSection/SecSection.module.css";
import SecReview from "./SecReview";
const SecSection = () => {
  return (
    <Box>
      <Box className={classes.container}>
        <p className={classes.firstText}>India’s Leading Creative Platform</p>
        <p className={classes.secText}>
          Experience hassle free bookings. Trusted by 2500+ Customers
        </p>

        <Box className={classes.searchContainer}>
          <input
            className={classes.input}
            placeholder="Search service, blog and many more…"
          />
          <Button
            variant="contained"
            className={classes.searchBtn}
            sx={{
              backgroundColor: "#221010",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <SecReview />
    </Box>
  );
};

export default SecSection;
