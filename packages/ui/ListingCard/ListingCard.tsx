import { css, theme } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import { AiFillStar } from "react-icons/ai";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";
import Image from "next/image";
import React from "react";
import { useCarousel } from "use-carousel-hook";

export const ListingCard = () => {
  globalStyles();
  const { ref, previous, next, position } = useCarousel<HTMLDivElement>();

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

  const wrapper = css({
    flex: "1 0 100%",
    minWidth: "100px",
    maxWidth: "700px",
    height: "fit-content",
    maxHeight: "400px",
    border: "1px solid rgba(186,186,186,1)",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "$normal",
    position: "relative",
    "&:hover": {
      border: "1px solid rgba(186,186,186,1)",
      boxShadow: "0px 3.6681px 3.6681px rgba(186, 186, 186, 0.7)",
    },
  });

  const detailsWrapper = css({
    marginTop: "16px",
    width: "100%",
    height: "fit-content",
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
    objectFit: "cover",
    position: "relative",
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

  return (
    <>
      <div className={wrapper()}>
        <NavArrowIcons
          wrapperStyles={navArrowLeftStyles}
          direction="left"
          clickHandler={() => previous(1)}
        />
        <div className={imageWrapper()} ref={ref}>
          <div className={imageDiv()}>
            <Image
              src="https://picsum.photos/500/360"
              alt="listing image"
              layout="fill"
            />
          </div>
          <div className={imageDiv()}>
            <Image
              layout="fill"
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
          </div>
          <div className={imageDiv()}>
            <Image
              layout="fill"
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
          </div>
          <div className={imageDiv()}>
            <Image
              layout="fill"
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
          </div>
          <div className={imageDiv()}>
            <Image
              layout="fill"
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
          </div>
        </div>
        <NavArrowIcons
          wrapperStyles={navArrowRightStyles}
          direction="right"
          clickHandler={() => next(1)}
        />
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
