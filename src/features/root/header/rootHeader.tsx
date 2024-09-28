import { HeaderBackground } from "./backgorund";
import styles from "./css/rootHeader.module.css";
export const RootHeader = () => {
  return (
    <>
      <header className={`${styles.header} `}>
        <div className={`${styles.backgroundWrapper} finisher-header`}>
          <HeaderBackground />
        </div>
        <h1 className={styles.title}>
          Fast and Free Image <br />
          Optimization
        </h1>
        <p className={styles.description}>
          Compress, resize, and crop images instantly. No limits, no fees—just
          high-quality results.
        </p>
      </header>
    </>
  );
};
