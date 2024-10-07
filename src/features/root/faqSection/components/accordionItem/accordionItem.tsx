"use client";
import { useState } from "react";
import styles from "./css/accordionItem.module.css";
interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionButton} onClick={toggleAccordion}>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionIcon}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};
