import type { NextPage } from "next";
import Head from "next/head";
import { HamburgerMenuIcon, Logo, CategoriesCarousel, SearchBar } from "ui";
import { css } from "ui/stitches.config";
import dynamic from "next/dynamic";
import useMediaQuery from "../hooks/useMediaQueryHook";
import React from "react";
import { useRouter } from "next/router";
import ListingCardSkeleton from "./../../../packages/ui/ListingCard/ListingCard.skeleton";
const ListingCard = dynamic(
  () => import("./../../../packages/ui/ListingCard/ListingCard"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const router = useRouter();
  const bp2 = useMediaQuery("(min-width: 768px)");
  const [logoVariant, setLogoVariant] = React.useState<string>("lite");
  // const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLogoVariant(bp2 ? "default" : "lite");
  }, [bp2]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);
  //   console.log(loading);
  // }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Welcome | StormBnB</title>
      </Head>
      <div className={header()}>
        <div className={logoWrapper()}>
          <Logo variant={logoVariant} />
        </div>

        <div className={searchBarWrapperCenter()}>
          <SearchBar />
        </div>
        <div className={menuWrapper()}>
          <div className={searchBarWrapperBig()}>
            <SearchBar />
          </div>
          <HamburgerMenuIcon />
        </div>
      </div>
      <div className={searchBarWrapper()}>
        <SearchBar />
      </div>

      <CategoriesCarousel />
      <div className={row()}>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        {/* <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div>
        <div className={cardWrapper()}>
          <ListingCard />
        </div> */}
      </div>
    </>
  );
};

const logoWrapper = css({
  flex: 1,
});

const searchBarWrapper = css({
  display: "flex",
  justifyContent: "center",
  "@bp2": {
    display: "none",
  },
});

const header = css({
  width: "100%",
  height: "80px",
  // border: "2px solid green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const menuWrapper = css({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  columnGap: "16px",
  flex: 1,
});

const searchBarWrapperBig = css({
  display: "none",

  "@bp2": {
    display: "flex",
  },

  "@bp3": {
    display: "none",
  },
});

const searchBarWrapperCenter = css({
  display: "none",
  "@bp3": {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
});

const row = css({
  width: "100%",
  height: "max-content",
  display: "flex",
  marginTop: "24px",
  flexWrap: "wrap",
  columnGap: "2%",
  rowGap: "16px",
  justifyContent: "flex-start",
});

const cardWrapper = css({
  width: "100%",
  height: "max-content",
  "@bp1": {
    width: "49%",
  },
  "@bp2": {
    width: "32%",
  },
  "@bp3": {
    width: "23.5%",
  },
});

export default Home;
