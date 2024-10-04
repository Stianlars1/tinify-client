import { HeaderBackground } from "./backgorund";
import styles from "./css/rootHeader.module.css";
export const RootHeader = () => {
  return (
    <>
      <header className={`${styles.header} `}>
        <div className={`${styles.backgroundWrapper} `}>
          <HeaderBackground notMountedClass={styles.notMountedClass} />
        </div>
        <h1 className={styles.title}>
          Supercharge Your Images with Instant, Free Optimization
        </h1>

        <p className={styles.description}>
          Optimize your images effortlessly with our lightning-fast tools.
          Compress, resize, and crop without limits or hidden fees. Just
          superior quality every time.
        </p>
      </header>
    </>
  );
};
