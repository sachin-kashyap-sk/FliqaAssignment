import { Box, Button } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/Testimonial/Testimonial.module.css";
import testimonial from "../../../Assets/testimonial/vector.jpg";
import Award from "../Award/Award";
// import avatar from "../../../Assets/testimonial/avatar.png";

const data = [
  {
    id: 1,
    title:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    subTitle: "Ramdom Name",
  },
  {
    id: 2,
    title:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    subTitle: "Ramdom Name",
  },
  {
    id: 3,
    title:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    subTitle: "Ramdom Name",
  },
  {
    id: 4,
    title:
      " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    subTitle: "Ramdom Name",
  },
];
const Testimonial = () => {
  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftSection}>
          <img width="100%" src={testimonial} alt="testimonial" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <Box className={classes.rightSection}>
            <Box>
              <p className={classes.testimonialText}>Testimonials</p>
              <p>Words from our clients</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#4E99A4",
                    color: "#FFFF",
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                  size="small"
                >
                  Google
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{ color: "#000000" }}
                  variant="outlined"
                  size="small"
                >
                  FaceBook
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{ color: "#000000" }}
                  variant="outlined"
                  size="small"
                >
                  Weddingwire
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{ color: "#000000" }}
                  variant="outlined"
                  size="small"
                >
                  WedmeGood
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "3%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "2%",
            }}
          >
            {data.map((item) => (
              <Box className={classes.card}>
                <Box>
                  <p>{item.title}</p>
                  <p className={classes.ramdomName}>{item.subTitle}</p>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Award />
    </Box>
  );
};

export default Testimonial;
