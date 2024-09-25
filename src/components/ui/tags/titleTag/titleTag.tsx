"use client";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Meteors } from "@stianlarsen/meteors";
import styles from "./css/titleTag.module.css";
export const TitleTag = ({
  title,
  beam = false,
  meteors = false,
}: {
  title: string;
  beam?: boolean;
  meteors?: boolean;
}) => {
  return (
    <h2 className={styles.titleTag}>
      {title}
      {beam && (
        <BorderBeam
          size={75}
          borderWidth={1}
          duration={4}
          colorFrom="hsl(var(--primary))"
          colorTo="hsl(var(--primary))"
        />
      )}

      {meteors && <Meteors size={75} colorLightmode="hsl(var(--primary))" />}
    </h2>
  );
};
