import { ReactElement, ReactNode } from "react";
import styles from "./css/pageContainer.module.css";
export const PageContainer = ({
  children,
  fullWidth = false,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  fullWidth?: boolean;
}) => {
  return (
    <div className={fullWidth ? styles.fullWidth : styles.pageContainer}>
      {children}
    </div>
  );
};
