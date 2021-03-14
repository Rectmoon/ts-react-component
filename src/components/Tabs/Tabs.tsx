
import React from "react";

import { ITabsProps } from "./Tabs.types";

import "./Tabs.less";

const prefix = "rainbow"

const Tabs: React.FC<ITabsProps> = ({ foo }) => (
  <div data-testid="Tabs" className={prefix + "-Tabs"}>
    {foo}
  </div>
);

export default Tabs;
  