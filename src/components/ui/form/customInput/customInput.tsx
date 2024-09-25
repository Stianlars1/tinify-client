import {
  CSSProperties,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import styles from "./css/customInput.module.css";
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: "100%" | "fit-content";
}

interface CustomInputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ width, ...props }, ref) => {
    const customStyle: CSSProperties = width ? { width: width } : {};

    return (
      <input
        style={customStyle}
        {...props}
        ref={ref}
        className={`${styles.customInput} ${
          props.className ? props.className : " "
        }`}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

export const CustomInputLabel = ({
  children,
  ...props
}: CustomInputLabelProps) => {
  return (
    <label
      {...props}
      className={`${styles.customInputWrapper} ${
        props.className ? props.className : " "
      }`}
    >
      {children}
    </label>
  );
};

export const CustomInputWrapper = ({
  children,
  style = {},
  className = "",
  direction = "row",
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  style?: CSSProperties;
  className?: string;
  direction?: CSSProperties["flexDirection"];
}) => {
  return (
    <div
      suppressHydrationWarning
      className={`${styles.customInputLabelWrapper} ${className}`}
      style={{ ...style, flexDirection: direction }}
    >
      {children}
    </div>
  );
};
