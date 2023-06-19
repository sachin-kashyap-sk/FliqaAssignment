import { Box } from "@mui/material";
import React from "react";
import classes from "../../../StylesContainer/BestOffer/BestOffer.module.css";
import firstOffer from "../../../Assets/Wedding/offerFirst.png";
import secOffer from "../../../Assets/Wedding/offerSec.png";
import threeOffer from "../../../Assets/Wedding/offerThree.png";
import Testimonial from "../Testimonial/Testimonial";

const data = [
  {
    id: 1,
    image: firstOffer,
    title: "Book Now",
  },
  {
    id: 2,
    image: secOffer,
  },
  {
    id: 3,
    image: threeOffer,
    title: "Book Now",
  },
  {
    id: 4,
    image: firstOffer,
    title: "Book Now",
  },
];
const BestOffer = () => {
  return (
    <Box>
      <Box className={classes.firstContainer}>
        <p className={classes.bestText}>BestOffer</p>
        <p className={classes.secText}>
          Discover the best offers on our services
        </p>
      </Box>
      <Box className={classes.container}>
        {data.map((item) => (
          <Box className={classes.card}>
            <img
              width="200px"
              height="auto"
              src={item.image}
              alt="firstOffer"
            />
            <p>{item.title}</p>
          </Box>
        ))}
      </Box>
      <Testimonial />
    </Box>
  );
};

export default BestOffer;
