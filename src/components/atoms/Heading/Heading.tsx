import classNames from "classnames";
import "./Heading.css";

type HeadingProps = {
  children: string;
  isCentered: boolean;
  isInline: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "bold";
};

const Heading = ({
  children,
  isCentered,
  isInline,
  size = "md",
  weight = "bold"
}: HeadingProps) => (
  <h1
    className={classNames(`heading size-${size} weight-${weight}`, {
      "is-centered": isCentered,
      "is-inline": isInline
    })}>
    {children}
  </h1>
);

export default Heading;
