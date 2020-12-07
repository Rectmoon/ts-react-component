
import React from "react";

import { IAppProps } from "./App.types";

import "./App.scss";

const App: React.FC<IAppProps> = ({ foo }) => (
  <div data-testid="App" className="foo-bar">
    {foo}
  </div>
);

export default App;
  