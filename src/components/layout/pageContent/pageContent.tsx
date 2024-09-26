"use server";
import { TinifyServices } from "@/types";
import { ReactElement, ReactNode } from "react";
import { Tag } from "./components/tag/tag";
import "./css/hide.css";
import styles from "./css/pageContent.module.css";
export const PageContent = ({
  title,
  description,
  children,
  service,
  height,
  hideHeader = false,
}: {
  title: string;
  description: string | ReactElement;
  tag?: string | ReactElement | ReactNode;
  children: ReactElement | ReactElement[];
  service?: TinifyServices;
  height?: "full" | "fit-content";
  hideHeader?: boolean;
}) => {
  return (
    <main
      className={`${styles.pageContent} ${
        height === "full" ? styles.pageContentFull : ""
      }`}
    >
      {title && description && !hideHeader && (
        <header
          id="pageContentHeader"
          data-hide-header={hideHeader}
          className={`${styles.pageHeaderWrapper} hide`}
        >
          {service && <Tag service={service} />}

          <div className={styles.pageHeader}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </header>
      )}

      {children}
    </main>
  );
};
