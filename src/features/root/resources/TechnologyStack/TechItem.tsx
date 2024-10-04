// src/components/TechnologyStack/TechItem.tsx

import React from "react";
import styles from "./css/TechItem.module.css";

interface TechItemProps {
  title: string;
  description: string;
  details: string[];
}

const TechItem: React.FC<TechItemProps> = ({ title, description, details }) => {
  return (
    <div className={styles.techItem}>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul>
        {details.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechItem;
