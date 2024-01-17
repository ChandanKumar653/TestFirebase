import React, { useEffect, useState } from "react";
import { Carousel, Image } from "antd";
import { useMediaQuery } from "@mui/material";

const SwipeableTextMobileStepper = (props: any) => {
  const [images, setImages] = useState<any>([]);
  useEffect(() => {
    let image: any = [];
    props?.product?.itemVariants?.[0]?.media.map((img: any) => {
      image.push(img?.url);
    });
    setImages(image);
  }, [props.product]);
  const matches = useMediaQuery("(min-width:860px)");
  return (
    <Carousel autoplay>
      {images.map((item: any) => (
        <Image
          key={"key"}
          src={item}
          width={"100%"}
          height={!matches ? 280 : 450}
          alt="Product Image"
        />
      ))}
    </Carousel>
  );
};

export default SwipeableTextMobileStepper;
