import React from "react";
import "./Button.css";

const Button = ({
  type = "default",
  disableShadow = false,
  disabled = false,
  iconPosition = "left",
  size = "medium",
  color = "default",
  children,
  ...rest
}) => {
  const classNames = [
    "button",
    `button--type-${type}`,
    disableShadow && "button--no-shadow",
    disabled && "button--disabled",
    `button--icon-${iconPosition}`,
    `button--size-${size}`,
    // `button--color-${color}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
