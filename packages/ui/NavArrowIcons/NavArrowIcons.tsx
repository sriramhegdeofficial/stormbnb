import { css } from "./../stitches.config";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { globalStyles } from "../globalReset";

export interface INavArrowProps {
  direction?: string;
  clickHandler?: () => void;
}

export const NavArrowIcons = ({
  direction = "left",
  clickHandler,
}: INavArrowProps) => {
  globalStyles();
  return (
    <>
      <div className={wrapper()} onClick={clickHandler}>
        {direction === "left" ? (
          <AiOutlineLeft style={{ strokeWidth: "30" }} />
        ) : (
          <AiOutlineRight style={{ strokeWidth: "30" }} />
        )}
      </div>
    </>
  );
};

const wrapper = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "1px solid $barelyGray",
  cursor: "pointer",
  transition: "$normal",
  outline: "none",
  userSelect: "none",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
