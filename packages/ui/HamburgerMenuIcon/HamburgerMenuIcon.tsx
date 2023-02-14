import { css } from "./../stitches.config";

export const HamburgerMenuIcon = () => {
  return (
    <div className={wrapper()}>
      <div></div>
      <div></div>
      {/* <div className={menuCss()}></div> */}
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
    transition: "all 400ms ease",
  },
  "&:hover": {
    div: {
      background: "$lightBlack",
    },
  },
});
