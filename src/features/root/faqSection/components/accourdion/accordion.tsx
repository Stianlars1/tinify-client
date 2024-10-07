import { faqContent } from "../../faqContent";
import { AccordionItem } from "../accordionItem/accordionItem";
import styles from "./css/accordion.module.css";

export const Accordion = () => {
  return (
    <ul className={styles.accordion}>
      {faqContent.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          content={item.answer}
        />
      ))}
    </ul>
  );
};
