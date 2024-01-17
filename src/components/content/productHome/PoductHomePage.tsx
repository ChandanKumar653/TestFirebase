"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import {
  StyledDivWrap,
  StyledBottomHeader,
  StyledCategoryButton,
  content,
  categoryButtonStyle,
  categoryButtonText,
  subCategoryChip,
} from "./content.style";
import Image from "next/image";
import { Breadcrumbs, Button, Chip } from "@mui/material";
import axios from "axios";
import { useLoader } from "@/utils/useLoader";
import { themeColor } from "@/utils/constants";
import Skeleton from "@mui/material/Skeleton";
import variables from "../variables.module.scss";
import { useRouter } from "next/navigation";
import SearchBar from "./searchBar";

const ProductHome = (node: any) => {
  const [activebutton, setActiveButton] = React.useState<string | number>("");
  const [allProduct, setAllProduct] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [parentCategory, setParentCategory] = React.useState<any>([]);
  const [categoryState, setCategoryState] = React.useState<any>([]);
  const [subCategoryState, setSubcategoryState] = React.useState<any>([]);
  const [breadcrumbState, setBreadcrumbState] = React.useState<any>([]);
  const [levelClicked, setLevelClicked] = React.useState<boolean>(false);
  const { showLoader } = useLoader();
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    getAllProduct();
    getTabData();
    setLoading(false);
  }, []);

  const getTabData = () => {
    axios
      .get(
        `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/taxonomy`
      )
      .then((response) => {
        setCategoryState(response?.data?.children);
        let temp: any = [];
        temp.push(response?.data?.children);
        setParentCategory(temp);
      });
  };

  const handleClearFilter = () => {
    getAllProduct();
    setActiveButton("");
    getTabData();
  };

  const getAllProduct = () => {
    setLoading(true);
    axios
      .get(
        `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/items`
      )
      .then((response: any) => {
        let data = response.data;
        setAllProduct(data);
        setLoading(false);
      });
  };
  ``;
  const getCategoryProduct = (id: any) => {
    setLoading(true);
    axios
      .get(
        `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/item-pages?categoryId=${id}&afterTime=1690979928`
      )
      .then((response: any) => {
        let data = response.data;
        setAllProduct(data);
        setLoading(false);
      });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    id: string | number
  ) => {
    setLoading(true);
    if (activebutton == id) {
      setActiveButton("");
    } else {
      setActiveButton(id);
      let selectedCategory = categoryState.filter((cat: any) => cat.id === id);
      setSubcategoryState(selectedCategory[0]?.children);
      let temp = [...breadcrumbState];
      if (levelClicked == true) {
        temp.pop();
        temp.push(selectedCategory[0]);
      } else {
        temp.push(selectedCategory[0]);
      }
      setBreadcrumbState(temp);
      setLevelClicked(true);
    }
    getCategoryProduct(id);
  };

  const handleSubCatClick = (id: any) => {
    let parentTemp = parentCategory;
    parentTemp.push(subCategoryState);
    setParentCategory(parentTemp);
    let selectedCategory = subCategoryState.filter((cat: any) => cat.id === id);
    setCategoryState(subCategoryState);
    setSubcategoryState(selectedCategory[0]?.children);
    setActiveButton(id);
    getCategoryProduct(id);
    let temp = [...breadcrumbState];
    temp.push(selectedCategory[0]);
    setBreadcrumbState(temp);
  };

  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 1;
    if (bottom) {
      let apiAddress;
      setLoading(true);
      if (activebutton != "") {
        apiAddress = `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/item-pages?afterTime=1692353000`;
      } else {
        apiAddress = `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/item-pages?categoryId=${activebutton}&afterTime=1690979928`;
      }
      axios.get(apiAddress).then((response: any) => {
        let data = response.data;
        const x = allProduct;
        let children: any = x.concat(data);

        setAllProduct(children);
        setLoading(false);
      });
    }
  };

  const handleBreadCombClick = (val: any, index: any) => {
    /**
     * to update breadcumb state as we have to remove the elemet which is after clicked element
     */
    let temp = [...breadcrumbState];
    temp.splice(index + 1, temp.length - index - 1); // remove the extra element from the array
    setBreadcrumbState(temp);

    getCategoryProduct(val?.id);
    setActiveButton(val?.id);
    setCategoryState(parentCategory[index]);
    setSubcategoryState(val?.children);
    /**
     * for updating the parentCategory State as we have to remove the elemet which is after clicked element
     */
    let parentTemp = [...parentCategory];
    parentTemp.splice(index + 1, parentTemp.length - index - 1);
    setParentCategory(parentTemp);
  };

  const SkeletonComponent = () => {
    return (
      <>
        <Skeleton
          variant="rectangular"
          sx={{ minWidth: "13.4rem", minHeight: "12.5rem" }}
        />
        {/* <Skeleton variant="rectangular" width={'13.4rem'} height={'12.5rem'} />
        <Skeleton variant="rectangular" width={'13.4rem'} height={'12.5rem'} /> */}
      </>
    );
  };

  return (
    <>
      {/* {loading && showLoader(loading)} */}

      <SearchBar />

      <StyledBottomHeader sx={{ margin: "0" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Button
            sx={{
              color: themeColor,
              // fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "12px",
            }}
            onClick={() => {
              /**
               * this click is almost equal to initial landing page
               */
              setCategoryState([]);
              setSubcategoryState([]);
              setBreadcrumbState([]);
              getTabData();
              getAllProduct();
              setActiveButton("");
            }}
          >
            All
          </Button>
          {breadcrumbState.map((val: any, index: number) => (
            <Button
              sx={{
                color: themeColor,
                // fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "12px",
              }}
              key={index}
              onClick={() => {
                handleBreadCombClick(val, index);
              }}
            >
              {val?.name}
            </Button>
          ))}
        </Breadcrumbs>
        <div className={variables.container}>
          {categoryState.map((menu: any, i: any) => (
            <div
              style={{
                ...categoryButtonStyle,
                background: activebutton == menu.id ? "#d74c51" : "#F8F8F8",
                cursor: "pointer",
              }}
              onClick={(e) => handleClick(e, menu.id)}
              key={i}
            >
              {/* <StyledCategoryButton onClick={(e) => handleClick(e, menu.id)}>
                <Image
                  src={menu?.photoUrl}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </StyledCategoryButton> */}
              <div
                style={{
                  ...categoryButtonText,
                  color: activebutton == menu.id ? "white" : "black",
                  fontSize: "15px",
                  wordBreak: "revert",
                  fontWeight: "bold",
                }}
              >
                {menu?.name}
              </div>
            </div>
          ))}
        </div>
        {activebutton != "" && (
          <div className={variables.container}>
            {subCategoryState.map((subCat: any, i: any) => (
              <div style={{ flexFlow: "row wrap" }} key={i}>
                <Chip
                  sx={subCategoryChip}
                  label={subCat.name}
                  variant="outlined"
                  onClick={(e) => handleSubCatClick(subCat.id)}
                />
              </div>
            ))}
          </div>
        )}
      </StyledBottomHeader>

      <div style={content}>
        <StyledDivWrap onScroll={(e) => handleScroll(e)}>
          {loading ? (
            <div
              style={{
                display: "flex",
                gap: "24px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <SkeletonComponent />
              <SkeletonComponent />
              <SkeletonComponent />
            </div>
          ) : (
            <ProductCard
              type=""
              loading={loading}
              allProduct={allProduct.length ? allProduct : []}
            />
          )}
        </StyledDivWrap>
      </div>
    </>
  );
};

export default ProductHome;
