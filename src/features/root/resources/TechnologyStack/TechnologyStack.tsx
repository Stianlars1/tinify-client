// src/components/TechnologyStack/TechnologyStack.tsx

import React from "react";
import TechItem from "./TechItem";
import styles from "./css/TechnologyStack.module.css";

const TechnologyStack: React.FC = () => {
  return (
    <section className={styles.technologyStack}>
      <h2 style={{ textAlign: "center" }}>Our Technology Stack</h2>
      <p style={{ textAlign: "center" }}>
        At Tinify.dev, we are committed to providing fast, reliable, and secure
        image optimization services. Our platform is built using cutting-edge
        technologies that ensure optimal performance and scalability.
      </p>

      <h3>Infrastructure and Security</h3>
      <TechItem
        title="Cloud Hosting"
        description="Our services are hosted on robust cloud infrastructure."
        details={[
          "Reliability and Uptime: Ensures high availability and minimal downtime.",
          "Global Accessibility: Servers strategically located for fast response times worldwide.",
        ]}
      />

      <TechItem
        title="Security Measures"
        description="We prioritize your data security and privacy."
        details={[
          "HTTPS Encryption: All data transferred between your browser and our servers is encrypted.",
          "Data Privacy: We do not store your images after processing—they are immediately deleted.",
          "Regular Updates: Our software and libraries are regularly updated to patch any security vulnerabilities.",
        ]}
      />
    </section>
  );
};

export default TechnologyStack;
