"use server";

import { TinifyServices } from "@/types";
import { STATS_URL } from "@/utils/urls";
type UsageDataType = Array<{ serviceName: string; count: number }>;
export const getAllUsageData = async (): Promise<UsageDataType> => {
  try {
    console.log("\n\n== getCompressionTags == ", STATS_URL);
    const response = await fetch(STATS_URL, { next: { revalidate: 0 } });
    console.log("getCompressionTags response", response);
    const tags = await response.json();
    const tagsMap = Object.entries(tags).reduce((acc, [key, value]) => {
      acc.push({ serviceName: key, count: value as number });
      return acc;
    }, [] as UsageDataType);
    return tagsMap;
  } catch (error) {
    console.error("Error fetching tags", error);
    return [];
  }
};
export const getCompressionTag = async () => {
  const allUsageData = await getAllUsageData();
  if (allUsageData.length === 0) {
    return [];
  }

  const compressionData = allUsageData.find(
    (data) => data.serviceName === TinifyServices.COMPRESS
  );

  const finalTag = `${compressionData?.count ?? 0} Images Compressed`;
  return finalTag;
};
