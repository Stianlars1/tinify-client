"use client"

import {ReactElement} from "react";
import {GradientBackground} from "react-gradient-animation";
import styles from "@/app/blog/[slug]/css/blogPost.module.css";

export const BlogGradient = (): ReactElement => {
    return (
        <GradientBackground
            count={10} // Number of particles
            size={{min: 600, max: 1000, pulse: 0.2}} // Adjusted for visibility
            speed={{x: {min: 0.6, max: 1.4}, y: {min: 0.6, max: 1.5}}}
            colors={{
                background: "hsl(var(--background))", // Solid background for better visibility
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
            }}
            blending={"overlay"} // Adjust blending mode if necessary
            opacity={{center: 0.45, edge: 0}} // Center opacity and edge opacity
            skew={-1.6}
            shapes={["c"]} // Shapes: circle
            className={styles.gradientBackground}
            translateYcorrection={false}
            style={{position: "absolute"}}
        />
    );
};