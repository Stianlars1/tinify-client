// src/components/sections/faqContent.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqContent: FaqItem[] = [
  {
    question: "Is Tinify.dev really free?",
    answer:
      "Yes, Tinify.dev is completely free to use with no hidden fees or limitations. You can compress, resize, and crop as many images as you like.",
  },
  {
    question: "What image formats does Tinify.dev support?",
    answer:
      "We support a wide range of formats, including JPG, PNG, GIF, WEBP, PDF, TIFF, and more.",
  },
  {
    question: "How do I choose between Lossy and Lossless compression?",
    answer:
      "Lossless compression retains all image details, ideal for professional use. Lossy compression slightly reduces quality to achieve a much smaller file size, suitable for web usage. You can select the compression type when uploading your files.",
  },
  {
    question: "Are my images stored on your server?",
    answer:
      "No, Tinify.dev processes your images securely and does not store them on our servers. Your privacy is our priority.",
  },
  {
    question: "Can I compress images in bulk?",
    answer:
      "Yes, you can upload multiple images and compress them all at once without any limitations.",
  },
  {
    question: "How do I resize images while maintaining the aspect ratio?",
    answer:
      "When resizing, you have the option to maintain the original aspect ratio by toggling the aspect ratio preservation setting. This ensures your images are resized proportionally.",
  },
  {
    question: "Can I both resize and compress images at the same time?",
    answer:
      "Yes, during the resizing process, you have the option to enable compression to further optimize your images for the best results.",
  },
  {
    question: "Is there a limit to how many images I can optimize?",
    answer:
      "No, there are no limits on the number of images you can optimize. Our service is designed to be unlimited and accessible for all users.",
  },
  {
    question: "How do I crop images to focus on specific areas?",
    answer:
      "This feature is under development and not yet production ready, but it will feature this answer in the near future: You can use our cropping tool to select the area you want to focus on, ensuring that your images highlight only the most important parts.",
  },
];
