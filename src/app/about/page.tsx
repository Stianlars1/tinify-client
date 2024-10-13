// pages/about.tsx

import { Content } from "@/components/layout/content/content";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import { PageContent } from "@/components/layout/pageContent/pageContent";
import { Metadata, Viewport } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { DotPattern } from "@/components/ui/dotPattern/dotPattern";
import { TinifyServices } from "@/types";
import { GradientBackground } from "react-gradient-animation";
import { useThisViewport } from "../metadata";
import { aboutMeta } from "./aboutMeta";
import styles from "./css/about.module.css";
export const metadata: Metadata = aboutMeta;
export const viewport: Viewport = useThisViewport;
export default function About() {
  return (
    <>
      <PageContainer>
        <PageContent
          service={TinifyServices.ALL}
          title="About Tinify"
          smallSubtitle="At Tinify, our mission is to provide fast and free image optimization services to everyone. We believe in simplicity, efficiency, and accessibility."
          fullWidth
          headerChildren={<></>}
        >
          <GradientBackground
            count={50} // Number of particles
            size={{ min: 2, max: 10, pulse: 0 }} // Adjusted for visibility
            speed={{
              x: { min: 0.1, max: 0.1 },
              y: { min: 0.1, max: 0.1 },
            }}
            colors={{
              background: "transparent", // Solid background for better visibility
              particles: ["#1DACBF", "#7AF0FF", "#1A90FF"],
            }}
            blending={"overlay"} // Adjust blending mode if necessary
            opacity={{ center: 1, edge: 0.5 }} // Center opacity and edge opacity
            skew={0}
            shapes={["c"]} // Shapes: circle
            className={styles.gradientBackground}
            translateYcorrection={true}
            style={{ position: "absolute", zIndex: "-10" }}
          />
          <AboutContent />
        </PageContent>
      </PageContainer>
    </>
  );
}

const AboutContent = () => {
  return (
    <Content className={styles.about} style={{ zIndex: "10" }}>
      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Story</h2>
        </div>
        <div className={styles.rightWithGradient}>
          <p>
            Tinify.dev was born out of a desire to simplify the way people
            optimize images. Frustrated by the limitations and costs of existing
            tools, our founder, Stian Larsen, envisioned a platform that would
            make image optimization fast, free, and accessible to everyone.
          </p>

          <p>
            With a focus on simplicity and efficiency, Tinify.dev was launched
            to empower users around the world to compress, resize, and crop
            images effortlessly, without compromising on quality.
          </p>

          <GradientBackground
            count={10} // Number of particles
            size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
            speed={{ x: { min: 0.3, max: 0.5 }, y: { min: 0.25, max: 0.45 } }}
            colors={{
              background: "transparent", // Solid background for better visibility
              particles: ["#ff681c", "#2563eb"],
            }}
            blending={"lighten"} // Adjust blending mode if necessary
            opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
            skew={2}
            shapes={["s"]} // Shapes: circle
            className={styles.gradientBackground}
            translateYcorrection={false}
            style={{ position: "absolute" }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Meet the Creator</h2>
        </div>

        <div className={styles.rightWithGradient}>
          <ul className={styles.teamMembers}>
            <li className={styles.member}>
              <Image
                alt="Image of Stian Larsen"
                src="/team/stian.jpg"
                width={250}
                height={250}
                className={styles.memberImage}
                fetchPriority="auto"
                priority
                style={{ borderRadius: "50%" }}
              />
              <h3>Stian Larsen</h3>
              <p className={styles.role}>
                <strong>Founder</strong> and <strong>Lead Developer</strong>
              </p>
              <p className={styles.description}>
                Stian is a passionate software developer with over{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  <strong>{new Date().getFullYear() - 2022}</strong> years
                </span>{" "}
                of experience. He is dedicated to building efficient and
                user-friendly applications that make a difference. Believing in
                the power of accessible technology, he strives to provide free
                tools that everyone can benefit from. To learn more about Stian,
                visit his website at{" "}
                <Link href="https://stianlarsen.com">stianlarsen.com</Link>.
              </p>
            </li>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "hsl(var(--background))", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={-2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </ul>
        </div>
        <DotPattern className={styles.dotPattern} size={400} />
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Technology</h2>
        </div>

        <div className={styles.right}>
          <article className={styles.article}>
            <p>
              At Tinify.dev, we are committed to leveraging cutting-edge
              technologies to ensure our services are fast, reliable, and
              secure.
            </p>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "transparent", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </article>
          <article className={styles.article}>
            <h3>Kotlin and Spring Boot</h3>
            <p>
              Our backend is built with Kotlin and Spring Boot, providing a
              robust and high-performance foundation for processing your images
              efficiently. Kotlin&apos;s modern programming features, combined
              with Spring Boot&apos;s powerful framework, allow us to develop
              scalable and maintainable services that meet the demands of our
              users.
            </p>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "transparent", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </article>

          <article className={styles.article}>
            <h3>Advanced Image Processing Tools</h3>
            <p>
              We utilize powerful tools like <strong>ImageMagick</strong> and{" "}
              <strong>Libvips</strong> to handle image compression, resizing,
              and cropping without compromising quality. These industry-leading
              libraries enable us to support a wide range of image formats and
              provide high-speed processing to deliver instant results.
            </p>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "transparent", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </article>

          <article className={styles.article}>
            <h3>Infrastructure and Scalability</h3>
            <p>
              Our services are hosted on robust cloud infrastructure to ensure
              reliability and scalability.
            </p>
            <ul>
              <li>
                <strong>High Availability:</strong> We maintain minimal downtime
                to keep our services accessible whenever you need them.
              </li>
              <li>
                <strong>Automatic Scaling:</strong> Our infrastructure scales
                dynamically to handle traffic spikes, ensuring consistent
                performance.
              </li>
              <li>
                <strong>Global Accessibility:</strong> Servers strategically
                located worldwide provide fast response times no matter where
                you are.
              </li>
            </ul>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "transparent", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Security and Privacy</h2>
        </div>

        <div className={styles.right}>
          <article className={styles.article}>
            <p>
              Your privacy is paramount. We implement rigorous security measures
              to protect your data.
            </p>
            <ul>
              <li>
                <strong>HTTPS Encryption:</strong> All data transferred between
                your browser and our servers is encrypted.
              </li>
              <li>
                <strong>Data Privacy:</strong> We do not store your images after
                processing—they are immediately deleted.
              </li>
              <li>
                <strong>Regular Updates:</strong> Our software and libraries are
                regularly updated to patch any security vulnerabilities.
              </li>

              <li>
                <strong>Compliance:</strong> Adherence to data protection
                regulations and best practices.
              </li>
            </ul>
            <GradientBackground
              count={10} // Number of particles
              size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
              speed={{ x: { min: 0.1, max: 0.2 }, y: { min: 0.1, max: 0.2 } }}
              colors={{
                background: "transparent", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }}
              blending={"lighten"} // Adjust blending mode if necessary
              opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
              skew={2}
              shapes={["c"]} // Shapes: circle
              className={styles.gradientBackground}
              translateYcorrection={false}
            />
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Experience the Difference</h2>
        </div>

        <div className={styles.right}>
          <p>
            Ready to optimize your images with Tinify.dev? Try our fast and free
            services today.
          </p>
          <Link href="/" className={styles.ctaButton}>
            Get Started Now
          </Link>
        </div>
      </section>
    </Content>
  );
};
