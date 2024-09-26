import { FeaturesSection } from "@/components/ui/features/_components/featuresSection";
import { HowItWorks } from "@/components/ui/features/howItWorks/howItWorks";
import { KeyFeatures } from "@/components/ui/features/keyFeatures/keyFeatures";
import { howItWorksStepsCompress } from "./howItWorksContent";
import { keyFeaturesContentCompress } from "./keyFeaturesContent";

export const CompressSections = () => {
  return (
    <>
      <FeaturesSection>
        <KeyFeatures keyFeaturesContent={keyFeaturesContentCompress} />
        <HowItWorks howItWorksSteps={howItWorksStepsCompress} />
      </FeaturesSection>
    </>
  );
};
