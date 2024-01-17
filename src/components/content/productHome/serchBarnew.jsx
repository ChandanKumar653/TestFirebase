import { useRouter } from "next/navigation";
import { StyledBottomHeader, StyledBottomHeader1 } from "./content.style";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import variables from "../variables.module.scss";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SearchBar() {
  const router = useRouter();
  const dummyImages = [
    "https://images7.alphacoders.com/563/563312.jpg",
    "https://i.pinimg.com/originals/be/fb/c7/befbc7dafe7d22e7c65f276481caeddf.jpg",
    "https://www.desktopbackground.org/download/1600x900/2012/01/02/322061_1080p-hd-wallpaper-for-heavy-bikes-3-jpg_1798x1005_h.jpg",
    // Add more dummy images as needed
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed to 3 seconds
  };
  return (
    <>
      <StyledBottomHeader sx={{ backgroundColor: "transparent" }}>
        <div
          id="search-bar"
          className={variables.searchBox}
          onClick={(e) => {
            router.push("/searchPage");
          }}
          style={{
            borderRadius: "50%",
            border: "1px solid black",
          }}
        />
        <div
          onClick={(e) => {
            router.push("/searchPage");
          }}
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "grey" }} />
          </IconButton>
          {/* <span style={{ color: "grey", margin: "auto" }}>
            search @ findbetter
          </span> */}
        </div>
        {/* <StyledBottomHeader1>
          <Slider {...settings}>
            {dummyImages.map((image, index) => (
              <Box key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </StyledBottomHeader1> */}
      </StyledBottomHeader>
    </>
  );
}
