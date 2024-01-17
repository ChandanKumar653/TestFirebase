import React from "react";
import { StyledBottomHeader } from "./content.style";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function SearchBar() {
  const dummyImages = [
    "https://images7.alphacoders.com/563/563312.jpg",
    "https://i.pinimg.com/originals/be/fb/c7/befbc7dafe7d22e7c65f276481caeddf.jpg",
    "https://www.desktopbackground.org/download/1600x900/2012/01/02/322061_1080p-hd-wallpaper-for-heavy-bikes-3-jpg_1798x1005_h.jpg",
    // Add more dummy images as needed
  ];

  const CustomArrowButton = ({ direction, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        [direction]: 0,
      }}
    >
      {direction === "next" ? (
        <ArrowForward fontSize="large" />
      ) : (
        <ArrowBack fontSize="large" />
      )}
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrowButton direction="next" />,
    prevArrow: <CustomArrowButton direction="prev" />,
  };

  return (
    <StyledBottomHeader>
      <Slider {...settings} sx={{ height: "100%" }}>
        {dummyImages.map((image, index) => (
          <Box key={index} sx={{ height: "100%", maxWidth: "100%" }}>
            <img
              src={image}
              alt={"Slide ${index}"}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </StyledBottomHeader>
  );
}
