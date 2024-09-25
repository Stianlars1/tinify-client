// import blobsUrl from "@/assets/backgrounds/blobs.svg";
// import gradientWavesUrl from "@/assets/backgrounds/gradientWaves.svg";
// import Image from "next/image";
// import { WaveBG2 } from "../_pageAssets";
// import styles from "./css/compressBackgrounds.module.css";
// export const CompressBackgrounds = () => {
//   return (
//     <>
//       <WaveBG2 />
//       <div className={styles.blobsWrapper}>
//         <Image
//           src={blobsUrl}
//           className={styles.blobs}
//           alt="blobs"
//           width={0}
//           height={0}
//           fill
//           sizes="100vw"
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </div>
//       <div className={styles.gradientWavesWrapper}>
//         <Image
//           src={gradientWavesUrl}
//           className={styles.gradientWaves}
//           alt="waves"
//           width={0}
//           height={0}
//           fill
//           sizes="100vw"
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </div>
//     </>
//   );
// };

// components/compressBackgrounds.tsx
import blobsUrl from "@/assets/backgrounds/blobs.svg";
import { FullWidthBackground } from "@/components/ui/background/fullWidthBackground";
import Image from "next/image";
import { WaveBG2 } from "../_pageAssets";
import styles from "./css/compressBackgrounds.module.css";

export const CompressBackgrounds = () => {
  return (
    <>
      <FullWidthBackground overflow top="100px" opacity={0.4}>
        <WaveBG2 className={styles.wavebg2} />
      </FullWidthBackground>

      <FullWidthBackground
        contain
        top="1400px"
        opacity={0.2}
        className={styles.blobWrapper}
      >
        <Image
          src={blobsUrl}
          alt="blobs"
          sizes="100vw"
          style={{ transform: "scaleX(1) scaleY(1)", height: "100%" }}
        />
      </FullWidthBackground>

      {/* <FullWidthBackground top="1600px" opacity={0.4}>
        <Image
          unoptimized
          quality={100}
          src={amplitudesUrl}
          alt="blobs"
          sizes="100vw"
        />
      </FullWidthBackground> */}

      {/* <FullWidthBackground top="1600px" opacity={1}>
        <Image src={gradientWavesUrl} alt="waves" sizes="100vw" />
      </FullWidthBackground> */}
    </>
  );
};
