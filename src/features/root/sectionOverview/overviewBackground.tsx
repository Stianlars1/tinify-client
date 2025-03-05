"use client";
import { useDarkMode } from "@/hooks/useDarkmode";
import { useEffect } from "react";

export const OverviewSectionBackground = () => {
  const isDarkmode = useDarkMode();

  useEffect(() => {
    // Clean up existing canvas and script if they exist
    const existingCanvas = document.getElementById("overview-canvas");
    if (existingCanvas) {
      existingCanvas.remove(); // Remove the old canvas
    }

    const existingScript = document.getElementById("overview-canvas");
    if (existingScript) {
      existingScript.remove(); // Remove the old script
    }

    // Create new script element
    const script = document.createElement("script");
    script.id = "overview-canvas";
    script.type = "text/javascript";

    script.async = true;

    if (isDarkmode) {
      // Dark mode configuration
      script.innerHTML = `
new OverviewHeader({
  "count": 10,
  "size": {
    "min": 1300,
    "max": 1500,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0.1,
      "max": 0.6
    },
    "y": {
      "min": 0.1,
      "max": 0.6
    }
  },
  "colors": {
    "background": "hsl(var(--background))",
    "particles": [
      "#ff4848",
      "#000000",
      "#2235e5",
      "#000000",
      "#ff0000"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 0.5,
    "edge": 0.05
  },
  "skew": -2,
  "shapes": [
    "c"
  ]
});
      `;
    } else {
      // Light mode configuration
      script.innerHTML = `
        new OverviewHeader({
          "count": 12,
          "size": {
            "min": 1300,
            "max": 1500,
            "pulse": 0
          },
          "speed": {
            "x": {
              "min": 0.6,
              "max": 3
            },
            "y": {
              "min": 0.6,
              "max": 3
            }
          },
          "colors": {
            "background": "#953eff",
            "particles": [
              "#ff681c",
              "#ff0a53",
              "#2563eb"
            ]
          },
          "blending": "overlay",
          "opacity": {
            "center": 0.45,
            "edge": 0
          },
          "skew": -1.6,
          "shapes": [
            "c"
          ],
          
        });
      `;
    }

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup when component unmounts or mode changes
    return () => {
      const canvas = document.getElementById("overview-canvas");
      if (canvas) {
        canvas.remove(); // Ensure old canvas is removed
      }
      script.remove(); // Remove the script as well
    };
  }, [isDarkmode]); // This will run whenever `isDarkmode` changes or id changes

  return null;
};
