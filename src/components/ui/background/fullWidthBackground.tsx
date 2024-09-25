import { ReactNode } from "react";
import styles from "./css/fullWidthBackground.module.css";
// components/FullWidthBackground.tsx

export const FullWidthBackground = ({
  children,
  top,
  zIndex = -1,
  opacity = 1,
  contain,
  overflow,
  className = "",
}: {
  children: ReactNode;
  top?: string; // Optional top positioning
  zIndex?: number; // Optional z-index control
  opacity?: number; // Optional opacity control
  contain?: boolean; // Optional contain control
  overflow?: boolean; // Optional overflow control
  className?: string; // Optional class name
}) => {
  return (
    <div
      className={`${className} ${styles.fullBackground} ${
        contain ? styles.contain : ""
      } ${overflow ? styles.overflow : ""}`}
      style={{
        top: top || "0px",
        zIndex: zIndex,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
};
