"use client";
import algoliasearch from "algoliasearch/lite";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import {
  InstantSearch,
  Hits,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
  useHits,
} from "react-instantsearch";
import variables from "./variables.module.scss";
import { searchDropDown } from "./NavBar.style";
import { useRouter } from "next/navigation";
import { StyledDiv, innerScroll } from "../content/productHome/content.style";
import { List } from "@mui/material";
import AlgoliaCard from "../content/productHome/algoliaProductCard";
import { Close } from "@mui/icons-material";

const client = algoliasearch("4QCA3T6BE5", "12ff9522e3252dd0ee31e7bea0e46391");

type HomePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function HomePage({ serverState, url }: HomePageProps) {
  const [display, setDisplay] = useState(true);
  let dropDownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function CustomHits(props: any) {
    const { hits, results, sendEvent } = useHits(props);
    return (
      <>
        {" "}
        <StyledDiv style={{ ...innerScroll }}>
          <List className={variables.viewAllClass}>
            {" "}
            {hits.length > 0 ? (
              hits.map((product) => <AlgoliaCard key={"key"} v={product} />)
            ) : (
              <div>No result Found...</div>
            )}
          </List>
        </StyledDiv>
      </>
    );
  }
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);
  useEffect(() => {
    const handler = (e: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDisplay(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });

  return (
    <InstantSearchSSRProvider {...serverState}>
      <Head>
        <title>React InstantSearch - Next.js</title>
      </Head>

      <InstantSearch searchClient={client} indexName="findbetter-items">
        <div style={{ position: "relative" }}>
          <div></div>
          <div>
            <div
              style={{
                padding: "10px 8px",
                margin: "0 20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  width: "70%",
                }}
              >
                <SearchBox
                  autoFocus={true}
                  ref={searchRef}
                  onKeyDown={() => setDisplay(true)}
                  placeholder="Search @findbetter"
                  style={{ flex: 1 }} // Take up all available horizontal space
                />
              </div>

              <div
                style={{
                  color: "black",
                  position: "absolute",
                  top: 0,
                  right: 10,
                  cursor: "pointer",
                  padding: "2px",
                  fontWeight: "600",
                }}
                onClick={() => router.push("/")}
              >
                <Close
                  color="error"
                  fontWeight="bold"
                  style={{ fontSize: "2em" }}
                />
              </div>
            </div>

            <div
              ref={dropDownRef}
              style={{
                ...searchDropDown,

                display: display ? "" : "none",
              }}
            >
              <CustomHits hitComponent={Hits} />
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async function getServerSideProps({ req }) {
    const protocol = req.headers.referer?.split("://")[0] || "https";
    const url = `${protocol}://${req.headers.host}${req.url}`;
    const serverState = await getServerState(<HomePage url={url} />, {
      renderToString,
    });

    return {
      props: {
        serverState,
        url,
      },
    };
  };
