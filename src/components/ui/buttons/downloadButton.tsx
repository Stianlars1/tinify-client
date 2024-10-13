import { Link } from "next-view-transitions";
import { ReactElement } from "react";

import styles from "./css/button.module.css";
export const DownloadButton = ({
  url,
  children,
  ariaLabel,
  className = "",
  onClick,
}: {
  url: string;
  children: ReactElement;
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      download={true}
      aria-label={ariaLabel}
      className={`${styles.button} ${styles.downloadButton} ${className}`}
      href={url}
      onClick={handleOnClick}
    >
      {children}
    </Link>
  );
};
