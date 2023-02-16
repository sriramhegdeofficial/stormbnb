import { css } from "./../stitches.config";
import { globalStyles } from "../globalReset";

export const HamburgerMenuIcon = () => {
  globalStyles();
  return (
    <div className={wrapper()}>
      <div></div>
      <div></div>
    </div>
  );
};

const wrapper = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  cursor: "pointer",

  div: {
    width: "28px",
    height: "3px",
    borderRadius: "5px",
    background: "$black",
    border: "none",
    outline: "none",
    userSelect: "none",
    transition: "$normal",
  },
  "&:hover": {
    div: {
      background: "$lightBlack",
    },
  },
});
