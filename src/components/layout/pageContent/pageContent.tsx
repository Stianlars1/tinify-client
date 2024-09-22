import { ReactElement, ReactNode } from "react";
import styles from "./css/pageContent.module.css";
export const PageContent = ({
  title,
  description,
  tag = undefined,
  children,
}: {
  title: string;
  description: string | ReactElement;
  tag?: string | ReactElement | ReactNode;
  children: ReactElement | ReactElement[];
}) => {
  return (
    <main className={styles.pageContent}>
      <header className={styles.pageHeaderWrapper}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </header>

      {children}
    </main>
  );
};
