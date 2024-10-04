// src/components/UnderstandingServices/UnderstandingServices.tsx

import React from "react";
import ServiceArticle from "./ServiceArticle";
import styles from "./css/UnderstandingServices.module.css";

const UnderstandingServices: React.FC = () => {
  return (
    <section className={styles.understandingServices}>
      <h2>Understanding Our Services</h2>

      <ServiceArticle
        title="Image Compression"
        subtitle="Compress your images without losing quality."
        description=""
        whatIsTitle="What is Image Compression?"
        whatIsContent="Image compression is the process of reducing the file size of an image without significantly affecting its quality. This is achieved by removing redundant data and optimizing image encoding. Smaller image files load faster on websites and consume less storage space, improving user experience and performance."
        whyUseTitle="Why Use Image Compression?"
        whyUsePoints={[
          "Faster Website Load Times: Compressed images load quicker, enhancing user satisfaction and SEO rankings.",
          "Reduced Bandwidth Usage: Smaller images consume less data, which is beneficial for users with limited internet connections.",
          "Storage Efficiency: Save storage space on servers and devices by reducing image file sizes.",
        ]}
      />

      <ServiceArticle
        title="Image Resizing"
        subtitle="Adjust image dimensions to suit your needs."
        description=""
        whatIsTitle="What is Image Resizing?"
        whatIsContent="Image resizing involves changing the dimensions (width and height) of an image. This can be done to make an image larger or smaller. Resizing is essential when you need images to fit specific dimensions for websites, social media platforms, print media, or other applications."
        whyUseTitle="Why Use Image Resizing?"
        whyUsePoints={[
          "Consistent Presentation: Ensure images fit perfectly within your website or application layout.",
          "Optimized Performance: Use appropriately sized images to prevent slow loading times caused by oversized files.",
          "Versatility: Create different versions of an image for various uses, such as thumbnails, previews, or full-sized displays.",
        ]}
      />

      <ServiceArticle
        title="Image Cropping"
        subtitle="Focus on what's important by trimming your images."
        description=""
        whatIsTitle="What is Image Cropping?"
        whatIsContent="Image cropping is the process of removing unwanted outer areas from an image. It allows you to focus on a specific part of the image, improving composition and drawing attention to the most important elements."
        whyUseTitle="Why Use Image Cropping?"
        whyUsePoints={[
          "Improve Composition: Enhance the visual impact by focusing on key subjects.",
          "Remove Unwanted Elements: Eliminate distracting backgrounds or objects.",
          "Aspect Ratio Adjustment: Change the aspect ratio to fit specific formats, such as square images for social media profiles.",
        ]}
      />
    </section>
  );
};

export default UnderstandingServices;
