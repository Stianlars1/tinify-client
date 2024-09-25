import { CompressSection } from "./_components/compressSection";
import { HowItWorks } from "./howItWorks/howItWorks";
import { KeyFeatures } from "./keyFeatures/keyFeatures";

export const CompressSections = () => {
  return (
    <>
      <CompressSection>
        <KeyFeatures />
        <HowItWorks />
      </CompressSection>
    </>
  );
};
