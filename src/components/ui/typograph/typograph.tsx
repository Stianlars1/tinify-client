import { ReactNode } from "react";
import styles from "./css/typograph.module.css";

export const Paragraph = ({
  children,
  muted = false,
}: {
  children: ReactNode | ReactNode[];
  muted: boolean;
}) => {
  return (
    <p className={muted ? styles.paragraphMuted : styles.paragraph}>
      {children}
    </p>
  );
};
