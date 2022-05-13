import classNames from "classnames";
import "./Paragraph.css";

type ParagraphProps = {
  children: string;
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
}: ParagraphProps) => (
  <p
    className={classNames(`paragraph size-${size} weight-${weight}`, {
      "is-inline": isInline,
      "is-centered": isCentered
    })}>
    {children}
  </p>
);

export default Paragraph;
