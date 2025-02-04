declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const content: string;
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}
