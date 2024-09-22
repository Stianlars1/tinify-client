import styles from "./css/loaders.module.css";
export const Spinner = ({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`${styles.spinner} ${className}`}
    />
  );
};
