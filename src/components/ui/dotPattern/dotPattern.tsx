import styles from "./css/dot.module.css";
export interface DotProps {
  className?: string;
  width?: number;
  height?: number;
  radius?: number;
  size?: number;
}
export const DotPattern = ({
  className = "",
  width = 16,
  height = 16,
  radius = 1,
  size = 300,
}: DotProps) => {
  return (
    <>
      <svg
        aria-hidden="true"
        className={`${className} ${styles.dot}`}
        style={{
          maskImage: `radial-gradient(
            ${size}px circle at center,
            currentColor,
            transparent
          )`,
        }}
        // className={"pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"}
      >
        <defs>
          <pattern
            id=":rcrle:"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle id="pattern-circle" cx="1" cy="1" r={radius}></circle>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#:rcrle:)"
        ></rect>
      </svg>
    </>
  );
};
