import React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { css, theme } from "./../stitches.config";
import { globalStyles } from "../globalReset";

export interface IListingCardSkeletonProps {
  isReady?: boolean;
}

const ListingCardSkeleton = ({
  isReady = false,
}: IListingCardSkeletonProps) => {
  globalStyles();

  const container = css({
    flex: "1 0 100%",
    minWidth: "100px",
    maxWidth: "500px",
    height: "max-content",
    maxHeight: "400px",
    //border: "1px solid rgba(186,186,186,1)",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    display: isReady ? "none" : "block",
  });

  const imageWrapper = css({
    display: "flex",
    position: "relative",
    width: "100%",
    height: "200px",
    overflow: "hidden",
  });

  const imageDiv = css({
    width: "100%",
    flex: "1 0 auto",
    height: "200px",

    zIndex: 0,
  });

  const detailsWrapper = css({
    marginTop: "16px",
    width: "100%",
    height: "60px",
    marginBottom: "16px",
    rowGap: "2px",
    position: "relative",
    padding: "0px 16px",
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

  return (
    <div className={container()}>
      <div className={imageWrapper()}>
        <div className={imageDiv()}>
          <ReactPlaceholder
            type="rect"
            ready={false}
            showLoadingAnimation={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <></>
          </ReactPlaceholder>
        </div>
      </div>
      <div className={detailsWrapper()}>
        <ReactPlaceholder
          type="text"
          rows={3}
          ready={false}
          showLoadingAnimation={true}
          style={{
            width: "55%",
            height: "40px",
          }}
        >
          <></>
        </ReactPlaceholder>
        <div className={rating()}>
          <ReactPlaceholder
            type="round"
            rows={1}
            ready={false}
            showLoadingAnimation={true}
            style={{
              width: "50px",
              height: "20px",
            }}
          >
            <></>
          </ReactPlaceholder>
        </div>
      </div>
    </div>
  );
};

export default ListingCardSkeleton;
