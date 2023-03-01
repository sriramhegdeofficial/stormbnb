import { css, theme } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import React from "react";
import uuid from "react-uuid";

export interface ICarouselIndicatorsProps {
  count?: number;
  currentInd?: number;
}

const CarouselIndicators = ({
  count = 3,
  currentInd = 0,
}: ICarouselIndicatorsProps) => {
  globalStyles();
  const arr = new Array(count).fill(null);

  const wrapper = css({
    display: "flex",
    columnGap: "8px",
    alignItems: "center",
    width: "max-content",
    height: "max-content",
  });

  const container = css({
    transformOrigin: "center center",
    width: "4px",
    height: "4px",
    aspectRatio: "1/1",
    borderRadius: "50%",
    background: theme.colors.white,
    outline: "none",
    userSelect: "none",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
    opacity: "0.7",
  });

  const containerHighlighted = css({
    transformOrigin: "center center",
    width: "7px",
    height: "7px",
    aspectRatio: "1/1",
    borderRadius: "50%",
    background: theme.colors.white,
    border: "none",
    outline: "none",
    userSelect: "none",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
  });

  return (
    <>
      <div className={wrapper()}>
        {arr.map((_, index) => {
          if (index === currentInd) {
            return <div className={containerHighlighted()} key={uuid()}></div>;
          }
          return <div className={container()} key={uuid()}></div>;
        })}
      </div>
    </>
  );
};

export default CarouselIndicators;
