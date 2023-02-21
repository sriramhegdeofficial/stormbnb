import { css, theme } from "./../stitches.config";
import { globalStyles } from "../globalReset";

export interface IPropsMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IPropsMainLayoutProps) => {
  globalStyles();
  return (
    <>
      <div className={layout()}>{children}</div>
    </>
  );
};

const layout = css({
  width: "100%",
  maxWidth: "100%",
  border: "1px solid red",
  overflowX: "hidden",
  // width: "100%",
  // height: "100%",
  // minHeight: "100vh",
  // border: "2px solid red",
  padding: "0px 16px",
});
