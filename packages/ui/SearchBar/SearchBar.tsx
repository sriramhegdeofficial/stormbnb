import { css } from "./../stitches.config";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <>
      <div className={wrapper()}>
        <span className={time()}>time</span>
        <span className={pipe()}></span>
        <span className={place()}>place</span>
        <span className={pipe()}></span>
        <span className={addGuest()}>add guest</span>
        <div className={icon()}>
          <AiOutlineSearch style={{ color: "white", fontSize: "16px" }} />
        </div>
      </div>
    </>
  );
};

const wrapper = css({
  minWidth: "334px",
  width: "fit-content",
  height: "50px",
  maxHeight: "50px",
  border: "1px solid $barelyGray",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 16px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "$normal",
  "&:hover": {
    boxShadow: "0px 3.6681px 3.6681px rgba(186, 186, 186, 0.7)",
  },
});

const time = css({
  color: "$grandmaGray",
  fontFamily: "Inter, sans-serif",
  fontWeight: "500",
  transition: "all 400ms ease",

  "&:hover": {
    color: "$primary",
  },
});

const place = css({
  color: "$grandmaGray",
  fontFamily: "Inter, sans-serif",
  fontWeight: "500",
  transition: "all 400ms ease",
  "&:hover": {
    color: "$primary",
  },
});

const addGuest = css({
  color: "$black",
  fontFamily: "Inter, sans-serif",
  fontWeight: "300",
});

const icon = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "$primary",
  cursor: "pointer",
  transition: "all 400ms ease",
  outline: "none",
  userSelect: "none",
  "&:hover": {
    background: "$secondary",
  },
});

const pipe = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  width: "0px",
  height: "24px",
  borderRadius: "4px",
  border: "1px solid $barelyGray",
});
