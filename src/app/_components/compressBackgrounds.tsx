import blobsUrl from "@/assets/backgrounds/blobs.svg";
import Image from "next/legacy/image";
import { WaveBG2 } from "../_pageAssets";
import styles from "./css/compressBackgrounds.module.css";
export const CompressBackgrounds = () => {
  return (
    <>
      <WaveBG2 />
      <div className={styles.blobsWrapper}>
        <Image
          src={blobsUrl}
          className={styles.blobs}
          alt="blobs"
          layout="fill"
          objectFit="cover"
          width={0}
          height={0}
        />
      </div>
    </>
  );
};
