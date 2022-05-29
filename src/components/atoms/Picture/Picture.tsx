import React from "react";
import classNames from "classnames";
import styles from "./Picture.module.css";

type PictureProps = {
  src: string;
  alt: string;
  width: number | string;
  height?: number | string;
  isRounded?: boolean;
  withBorder?: boolean;
};

const Picture = ({ src, alt, width, height, isRounded, withBorder }: PictureProps) => (
  <picture
    className={classNames(styles.picture, {
      [styles["is-rounded"]]: isRounded,
      [styles["with-border"]]: withBorder
    })}
  >
    <img src={src} alt={alt} style={{ height, maxWidth: width }} />
  </picture>
);

export default Picture;
