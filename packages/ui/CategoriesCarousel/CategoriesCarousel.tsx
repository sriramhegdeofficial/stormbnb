import React from "react";
import { css, theme } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";

export interface ICategoriesCarouselProps {
  stepper?: number;
  itemSpace?: number;
}

export const CategoriesCarousel = ({
  stepper = 200,
  itemSpace = 60,
}: ICategoriesCarouselProps) => {
  globalStyles();

  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const scrollableWidth = React.useRef<number>(0);
  const totalSteps = React.useRef<number>(0);
  const lastStep = React.useRef<number>(0);

  React.useEffect(() => {
    if (wrapperRef.current !== null && carouselRef.current !== null) {
      scrollableWidth.current =
        carouselRef.current.offsetWidth - wrapperRef.current.offsetWidth;
      totalSteps.current = Math.floor(scrollableWidth.current / stepper);
      lastStep.current = scrollableWidth.current % stepper;
    }
  }, [wrapperRef.current?.offsetWidth, carouselRef.current?.offsetWidth]);

  const translater = () => {
    if (sliderValue <= totalSteps.current) {
      return `translateX(-${sliderValue * stepper}px)`;
    } else {
      return `translateX(-${(sliderValue - 1) * stepper + lastStep.current}px)`;
    }
  };

  const sliderHandler = (direction: string) => {
    if (direction === "+") {
      //do something
      if (sliderValue < totalSteps.current + 1) {
        setSliderValue(sliderValue + 1);
      }
    } else {
      //something else

      if (sliderValue > 0) {
        setSliderValue(sliderValue - 1);
      }
    }
  };

  const container = css({
    width: "100%",
    minWidth: "360px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${theme.colors.barelyGray}`,
    columnGap: "40px",
  });

  const wrapper = css({
    flex: 1,
    height: "100%",
    overflow: "hidden",
    scrollBehavior: "smooth",
  });

  const carouselWrapper = css({
    width: "fit-content",
    height: "100%",
    transition: "$normal",
    transform: translater(),
    zIndex: "-100",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollBehavior: "smooth",
    columnGap: `${itemSpace}px`,
    span: {
      whiteSpace: "nowrap",
      maxWidth: "300px",
      width: "max-content",
      display: "block",
    },
  });

  return (
    <>
      <div className={container()}>
        <NavArrowIcons
          direction="left"
          clickHandler={() => sliderHandler("-")}
          wrapperStyles={{
            opacity: `${sliderValue > 0 ? "1" : "0"}`,
            pointerEvents: `${sliderValue > 0 ? "auto" : "none"}`,
          }}
        />
        <div className={wrapper()} ref={wrapperRef}>
          <div className={carouselWrapper()} ref={carouselRef}>
            <span>crib</span>
            <span>house</span>
            <span>bungalow</span>
            <span>hotel & spa</span>
            <span>restaurant</span>
            <span>drink n dine</span>
            <span>oyo</span>
            <span>seaside</span>
            <span>vacation & holiday</span>
            <span>PG</span>
          </div>
        </div>
        <NavArrowIcons
          wrapperStyles={{
            transition: "$normal",
            // opacity: `${sliderValue <= totalSteps.current ? "1" : "0"}`,
            // pointerEvents: `${
            //   sliderValue <= totalSteps.current ? "auto" : "none"
            // }`,
          }}
          direction="right"
          clickHandler={() => sliderHandler("+")}
        />
      </div>
    </>
  );
};
