import React, { useEffect, useState } from "react";
import variables from "./variables.module.scss";
import { Button, Divider, Link } from "@mui/material";
import Image from "next/image";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Typography } from "antd";

const ProductContent = ({ product }: any) => {
  const [deviceName, setdeviceName] = useState("");
  useEffect(() => {
    connectedDevice();
  }, []);

  const connectedDevice = () => {
    // detect if it's an Android device
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIPhone =
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i);
    if (isAndroid) {
      setdeviceName("android");
    } else if (isIPhone) {
      setdeviceName("iphone");
    } else {
      setdeviceName("web");
    }
  };

  return (
    <div className={variables.productContentWrap}>
      <div className={variables.brand}>
        <div className={variables.brandName}>{product?.itemBrand?.name}</div>
        <div className={variables.brandImage}>
          {product?.itemBrand?.photoUrl && (
            <Image
              src={product?.itemBrand?.photoUrl}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          )}
        </div>
      </div>
      <div className={variables.productName}>{product?.name}</div>
      <div className={variables.downloadButtonWrap}>
        <Button className={variables.buttonClass} variant="outlined">
          <Link
            sx={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            href={
              deviceName == "android"
                ? `https://play.google.com/store/apps/details?id=ai.findbetter.fbapp`
                : deviceName == "iphone"
                ? `https://apps.apple.com/in/app/findbetter/id1625039512`
                : `https://qwiklyfluttertest.web.app/viewItemPageRoute?itemId=${product?.ref?.id}&sellerId=${product?.queryAttrs?.sellerId}`
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <ElectricBoltIcon /> BUY NOW
          </Link>
        </Button>
      </div>{" "}
      <Divider sx={{ marginTop: 2 }} />
      <Typography
        style={{ fontSize: "25px", fontFamily: "Poppins", fontWeight: 500 }}
      >
        Special Price{" "}
      </Typography>
      <div className={variables.priceSection}>
        <div className={variables.actualprice}>
          ₹{product?.queryAttrs?.discountedPrice}
        </div>
        <div className={variables.discountedPrice}>
          ₹{product?.queryAttrs?.price}
        </div>
      </div>
      {/* <div style={{ display: "flex", gap: "8px" }}>
        <div style={{fontWeight:'bold'}}>By</div>
        <div style={{ color: "green" }}>
          <Avatar
            alt="Seller Profile"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
        </div>
        <div>Seller</div>
      </div> */}
      <Divider />
      <div className={variables.brand}>
        <div className={variables.brandName}>
          {" "}
          <span style={{ color: "#808080", fontStyle: "oblique" }}>
            In
          </span>{" "}
          {product?.queryAttrs?.type}
        </div>
        <div className={variables.brandImage}>
          <span
            style={{
              color: product?.queryAttrs?.available ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {product?.queryAttrs?.available ? "Available" : "Not Available"}
          </span>
        </div>
      </div>
      <div className={variables.brand}>
        <div className={variables.brandName}>Location</div>
        <div className={variables.brandImage}>
          {product?.queryAttrs?.address?.city}
        </div>
      </div>
      <div className={variables.brand}>
        <div className={variables.brandName}>Condition</div>
        <div className={variables.brandImage}>{product?.condition}</div>
      </div>
      <Divider />
      <Typography
        style={{ fontWeight: "500", fontFamily: "Poppins", fontSize: "25px" }}
      >
        About
      </Typography>
      <div style={{ fontWeight: "bold" }}>Description</div>
      <div style={{ fontSize: "14px", color: "#676767" }}>
        {product?.description}
      </div>
      <Divider />
    </div>
  );
};

export default ProductContent;
