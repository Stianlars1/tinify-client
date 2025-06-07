import { TinifyServices } from "@/types";
import { ReactElement } from "react";
import { Tag } from "./components/tag/tag";
import "./css/hide.css";
import styles from "./css/pageContent.module.css";

export default async function PageContent({
  title,
  description,
  children,
  service,
  height,
  hideHeader = false,
  smallSubtitle,
  fullWidth,
  headerChildren,
}: {
  title: string | ReactElement;
  description?: string | ReactElement;
  children: ReactElement | ReactElement[];
  service?: TinifyServices;
  height?: "full" | "fit-content";
  hideHeader?: boolean;
  smallSubtitle?: string;
  fullWidth?: boolean;
  headerChildren?: ReactElement;
}) {
  return (
    <main
      className={`${styles.pageContent} ${
        height === "full" ? styles.pageContentFull : ""
      } ${fullWidth ? styles.fullWidth : ""}`}
    >
      {title && !hideHeader && (
        <header
          id="pageContentHeader"
          data-hide-header={hideHeader}
          className={`${styles.pageHeaderWrapper} hide`}
        >
          {service && <Tag service={service} />}

          <div className={styles.pageHeader}>
            <h1 className={styles.title}>{title}</h1>
            {description && <p className={styles.description}>{description}</p>}
            {smallSubtitle && !description && (
              <p className={styles.smallSubtitle}>{smallSubtitle}</p>
            )}
          </div>
          {headerChildren && <>{headerChildren}</>}
        </header>
      )}

      {children}
    </main>
  );
}
