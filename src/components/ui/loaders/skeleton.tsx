import { CSSProperties, ReactElement, ReactNode } from "react";
import styling from "./css/skeleton.module.css";

export const Skeleton = ({
  className = "",
  style,
  width,
  height,
  asSpan = false,
  children = undefined,
}: {
  className?: string;
  style?: CSSProperties;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  asSpan?: boolean;
  children?: ReactElement | ReactNode;
}): ReactElement => {
  const styles: CSSProperties = {
    width: `${width ? `${width}px` : "initial"}`,
    height: `${height ? `${height}px` : "initial"}`,
    display: asSpan ? "inline-block" : "block",
    ...style,
  };
  if (asSpan) {
    return (
      <span
        className={`${styling.animatedLoadingBar} ${className}`}
        style={styles}
      >
        {children}
      </span>
    );
  }
  return (
    <div
      className={`${styling.animatedLoadingBar} ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};
