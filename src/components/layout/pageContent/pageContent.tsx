"use server";
import { TinifyServices } from "@/types";
import { ReactElement, ReactNode } from "react";
import { Tag } from "./components/tag/tag";
import styles from "./css/pageContent.module.css";
export const PageContent = ({
  title,
  description,
  children,
  service,
}: {
  title: string;
  description: string | ReactElement;
  tag?: string | ReactElement | ReactNode;
  children: ReactElement | ReactElement[];
  service?: TinifyServices;
}) => {
  return (
    <main className={styles.pageContent}>
      <header className={styles.pageHeaderWrapper}>
        {service && <Tag service={service} />}

        <div className={styles.pageHeader}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </header>

      {children}
    </main>
  );
};
