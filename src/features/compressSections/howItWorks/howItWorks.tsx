// howItWorks.tsx

import { TitleTag } from "@/components/ui/tags/titleTag/titleTag";
import styles from "./css/howItWorks.module.css";
import { HowItWorksStep, howItWorksSteps } from "./howItWorksContent";

export const HowItWorks = () => {
  return (
    <>
      <section className={styles.howItWorksSection}>
        <TitleTag title="How It Works" meteors={true} />
        <ul className={styles.stepsList}>
          {howItWorksSteps.map((step) => (
            <HowItWorksStepItem key={step.title} {...step} />
          ))}
        </ul>
      </section>
    </>
  );
};

const HowItWorksStepItem = ({ icon, title, description }: HowItWorksStep) => {
  const Icon = icon;
  return (
    <li className={styles.stepItem}>
      <Icon size={32} className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
};
