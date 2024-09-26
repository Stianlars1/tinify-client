import { TitleTag } from "@/components/ui/tags/titleTag/titleTag";
import { KeyFeatureContent } from "../../../../features/compressSections/keyFeaturesContent";
import styles from "./css/keyFeatures.module.css";
export const KeyFeatures = ({
  keyFeaturesContent,
}: {
  keyFeaturesContent: KeyFeatureContent[];
}) => {
  return (
    <section className={styles.keyFeatures}>
      <TitleTag beam={true} title="Key Features" />
      <ul className={styles.featureList}>
        {keyFeaturesContent.map((keyFeature) => (
          <KeyFeature key={keyFeature.title} {...keyFeature} />
        ))}
      </ul>
    </section>
  );
};

const KeyFeature = ({ icon, title, description }: KeyFeatureContent) => {
  const Icon = icon;

  const classname = getClassName(title);
  return (
    <li className={styles.featureItem}>
      <Icon size={32} className={classname} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
const getClassName = (title: string) => {
  switch (title) {
    case "Fast Compression":
      return styles.bolt;
    case "High-Quality Results":
      return styles.check;
    case "Free Service":
      return styles.gift;
    case "Responsive Interface":
      return styles.mobile;
    default:
      return "";
  }
};
