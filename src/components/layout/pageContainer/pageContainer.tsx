import { ReactElement, ReactNode } from "react";
import styles from "./css/pageContainer.module.css";
export const PageContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
}) => {
  return <div className={styles.pageContainer}>{children}</div>;
};
