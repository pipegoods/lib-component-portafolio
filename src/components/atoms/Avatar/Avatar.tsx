import React from "react";
import Picture from "../Picture";
import { mapSize } from "./helpers";
import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
};

const Avatar = ({ src, alt = "Avatar", size = "md" }: AvatarProps) => (
  <div className={styles.avatar}>
    <Picture
      src={src}
      alt={alt}
      width={mapSize(size)}
      height={mapSize(size)}
      isRounded
      withBorder
    />
  </div>
);

export default Avatar;
