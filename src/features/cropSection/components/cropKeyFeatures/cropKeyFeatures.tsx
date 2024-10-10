import { FeaturesSection } from "@/components/ui/features/_components/featuresSection";
import { KeyFeatures } from "@/components/ui/features/keyFeatures/keyFeatures";
import { CropKeyFeaturesContent } from "./cropKeyFeaturesContent";
export const CropKeyFeatures = () => {
  return (
    <>
      <FeaturesSection>
        <KeyFeatures keyFeaturesContent={CropKeyFeaturesContent} />
      </FeaturesSection>
    </>
  );
};
