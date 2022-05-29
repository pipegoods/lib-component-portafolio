import React from "react";
import Picture from "../Picture";
import { mapSize } from "./helpers";
import "./Avatar.css";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const Avatar = ({ src, alt, size = "md" }: AvatarProps) => (
  <div className="avatar">
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
