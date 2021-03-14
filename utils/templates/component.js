module.exports = componentName => ({
  content: `
import React from "react";

import { I${componentName}Props } from "./${componentName}.types";

import "./${componentName}.less";

const prefix = "rainbow"

const ${componentName}: React.FC<I${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className={prefix + "-${componentName}"}>
    {foo}
  </div>
);

export default ${componentName};
  `,
  extension: `.tsx`
})
