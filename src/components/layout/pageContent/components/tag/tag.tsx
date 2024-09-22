import { getTagByService } from "@/app/actions/tags";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { TinifyServices } from "@/types";
import { Suspense } from "react";
import styles from "./css/tag.module.css";
export const Tag = async ({
  service,
  className = "",
}: {
  service: TinifyServices;
  className?: string;
}) => {
  const tagText = await getTagByService(service);
  return (
    <Suspense fallback={<Skeleton width={170} height={18} />}>
      <span className={`${className} ${styles.tag}`}>{tagText}</span>
    </Suspense>
  );
};
