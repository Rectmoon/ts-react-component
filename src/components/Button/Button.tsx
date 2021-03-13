import React from "react";

import { IButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<IButtonProps> = ({ foo }) => (
  <div data-testid="Button" className="my-button">
    {foo}
    Button
  </div>
);

export default Button;
