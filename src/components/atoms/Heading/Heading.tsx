import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Heading.module.css";

type HeadingProps = {
  isCentered?: boolean;
  isInline?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "bold";
};

const Heading = ({
  isCentered,
  isInline,
  children,
  size = "md",
  weight = "bold"
}: PropsWithChildren<HeadingProps>) => (
  <h1
    className={classNames(styles.heading, {
      [styles["is-centered"]]: isCentered,
      [styles["is-inline"]]: isInline,
      [styles[`size-${size}`]]: size,
      [styles[`weight-${weight}`]]: weight
    })}
  >
    {children}
  </h1>
);

export default Heading;
