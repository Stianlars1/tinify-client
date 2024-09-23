export const Footer = () => {
  return (
    <footer
      style={{
        padding: "0 var(--padding)",
        height: "25px",
        gridRow: "-1",
      }}
    >
      <p>
        © tinify {new Date().getFullYear()} ® - Your go-to image processing tool
      </p>
    </footer>
  );
};
