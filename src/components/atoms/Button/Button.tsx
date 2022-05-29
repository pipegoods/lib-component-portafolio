import React from "react";
import { PropsWithChildren } from "react";
import "./Button.css";

type ButtonProps = {
  type?: "primary" | "secondary" | "tertiary";
};

const Button = ({ children, type = "primary" }: PropsWithChildren<ButtonProps>) => (
  <button className={`button type-${type}`}>{children}</button>
);

export default Button;
