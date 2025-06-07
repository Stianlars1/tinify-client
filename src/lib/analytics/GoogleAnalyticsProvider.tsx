import GoogleAnalytics from "@/lib/analytics/GoogleAnalytics";
import PageTracking from "@/lib/analytics/PageTracking";
import { Suspense } from "react";

export const GoogleAnalyticsProvider = () => {
  return (
    <>
      <GoogleAnalytics />
      <Suspense>
        <PageTracking />
      </Suspense>
    </>
  );
};
