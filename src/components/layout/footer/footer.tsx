import styles from "./css/footer.module.css";
import { FooterGradient } from "@/components/layout/footer/footerGradient";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © tinify.dev {new Date().getFullYear()} ® - Your go-to image
        processing tool
      </p>
      <FooterGradient />
    </footer>
  );
};
