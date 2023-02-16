import { css, globalCss } from "./../stitches.config";
import { NavArrowIcons } from "../NavArrowIcons/NavArrowIcons";
import { globalStyles } from "../globalReset";
import * as React from "react";

export const CategoriesCarousel = () => {
  globalStyles();

  const [translateValue, setTranslateValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const viewBoxRef = React.useRef<HTMLDivElement>(null);

  const moveLeft = () => {
    if (viewBoxRef.current !== null && ref.current !== null) {
      if (viewBoxRef.current.offsetLeft <= ref.current.offsetLeft) {
        console.log(viewBoxRef.current.offsetLeft);
        console.log(ref.current.offsetLeft);
        setTranslateValue((prev) => prev - 200);
      }
    }
  };

  const moveRight = () => {
    if (viewBoxRef.current !== null && ref.current !== null) {
      if (
        viewBoxRef.current.offsetLeft + viewBoxRef.current.offsetWidth >=
        ref.current?.offsetLeft + ref.current.offsetWidth
      ) {
        return;
      }
    }
    setTranslateValue((prev) => prev + 200);
  };

  React.useEffect(() => {}, []);

  const wrapper = css({
    width: "100%",
    minWidth: "300px",
    padding: "0px 16px",
    height: "72px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "16px",
  });

  const viewBox = css({
    flex: 1,
    border: "3px dashed red",
    height: "100%",
    overflowX: "scroll",
  });

  const itemContainer = css({
    width: "2200px",
    minWidth: "100%",
    height: "100%",
    background: "pink",
    transition: "$normal",
    transform: `translateX(${translateValue}px)`,
  });

  return (
    <>
      <div className={wrapper()}>
        <NavArrowIcons direction="left" clickHandler={moveLeft} />
        <div className={viewBox()} ref={viewBoxRef}>
          <div className={itemContainer()} ref={ref}></div>
        </div>
        <NavArrowIcons direction="right" clickHandler={moveRight} />
      </div>
    </>
  );
};
