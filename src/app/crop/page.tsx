import { Metadata, Viewport } from "next";
import { useThisViewport } from "../metadata";
import { cropMeta } from "./cropMeta";

export const metadata: Metadata = cropMeta;
export const viewport: Viewport = useThisViewport;

export default async function CropPage() {
  return (
    <div
      style={{
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "12rem",
      }}
    >
      <h1>Coming soon</h1>;
    </div>
  );
}
