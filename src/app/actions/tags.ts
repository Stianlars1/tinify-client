"use server";

import { TinifyServices } from "@/types";
import { STATS_URL } from "@/utils/urls";

type UsageDataType = Array<{ serviceName: string; count: number }>;
export const getAllUsageData = async (): Promise<UsageDataType> => {
  try {
    const response = await fetch(STATS_URL, { next: { revalidate: 3600 } });
    const tags = await response.json();
    return Object.entries(tags).reduce((acc, [key, value]) => {
      acc.push({ serviceName: key, count: value as number });
      return acc;
    }, [] as UsageDataType);
  } catch (error) {
    console.error("Error fetching tags", error);
    return [];
  }
};

export const getTotalUsageData = async () => {
  const allData = await getAllUsageData();
  if (allData.length === 0) {
    return 0;
  }
  return allData.reduce((acc, data) => acc + data.count, 0);
};

export const getCompressionTag = async () => {
  const allUsageData = await getAllUsageData();
  if (allUsageData.length === 0) {
    return [];
  }

  const compressionData = allUsageData.find(
    (data) => data.serviceName === TinifyServices.COMPRESS,
  );

  return `${compressionData?.count ?? 0} Images Compressed`;
};
export const getTagByService = async (service: TinifyServices) => {
  const allUsageData = await getAllUsageData();
  if (allUsageData.length === 0) {
    return [];
  }

  if (service === TinifyServices.ALL) {
    const total = await getTotalUsageData();
    return `${total}+ Images Optimized`;
  }

  const usageData = allUsageData.find(
    (data) => data.serviceName === service.toString(),
  );

  return getTagText(service, usageData?.count);
};

const getTagText = (service: TinifyServices, count?: number) => {
  switch (service) {
    case TinifyServices.COMPRESS:
      return `${count ?? 0} Images Compressed`;
    case TinifyServices.CROP:
      return `${count ?? 0} Images Cropped`;
    case TinifyServices.RESIZE:
      return `${count ?? 0} Images Resized`;
    default:
      return "";
  }
};
