// src/components/sections/faq.tsx

import { Accordion } from "./components/accourdion/accordion";
import styles from "./css/faqSection.module.css";

export const FaqSection = async () => (
  <section className={styles.faqSection}>
    <h2 className={styles.title}>Frequently Asked Questions</h2>
    <div className={styles.faqContainer}>
      <Accordion />
    </div>
  </section>
);
