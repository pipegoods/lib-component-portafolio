import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Paragraph.module.css";

type ParagraphProps = {
  isInline?: boolean;
  isCentered?: boolean;
  weight?: "normal" | "medium" | "semibold";
  size?: "xs" | "sm" | "md" | "lg";
};

const Paragraph = ({
  children,
  isCentered,
  isInline,
  size = "md",
  weight = "normal"
}: PropsWithChildren<ParagraphProps>) => (
  <p
    className={classNames(styles.paragraph, {
      [styles["is-centered"]]: isCentered,
      [styles["is-inline"]]: isInline,
      [styles[`size-${size}`]]: size,
      [styles[`weight-${weight}`]]: weight
    })}
  >
    {children}
  </p>
);

export default Paragraph;
