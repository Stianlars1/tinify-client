import { ReactElement, ReactNode } from "react";
import styles from "./css/featuresSection.module.css";
export const FeaturesSection = ({
  children,
}: {
  children?: ReactElement | ReactElement[] | ReactNode | ReactNode[];
}) => {
  return <div className={styles.featuresSection}>{children}</div>;
};
