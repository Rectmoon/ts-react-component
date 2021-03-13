
import React from "react";

import { ITabsProps } from "./Tabs.types";

import "./Tabs.scss";

const Tabs: React.FC<ITabsProps> = ({ foo }) => (
  <div data-testid="Tabs" className="foo-bar">
    {foo}
    Tabs
  </div>
);

export default Tabs;
  