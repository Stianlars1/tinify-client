import { ReactElement, ReactNode } from "react";
import styles from "./css/compressSection.module.css";
export const CompressSection = ({
  children,
}: {
  children?: ReactElement | ReactElement[] | ReactNode | ReactNode[];
}) => {
  return <div className={styles.compressSection}>{children}</div>;
};
