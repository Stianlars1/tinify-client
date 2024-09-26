import { FeaturesSection } from "@/components/ui/features/_components/featuresSection";
import { HowItWorks } from "@/components/ui/features/howItWorks/howItWorks";
import { KeyFeatures } from "@/components/ui/features/keyFeatures/keyFeatures";
import { howItWorksStepsResize } from "./howItWorksContentResize";
import { keyFeaturesContentResize } from "./keyFeaturesContentResize";

export const ResizeSections = () => {
  return (
    <>
      <FeaturesSection>
        <KeyFeatures keyFeaturesContent={keyFeaturesContentResize} />
        <HowItWorks howItWorksSteps={howItWorksStepsResize} />
      </FeaturesSection>
    </>
  );
};
