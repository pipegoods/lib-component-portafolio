import React from "react";
import { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  /**
   * The type of the button.
   **/
  type?: "primary" | "secondary" | "tertiary";
  /**
   * Will make the button max-content width.
   **/
  isInline?: boolean;
};

const Button = ({ children, type = "primary", isInline }: PropsWithChildren<ButtonProps>) => (
  <button
    className={classNames(styles.button, {
      [styles["is-inline"]]: isInline,
      [styles[`type-${type}`]]: type
    })}
  >
    {children}
  </button>
);

export default Button;
