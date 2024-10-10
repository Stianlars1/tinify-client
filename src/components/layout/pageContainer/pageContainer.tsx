import { ReactElement, ReactNode } from "react";
import styles from "./css/pageContainer.module.css";
export const PageContainer = ({
  children,
  fullWidth = false,
  style,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  fullWidth?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={fullWidth ? styles.fullWidth : styles.pageContainer}
    >
      {children}
    </div>
  );
};
