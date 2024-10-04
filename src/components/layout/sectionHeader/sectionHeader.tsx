import { Content } from "../content/content";
import styles from "./css/sectionHeader.module.css";
export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <Content>
      <h2 className={styles.title}>{title}</h2>
    </Content>
  );
};
