import { ReactElement, ReactNode } from "react";
import styles from "./css/content.module.css";

export const Content = ({
  children,
  className,
  style,
  noExtras = false,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  noExtras?: boolean;
}) => {
  return (
    <div
      className={` ${className} ${
        noExtras ? styles.contentPlain : styles.content
      }`}
      style={style}
    >
      {children}
    </div>
  );
};
