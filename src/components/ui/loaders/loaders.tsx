import styles from "./css/loaders.module.css";
export const Spinner = ({
  className = "",
  size = 16,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{ ...style, width: `${size}px`, height: `${size}px` }}
      className={`${styles.spinner} ${className}`}
    />
  );
};
