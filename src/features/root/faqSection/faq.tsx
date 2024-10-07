// src/components/sections/faq.tsx

import { Content } from "@/components/layout/content/content";
import { Accordion } from "./components/accourdion/accordion";
import styles from "./css/faqSection.module.css";

export const FaqSection = () => (
  <section className={styles.faqSection}>
    <Content>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
    </Content>
    <div className={styles.faqContainer}>
      <Accordion />
    </div>
  </section>
);
