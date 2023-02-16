import { css } from "./../stitches.config";
import { globalStyles } from "../globalReset";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

export const ListingCard = () => {
  globalStyles();

  return (
    <>
      <div className={wrapper()}>
        <Image
          className={image()}
          src="https://picsum.photos/500/360"
          alt="listing image"
          width={600}
          height={360}
        />
        <div className={detailsWrapper()}>
          <span className={title()}>CapeTown, SA</span>
          <span className={distance()}>6,300 kilometers away</span>
          <span className={price()}>
            $400 <span>night</span>
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
  flex: "1",
  minWidth: "300px",
  maxWidth: "500px",
  height: "fit-content",
  border: "1px solid rgba(186,186,186,0)",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "$normal",
  "&:hover": {
    border: "1px solid rgba(186,186,186,1)",
    boxShadow: "0px 3.6681px 3.6681px rgba(186, 186, 186, 0.7)",
  },
});

const image = css({
  width: "100%",
  height: "360px",
  objectFit: "cover",
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
    fontWeight: "300",
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
