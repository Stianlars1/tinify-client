// src/components/UnderstandingServices/ServiceArticle.tsx

import React from "react";
import styles from "./css/ServiceArticle.module.css";

interface ServiceArticleProps {
  title: string;
  subtitle: string;
  description: string;
  whatIsTitle: string;
  whatIsContent: string;
  whyUseTitle: string;
  whyUsePoints: string[];
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({
  title,
  subtitle,
  whatIsTitle,
  whatIsContent,
  whyUseTitle,
  whyUsePoints,
}) => {
  return (
    <article className={styles.serviceArticle}>
      <h3>{title}</h3>
      <p className={styles.subtitle}>
        <em>{subtitle}</em>
      </p>
      <h4>{whatIsTitle}</h4>
      <p>{whatIsContent}</p>
      <h4>{whyUseTitle}</h4>
      <ul>
        {whyUsePoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceArticle;
