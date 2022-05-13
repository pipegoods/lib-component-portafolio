import classNames from "classnames";
import "./Picture.css";

type PictureProps = {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  isRounded: boolean;
  withBorder: boolean;
};

const Picture = ({ src, alt, width, height, isRounded, withBorder }: PictureProps) => (
  <picture
    className={classNames("picture", {
      "is-rounded": isRounded,
      "with-border": withBorder
    })}>
    <img src={src} alt={alt} style={{ height, maxWidth: width }} />
  </picture>
);

export default Picture;
