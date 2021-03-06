import React from "react";

import { IButtonProps } from "./Button.types";

import "./Button.scss";

const prefix = 'rainbow'

const Button: React.FC<IButtonProps> = ({ foo }) => (
  <div data-testid="Button" className={`${prefix}-button`}>
    {foo}
    Button
  </div>
);

export default Button;
