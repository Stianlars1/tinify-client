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
        {keyFeaturesContent.map((keyFeature, index) => (
          <KeyFeature
            key={keyFeature.title}
            {...keyFeature}
            index={index + 1}
          />
        ))}
      </ul>
    </section>
  );
};

const KeyFeature = ({ icon, title, description, index }: KeyFeatureContent) => {
  const Icon = icon;

  const classname = getClassName(index);
  return (
    <li className={styles.featureItem}>
      <Icon size={32} className={classname} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
const getClassName = (index: number | undefined) => {
  switch (index) {
    case 1:
      return styles.bolt;
    case 2:
      return styles.check;
    case 3:
      return styles.gift;
    case 4:
      return styles.mobile;
    default:
      return "";
  }
};
