declare module '*.md' {
  import type React from 'react';

  const attributes: Record<string, unknown>;
  const react: React.VFC;
  export { attributes, react };
}
