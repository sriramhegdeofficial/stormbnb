import { css } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import { AiFillStar } from "react-icons/ai";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";
import Image from "next/image";
import React from "react";

// export interface IListingCardProps {
//   imageCount?: number;
// }

export const ListingCard = () => {
  globalStyles();

  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const calculateSliderTranslate = () => {
    //setSliderValue(sliderValue + 1);
    return `-${sliderValue * 100}%`;
  };

  const sliderHandler = (direction: string) => {
    if (sliderValue === 0) {
      if (direction === "+") {
        setSliderValue(sliderValue + 1);
      }
    } else if (sliderValue === 2) {
      if (direction === "-") {
        setSliderValue(sliderValue - 1);
      }
    } else {
      if (direction === "-") {
        setSliderValue(sliderValue - 1);
      } else {
        if (direction === "+") {
          setSliderValue(sliderValue + 1);
        }
      }
    }
  };

  const navArrowRightStyles = {
    position: "absolute",
    right: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "100",
    transition: "$normal",
    display: `${sliderValue === 2 ? "none" : "flex"}`,
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
    display: `${sliderValue === 0 ? "none" : "flex"}`,
    "&:hover": {
      transform: "scale(1.1) translateY(-50%)",
    },
  };

  const carouselWrapper = css({
    display: "flex",
    width: "100%",
    transform: `translateX(${calculateSliderTranslate()})`,
    transition: "$normal",
    pointerEvents: "none",
    "scroll-snap-type": "x mandatory",
    scrollBehavior: "smooth",
  });

  return (
    <>
      <div className={wrapper()}>
        <div className={imageWrapper()}>
          <NavArrowIcons
            wrapperStyles={navArrowLeftStyles}
            direction="left"
            clickHandler={() => sliderHandler("-")}
          />
          <div className={carouselWrapper()}>
            <img
              className={image()}
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
            <img
              className={image()}
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
            <img
              className={image()}
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
            <img
              className={image()}
              src="https://picsum.photos/500/360"
              alt="listing image"
            />
          </div>

          <NavArrowIcons
            wrapperStyles={navArrowRightStyles}
            direction="right"
            clickHandler={() => sliderHandler("+")}
          />
        </div>

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

const wrapper = css({
  flex: "1 0 100%",
  minWidth: "300px",
  maxWidth: "500px",
  height: "fit-content",
  border: "1px solid rgba(186,186,186,1)",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "$normal",
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
  fontSize: "1.33rem",
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
  fontSize: "1rem",
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

const image = css({
  width: "100%",

  height: "360px",
  objectFit: "cover",
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
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
});
