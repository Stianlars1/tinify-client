import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Welcome to <code>Tinify.dev</code>.
          </li>
        </ol>
      </main>
      <footer className={styles.footer}>
        <a href="https://tinify.dev" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          → Tinify.dev {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
