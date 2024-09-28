// src/components/sections/faqSection.tsx
export const FaqSection = () => (
  <section>
    <h2>Frequently Asked Questions</h2>
    <div>
      <h3>What is the difference between lossy and lossless compression?</h3>
      <p>
        Lossy compression reduces file size by removing some data, while
        lossless retains all data and quality.
      </p>
    </div>
    <div>
      <h3>Is there a limit to how many images I can upload?</h3>
      <p>
        No, there are no limits on the number of images or file sizes you can
        process with Tinify.dev.
      </p>
    </div>
    <div>
      <h3>Is my data secure?</h3>
      <p>
        Yes, your files are processed securely and deleted after compression. We
        don’t store them long-term.
      </p>
    </div>
  </section>
);
