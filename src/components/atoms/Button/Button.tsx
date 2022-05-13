import "./Button.css";

type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => <button>{props.label}</button>;

export default Button;
