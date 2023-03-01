import { css, theme, styled } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import { AiFillStar } from "react-icons/ai";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";
import Image from "next/image";
import React from "react";
import { useCarousel } from "use-carousel-hook";
import CarouselIndicators from "../CarouselIndicators/CarouselIndicators";

const ListingCard = () => {
  globalStyles();
  const { ref, previous, next, position, current } =
    useCarousel<HTMLDivElement>(undefined);

  const navArrowRightStyles = {
    position: "absolute",
    right: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "100",
    transition: "$normal",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: `${position.isAtEnd ? "none" : "flex"}`,
    "&:hover": {
      transform: "scale(1.1) translateY(-50%)",
    },
  };

  const navArrowLeftStyles = {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "100",
    transition: "$normal",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: `${position.isAtStart ? "none" : "flex"}`,
    "&:hover": {
      transform: "scale(1.1) translateY(-50%)",
    },
  };

  const NavArrowWrapper = styled("div", {
    opacity: "0",
    transition: "$normal",
  });

  const wrapper = css({
    flex: "1 0 100%",
    minWidth: "100px",
    maxWidth: "500px",
    height: "max-content",
    maxHeight: "400px",
    border: "1px solid rgba(186,186,186,1)",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "$normal",
    position: "relative",

    "&:hover": {
      border: "1px solid rgba(186,186,186,1)",
      boxShadow: "0px 3.6681px 3.6681px rgba(186, 186, 186, 0.7)",
      [`& ${NavArrowWrapper}`]: {
        opacity: "1",
      },
    },
  });

  const detailsWrapper = css({
    marginTop: "16px",
    width: "100%",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "16px",
    rowGap: "2px",
    position: "relative",
    padding: "0px 16px",
  });

  const title = css({
    fontSize: "0.75rem",
    fontWeight: "600",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "80%",
  });

  const distance = css({
    fontSize: "0.75rem",
    color: "$grandmaGray",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "70%",
  });

  const price = css({
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "$black",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "70%",
    span: {
      fontSize: "1rem",
      fontWeight: "300",
    },
  });

  const imageDiv = css({
    width: "100%",
    flex: "1 0 auto",
    height: "200px",
    // objectFit: "cover",
    zIndex: 0,
    transition: "$normal",
    "&:hover": {
      transform: "scale(1.015)",
    },
  });

  const rating = css({
    fontSize: "1rem",
    fontWeight: "400",
    position: "absolute",
    right: "16px",
    top: "0",
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
  });

  const imageWrapper = css({
    display: "flex",
    position: "relative",
    width: "100%",
    height: "200px",
    overflow: "hidden",
  });
  const indicatorsWrapper = css({
    width: "max-content",
    height: "max-content",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "110px",
    zIndex: "100",
  });

  return (
    <>
      <div className={wrapper()}>
        <div className={indicatorsWrapper()}>
          <CarouselIndicators count={3} currentInd={current} />
        </div>
        <NavArrowWrapper>
          <NavArrowIcons
            wrapperStyles={navArrowLeftStyles}
            direction="left"
            clickHandler={() => previous(1)}
          />
        </NavArrowWrapper>

        <div className={imageWrapper()} ref={ref}>
          <div className={imageDiv()}>
            <img
              src="https://picsum.photos/500/360"
              alt="listing image"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={imageDiv()}>
            <img
              src="https://picsum.photos/500/360"
              alt="listing image"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={imageDiv()}>
            <img
              src="https://picsum.photos/500/360"
              alt="listing image"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <NavArrowWrapper>
          <NavArrowIcons
            wrapperStyles={navArrowRightStyles}
            direction="right"
            clickHandler={() => {
              console.log("hello from navIcon");
              next(1);
            }}
          />
        </NavArrowWrapper>
        <div className={detailsWrapper()}>
          <span className={title()}>CapeTown, SA</span>
          <span className={distance()}>6,300 kilometers away</span>
          <span className={price()}>
            $4070 <span>night</span>
          </span>
          <span className={rating()}>
            <AiFillStar /> 4.5
          </span>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
