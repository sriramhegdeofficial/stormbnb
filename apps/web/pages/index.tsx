import type { NextPage } from "next";
import Head from "next/head";
import {
  HamburgerMenuIcon,
  Logo,
  CategoriesCarousel,
  SearchBar,
  ListingCard,
} from "ui";
import { css } from "ui/stitches.config";

const Home: NextPage = () => {
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

        <meta name="viewport" content="width=device-width" />
        <meta name="viewport" content="width=450, initial-scale=1.0" />
        <title>Welcome | StormBnB</title>
      </Head>
      <div className={header()}>
        <Logo variant="lite" />
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
        <div className={itemWrapper()}>
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
        </div>
      </div>
      <div className={row()}>
        <div className={itemWrapper()}>
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
        </div>
      </div>
      <div className={row()}>
        <div className={itemWrapper()}>
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
        </div>
      </div>
    </>
  );
};

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
  },
});

const row = css({
  width: "100%",
  height: "max-content",
  display: "flex",
  marginTop: "24px",
});

const itemWrapper = css({
  width: "100%",
  height: "max-content",
  display: "flex",
  flexDirection: "row",
  columnGap: "16px",
});

const cardWrapper = css({
  flex: 1,
  "&:nth-child(n+2)": {
    display: "none",
  },
  "@bp2": {
    "&:nth-child(n+2)": {
      display: "flex",
    },
    "&:nth-child(n+3)": {
      display: "none",
    },
  },
  "@bp3": {
    "&:nth-child(n+3)": {
      display: "flex",
    },
  },
});

export default Home;
