import { theme } from "./../stitches.config";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { globalStyles } from "../globalReset";
import { styled, css } from "@stitches/react";

export interface INavArrowProps {
  direction?: string;
  clickHandler?: any;
  arrowColor?: string;
  bg?: string;
  border?: string;
  wrapperStyles?: object;
}

export const NavArrowIcons = ({
  direction = "left",
  clickHandler,
  wrapperStyles = {},
  arrowColor = `${theme.colors.black}`,
  bg = `${theme.colors.white}`,
  border = `${theme.colors.barelyGray}`,
}: INavArrowProps) => {
  globalStyles();

  const Wrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    aspectRatio: "1/1",
    borderRadius: "50%",
    border: `1px solid ${border}`,
    cursor: "pointer",
    transition: "$normal",
    outline: "none",
    userSelect: "none",
    background: `${bg}`,

    "&:hover": {
      transform: "scale(1.1)",
    },
  });

  return (
    <>
      <Wrapper onClick={clickHandler} css={{ ...wrapperStyles }}>
        {direction === "left" ? (
          <AiOutlineLeft style={{ strokeWidth: "30", color: arrowColor }} />
        ) : (
          <AiOutlineRight style={{ strokeWidth: "30", color: arrowColor }} />
        )}
      </Wrapper>
    </>
  );
};
