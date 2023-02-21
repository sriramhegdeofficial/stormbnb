import React from "react";
import { css, theme } from "./../stitches.config";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";
import { useCarousel } from "use-carousel-hook";
import { globalStyles } from "../globalReset";

export const CategoriesCarousel: React.FC = () => {
  globalStyles();

  const { ref, previous, next, position } = useCarousel<HTMLDivElement>();

  const container = css({
    // border: "2px solid red",
    width: "100%",
    height: "80px",
    borderBottom: `1px solid ${theme.colors.barelyGray}`,
    "@bp2": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // border: "2px solid green",
      borderBottom: `1px solid ${theme.colors.barelyGray}`,
      //padding: "0px 16px",
      //minWidth: "900px",
    },
  });

  const wrapper = css({
    width: "100%",
    height: "100%",
    "@bp2": {
      width: "90%",
      height: "100%",
      display: "flex",
      position: "relative",
      overflow: "hidden",
    },
  });

  const normalWrapper = css({
    flex: "1 0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "scroll",
    columnGap: "40px",
    "&::-webkit-scrollbar": {
      height: "3px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "none",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.colors.primary}`,
      borderRadius: "20px",
    },
    span: {
      display: "flex",
      flex: "1 0 auto",
      justifyContent: "flex-start",
      alignItems: "center",
      textTransform: "capitalize",
      fontSize: "0.75rem",
      width: "max-content",
    },
    "@bp2": {
      display: "none",
    },
  });

  const itemWrapper = css({
    display: "none",
    "@bp2": {
      flex: "1 0 auto",
      width: "100%",
      height: "100%",
      display: "flex",

      span: {
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
      },
    },
  });

  const navIconRightWrapper = css({
    display: "none",
    "@bp2": {
      display: "flex",
      width: "max-content",
      height: "max-content",
      visibility: `${position.isAtEnd ? "hidden" : "visible"}`,
    },
  });

  const navIconLeftWrapper = css({
    display: "none",
    "@bp2": {
      display: "flex",
      width: "max-content",
      height: "max-content",
      visibility: `${position.isAtStart ? "hidden" : "visible"}`,
    },
  });

  return (
    <>
      <div className={container()}>
        <div className={navIconLeftWrapper()}>
          <NavArrowIcons
            wrapperStyles={{
              pointerEvents: `${position.isAtStart ? "none" : "auto"}`,
            }}
            direction="left"
            clickHandler={() => previous(1)}
          />
        </div>
        <div className={wrapper()} ref={ref}>
          <div className={itemWrapper()}>
            <span>Hotel & spa </span>
            <span>beach</span>
            <span>amazing views</span>
            <span>farms</span>
            <span>pubs</span>
          </div>
          <div className={itemWrapper()}>
            <span>amazing pools</span>
            <span>beach front</span>
            <span>countryside</span>
            <span>tiny homes</span>
            <span>darshinis</span>
          </div>
          <div className={itemWrapper()}>
            <span>earth homes</span>
            <span>bungalow</span>
            <span>castles</span>
            <span>national parks</span>
            <span>greenland</span>
          </div>
          <div className={normalWrapper()}>
            <span>Hotel & spa </span>
            <span>beach</span>
            <span>amazing views</span>
            <span>farms</span>
            <span>pubs</span>
            <span>amazing pools</span>
            <span>beach front</span>
            <span>countryside</span>
            <span>tiny homes</span>
            <span>darshinis</span>
            <span>earth homes</span>
            <span>bungalow</span>
            <span>castles</span>
            <span>national parks</span>
            <span>greenland</span>
          </div>
        </div>

        <div className={navIconRightWrapper()}>
          <NavArrowIcons
            wrapperStyles={{
              pointerEvents: `${position.isAtEnd ? "none" : "auto"}`,
            }}
            direction="right"
            clickHandler={() => next(1)}
          />
        </div>
      </div>
    </>
  );
};
